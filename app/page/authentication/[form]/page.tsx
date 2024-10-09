"use client";

import { NextPage } from "next";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LoginForm from "@/app/components/authentication/login";
import SignUpForm from "@/app/components/authentication/signup";
import { Suspense } from "react";

const Login: NextPage = () => {
  const pathname = usePathname();
  const routeId = pathname.includes("login");

  if (routeId) {
    return (
      <>
        <Link
          href="/page/authentication/signup"
          className="absolute right-4 top-4 md:right-8 md:top-8"
        >
          Create Account
        </Link>
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
            <Suspense>
              <LoginForm />
            </Suspense>
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
      </>
    );
  } else {
    return (
      <>
        <Link
          href="/page/authentication/login"
          className="absolute right-4 top-4 md:right-8 md:top-8"
        >
          Log In
        </Link>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create Account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <Suspense>
              <SignUpForm />
            </Suspense>
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
      </>
    );
  }
};

export default Login;
