import styles from "../ui.module.css";

export function TagCloud({ items }) {
  return (
    <ul className={styles.tagCloud}>
      {items.map(t => <li key={t}>{t}</li>)}
    </ul>
  );
}