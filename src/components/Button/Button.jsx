import styles from './Button.module.css';

export default function Button({
  children,
  type = 'button',
  onClick,
  disabled,
  className = '',
  ...rest
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
