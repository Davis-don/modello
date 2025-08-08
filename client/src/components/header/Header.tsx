import { useState, useEffect } from 'react';
import './header.css';

type NavLink = {
  name: string;
  path: string;
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-container">
            <div className="logo">
              <span className="logo-icon">∫</span>
              <span className="logo-text">Quantiform Labs</span>
            </div>
          </div>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <a href={link.path} className="nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </header>
      {/* Spacer to prevent content from being hidden behind the fixed header */}
      <div className="header-spacer"></div>
    </>
  );
}

export default Header;