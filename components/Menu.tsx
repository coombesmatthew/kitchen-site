import Image from "next/image";
import { menu } from "@/content";

// When dropping a new JPG into /public/menu/, add its path here to switch
// from the placeholder SVG to the real image. Keep paths in sync with the
// `image` field on each item in content.ts.
const KNOWN_IMAGES = new Set<string>([]);

export default function Menu() {
  return (
    <section id="menu" className="py-32 md:py-40 px-8 md:px-16 border-t border-fg/10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-16">
        The menu
      </p>
      {menu.map((category) => (
        <div key={category.category} className="mb-24 last:mb-0">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 tracking-tight">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {category.items.map((item) => {
              const hasRealImage = !!item.image && KNOWN_IMAGES.has(item.image);
              return (
                <article key={item.no} className="flex flex-col">
                  <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-fg/5">
                    {hasRealImage ? (
                      <Image
                        src={item.image!}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src="/menu/placeholder.svg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                      No. {item.no}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-3 tracking-tight">
                    {item.name}
                  </h3>
                  <p className="font-sans text-muted leading-relaxed mb-6 max-w-sm">
                    {item.description}
                  </p>
                  <div className="mt-auto flex items-baseline justify-between pt-4 border-t border-fg/10">
                    <span className="font-mono text-xs text-muted">
                      {item.protein}g · {item.kcal} kcal
                    </span>
                    <span className="font-mono text-xs text-fg">{item.price}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
