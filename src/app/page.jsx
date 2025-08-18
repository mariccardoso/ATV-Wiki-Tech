import Header from "@/components/Header";
import styles from "./page.module.css";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CardsSection from "@/components/CardsSection";

export default function Home() {
    const cardContent = [
        { title: "Frameworks", description: "Explore os principais frameworks JavaScript.", link: "/frameworks" },
        { title: "Bibliotecas", description: "Descubra as bibliotecas mais populares.", link: "/bibliotecas" },
        { title: "Next.js 15", description: "Aprenda sobre a versão mais recente do Next.js.", link: "/next" },
        { title: "Arquivos Especiais", description: "Conheça os arquivos especiais utilizados neste projeto.", link: "/arquivos" },
    ];

    return (
        <main className={styles.main}>
          <Header />
          <HeroSection />
          <CardsSection conteúdo={cardContent} />
        </main>
    );
}