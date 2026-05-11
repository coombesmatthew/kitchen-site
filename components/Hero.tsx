import { brand } from "@/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-8 md:px-16 pb-24 pt-16">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-8">
        {brand.mark}
      </div>
      <h1
        className="font-serif font-medium uppercase leading-[0.85] text-fg"
        style={{
          letterSpacing: "-0.04em",
          fontSize: "clamp(4rem, 22vw, 22rem)",
        }}
      >
        KITCHEN
      </h1>
      <p className="mt-12 max-w-xl text-lg md:text-xl text-fg/80 font-sans leading-relaxed">
        {brand.tagline}
      </p>
      <a
        href="#menu"
        className="mt-12 inline-block font-mono text-xs uppercase tracking-[0.25em] text-accent hover:underline underline-offset-8 decoration-1"
      >
        See the menu →
      </a>
    </section>
  );
}
