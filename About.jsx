const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am currently exploring the vast world of web development and programming. My journey might have started differently from what I initially planned, but I'm embracing this new path with enthusiasm and determination.
          </p>
          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Web Design</span>
            <span>UI/UX</span>
          </div>
        </div>

        <div className="about-card">
          <div className="oval-frame-about">
            <img src="/maria.jpg" alt="Maria Princes Omboy" />
          </div>
          <div className="things">
            <h4>Things I Love</h4>
            <ul className="things-list">
              <li>Learning New Technologies</li>
              <li>Creating Beautiful Websites</li>
              <li>Problem Solving</li>
              <li>Reading Tech Blogs</li>
              <li>Photography</li>
              <li>Nature Walks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;