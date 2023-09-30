"use server";

import { NextPage } from "next";

const Home: NextPage<any> = async () => {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
Homepage
      </main>
    </>
  );
};

export default Home;
