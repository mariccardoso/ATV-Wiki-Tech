import Header from "@/components/Header";
import HeroSectionPages from "@/components/HeroSectionPages";
import { LocalNav } from "@/components/LocalNav";
import { Section } from "@/components/Section";
import { CardGrid, Card } from "@/components/CardGrid";
import { List } from "@/components/List";
import { DualList } from "@/components/DualList";
import { CodeBlock } from "@/components/CodeBlock";
import styles from "./arquivos.module.css";

export default function Arquivos() {
  const nav = [
    { href:"#visao", label:"Visão" },
    { href:"#error", label:"error.js" },
    { href:"#global", label:"global-error.js" },
    { href:"#diff", label:"Diferença" },
    { href:"#notfound", label:"not-found.js" },
    { href:"#loading", label:"loading.js" },
    { href:"#layout", label:"layout.js" },
    { href:"#page", label:"page.js" }
  ];

  const files = [
    { title:"page.js", desc:"Conteúdo do segmento." },
    { title:"layout.js", desc:"Shell persistente." },
    { title:"loading.js", desc:"Fallback rápido." },
    { title:"error.js", desc:"Erro local." },
    { title:"global-error.js", desc:"Erro global." },
    { title:"not-found.js", desc:"404 custom." }
  ];

  const errorLocalPoints = [
    "Escopo da rota onde está",
    "Mantém layouts ancestrais",
    "Recebe error e reset()",
    "Para falhas recuperáveis"
  ];
  const errorGlobalPoints = [
    "Na raiz app/",
    "Captura erros não tratados",
    "Renderiza html/body",
    "Fallback crítico + logging"
  ];

  return (
    <main className={styles.main}>
      <Header />
      <HeroSectionPages
        title="Arquivos Especiais"
        description="Arquitetura do App Router: layout, erros, loading e 404."
      />
      <LocalNav items={nav} />

      <Section id="visao" title="Mapa Geral">
        <p>Dentro de app/, cada pasta é um segmento de rota. Arquivos especiais controlam erro, carregamento, 404, layout e conteúdo.</p>
        <CardGrid>
          {files.map(f => (
            <Card key={f.title} title={f.title}>{f.desc}</Card>
          ))}
        </CardGrid>
      </Section>

      <Section id="error" title="error.js" alt>
        <List items={errorLocalPoints} />
        <CodeBlock code={`"use client";
export default function Error({ error, reset }) {
  return (
    <div>
      <h3>Falha no dashboard</h3>
      <p>{error.message}</p>
      <button onClick={reset}>Tentar novamente</button>
    </div>
  );
}`} />
      </Section>

      <Section id="global" title="global-error.js">
        <List items={errorGlobalPoints} />
        <CodeBlock code={`"use client";
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
}`} />
      </Section>

      <Section id="diff" title="Diferença" alt>
        <DualList
          left={["Escopo local", "Preserva layout", "Reset imediato"]}
          right={["Cobre toda a app", "Substitui UI", "Falha crítica"]}
        />
      </Section>

      <Section id="notfound" title="not-found.js">
        <p>Página 404 custom acionada automaticamente ou via <code>notFound()</code>.</p>
        <CodeBlock code={`// app/blog/[slug]/not-found.js
export default function NotFound() {
  return <h2>Post não encontrado</h2>;
}

// Uso:
import { notFound } from "next/navigation";
export default async function Post({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();
  return <article>{post.title}</article>;
}`} />
      </Section>

      <Section id="loading" title="loading.js" alt>
        <p>Fallback imediato por segmento (Suspense). Some ao terminar o fetch.</p>
        <CodeBlock code={`// app/produtos/loading.js
export default function Loading() {
  return <p>Carregando...</p>;
}`} />
      </Section>

      <Section id="layout" title="layout.js">
        <p>Define estrutura persistente: navegação, footer, tema e empilha hierarquias.</p>
        <CodeBlock code={`export const metadata = { title: "Site" };
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
}`} />
      </Section>

      <Section id="page" title="page.js" alt>
        <p>Entrada de rota. Pode ser assíncrona e realizar fetch no server.</p>
        <CodeBlock code={`export default async function Dashboard() {
  const data = await getData();
  return <div>{JSON.stringify(data)}</div>;
}`} />
      </Section>

      <footer className={styles.footer}>
        Arquivos estruturais — controle de UX no App Router.
      </footer>
    </main>
  );
}
