import { impact } from "@/content/site";
import { Check, Label } from "./ui";

export default function Impact() {
  return (
    <section className="section" id="impact">
      <div className="container">
        <div className="split-head">
          <div>
            <Label>{impact.label}</Label>
            <h2 className="h2">{impact.title}</h2>
          </div>
          <p className="muted">{impact.intro}</p>
        </div>
        <div className="impact-grid">
          {impact.groups.map((g, i) => (
            <div key={g.title} className={`impact-col reveal${i === 1 ? " impact-col-dark" : ""}`}>
              <h3>{g.title}</h3>
              <ul className="ticks">
                {g.list.map((l) => <li key={l}><Check />{l}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="measure reveal">
          <div>
            <h3>{impact.measureTitle}</h3>
            <p className="muted">{impact.measureText}</p>
          </div>
          <ul className="chips">
            {impact.measures.map((m) => <li key={m}>{m}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
