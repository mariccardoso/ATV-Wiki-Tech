import styles from "../ui.module.css";

export function LocalNav({ items }) {
  return (
    <nav className={styles.localNav}>
      {items.map(it => (
        <a key={it.href} href={it.href}>{it.label}</a>
      ))}
    </nav>
  );
}