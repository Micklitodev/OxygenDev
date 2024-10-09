"use server";

import AboutComponent from "@/app/components/about/about";
import { Suspense } from "react";

const About = () => {
  return (
    <Suspense>
      <div className="flex justify-center items-center h-screen mt-10 mb-20">
        <AboutComponent />
      </div>
    </Suspense>
  );
};

export default About;
