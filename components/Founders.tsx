import { founders } from "@/content";

export default function Founders() {
  return (
    <section className="py-32 md:py-40 px-8 md:px-16 border-t border-fg/10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-16">
        Founders
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {founders.map((f) => (
          <div key={f.name} className="max-w-md">
            <h3 className="font-serif text-3xl md:text-4xl mb-3 tracking-tight">
              {f.name}
            </h3>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-6">
              {f.role}
            </p>
            <p className="font-sans text-fg/80 leading-relaxed">{f.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
