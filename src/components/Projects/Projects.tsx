import { projectsData } from '../../data/data';
import useScrollReveal from '../../hooks/useScrollReveal';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Projects.module.scss';

const Projects = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <SectionHeader num="03" title="Projekty" />
        <div ref={ref} className={styles.grid}>
          {projectsData.map((project) => (
            <article
              key={project.id}
              className={`${styles.card} ${project.featured ? styles.featured : ''} fade-in`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{project.icon}</span>
                <div className={styles.links}>
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.name}>{project.name}</h3>
                {project.status && <div className={styles.status}>{project.status}</div>}
                <p className={styles.desc}>{project.description}</p>
              </div>

              <div className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={`${styles.tag} variant-${tag.variant}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
