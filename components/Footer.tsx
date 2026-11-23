import { programmes, site } from "@/content/site";
import { ArrowButton, Logo } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light />
            <p className="footer-tag">{site.tagline}</p>
            <ArrowButton href={site.cta.href}>{site.cta.label}</ArrowButton>
          </div>
          <div className="footer-cols">
            <div>
              <h2>Explore</h2>
              <ul>
                {site.nav.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
                <li><a href="/#values">Our Values</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h2>Programmes</h2>
              <ul>
                {programmes.items.map((p) => <li key={p.title}><a href="/#programmes">{p.title}</a></li>)}
              </ul>
            </div>
            <div>
              <h2>Contact</h2>
              <ul>
                <li>{site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : "[Add email]"}</li>
                <li>{site.phone || "[Add phone]"}</li>
                <li>{site.address || "[Add address]"}</li>
              </ul>
              <ul className="socials">
                {site.socials.length
                  ? site.socials.map((s) => <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)
                  : <li>[Add social links]</li>}
              </ul>
            </div>
          </div>
        </div>
        <p className="footer-pillars" aria-label="What we stand for">
          {site.pillars.map((p, i) => (
            <span key={p}>{p}{i < site.pillars.length - 1 && <i aria-hidden="true"> | </i>}</span>
          ))}
        </p>
        <div className="footer-bottom">
          <p>© {year} {site.name}. Operating for community benefit, not for private profit.</p>
          <p><a href="/privacy">Privacy Policy</a></p>
        </div>
        {/* Legally required company details (Names and Trading Disclosures Regulations 2015) */}
        <p className="footer-legal">
          {site.legalName} is a community interest company registered in {site.registeredIn}, company number{" "}
          {site.companyNumber || "[Company number]"}. Registered office: {site.registeredOffice || "[Registered office address]"}.
        </p>
      </div>
    </footer>
  );
}
