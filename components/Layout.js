import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = (url) => {
    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => (
 <div className="root">
    <Head>
        <title>Next Portfolio</title>
    </Head>
    <header>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/hireme">
            <a>Hire me</a>
        </Link>
    </header>

    <h1>{title}</h1>
    {children}

    <footer>&copy; {new Date().getFullYear()}</footer>

    <style jsx>{`
        .root {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        header {
            background: indigo;
            display: flex;
            font-size: 1.2rem;
            justify-content: space-around;
            padding: 1rem;
            width: 100%;
        }
        header a {
            color: darkgrey;
            text-decoration: none;
        }
        header a:hover {
            color: lightgrey;
            font-weight: bold;
        }
        h1 {
            font-size: 1.8rem;
        }
        footer {
            padding: 1rem;
        }
    `}</style>

    <style global jsx>{`
        body {
            background: #f0f0f0;
            margin: 0;
        }
    `}</style>

 </div>
);

export default Layout;