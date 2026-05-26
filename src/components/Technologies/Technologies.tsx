import { technologiesData } from '../../data/data';
import useScrollReveal from '../../hooks/useScrollReveal';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Technologies.module.scss';

const Technologies = () => {
  const ref = useScrollReveal();

  return (
    <section id="technologies" className={styles.technologies}>
      <div className={styles.container}>
        <SectionHeader num="02" title="Technologie" />
        <div ref={ref} className={`${styles.grid} fade-in`}>
          {technologiesData.map((category) => (
            <div key={category.id} className={styles.card}>
              <div className={styles.cardLabel}>{category.label}</div>
              <div className={styles.pills}>
                {category.pills.map((pill, i) => (
                  <span key={i} className={`${styles.pill} variant-${pill.variant}`}>
                    {pill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
