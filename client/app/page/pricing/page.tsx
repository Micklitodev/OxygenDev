"use server";

import { NextPage } from "next";
import Head from "@/components/pricing/head";
import HotLinks from "@/components/pricing/hotlinks";

const Pricing: NextPage<any> = async () => {
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

export default Pricing;
