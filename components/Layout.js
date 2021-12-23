import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

const Layout = ({ children, title }) => {
  return (
    <div className={styles.root}>
      <Head>
        <title>Next Portfolio</title>
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hireme">
          <a>Hire me</a>
        </Link>
        <Link href="/blog/">
          <a>Blog</a>
        </Link>
      </header>

      <h1>{title}</h1>
      {children}

      <footer className={styles.footer}>&copy; {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Layout;
