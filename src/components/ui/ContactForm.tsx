"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="flex flex-col gap-8 py-16 border-t border-white/5">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-text-primary tracking-tight">
          Me contacter
        </h2>
        <p className="text-text-secondary">
          Une question, une opportunité ? Écris-moi directement.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-text-muted text-xs font-semibold uppercase tracking-widest">
              Nom
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Jean Dupont"
              required
              className="bg-white/[0.03] border border-white/10 focus:border-accent/50 rounded-lg px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-text-muted text-xs font-semibold uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="jean@exemple.fr"
              required
              className="bg-white/[0.03] border border-white/10 focus:border-accent/50 rounded-lg px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted outline-none transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-muted text-xs font-semibold uppercase tracking-widest">
            Message
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Bonjour Maxime, je souhaitais..."
            required
            rows={5}
            className="bg-white/[0.03] border border-white/10 focus:border-accent/50 rounded-lg px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted outline-none transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-accent hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors w-fit"
        >
          {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-sm">Message envoyé avec succès !</p>
        )}
        {status === "error" && (
          <p className="text-accent-soft text-sm">
            Une erreur est survenue. Réessaie plus tard.
          </p>
        )}
      </form>
    </section>
  );
}
