"use client";

import Link from "next/link";
import PricingComponent from "./pricingcards";

const Head: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-2 mb-14 z-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center text-center">
              <div className="space-y-10">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-zinc-100  to-zinc-500 ">
                  Revolutionize Your Development Experience
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                  Join us and take control of your website. Fast, secure, and
                  designed for modern life.
                </p>
              </div>

              <PricingComponent />
              <div className="w-full max-w-sm mx-auto">
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
