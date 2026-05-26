import { contactData } from '../../data/data';
import useScrollReveal from '../../hooks/useScrollReveal';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Contact.module.scss';
import { contactIcons } from '../Contact/icons/contactIcons';

const Contact = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <SectionHeader num="04." title="Kontakt" />
        <div ref={ref} className={styles.inner}>
          <p className={styles.desc}>
            Szukam roli łączącej backend z frontendem.
            <br />
            Dostępny od zaraz, Warszawa.
          </p>
          <div className={styles.links}>
            {contactData.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`${styles.card} fade-in`}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className={styles.iconWrap}>{contactIcons[item.icon]}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
