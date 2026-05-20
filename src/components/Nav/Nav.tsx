import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.accent}>T</span>
        {'omasz Osuch'}
      </div>
      <ul className={styles.links}>
        <li><a href="#experience">Doświadczenie</a></li>
        <li><a href="#technologies">Technologie</a></li>
        <li><a href="#projects">Projekty</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>  
    </nav>
  )
}

export default Nav
