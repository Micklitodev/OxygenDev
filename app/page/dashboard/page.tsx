import DashboardMain from "@/components/dashboard/main";
import Auth from "../../../utils/auth";
import { redirect } from "next/navigation";

export default function Dashboard() {
  // Auth.loggedIn() ? null : redirect("/page/authentication/login");
  return (
    <>
      <DashboardMain />
    </>
  );
}
