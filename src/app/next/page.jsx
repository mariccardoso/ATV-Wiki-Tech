import Header from "@/components/Header";
import styles from "./next.module.css";
import HeroSectionPages from "@/components/HeroSectionPages";

export default function Next() {


    return (
        <main className={styles.main}>
          <Header />
          <HeroSectionPages title="Next.js 15" description="Conheça os recursos especiais do Next.js 15." />
        </main>
    );
}