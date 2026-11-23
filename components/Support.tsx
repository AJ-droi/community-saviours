import { support } from "@/content/site";
import Photo from "./Photo";
import { Label } from "./ui";

// Template's "Be the Change for These Causes": heading left, tall image centre, stacked cards right.
export default function Support() {
  return (
    <section className="section section-alt" id="support">
      <div className="container support">
        <div className="support-left">
          <Label>{support.label}</Label>
          <h2 className="h2">{support.title}</h2>
          <div className="support-secondary">
            <p className="prog-list-title">{support.secondaryTitle}</p>
            <ul className="chips">
              {support.secondary.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <p className="muted">{support.text}</p>
          </div>
        </div>
        <Photo file={support.image} alt={support.imageAlt} size="700×900" className="support-photo reveal" />
        <div className="support-cards">
          <p className="prog-list-title">{support.primaryTitle}</p>
          {support.primary.map((c) => (
            <div key={c.title} className="mini-card reveal">
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
