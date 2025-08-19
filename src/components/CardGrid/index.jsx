import styles from "../ui.module.css";

export function CardGrid({ children }) {
  return <div className={styles.flexWrap}>{children}</div>;
}

export function Card({ title, subtitle, href, children, footer }) {
  const Comp = href ? "a" : "div";
  return (
    <Comp className={styles.card} {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}>
      {title && <h3>{title}</h3>}
      {subtitle && <span className={styles.badge}>{subtitle}</span>}
      {children && <p className={styles.cardText}>{children}</p>}
      {footer && <span className={styles.cardFooter}>{footer}</span>}
    </Comp>
  );
}