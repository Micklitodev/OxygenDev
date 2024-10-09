import { Suspense } from "react";
import SideHero from "@/app/components/layout/authentication/sidehero";

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="container relative bg-zinc-900  hidden h-[720px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <SideHero />
        {children}
      </div>
    </Suspense>
  );
}
