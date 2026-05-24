import { heroData } from '../../data/data';
import Button from '../Button/Button';
import Terminal from '../Terminal/Terminal';
import styles from './Hero.module.scss';

const Hero = () => {
  const { name, role, experience, location, available, description, stack, github, linkedin } = heroData;
  const [firstName, lastName] = name.split(' ');

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.tag}>
            {available ? '● dostępny od zaraz' : '● niedostępny'} · {location}
          </div>

          <h1 className={styles.heading}>
            {firstName}
            <br />
            <span className={styles.accent}>{lastName}</span>
          </h1>

          <div className={styles.subtitle}>
            <strong>{role}</strong>
            <br />
            {experience} lata komercyjnego doświadczenia
          </div>

          <p className={styles.description}>{description}</p>

          <div className={styles.buttons}>
            <Button href="#projects" variant="primary">
              Zobacz projekty →
            </Button>
            <Button href="#contact" variant="outline">
              Skontaktuj się
            </Button>
          </div>
          <div className={styles.socials}>
            <Button href={github} variant="outline" external aria-label="GitHub">
              GitHub
            </Button>
            <Button href={linkedin} variant="outline" external aria-label="LinkedIn">
              LinkedIn
            </Button>
          </div>
        </div>

        <Terminal name={name} role={role} experience={experience} stack={stack} available={available} />
      </div>
    </section>
  );
};

export default Hero;
