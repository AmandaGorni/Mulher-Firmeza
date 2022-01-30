import React, { useState } from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';

function Navbar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollYPosition();

  const stickeyTrigger = window.innerHeight / 2.75;

  return (
    <div
      className={`nav${scrollY > stickeyTrigger ? ' nav-stickey' : ''}${
        menuOpen ? ' nav-open' : ''
      }`}
    >
      <div className="nav-content">
        <div className="nav-logo">Mulher Firmeza</div>

        <nav className="nav-links__container">
          {links &&
            links.map((link, i) => (
              <a className="nav-link" href={link.href} key={i}>
                <div className="nav-link__text">{link.title}</div>
                <div className="nav-link__background" />
              </a>
            ))}
        </nav>

        <div className="nav-menu__icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  links: [
    { title: 'Home', href: '#home' },
    { title: 'Serviços', href: '#services' },
    { title: 'Apoio', href: '#pricing' },
    { title: 'Contato', href: '#contact' },
  ],
};

export default Navbar;
