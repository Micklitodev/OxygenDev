"use server";

import { NextPage } from "next";

import Head from "@/components/home/head";
import HotLinks from "@/components/home/hotlinks";
import HomeBackDrop from "@/components/home/backdrop";
import Pricing from "@/components/home/pricing";
import HomeAbout from "@/components/home/about";

const Home: NextPage<any> = async () => {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <Head />
        <br /> <br /> <br /> <br />
        <HomeBackDrop />
        <br /> <br /> <br /> <br />
        <HotLinks />
        <Pricing />
        <HomeAbout />
      </main>
    </>
  );
};

export default Home;
