"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { Logo } from "./ui";

// Floating nav: logo left, white pill of links in the centre, CTA right (Givara layout).
// Turns solid once the page scrolls past the hero; collapses to a menu button on mobile.
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Only the home page has a dark hero behind the nav; other pages (e.g. /privacy) start solid.
  const pathname = usePathname();
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav${solid || open ? " nav-solid" : ""}`}>
      <div className="container nav-inner">
        <a href="/" className="nav-logo" aria-label={`${site.name} home`}>
          <Logo light={!(solid || open)} />
        </a>
        <nav aria-label="Main">
          <ul id="nav-menu" className={`nav-links${open ? " open" : ""}`}>
            {site.nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li className="nav-links-cta">
              <a href={site.cta.href} onClick={() => setOpen(false)}>{site.cta.label}</a>
            </li>
          </ul>
        </nav>
        <a className="nav-cta" href={site.cta.href}>{site.cta.label}</a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className={`burger${open ? " x" : ""}`}><i /><i /></span>
        </button>
      </div>
    </header>
  );
}
