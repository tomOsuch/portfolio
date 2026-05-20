import styles from './Terminal.module.scss';

interface TerminalProps {
  name: string;
  role: string;
  experience: number;
  stack: string[];
  available: boolean;
}

interface LineProps {
  label: string;
  value: string | number | boolean;
  type: 'str' | 'num' | 'val';
  comment?: string;
}

const Line = ({ label, value, type, comment }: LineProps) => (
  <div>
    &nbsp;&nbsp;
    <span className={styles.key}>"{label}"</span>:{' '}
    <span className={styles[type]}>{String(value)}</span>
    {comment && <span className={styles.comment}> {comment}</span>}
    ,
  </div>
);

const Terminal = ({ name, role, experience, stack, available }: TerminalProps) => {
  return (
    <div className={styles.terminal}>
      <div className={styles.bar}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
        <span className={styles.title}>tomasz@portfolio:~</span>
      </div>
      <div className={styles.body}>
        <div className={styles.comment}>{'// Profil developera'}</div>
        <div>{'{'}</div>
        <Line label="imię"     value={`"${name}"`}  type="str" />
        <Line label="rola"     value={`"${role}"`}  type="str" />
        <Line label="exp"      value={experience}   type="num" comment="// lata" />

        <div>
          &nbsp;&nbsp;
          <span className={styles.key}>"stack"</span>:{' '}
          <span className={styles.arr}>{'['}</span>
        </div>
        {stack.map((item, i) => (
          <div key={i}>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={styles.str}>"{item}"</span>
            {i < stack.length - 1 ? ',' : ''}
          </div>
        ))}
        <div>&nbsp;&nbsp;<span className={styles.arr}>{']'}</span>,</div>

        <Line label="dostępny" value={available}    type="val" />
        <div>{'}'} <span className={styles.cursor} /></div>
      </div>
    </div>
  );
};

export default Terminal;