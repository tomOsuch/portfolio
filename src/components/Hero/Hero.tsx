import { heroData } from '../../data/data';
import { pluralizeYears } from '../../utils/pluralizeYears';
import Button from '../Button/Button';
import Terminal from '../Terminal/Terminal';
import styles from './Hero.module.scss';

const Hero = () => {
  const { name, role, experience, location, description, stack, github, linkedin } = heroData;
  const [firstName, lastName] = name.split(' ');

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.tag}>● {location}</div>

          <h1 className={styles.heading}>
            {firstName}
            <br />
            <span className={styles.accent}>{lastName}</span>
          </h1>

          <div className={styles.subtitle}>
            <strong>{role}</strong>
            <br />
            {experience} {pluralizeYears(experience)} komercyjnego doświadczenia
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

        <Terminal name={name} role={role} experience={experience} stack={stack} location={location} />
      </div>
    </section>
  );
};

export default Hero;
