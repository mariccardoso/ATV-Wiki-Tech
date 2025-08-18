import styles from "./infoblock.module.css";

const InfoBlock = ({ icon, title, children, variant }) => {
    return (
    <div className={`${styles.block} ${styles[variant]}`}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
    );
}

export default InfoBlock;