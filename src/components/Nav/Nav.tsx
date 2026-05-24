import { useState } from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.accent}>T</span>
        {'omasz Osuch'}
      </div>

      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Otwórz menu nawigacyjne" aria-expanded={isOpen}>
        <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
        <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
        <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
      </button>

      <ul className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
        <li>
          <a href="#experience" onClick={() => setIsOpen(false)}>
            doświadczenie
          </a>
        </li>
        <li>
          <a href="#technologies" onClick={() => setIsOpen(false)}>
            technologie
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            projekty
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
