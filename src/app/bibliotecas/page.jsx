import Header from "@/components/Header";
import styles from "./biblioteca.module.css";
import HeroSectionPages from "@/components/HeroSectionPages";

export default function Biblioteca() {


    return (
        <main className={styles.main}>
          <Header />
          <HeroSectionPages title="Bibliotecas Especiais" description="Conheça as bibliotecas especiais utilizadas neste projeto." />
        </main>
    );
}