import React, { useState } from 'react';
import './index.css';

const Header = () => (
  <header role="banner" className="header-nvidia">
    <div className="header-content">
      <img src="https://avatars.githubusercontent.com/u/125604915?v=4" alt="Your Name" className="header-logo" />
      <div className="header-text">
        <h1 className="header-title">Niladri Das</h1>
        <p className="header-subtitle">Solutions Architect | Full Stack Engineer</p>
      </div>
    </div>
    <nav className="header-nav">
      <a href="#about" className="nav-link">About</a>
      <a href="#skills" className="nav-link">Skills</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  </header>
);

const HeroSection = () => (
  <section className="hero-section-nvidia">
    <div className="hero-grid">
      <div className="hero-content">
        <h2 className="hero-headline">Crafting Digital Solutions</h2>
        <p className="hero-description">
          Transforming complex challenges into elegant, scalable technology solutions 
          that drive innovation and create meaningful impact.
        </p>
        <div className="hero-cta-group">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="profile-card">
          <img 
            src="https://avatars.githubusercontent.com/u/125604915?v=4" 
            alt="Professional Headshot" 
            className="profile-image-nvidia" 
          />
          <div className="profile-overlay"></div>
        </div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => {
  const skills = [
    { name: "Frontend", technologies: ["React", "Vue.js", "Next.js"], icon: "💻" },
    { name: "Backend", technologies: ["Node.js", "Python", "GraphQL"], icon: "🔧" },
    { name: "Cloud", technologies: ["AWS", "Docker", "Kubernetes"], icon: "☁️" },
    { name: "Design", technologies: ["Figma", "Adobe XD", "Sketch"], icon: "🎨" }
  ];

  return (
    <section className="skills-section-nvidia" id="skills">
      <div className="section-header">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">Leveraging cutting-edge technologies to solve complex challenges</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-category">{skill.name}</h3>
            <ul className="skill-technologies">
              {skill.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const projects = [
    { 
      title: "Melody", 
      description: "A comprehensive analytics platform with real-time data visualization",
      technologies: ["React", "D3.js", "Node.js"],
      imageUrl: "https://raw.githubusercontent.com/bniladridas/melody/main/img/Spotify%20Preview%202.png",
      repoUrl: "https://github.com/bniladridas/melody"
    },
    { 
      title: "Dragon AI Assistant", 
      description: "Machine learning chatbot for customer support automation",
      technologies: ["Python", "TensorFlow", "WebSocket"],
      imageUrl: "https://raw.githubusercontent.com/bniladridas/dragon-ai-assistant/main/img/Preview.png",
      repoUrl: "https://github.com/bniladridas/dragon-ai-assistant"
    }
  ];

  return (
    <section className="projects-section-nvidia" id="projects">
      <div className="section-header">
        <h2 className="section-title">Innovation Showcase</h2>
        <p className="section-subtitle">Transformative projects that push technological boundaries</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${activeProject === index ? 'project-active' : ''}`}
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-image-container">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic
  };

  return (
    <section className="contact-section-nvidia" id="contact">
      <div className="section-header">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Ready to collaborate on your next groundbreaking project?</p>
      </div>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form-nvidia">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

const App = () => (
  <div className="portfolio-container-nvidia">
    <Header />
    <main className="main-content-nvidia">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
);

export default App;