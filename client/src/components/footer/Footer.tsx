import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">∑</span>
            <span className="footer-logo-text">MathMod Solutions</span>
          </div>
          <p className="footer-tagline">
            Simplifying complex problems through mathematical modeling
          </p>
        </div>

        <div className="footer-links">
          <div className="links-column">
            <h3 className="links-heading">Quick Links</h3>
            <ul className="links-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} MathMod Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;