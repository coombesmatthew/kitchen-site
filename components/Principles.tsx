import { principles } from "@/content";

export default function Principles() {
  return (
    <section className="py-32 md:py-40 px-8 md:px-16 border-t border-fg/10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-16">
        The non-negotiables
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {principles.map((p) => (
          <div key={p.label} className="max-w-xs">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-4">
              {p.label}
            </h3>
            <p className="font-sans text-fg/80 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
