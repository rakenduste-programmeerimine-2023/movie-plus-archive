import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Main from "@/layout/Main";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div>
      {isSupabaseConnected && <AuthButton />}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
