import styles from "./heroSection.module.css";

const HeroSection = () => {
    return (
            <section className={styles.heroSection}>
            <h1 className={styles.heroTitle}>Bem-vindo ao Wiki-Tech</h1>
            <p className={styles.heroDescription}>
              Este é um projeto de estudo sobre Frameworks e bibliotecas JavaScript.
            </p>
          </section>
    )
}

export default HeroSection;