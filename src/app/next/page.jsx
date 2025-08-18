import Header from "@/components/Header";
import styles from "./next.module.css";
import HeroSectionPages from "@/components/HeroSectionPages";

export default function Next() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSectionPages
        title="Next.js 15"
        description="Evolução em performance, DX e novas capacidades de renderização."
      />

      <nav className={styles.localNav}>
        <a href="#pontos">Pontos Fortes</a>
        <a href="#novidades">Novidades</a>
        <a href="#curiosidades">Curiosidades</a>
        <a href="#oportunidades">Áreas & Oportunidades</a>
      </nav>

      <section id="pontos" className={styles.section}>
        <h2>Pontos Fortes</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Desempenho & DX</h3>
            <p>Turbopack integrado (agora estável em dev) acelera o ciclo de feedback.</p>
          </div>
          <div className={styles.card}>
            <h3>Renderização Híbrida</h3>
            <p>SSG, SSR, ISR + App Router com Server/Client Components, cache e revalidação.</p>
          </div>
          <div className={styles.card}>
            <h3>Mídia Otimizada</h3>
            <p>&lt;Image&gt;, fontes otimizadas, blur placeholders, formatos modernos e lazy load.</p>
          </div>
          <div className={styles.card}>
            <h3>Full‑stack</h3>
            <p>API Routes dentro do app permitem construir backend e frontend juntos.</p>
          </div>
          <div className={styles.card}>
            <h3>Edge & Middleware</h3>
            <p>Execução de lógica de baixa latência mais próxima do usuário.</p>
          </div>
        </div>
      </section>

      <section id="novidades" className={styles.sectionAlt}>
        <h2>Novidades do Next 15</h2>
        <ul className={styles.list}>
          <li>Compatibilidade com React 19 no App Router.</li>
            <li>Server Actions mais seguras e ergonômicas.</li>
          <li>Turbopack estável no desenvolvimento; builds evoluindo.</li>
          <li>Partial Prerendering (PPR) misturando estático/dinâmico na mesma rota.</li>
          <li>APIs assíncronas para headers, cookies, params e searchParams.</li>
          <li>Configuração em TypeScript via next.config.ts.</li>
        </ul>
      </section>

      <section id="curiosidades" className={styles.section}>
        <h2>Curiosidades</h2>
        <div className={styles.tiles}>
          <div className={styles.tile}>
            <span className={styles.badge}>Uso</span>
            <p>Mais de 50% das sessões em Next 15 já utilizam Turbopack.</p>
          </div>
            <div className={styles.tile}>
              <span className={styles.badge}>Discussão</span>
              <p>PPR gera debates sobre granularidade de streaming e cache.</p>
            </div>
          <div className={styles.tile}>
            <span className={styles.badge}>UX</span>
            <p>Form nativo &lt;Form&gt; com prefetch, fallback sem JS e erros automáticos.</p>
          </div>
          <div className={styles.tile}>
            <span className={styles.badge}>Dev</span>
            <p>Debug aprimorado: telas de erro redesenhadas e DevTools melhores.</p>
          </div>
        </div>
      </section>

      <section id="oportunidades" className={styles.sectionAlt}>
        <h2>Áreas de Atuação & Oportunidades</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>E‑commerce & Marketplaces</h3>
            <p>Starters oficiais (Next.js Commerce) aceleram MVPs.</p>
          </div>
          <div className={styles.card}>
            <h3>Conteúdo & SEO</h3>
            <p>Blogs, docs, marketing sites com imagens e metadados otimizados.</p>
          </div>
          <div className={styles.card}>
            <h3>SaaS & Dashboards</h3>
            <p>API Routes + Server Components reduzem sobrecarga de requests.</p>
          </div>
          <div className={styles.card}>
            <h3>Apps de IA</h3>
            <p>Streaming, edge e caching para experiências reativas.</p>
          </div>
          <div className={styles.card}>
            <h3>Baixa Latência</h3>
            <p>Middleware e Edge Runtime para personalização em tempo real.</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Next.js 15 — Explorando performance e novas fronteiras de renderização.</p>
      </footer>
    </main>
  );
}