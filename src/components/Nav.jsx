import { NavLink } from 'react-router-dom';

const links = [
  { to: '/',             label: 'Home' },
  { to: '/about',        label: 'About' },
  { to: '/research',     label: 'Research' },
  { to: '/publications', label: 'Publications' },
  { to: '/experience',   label: 'Experience' },
  { to: '/cv',           label: 'CV' },
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <NavLink to="/" className="nav__logo">
          CHIA-JUNG LIN
        </NavLink>
        <div className="nav__links">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                'nav__link' + (isActive ? ' active' : '')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
