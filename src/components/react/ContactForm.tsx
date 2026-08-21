import { useState } from "react";
import { Loader2 } from "lucide-react";
import { SERVICES } from "@data/content";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Aqui você conectaria a uma API / webhook / WhatsApp
    setTimeout(() => {
      alert("Solicitação enviada! Entraremos em contato em breve.");
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-neutral-600 mb-1.5">
            Nome completo *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Seu nome"
            autoComplete="name"
            className="w-full border border-sand-200 rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-600 mb-1.5">
            WhatsApp / Telefone *
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="(11) 9 0000-0000"
            autoComplete="tel"
            className="w-full border border-sand-200 rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-1.5">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          placeholder="seuemail@exemplo.com"
          autoComplete="email"
          className="w-full border border-sand-200 rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-1.5">
          Tratamento de interesse
        </label>
        <select
          name="service"
          className="w-full border border-sand-200 rounded-xl px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors bg-white"
        >
          <option value="">Selecione um tratamento</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="outro">Outro / Avaliação geral</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-1.5">
          Mensagem adicional
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Conte-nos um pouco sobre o que você precisa..."
          className="w-full border border-sand-200 rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-teal-700 hover:bg-teal-800 disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-teal-700/20 text-sm flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Solicitar agendamento grátis"
        )}
      </button>

      <p className="text-xs text-center text-neutral-400">
        Ao enviar, você concorda com nossa{" "}
        <a href="/privacidade" className="underline hover:text-teal-700">
          política de privacidade
        </a>
        . Sem spam.
      </p>
    </form>
  );
}