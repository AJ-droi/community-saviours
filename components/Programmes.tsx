import { programmes } from "@/content/site";
import Photo from "./Photo";
import { Check, Label } from "./ui";

// "Upcoming Charity Events" card row from the template, used for the four programme areas.
export default function Programmes() {
  return (
    <section className="section" id="programmes">
      <div className="container">
        <div className="head-center">
          <Label>{programmes.label}</Label>
          <h2 className="h2">{programmes.title}</h2>
          <p className="muted">{programmes.intro}</p>
        </div>
        <div className="prog-grid">
          {programmes.items.map((p, i) => (
            <article key={p.title} className="prog-card reveal">
              <div className="prog-media">
                <Photo file={p.image} alt={p.alt} size="800×560" />
                <span className="tag">{p.tag}</span>
              </div>
              <div className="prog-body">
                <span className="prog-num">{String.fromCharCode(65 + i)}.</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <p className="prog-list-title">{p.listTitle}</p>
                <ul className="ticks">
                  {p.list.map((li) => <li key={li}><Check />{li}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
