import styles from './Button.module.scss';

interface ButtonProps {
  variant: 'primary' | 'outline';
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({ variant, children, href, external = false, className, onClick }: ButtonProps) => {
  const classes = [variant === 'primary' ? styles.primary : styles.outline, className].filter(Boolean).join(' ');

  // link zewnętrzny lub wewnętrzny
  if (href) {
    return (
      <a href={href} className={classes} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  // akcja onClick
  if (onClick) {
    return (
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    );
  }

  // zabezpieczenie — nie renderuj nic gdy brak href i onClick
  return null;
};

export default Button;
