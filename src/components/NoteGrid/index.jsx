import styles from "../ui.module.css";

export function NoteGrid({ items }) {
  return (
    <div className={styles.noteGrid}>
      {items.map(n => <div key={n} className={styles.note}>{n}</div>)}
    </div>
  );
}