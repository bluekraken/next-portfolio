import "../styles/globals.css";
import NextProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextProgress height={6} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
