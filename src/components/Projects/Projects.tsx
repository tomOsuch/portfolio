import { projectsData } from '../../data/data';
import useScrollReveal from '../../hooks/useScrollReveal';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Projects.module.scss';

const Projects = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <SectionHeader num="03." title="Projekty" />
        <div ref={ref} className={styles.grid}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`${styles.card} ${project.inProgress ? styles.inProgress : ''} fade-in`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{project.icon}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  GitHub ↗
                </a>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.name}>{project.name}</div>
                <p className={styles.desc}>{project.description}</p>
              </div>

              <div className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={`${styles.tag} variant-${tag.variant}`}>
                    {tag.label}
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

export default Projects;