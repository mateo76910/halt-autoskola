"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export default function LogoutPage() {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const supabase = getSupabaseBrowserClient();
      if (supabase) await supabase.auth.signOut();
      router.push("/");
    })();
  }, [router]);
  return (
    <Container>
      <p className="py-20 text-white-300">Odjavljujem te…</p>
    </Container>
  );
}
