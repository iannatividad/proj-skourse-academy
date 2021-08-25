import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import LandingPage from "../components/LandingPage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Skourse Academy</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navigation />
      <LandingPage />
    </div>
  );
};

export default Home;
