import Image from "next/image";
import GradientAnimation from "../ui/gradientanimation";

export default async function HomeBackDrop() {
  return (
    <>
      <GradientAnimation />
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-purple-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-700/10 after:dark:from-sky-900 after:dark:via-[#9400D3]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/create2.svg"
          alt="Next.js Logo"
          width={200}
          height={40}
          priority
        />
      </div>
    </>
  );
}
