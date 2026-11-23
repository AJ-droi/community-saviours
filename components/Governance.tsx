import { governance } from "@/content/site";
import { Check, Label } from "./ui";

export default function Governance() {
  return (
    <section className="section section-tight" id="governance">
      <div className="container">
        <Label>{governance.label}</Label>
        <div className="gov-grid">
          {governance.items.map((g) => (
            <div key={g.title} className="gov reveal">
              <h3>{g.title}</h3>
              <p className="muted">{g.text}</p>
              <ul className="ticks ticks-2">
                {g.list.map((l) => <li key={l}><Check />{l}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="ambition reveal">
          <div>
            <h3>{governance.ambitionTitle}</h3>
            <p className="muted">{governance.ambitionText}</p>
          </div>
          <ol>
            {governance.ambition.map((a) => <li key={a}>{a}</li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
