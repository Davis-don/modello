import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logoImg from '../../assets/Logo of Progress and Growth.png'

type NavLinkType = {
  name: string;
  path: string;
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks: NavLinkType[] = [
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

  // Close menu when a link is clicked (mainly for mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-container">
            <div className="logo">
              <img src={logoImg} alt="image of logo" />
            </div>
            <div className="company-name-logo">
              Forescena
            </div>
          </div>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <Link
                    to={link.path}
                    className="nav-link"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
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
