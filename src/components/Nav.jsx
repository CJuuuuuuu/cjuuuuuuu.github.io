import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/',             label: 'Home' },
  { to: '/about',        label: 'About' },
  { to: '/research',     label: 'Research' },
  { to: '/publications', label: 'Publications' },
  { to: '/experience',   label: 'Experience' },
  { to: '/cv',           label: 'CV' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="nav">
      <div className="nav__inner">
        <NavLink to="/" className="nav__logo">
          CHIA-JUNG LIN
        </NavLink>
        
        {/* Desktop Links */}
        <div className="nav__links">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button className="nav__mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav__mobile-menu ${isOpen ? 'open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
