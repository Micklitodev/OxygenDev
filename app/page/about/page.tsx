'use server'

import AboutComponent from "@/components/about/about";

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen mt-10 mb-20">
      <AboutComponent />
    </div>
  );
};

export default About;