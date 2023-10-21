"use client";

import DashboardMain from "@/components/dashboard/main";
import Auth from "../../../utils/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function Dashboard() {
  const logged = Auth.loggedIn();
  logged ? null : redirect("/page/authentication/login");
  return (
    <>
      <Suspense>
        <DashboardMain />
      </Suspense>
    </>
  );
}
