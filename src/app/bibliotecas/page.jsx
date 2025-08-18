import Header from "@/components/Header";
import HeroSectionPages from "@/components/HeroSectionPages";
import styles from "./biblioteca.module.css";

export default function Bibliotecas() {
  const exemplos = [
    { title:"Bootstrap", description:"Framework CSS front‑end com componentes responsivos.", link:"https://getbootstrap.com/" },
    { title:"Bulma", description:"Framework CSS moderno baseado em Flexbox.", link:"https://bulma.io/" },
    { title:"Tailwind", description:"Framework utilitário para compor estilos via classes.", link:"https://tailwindcss.com/" }
  ];

  const caracteristicas = [
    {
      title:"Bootstrap",
      pros:[
        "Componentes prontos responsivos",
        "Grid consolidado",
        "Ecossistema grande"
      ],
      cons:[
        "HTML cheio de classes",
        "Customização profunda exige SASS",
        "Tendência a layouts parecidos"
      ]
    },
    {
      title:"Bulma",
      pros:[
        "Só CSS (sem JS)",
        "Modular (importa só o necessário)",
        "Base flexbox organizada"
      ],
      cons:[
        "Sem plugins JS nativos",
        "Curva de aprender util classes",
        "Algumas limitações de componentes"
      ]
    },
    {
      title:"Tailwind",
      pros:[
        "Altíssima personalização",
        "Purga gera bundle pequeno",
        "Design system direto no config"
      ],
      cons:[
        "Markup verboso",
        "Requer build/purga",
        "Curva inicial de tokens"
      ]
    }
  ];

  return (
    <main className={styles.main}>
      <Header />
      <HeroSectionPages
        title="Bibliotecas de Estilo"
        description="Comparação rápida entre abordagens de estilização populares."
      />

      <nav className={styles.localNav}>
        <a href="#exemplos">Exemplos</a>
        <a href="#caracteristicas">Características</a>
        <a href="#comparativo">Comparativo</a>
      </nav>

      <section id="exemplos" className={styles.section}>
        <h2>Principais Exemplos</h2>
        <div className={styles.cards}>
          {exemplos.map(card => (
            <a
              key={card.title}
              className={styles.card}
              href={card.link}
              target="_blank"
              rel="noreferrer"
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <span className={styles.visit}>Visitar ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section id="caracteristicas" className={styles.sectionAlt}>
        <h2>Características</h2>
        <div className={styles.featuresGrid}>
          {caracteristicas.map(b => (
            <div key={b.title} className={styles.featureBlock}>
              <h3>{b.title}</h3>
              <div className={styles.columns}>
                <ul className={styles.list}>
                  {b.pros.map(p => <li key={p} className={styles.pro}>{p}</li>)}
                </ul>
                <ul className={styles.list}>
                  {b.cons.map(c => <li key={c} className={styles.con}>{c}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="comparativo" className={styles.section}>
        <h2>Resumo Comparativo</h2>
        <div className={styles.compare}>
          <div>
            <h4>Bootstrap</h4>
            <p>Componentização pronta + ecossistema extenso → velocidade inicial.</p>
          </div>
          <div>
            <h4>Bulma</h4>
            <p>CSS puro modular → leve e simples de integrar.</p>
          </div>
          <div>
            <h4>Tailwind</h4>
            <p>Utilitário/tokens → máxima flexibilidade e design consistente.</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Bibliotecas frontend — diferentes estratégias para produtividade e personalização.</p>
      </footer>
    </main>
  );
}