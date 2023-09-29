import { NextPage } from "next";
import PricingComponent from "@/components/pricing/pricingcards"

const Pricing: NextPage<any> = async () => {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between`}
      >
        <PricingComponent /> 
      </main>
    </>
  );
};

export default Pricing;
