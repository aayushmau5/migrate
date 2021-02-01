import Head from "next/head";

import Nav from "../components/Nav";
import "../styles/global.css";

const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="favicon.svg" />
      </Head>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
