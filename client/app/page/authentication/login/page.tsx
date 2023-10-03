import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import LoginForm from "@/components/authentication/login";

const Login: NextPage<any> = async () => {
  return (
    <>
      <div className="container relative bg-zinc-900  hidden h-[720px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/page/authentication/signup"
          className="absolute right-4 top-4 md:right-8 md:top-8"
        >
          Create Account
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <Image
            className="absolute inset-0 h-[720px] min-w-[100%] "
            src="/anodizedPlanet.jpeg"
            alt="anodized planet"
            width={700}
            height={900}
          />

          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Our features are designed to enhance your productivity and
                streamline your workflow.
              </p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome Back
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to acess your account
              </p>
            </div>
            <LoginForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
