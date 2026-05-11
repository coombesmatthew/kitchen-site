"use client";

import { footer } from "@/content";

export default function Footer() {
  return (
    <footer className="px-8 md:px-16 pt-16 pb-24 border-t border-fg/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="max-w-md">
          <h3 className="font-serif text-2xl md:text-3xl mb-4 tracking-tight">
            {footer.newsletter.heading}
          </h3>
          <p className="font-sans text-muted leading-relaxed mb-6 text-sm">
            {footer.newsletter.body}
          </p>
          <form className="flex gap-3 items-stretch" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={footer.newsletter.placeholder}
              className="flex-1 bg-transparent border-b border-fg/30 px-0 py-3 font-mono text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              aria-label="Email"
            />
            <button
              type="submit"
              className="font-mono text-xs uppercase tracking-[0.25em] text-accent hover:underline underline-offset-8"
            >
              {footer.newsletter.cta}
            </button>
          </form>
        </div>
        <div className="md:text-right flex flex-col md:items-end justify-between gap-8">
          <a
            href="https://instagram.com/kitchen.london"
            className="font-mono text-sm text-fg hover:text-accent transition-colors"
          >
            {footer.social.instagram}
          </a>
          <p className="font-mono text-xs text-muted uppercase tracking-[0.2em]">
            {footer.note}
          </p>
        </div>
      </div>
    </footer>
  );
}
