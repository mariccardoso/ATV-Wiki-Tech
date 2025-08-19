import Header from "@/components/Header";
import HeroSectionPages from "@/components/HeroSectionPages";
import { LocalNav } from "@/components/LocalNav";
import { Section } from "@/components/Section";
import { CardGrid, Card } from "@/components/CardGrid";
import { DualList } from "@/components/DualList";
import { TagCloud } from "@/components/TagCloud";
import { NoteGrid } from "@/components/NoteGrid";
import styles from "./frameworks.module.css"; // mantém apenas wrapper .main e footer

export default function Frameworks() {
  const nav = [
    { href:"#definicao", label:"Definição" },
    { href:"#tipos", label:"Tipos" },
    { href:"#exemplos", label:"Exemplos" },
    { href:"#pros-cons", label:"Prós & Contras" },
    { href:"#funcionalidades", label:"Funcionalidades" },
    { href:"#mercado", label:"Mercado" },
    { href:"#oportunidades", label:"Oportunidades" }
  ];
  const exemplos = [
    { title:"Next.js", subtitle:"React", desc:"SSR, SSG, ISR, otimização integrada.", link:"https://nextjs.org" },
    { title:"Nuxt.js", subtitle:"Vue", desc:"SSR/SSG híbrido, auto import, server routes.", link:"https://nuxt.com" },
    { title:"SvelteKit", subtitle:"Svelte", desc:"SSR/SSG flexível, routing por arquivos.", link:"https://kit.svelte.dev" },
    { title:"NestJS", subtitle:"Node", desc:"Arquitetura modular, DI, pipes, guards.", link:"https://nestjs.com" },
    { title:"Blitz.js", subtitle:"Full", desc:"Full‑stack sobre Next focado em produtividade.", link:"https://blitzjs.com" },
    { title:"RedwoodJS", subtitle:"Full", desc:"GraphQL + Prisma + Cells.", link:"https://redwoodjs.com" }
  ];
  const pros = [
    "Produtividade", "Padronização", "Segurança", "Manutenção fácil",
    "Redução de custos", "Foco no negócio", "Comunidade ativa"
  ];
  const cons = [
    "Curva de aprendizado", "Complexidade em projetos pequenos", "Restrições",
    "Sobrepeso potencial", "Acoplamento", "Compatibilidade ocasional", "Dependência"
  ];
  const funcionalidades = [
    "Roteamento arquivos","SSR / SSG / ISR","Otimização imagens",
    "Estrutura opinativa","Integrações build/test","Gerenciamento estado",
    "Auth / autorização","TypeScript","Deploy facilitado","CLI / DX"
  ];
  const mercado = [
    "Aceleração desenvolvimento","Performance & SEO",
    "Escalabilidade","DX avançada",
    "Padronização em times","Especialização domínio"
  ];
  return (
    <main className={styles.main}>
      <Header />
      <HeroSectionPages
        title="Meta‑Frameworks"
        description="Camada superior que orquestra renderização, build e DX."
      />
      <LocalNav items={nav} />
      <Section id="definicao" title="Definição">
        <p>Camada acima de frameworks base fornecendo roteamento, renderização, otimização e convenções.</p>
      </Section>
      <Section id="tipos" title="Tipos" alt>
        <CardGrid>
          <Card title="Frontend"><strong>Next, Nuxt, SvelteKit</strong> — foco em renderização híbrida e otimização.</Card>
          <Card title="Backend"><strong>NestJS</strong> — módulos, DI, padrões arquiteturais.</Card>
          <Card title="Full‑Stack"><strong>Redwood, Blitz</strong> — unem front, back e dados.</Card>
        </CardGrid>
      </Section>
      <Section id="exemplos" title="Exemplos">
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
      <Section id="pros-cons" title="Prós & Contras" alt>
        <DualList left={pros} right={cons} />
      </Section>
      <Section id="funcionalidades" title="Funcionalidades">
        <TagCloud items={funcionalidades} />
      </Section>
      <Section id="mercado" title="Uso no Mercado" alt>
        <NoteGrid items={mercado} />
      </Section>
      <Section id="oportunidades" title="Oportunidades">
        <p>Ganhos em velocidade, segurança, consistência e foco no valor de negócio.</p>
      </Section>
      <footer className={styles.footer}>
        <p>Meta‑frameworks — convenções que aceleram produto.</p>
      </footer>
    </main>
  );
}