"use server";

import { NextPage } from "next";

import Head from "@/components/home/head";
import HotLinks from "@/components/home/hotlinks";
import HomeBackDrop from "@/components/home/backdrop";

const Home: NextPage<any> = async () => {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <Head />
        <HomeBackDrop />
        <HotLinks />
      </main>
    </>
  );
};

export default Home;
