import type { Metadata } from "next";
import { privacy } from "@/content/privacy";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${privacy.title} | ${site.name}`,
  description: `How ${site.name} collects and uses personal information through this website.`,
};

const fill = (s: string) => s.replace("{host}", privacy.host).replace("{retention}", privacy.retention);

// Turns the ICO complaint address into a link; everything else is plain text.
function Text({ children }: { children: string }) {
  const t = fill(children);
  const ico = "ico.org.uk/make-a-complaint";
  const i = t.indexOf(ico);
  if (i === -1) return <>{t}</>;
  return (
    <>
      {t.slice(0, i)}
      <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">{ico}</a>
      {t.slice(i + ico.length)}
    </>
  );
}

export default function PrivacyPage() {
  const email = site.email;
  const who = [
    { k: "Organisation", v: site.legalName },
    { k: "Company number", v: site.companyNumber || "[Company number]" },
    { k: "Registered in", v: site.registeredIn },
    { k: "Registered office", v: site.registeredOffice || "[Registered office address]" },
  ];

  return (
    <article className="legal">
      <div className="container legal-inner">
        <header className="legal-head">
          <span className="label">Legal</span>
          <h1>{privacy.title}</h1>
          <p className="legal-date">Last updated: {privacy.lastUpdated}</p>
          <p className="legal-intro">{privacy.intro}</p>
        </header>

        <div className="legal-layout">
          <nav className="legal-toc" aria-label="On this page">
            <p>On this page</p>
            <ol>
              <li><a href="#who-we-are">Who we are</a></li>
              {privacy.sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}
            </ol>
          </nav>

          <div className="legal-body">
            <section id="who-we-are">
              <h2>Who we are</h2>
              <p>
                {site.legalName} is responsible for the personal information collected through this website (we are the
                “controller”). You can contact us about anything in this policy at{" "}
                {email ? <a href={`mailto:${email}`}>{email}</a> : "[privacy contact email]"}.
              </p>
              <dl className="legal-dl">
                {who.map((w) => (
                  <div key={w.k}>
                    <dt>{w.k}</dt>
                    <dd>{w.v}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {privacy.sections.map((s) => (
              <section key={s.id} id={s.id}>
                <h2>{s.title}</h2>
                {s.paragraphs?.map((p) => <p key={p.slice(0, 24)}><Text>{p}</Text></p>)}
                {s.list && (
                  <ul>
                    {s.list.map((l) => <li key={l.slice(0, 24)}><Text>{l}</Text></li>)}
                  </ul>
                )}
                {s.after?.map((p) => <p key={p.slice(0, 24)}><Text>{p}</Text></p>)}
              </section>
            ))}

            <p className="legal-back"><a href="/">← Back to the homepage</a></p>
          </div>
        </div>
      </div>
    </article>
  );
}
