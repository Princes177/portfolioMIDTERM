const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">M.P.O</div>
      <nav>
        <ul>
          <li><a href="index.html" className="active">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;