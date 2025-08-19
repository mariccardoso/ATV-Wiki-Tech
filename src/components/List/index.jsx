import styles from "../ui.module.css";

export function List({ items, variant }) {
  return (
    <ul className={`${styles.list} ${variant ? styles[variant] : ""}`}>
      {items.map(i => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}