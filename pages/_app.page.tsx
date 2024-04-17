import Head from "next/head";
import Layout from "../components/layout";
import "./global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>machine streams</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
