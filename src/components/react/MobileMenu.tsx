import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@data/content";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="p-2"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        {open ? (
          <X className="w-5 h-5 text-teal-900" />
        ) : (
          <Menu className="w-5 h-5 text-teal-900" />
        )}
      </button>

      {open && (
        <div className="absolute top-16 inset-x-0 bg-sand-50 border-t border-sand-200 px-6 py-4 flex flex-col gap-4 md:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-neutral-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center bg-teal-700 text-white text-sm font-medium px-5 py-3 rounded-full"
          >
            Agendar consulta
          </a>
        </div>
      )}
    </>
  );
}