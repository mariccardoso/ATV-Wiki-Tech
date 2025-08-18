import Link from "next/link";
import styles from "./cardsSection.module.css";

const CardsSection = ({conteúdo}) => {
    return (
        <section className={styles.cardsSection}>
            {conteúdo.map((item, index) => (
                <Link key={index} className={styles.card} href={item.link}>
                    <h2 className={styles.cardTitle}>{item.title}</h2>
                    <p className={styles.cardDescription}>{item.description}</p>
                </Link>
            ))}
        </section>
    )
}

export default CardsSection;