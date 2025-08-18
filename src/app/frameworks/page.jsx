import Header from "@/components/Header";
import HeroSectionPages from "@/components/HeroSectionPages";
import styles from "./frameworks.module.css";

export default function Frameworks() {
  const exemplos = [
    { title:"Next.js", stack:"React • Full / Front", desc:"SSR, SSG, ISR, App Router, otimização integrada.", link:"https://nextjs.org" },
    { title:"Nuxt.js", stack:"Vue • Full / Front", desc:"SSR/SSG híbrido, auto import, server routes.", link:"https://nuxt.com" },
    { title:"SvelteKit", stack:"Svelte • Front", desc:"SSR/SSG flexível, routing baseado em arquivos.", link:"https://kit.svelte.dev" },
    { title:"NestJS", stack:"Node • Back", desc:"Arquitetura modular, DI, pipes, guards.", link:"https://nestjs.com" },
    { title:"Blitz.js", stack:"React • Full", desc:"Full‑stack inspirado em Rails (agora sobre Next).", link:"https://blitzjs.com" },
    { title:"RedwoodJS", stack:"React • Full", desc:"GraphQL + Prisma + Cells + roteamento.", link:"https://redwoodjs.com" }
  ];

  const pros = [
    "Produtividade (features prontas)",
    "Padronização e estrutura",
    "Segurança e boas práticas",
    "Manutenção facilitada",
    "Redução de custo / time‑to‑market",
    "Foco na regra de negócio",
    "Comunidade ativa"
  ];
  const cons = [
    "Curva de aprendizado",
    "Complexidade extra em apps pequenos",
    "Restrições de convenções",
    "Possível sobrecarga de performance",
    "Acoplamento / lock‑in",
    "Compatibilidade ocasional",
    "Dependência da saúde do projeto"
  ];

  const funcionalidades = [
    "Roteamento baseado em arquivos",
    "SSR / SSG / ISR / Streaming",
    "Otimização de imagens / assets",
    "Estrutura opinativa",
    "Integrações (build, testes, deploy)",
    "Gerenciamento de estado / context helpers",
    "Auth & autorização (helpers / patterns)",
    "TypeScript & CSS‑in‑JS suporte",
    "Deploy simplificado (Vercel / Netlify)",
    "Ecosistema & CLI"
  ];

  const mercado = [
    "Aceleração de desenvolvimento",
    "Otimização de desempenho & SEO",
    "Escalabilidade arquitetural",
    "DX avançada (dev server, HMR, debug)",
    "Padronização em times grandes",
    "Especialização por domínio (conteúdo, e‑commerce, streaming)"
  ];

  return (
    <main className={styles.main}>
      <Header />
      <HeroSectionPages
        title="Meta‑Frameworks"
        description="Camada acima de frameworks base oferecendo fluxo, convenções e otimização."
      />

      <nav className={styles.localNav}>
        <a href="#definicao">Definição</a>
        <a href="#tipos">Tipos</a>
        <a href="#exemplos">Exemplos</a>
        <a href="#pros-cons">Prós & Contras</a>
        <a href="#funcionalidades">Funcionalidades</a>
        <a href="#mercado">Uso no Mercado</a>
        <a href="#oportunidades">Oportunidades</a>
      </nav>

      <section id="definicao" className={styles.section}>
        <h2>Definição</h2>
        <p>
          Meta‑framework: camada superior que orquestra tecnologias base (React, Vue, Node etc.)
          agregando roteamento, renderização, build, deploy, otimização e convenções.
        </p>
      </section>

      <section id="tipos" className={styles.sectionAlt}>
        <h2>Tipos</h2>
        <div className={styles.compare}>
          <div>
            <h3>Frontend</h3>
            <p>Next.js, Nuxt.js, SvelteKit — foco em renderização híbrida, otimização e DX.</p>
          </div>
          <div>
            <h3>Backend</h3>
            <p>NestJS, Blitz (camada server) — módulos, injeção, segurança, pipelines.</p>
          </div>
          <div>
            <h3>Full‑Stack</h3>
            <p>RedwoodJS, Blitz.js — unificam front, back, dados e deploy.</p>
          </div>
        </div>
      </section>

      <section id="exemplos" className={styles.section}>
        <h2>Exemplos</h2>
        <div className={styles.cards}>
          {exemplos.map(f => (
            <a key={f.title} href={f.link} target="_blank" rel="noreferrer" className={styles.card}>
              <h3>{f.title}</h3>
              <span className={styles.stack}>{f.stack}</span>
              <p>{f.desc}</p>
              <span className={styles.visit}>Visitar ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section id="pros-cons" className={styles.sectionAlt}>
        <h2>Prós & Contras</h2>
        <div className={styles.dual}>
          <ul className={styles.list}>
            {pros.map(p => <li key={p} className={styles.pro}>{p}</li>)}
          </ul>
          <ul className={styles.list}>
            {cons.map(c => <li key={c} className={styles.con}>{c}</li>)}
          </ul>
        </div>
      </section>

      <section id="funcionalidades" className={styles.section}>
        <h2>Funcionalidades</h2>
        <ul className={styles.tagCloud}>
          {funcionalidades.map(f => <li key={f}>{f}</li>)}
        </ul>
      </section>

      <section id="mercado" className={styles.sectionAlt}>
        <h2>Uso no Mercado</h2>
        <div className={styles.gridNotes}>
          {mercado.map(m => (
            <div key={m} className={styles.note}>{m}</div>
          ))}
        </div>
      </section>

      <section id="oportunidades" className={styles.section}>
        <h2>Oportunidades</h2>
        <p>
          Adoção de meta‑frameworks gera ganhos em velocidade, segurança, padronização e escalabilidade,
          permitindo foco em diferenciação de negócio e não em infraestrutura repetitiva.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>Meta‑frameworks — convenções que aceleram produto e reduzem risco.</p>
      </footer>
    </main>
  );
}