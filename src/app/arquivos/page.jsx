import Header from "@/components/Header";
import HeroSectionPages from "@/components/HeroSectionPages";
import styles from "./arquivos.module.css";

export default function Arquivos() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSectionPages
        title="Arquivos Especiais"
        description="Arquitetura do App Router: controle de layout, erros, loading e 404."
      />

      <nav className={styles.nav}>
        <a href="#visao">Visão</a>
        <a href="#error">error.js</a>
        <a href="#global">global-error.js</a>
        <a href="#diff">Diferença</a>
        <a href="#notfound">not-found.js</a>
        <a href="#loading">loading.js</a>
        <a href="#layout">layout.js</a>
        <a href="#page">page.js</a>
      </nav>

      <section id="visao" className={styles.section}>
        <h2>Mapa Geral</h2>
        <p className={styles.lead}>
          Dentro de <code>app/</code>, cada pasta representa um segmento de rota.
          Arquivos especiais controlam comportamento de erro, carregamento, 404,
          layout persistente e conteúdo.
        </p>
        <div className={styles.miniGrid}>
          {["page.js", "layout.js", "loading.js", "error.js", "global-error.js", "not-found.js"].map(i => (
            <div key={i} className={styles.mini}>
              <strong>{i}</strong>
              <span>
                {i === "page.js" && "Conteúdo"}
                {i === "layout.js" && "Shell persistente"}
                {i === "loading.js" && "Fallback rápido"}
                {i === "error.js" && "Erro local"}
                {i === "global-error.js" && "Erro global"}
                {i === "not-found.js" && "404 custom"}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="error" className={styles.sectionAlt}>
        <h2>error.js (Local)</h2>
        <ul className={styles.list}>
          <li>Escopo apenas da pasta onde está.</li>
          <li>Substitui o conteúdo que falhou mantendo layouts ancestrais.</li>
          <li>Recebe <code>error</code> e <code>reset()</code>.</li>
          <li>Ideal para falhas recuperáveis de dados.</li>
        </ul>
        <pre className={styles.code}>{`"use client";
export default function Error({ error, reset }) {
  return (
    <div>
      <h3>Falha no dashboard</h3>
      <p>{error.message}</p>
      <button onClick={reset}>Tentar novamente</button>
    </div>
  );
}`}</pre>
      </section>

      <section id="global" className={styles.section}>
        <h2>global-error.js (Global)</h2>
        <ul className={styles.list}>
          <li>Na raiz: <code>app/global-error.js</code>.</li>
          <li>Cobre erros não tratados localmente.</li>
          <li>Renderiza <code>&lt;html&gt;</code> e <code>&lt;body&gt;</code>.</li>
          <li>Útil para logging central e fallback crítico.</li>
        </ul>
        <pre className={styles.code}>{`"use client";
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Erro crítico</h2>
        <p>{error.message}</p>
        <button onClick={reset}>Recarregar</button>
      </body>
    </html>
  );
}`}</pre>
      </section>

      <section id="diff" className={styles.sectionAlt}>
        <h2>Diferença Rápida</h2>
        <div className={styles.compare}>
          <div>
            <h3>error.js</h3>
            <p>Escopo local, preserva layout, reset imediato.</p>
          </div>
          <div>
            <h3>global-error.js</h3>
            <p>Cobre tudo, substitui a UI, usado para falha crítica.</p>
          </div>
        </div>
      </section>

      <section id="notfound" className={styles.section}>
        <h2>not-found.js</h2>
        <p>Página 404 custom. Acionada automaticamente ou via <code>notFound()</code> em rotas dinâmicas.</p>
        <pre className={styles.code}>{`// app/blog/[slug]/not-found.js
export default function NotFound() {
  return <h2>Post não encontrado</h2>;
}

// page que chama:
import { notFound } from "next/navigation";
export default async function Post({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();
  return <article>{post.title}</article>;
}`}</pre>
      </section>

      <section id="loading" className={styles.sectionAlt}>
        <h2>loading.js</h2>
        <p>Fallback imediato (Suspense por segmento). Some quando os dados chegam.</p>
        <pre className={styles.code}>{`// app/produtos/loading.js
export default function Loading() {
  return <p>Carregando...</p>;
}`}</pre>
      </section>

      <section id="layout" className={styles.section}>
        <h2>layout.js</h2>
        <p>Define estrutura persistente (nav, footer, tema). Empilha hierarquias de layouts.</p>
        <pre className={styles.code}>{`export const metadata = { title: "Site" };
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>Navbar</header>
        {children}
        <footer>© 2025</footer>
      </body>
    </html>
  );
}`}</pre>
      </section>

      <section id="page" className={styles.sectionAlt}>
        <h2>page.js</h2>
        <p>Entrada de rota. Pode ser assíncrona, faz fetch no server e retorna a UI.</p>
        <pre className={styles.code}>{`export default async function Dashboard() {
  const data = await getData();
  return <div>{JSON.stringify(data)}</div>;
}`}</pre>
      </section>

      <footer className={styles.footer}>
        Arquivos estruturais — controle de UX no App Router.
      </footer>
    </main>
  );
}
