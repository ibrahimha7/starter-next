import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";
import Layout from "@/components/layout";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CookiesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CookiesProvider>
    </AuthProvider>
  );
}
export default MyApp;
