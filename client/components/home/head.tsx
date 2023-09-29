"use client";

import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";
import { useQuery } from "@/app/actions/query";
import { useState } from "react";
import { GET_RECIPES } from "@/lib/fragments/queries";

const Head: React.FC = (): JSX.Element => {
  const [formData, setFromData] = useState({ email: "" });

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      console.log("hit");
      const { props }: any = await useQuery(GET_RECIPES);
      console.log(props.serverRes);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeEvt = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFromData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-2 mb-14 z-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-10">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-zinc-100  to-zinc-500 ">
                  Revolutionize Your Development Experience
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                  Join us and take control of your website. Fast, secure, and
                  designed for modern life.
                </p>
              </div>
              <br />
              <div className="w-full max-w-sm space-y-4 mx-auto">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-gray-800 text-white border-gray-900"
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    onChange={handleChangeEvt}
                  />
                  <Button className="bg-white text-black" onClick={handleClick}>
                    Join Now
                  </Button>
                </form>
                <p className="text-xs text-zinc-200 dark:text-zinc-100">
                  Get ready to redefine your email experience.
                  <Link
                    className="underline underline-offset-2 text-white"
                    href="#"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
