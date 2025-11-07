const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="project-container">
        <div className="project-text">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website showcasing my journey, skills, and projects.
            Built with modern web technologies to create a responsive and interactive user experience.
          </p>
          <a href="#" className="btn">View Project</a>
        </div>
        <div className="project-image">
          <img src="/portfolio-preview.jpg" alt="Portfolio Preview" />
        </div>
      </div>
    </section>
  );
};

export default Projects;