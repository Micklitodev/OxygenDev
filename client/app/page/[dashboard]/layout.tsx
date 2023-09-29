import { Suspense } from "react";
import DashboardNavbar from "@/components/layout/dashboard/navbar";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="flex h-screen overflow-hidden">
        <DashboardNavbar />
        <main className="flex-1 bg-dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white p-6">
        {children}
        </main>
      </div>
    </Suspense>
  );
}
