import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@data/content";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-sand-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-medium text-[#1a1a1a] text-base leading-snug group-hover:text-teal-700 transition-colors">
          {q}
        </span>
        <span
          className={`shrink-0 mt-0.5 w-5 h-5 rounded-full border border-sand-200 flex items-center justify-center transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <Plus className="w-3 h-3 text-teal-700" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-neutral-600">{a}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-16">
        <div>
          <span className="text-xs font-medium tracking-widest uppercase text-teal-600">
            FAQ
          </span>
          <h2 className="font-display text-4xl text-teal-950 mt-3 leading-tight">
            Perguntas<br />frequentes
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed mt-4">
            Não encontrou sua dúvida? Entre em contato pelo WhatsApp ou telefone
            — respondemos em até 30 minutos.
          </p>
          <a
            href={`https://wa.me/${import.meta.env.PUBLIC_WHATSAPP || "5568999423231"}?text=Olá, vi seu site de exemplo odonto e gostaria de um orçamento!`}
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
        <div>
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}