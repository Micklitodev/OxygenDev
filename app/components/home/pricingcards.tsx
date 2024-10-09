"use client";

import Button from "@/app/components/ui/button";
import Auth from "@/utils/auth";
import { query } from "@/app/actions/query";
import { GET_PKGS } from "@/lib/fragments/queries";
import { useEffect, useState } from "react";
import { mutate } from "@/app/actions/mutation";
import { loadStripe } from "@stripe/stripe-js";
import { CREATE_CS } from "@/lib/fragments/mutations";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API!);

const PricingComponent = (): JSX.Element => {
  const loggedIn = Auth.loggedIn();
  const [data, setData] = useState<any>(null);
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    if (response === null) {
      query(GET_PKGS).then((res) => {
        setResponse(res.props.serverRes.getPkg);
      });
    }
  }, [response]);

  useEffect(() => {
    if (data) {
      stripePromise.then((res: any) => {
        res.redirectToCheckout({
          sessionId: data.props.serverRes.checkoutSess.session,
        });
      });
    }
  }, [data]);

  const handleGetStarted = async (ID: string) => {
    if (!loggedIn) {
      return window.location.assign("/page/authentication/signup");
    }

    const VARS = {
      pkg: ID,
    };
    const data = await mutate(CREATE_CS, VARS);
    if (data) {
      setData(data);
    }
  };

  return (
    <>
      <section className=" w-full py-8 from-zinc-900 to-zinc-800 flex items-center justify-center text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
            {response?.map((pkg: any) => (
              <>
                <div
                  id={pkg._id}
                  className="relative flex flex-col p-6 bg-zinc-850 shadow-lg rounded-lg justify-between border border-purple-500"
                >
                  {pkg.popular ? (
                    <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      Popular
                    </div>
                  ) : null}
                  <div>
                    <h3 className="text-2xl font-bold text-center">
                      {pkg.name}
                    </h3>
                    <div className="mt-4 text-center text-zinc-500">
                      <span className="text-4xl font-bold">${pkg.price}</span>/
                      month
                    </div>

                    <ul className="mt-4 space-y-2">
                      {pkg.features.map((feat: any) => (
                        <li className="flex items-center" key={feat}>
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
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Button
                      onClick={() => handleGetStarted(pkg.id)}
                      className={
                        pkg.popular
                          ? `w-full text-white bg-gradient-to-r from-pink-500 to-purple-500`
                          : `w-full bg-black text-white`
                      }
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingComponent;
