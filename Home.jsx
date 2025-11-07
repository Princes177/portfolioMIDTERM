const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left Side Text */}
        <div className="home-text">
          <h1>Maria Princes Omboy</h1>
          <h2 className="tagline">Aspiring Developer</h2>
          <p>
            Ever since I was a child, I dreamed of becoming a nurse or a doctor, someone who could care for others and make a difference in their lives. I've always admired how they bring comfort and hope to people who need it most. But as I grew older, life led me down a different path, one I never expected. At first, I felt uncertain because it wasn't the dream I had in mind. Yet, along the way, I realized that helping others doesn't only happen in hospitals; it can also happen through creativity, technology, and innovation. Now, I've learned to embrace the journey I'm on. Whether it's through coding, design, or simply learning something new, I've found joy in creating things that can make a positive impact. Dreams may change, but the heart that wants to help people stays the same, and that's what continues to inspire me every day.
          </p>

          {/* SOCIAL ICONS */}
          <div className="social-links">
            <a href="https://www.facebook.com/princes.mabuan" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/p.ari4_mrr?igsh=dTVlNmY0OHVjeGFm" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            </a>
            <a href="mailto:mariaprincesomboy@gmail.com">
              <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Gmail" />
            </a>
          </div>
        </div>

        {/* Right Side Picture */}
        <div className="home-image">
          <div className="oval-frame">
            <img src="/maria.jpg" alt="Maria Princes Omboy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;