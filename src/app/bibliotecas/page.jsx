import Header from "@/components/Header";
import HeroSectionPages from "@/components/HeroSectionPages";
import { LocalNav } from "@/components/LocalNav";
import { Section } from "@/components/Section";
import { CardGrid, Card } from "@/components/CardGrid";
import { List } from "@/components/List";
import styles from "./biblioteca.module.css";

export default function Bibliotecas() {
  const nav = [
    { href:"#exemplos", label:"Exemplos" },
    { href:"#caracteristicas", label:"Características" },
    { href:"#comparativo", label:"Comparativo" }
  ];

  const exemplos = [
    { title:"Bootstrap", subtitle:"CSS", desc:"Componentes responsivos.", link:"https://getbootstrap.com/" },
    { title:"Bulma", subtitle:"CSS", desc:"Framework moderno flexbox.", link:"https://bulma.io/" },
    { title:"Tailwind", subtitle:"Utilitário", desc:"Classes utilitárias configuráveis.", link:"https://tailwindcss.com/" }
  ];

  const caracteristicas = [
    {
      title:"Bootstrap",
      pros:["Componentes prontos","Grid consolidado","Ecossistema grande"],
      cons:["Muitas classes","Customização exige SASS","Layouts parecidos"]
    },
    {
      title:"Bulma",
      pros:["Só CSS (sem JS)","Modular","Base flexbox limpa"],
      cons:["Sem plugins JS nativos","Curva util classes","Limitações de componentes"]
    },
    {
      title:"Tailwind",
      pros:["Alta personalização","Purga reduz bundle","Design system via config"],
      cons:["Markup verboso","Requer build/purga","Curva de tokens"]
    }
  ];

  const comparativo = [
    { title:"Bootstrap", text:"Velocidade inicial com muitos componentes." },
    { title:"Bulma", text:"CSS puro leve e modular." },
    { title:"Tailwind", text:"Escala de design consistente via tokens." }
  ];

  return (
    <main className={styles.main}>
      <Header />
      <HeroSectionPages
        title="Bibliotecas de Estilo"
        description="Comparação de abordagens CSS e utilitárias."
      />
      <LocalNav items={nav} />

      <Section id="exemplos" title="Principais Exemplos">
        <CardGrid>
          {exemplos.map(e => (
            <Card
              key={e.title}
              title={e.title}
              subtitle={e.subtitle}
              href={e.link}
              footer="Visitar ↗"
            >
              {e.desc}
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section id="caracteristicas" title="Características" alt>
        <CardGrid>
          {caracteristicas.map(c => (
            <Card key={c.title} title={c.title}>
              <strong>Prós:</strong>
              <List items={c.pros} />
              <strong>Contras:</strong>
              <List items={c.cons} />
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section id="comparativo" title="Resumo Comparativo">
        <CardGrid>
          {comparativo.map(c => (
            <Card key={c.title} title={c.title}>{c.text}</Card>
          ))}
        </CardGrid>
      </Section>

      <footer className={styles.footer}>
        <p>Bibliotecas frontend — produtividade vs personalização.</p>
      </footer>
    </main>
  );
}