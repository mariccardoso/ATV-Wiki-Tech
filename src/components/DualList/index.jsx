import styles from "../ui.module.css";

export function DualList({ left, right, leftLabel, rightLabel }) {
  return (
    <div className={styles.dual}>
      <ul className={`${styles.list} ${styles.markPositive}`}>
        {leftLabel && <li className={styles.listLabel}>{leftLabel}</li>}
        {left.map(i => <li key={i}>{i}</li>)}
      </ul>
      <ul className={`${styles.list} ${styles.markNegative}`}>
        {rightLabel && <li className={styles.listLabel}>{rightLabel}</li>}
        {right.map(i => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}