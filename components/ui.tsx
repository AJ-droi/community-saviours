import { site } from "@/content/site";

// Small shared building blocks used across sections.

/** Pill label with a dot, as used above every section title in the template. */
export function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`label${light ? " label-light" : ""}`}>{children}</span>;
}

/** Button with the template's square arrow chip on the right. */
export function ArrowButton({ href, children, variant = "light" }: { href: string; children: React.ReactNode; variant?: "light" | "dark" | "accent" }) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      <span>{children}</span>
      <span className="btn-chip" aria-hidden="true">
        <svg viewBox="0 0 16 16" width="12" height="12"><path d="M4 12 12 4M6 4h6v6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
    </a>
  );
}

/** Placeholder logo mark (sound-wave inside a circle) + wordmark. TODO: replace with the client's logo. */
export function Logo({ light = false, withText = true }: { light?: boolean; withText?: boolean }) {
  return (
    <span className={`logo${light ? " logo-light" : ""}`}>
      <svg className="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="20" />
        {[9, 14, 19, 24, 29].map((x, i) => {
          const h = [8, 16, 22, 14, 8][i];
          return <rect key={x} x={x - 1.5} y={20 - h / 2} width="3" height={h} rx="1.5" />;
        })}
      </svg>
      {withText && (
        <span className="logo-text">
          Community Saviours<small>CIC</small>
        </span>
      )}
      <span className="sr-only">{site.name}</span>
    </span>
  );
}

export function Check() {
  return (
    <svg className="check" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
