import styles from "./heroSection.module.css";

const HeroSectionPages = ({title, description}) => {
    return (
            <section className={styles.heroSection}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroDescription}>
              {description}
            </p>
          </section>
    )
}

export default HeroSectionPages;