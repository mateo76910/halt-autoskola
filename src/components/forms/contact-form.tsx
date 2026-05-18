"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { TextField } from "@/components/ui/text-field";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm({
  subjectDefault = "",
}: {
  subjectDefault?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjectDefault);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-md border border-green-500 bg-green-500/10 p-6">
        <p className="font-bebas text-3xl text-white-500 uppercase">
          Hvala na poruci!
        </p>
        <p className="mt-2 text-lg text-white-300">
          Javit ću ti se u najkraćem roku.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <TextField
        id="name"
        label="Ime i prezime"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        id="email"
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        id="subject"
        label="Predmet"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Textarea
        id="message"
        label="Poruka"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        required
      />
      <div className="mt-6">
        <Button
          type="submit"
          roundedIcon
          rightElement={<ArrowUpRight size={16} />}
        >
          Pošalji
        </Button>
      </div>
    </form>
  );
}
