import Header from "@/components/Header";
import styles from "./frameworks.module.css";
import HeroSectionPages from "@/components/HeroSectionPages";

export default function FrameWorks() {


    return (
        <main className={styles.main}>
          <Header />
          <HeroSectionPages title="Frameworks e Meta-frameworks" description="Conheça os frameworks especiais utilizados neste projeto." />
        </main>
    );
}