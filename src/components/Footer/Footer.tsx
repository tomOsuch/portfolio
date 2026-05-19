import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.accent}>Zaprojektowane i zakodowane</span>
      {' przez Tomasza Osucha ☕'}
    </footer>
  );
};

export default Footer;
