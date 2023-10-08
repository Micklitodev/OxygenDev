"use client";

import Button from "@/components/ui/button";
import Auth from "@/utils/auth";
import { useEffect, useState } from "react";
import { useMutation } from "@/app/actions/mutation";
import { loadStripe } from "@stripe/stripe-js";
import { CREATE_CS } from "@/lib/fragments/mutations";

const stripeApiString: any = process.env.NEXT_PUBLIC_STRIPE_API;
const stripePromise = loadStripe(stripeApiString);

export default function PricingComponent() {
  const loggedIn = Auth.loggedIn();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (data) {
      stripePromise.then((res: any) => {
        res.redirectToCheckout({
          sessionId: data.props.serverRes.checkoutSess.session,
        });
      });
    }
  }, [data]);

  const handleGetStarted = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    loggedIn
      ? createCheckoutSession()
      : window.location.assign("/page/authentication/signup");
  };

  const createCheckoutSession = async () => {
    const VARS = {
      pkg: "65230d5f90cc79034ff814af",
    };
    const data = await useMutation(CREATE_CS, VARS);
    if (data) {
      setData(data);
    }
  };
  return (
    <>
      <section className=" w-full py-8 from-zinc-900 to-zinc-800 flex items-center justify-center text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col p-6 bg-zinc-850 shadow-lg rounded-lg justify-between border border-purple-500">
              <div>
                <h3 className="text-2xl font-bold text-center">Basic</h3>
                <div className="mt-4 text-center text-zinc-500">
                  <span className="text-4xl font-bold">$29</span>/ month
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    720p Video Rendering
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    2GB Cloud Storage
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Basic Video Templates
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button
                  onClick={handleGetStarted}
                  className="w-full bg-black text-white"
                >
                  Get Started
                </Button>
              </div>
            </div>

            <div className="relative flex flex-col p-6 bg-zinc-850 shadow-lg rounded-lg justify-between border border-purple-500">
              <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Popular
              </div>
              <div>
                <h3 className="text-2xl font-bold text-center">Pro</h3>
                <div className="mt-4 text-center text-zinc-500">
                  <span className="text-4xl font-bold">$59</span>/ month
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    1080p Video Rendering
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    10GB Cloud Storage
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Premium Video Templates
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Collaboration Tools
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button
                  onClick={handleGetStarted}
                  className="w-full text-white bg-gradient-to-r from-pink-500 to-purple-500"
                >
                  Get Started
                </Button>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-zinc-850 shadow-lg rounded-lg justify-between border border-purple-500">
              <div>
                <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                <div className="mt-4 text-center text-zinc-500">
                  <span className="text-4xl font-bold">$99</span>/ month
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    4K Video Rendering
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Unlimited Cloud Storage
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Custom Video Templates
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Advanced Collaboration Tools
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Dedicated Support
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button
                  className="w-full bg-black text-white"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
