"use client";

import { useState } from "react";
import { testimonials } from "@/content/site";
import { Label } from "./ui";

// Template's tabbed testimonial block. All entries are placeholders until real quotes are supplied.
// `photos` is resolved on the server (page.tsx) so this client component doesn't touch the filesystem.
export default function Testimonials({ photos }: { photos: (string | null)[] }) {
  const [i, setI] = useState(0);
  const t = testimonials.tabs[i];
  const n = testimonials.tabs.length;
  const src = photos[i];

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="head-center">
          <Label>{testimonials.label}</Label>
          <h2 className="h2">{testimonials.title}</h2>
          <div className="tabs" role="tablist" aria-label="Testimonial type">
            {testimonials.tabs.map((tab, k) => (
              <button
                key={tab.tab}
                role="tab"
                id={`t-tab-${k}`}
                aria-selected={k === i}
                aria-controls="t-panel"
                className={k === i ? "active" : ""}
                onClick={() => setI(k)}
              >
                {tab.tab}
              </button>
            ))}
          </div>
        </div>
        <div className="testi" role="tabpanel" id="t-panel" aria-labelledby={`t-tab-${i}`}>
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="photo testi-photo" src={src} alt={t.name} />
          ) : (
            <div className="photo ph testi-photo" role="img" aria-label={`Photo placeholder: ${t.role}`}>
              <em>[{t.role} photo]<br />{t.image} · 600×600</em>
            </div>
          )}
          <div className="testi-body">
            <blockquote>“{t.quote}”</blockquote>
            <div className="testi-foot">
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
              <div className="testi-nav">
                <button aria-label="Previous testimonial" onClick={() => setI((i - 1 + n) % n)}>←</button>
                <button aria-label="Next testimonial" className="dark" onClick={() => setI((i + 1) % n)}>→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
