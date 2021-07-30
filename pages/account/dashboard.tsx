import { API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
export default function DashboardPage({ token }: any) {
  const router = useRouter();

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>My Information</h3>
    </div>
  );
}
