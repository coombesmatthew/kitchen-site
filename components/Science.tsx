import { science } from "@/content";

export default function Science() {
  return (
    <section className="py-32 md:py-40 px-8 md:px-16 border-t border-fg/10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-16">
        The science
      </p>
      <div className="max-w-[65ch]">
        <h2 className="font-serif text-4xl md:text-5xl mb-12 tracking-tight">
          {science.heading}
        </h2>
        <div className="space-y-6 font-sans text-fg/90 text-lg leading-relaxed">
          {science.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
