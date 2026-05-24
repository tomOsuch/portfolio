import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  num: string;
  title: string;
}

const SectionHeader = ({ num, title }: SectionHeaderProps) => {
    return (
        <div className={styles.header}>
            <span className={styles.num}>{num}</span>
            <h2>{title}</h2>
            <div className={styles.line} />
        </div>
    );
};

export default SectionHeader;