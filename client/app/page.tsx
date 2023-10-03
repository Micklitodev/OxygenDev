"use server";

import { NextPage } from "next";
import Head from "@/components/home/head";
import HotLinks from "@/components/home/hotlinks";

const Home: NextPage<any> = async () => {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-20`}
      >
        <Head />
        <HotLinks />
      </main>
    </>
  );
};

export default Home;
