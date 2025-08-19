import styles from "../ui.module.css";

export function CodeBlock({ code }) {
  return (
    <pre className={styles.code}>
      <code>{code}</code>
    </pre>
  );
}