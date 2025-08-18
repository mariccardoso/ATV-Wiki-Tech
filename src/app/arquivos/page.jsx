import Header from "@/components/Header";
import styles from "./arquivos.module.css";
import HeroSectionPages from "@/components/HeroSectionPages";

export default function Arquivos() {


    return (
        <main className={styles.main}>
          <Header />
          <HeroSectionPages title="Arquivos Especiais" description="Conheça os arquivos especiais utilizados neste projeto." />
        </main>
    );
}