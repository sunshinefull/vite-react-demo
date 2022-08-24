// index.tsx
import styles from './index.module.scss';
export function Header() {
  return <p className={styles.header}>
    This is Header
    <span className="bg-red-400">xxx</span>
  </p>
};