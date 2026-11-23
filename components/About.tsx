import { about } from "@/content/site";
import Photo from "./Photo";
import { Label } from "./ui";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Label>{about.label}</Label>
        <div className="about-top">
          <h2 className="lead reveal">{about.lead}</h2>
          <div className="about-side reveal">
            <p>{about.side}</p>
            <div className="facts">
              {about.facts.map((f) => (
                <div key={f.label}>
                  <strong>{f.value}</strong>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Photo file="about-wide.jpg" alt="Group music workshop in session" size="1600×700" className="about-photo reveal" />

        <div className="about-body reveal">
          {about.body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
        </div>

        <h3 className="mini-title">{about.approachTitle}</h3>
        <ol className="approach">
          {about.approach.map((a, i) => (
            <li key={a.title} className="reveal">
              <h4><span>{String(i + 1).padStart(2, "0")}.</span> {a.title}</h4>
              <p>{a.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
