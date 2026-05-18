"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle, ArrowUpRight, Loader2 } from "lucide-react";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import {
  getSupabaseBrowserClient,
  isSupabaseEnabled,
} from "@/lib/supabase/client";

type Mode = "signIn" | "signUp";

export function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const supabaseConfigured = isSupabaseEnabled();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setError("Supabase nije konfiguriran. Dodaj .env.local i pokušaj ponovno.");
      return;
    }
    setLoading(true);
    if (mode === "signIn") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) return setError(error.message);
      router.push("/profil");
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      setLoading(false);
      if (error) return setError(error.message);
      setInfo("Provjeri email za potvrdu računa.");
    }
  };

  return (
    <div className="max-w-md">
      {!supabaseConfigured && (
        <div className="mb-6 flex gap-3 rounded-md border border-fireOragne-500/40 bg-fireOragne-500/10 p-4 text-fireOragne-400 text-md">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-white-500">Supabase nije spojen</p>
            <p className="mt-1 text-md">
              Postavi <code className="font-nunito">NEXT_PUBLIC_SUPABASE_URL</code> i{" "}
              <code className="font-nunito">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> u{" "}
              <code className="font-nunito">.env.local</code>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={submit} className="flex flex-col gap-3">
        <TextField
          id="auth-email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        <TextField
          id="auth-password"
          label="Lozinka"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={mode === "signIn" ? "current-password" : "new-password"}
          required
        />

        {error && <p className="text-md text-fireOragne-400">{error}</p>}
        {info && <p className="text-md text-green-500">{info}</p>}

        <div className="mt-6">
          <Button
            type="submit"
            roundedIcon
            rightElement={
              loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <ArrowUpRight size={16} />
              )
            }
            disabled={loading}
          >
            {mode === "signIn" ? "Prijavi se" : "Registriraj se"}
          </Button>
        </div>
      </form>

      <p className="mt-8 text-md text-white-300">
        {mode === "signIn" ? (
          <>
            Nemaš račun?{" "}
            <Link href="/registracija" className="text-green-500 hover:underline">
              Registriraj se
            </Link>
          </>
        ) : (
          <>
            Već imaš račun?{" "}
            <Link href="/prijava" className="text-green-500 hover:underline">
              Prijavi se
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
