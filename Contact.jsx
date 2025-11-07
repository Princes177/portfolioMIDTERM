const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Get in Touch</h2>
      <p className="contact-subtext">Have a question or want to work together?</p>
      
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

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
    </section>
  );
};

export default Contact;