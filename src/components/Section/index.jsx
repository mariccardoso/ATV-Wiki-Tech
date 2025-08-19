import styles from "../ui.module.css";

export function Section({ id, title, alt = false, children }) {
  const cls = alt ? `${styles.section} ${styles.sectionAlt}` : styles.section;
  return (
    <section id={id} className={cls}>
      {title && <h2 className={styles.heading}>{title}</h2>}
      {children}
    </section>
  );
}