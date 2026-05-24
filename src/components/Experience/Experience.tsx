import{ experienceData } from '../../data/data'
import useScrollReveal from '../../hooks/useScrollReveal'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './Experience.module.scss'

const Experience = () => {
  const ref = useScrollReveal()

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <SectionHeader num="01" title="Doświadczenie" />
        <div ref={ref} className={`${styles.timeline} fade-in`}>
          {experienceData.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.date}>{item.date}</div>
              <div className={styles.company}>{item.company}</div>
              <div className={styles.role}>{item.role}</div>
              <div className={styles.projects}>
                {item.projects.map((project, i) => (
                  <div key={i} className={styles.project}>
                    <div className={styles.projectName}>{project.name}</div>
                    <div className={styles.projectDesc}>{project.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience
