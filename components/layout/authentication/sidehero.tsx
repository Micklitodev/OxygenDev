import Image from "next/image";

export default function SideHero() {
  return (
    <>
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
    </>
  );
}
