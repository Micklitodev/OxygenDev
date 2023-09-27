'use server';

import { NextPage } from "next";
import { serverActions } from "./actions/queryEngine";
import { Recipes } from "@/lib/types";

import Head from "@/components/home/head";
import HotLinks from "@/components/home/hotlinks";
import HomeBackDrop from "@/components/home/backdrop";

import { GET_RECIPES } from "@/lib/fragments/queries";

const Home: NextPage<any> = async () => {
  const data = await serverActions(GET_RECIPES);
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <div>{data?.recipe.map((item: Recipes) => item.name)}</div>
        <Head />
        <HomeBackDrop />
        <HotLinks />
      </main>
    </>
  );
};

export default Home;
