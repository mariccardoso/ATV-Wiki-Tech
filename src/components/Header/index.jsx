import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>React FrameWork</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/frameworks">FrameWorks</a>
          </li>
          <li>
            <a href="/bibliotecas">Bibliotecas</a>
          </li>
          <li>
            <a href="/next">Next.js 15</a>
          </li>
          <li>
            <a href="/arquivos">Arquivos Especiais</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
