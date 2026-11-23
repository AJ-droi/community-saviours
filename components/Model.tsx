import { model } from "@/content/site";
import Photo from "./Photo";
import { Label } from "./ui";

// Template's "How it works": image left, numbered steps joined by a dashed line.
export default function Model() {
  return (
    <section className="section" id="model">
      <div className="container">
        <div className="split-head">
          <div>
            <Label>{model.label}</Label>
            <h2 className="h2">{model.title}</h2>
          </div>
          <p className="muted">{model.intro}</p>
        </div>
        <div className="model">
          <Photo file={model.image} alt={model.imageAlt} size="600×720" className="model-photo reveal" />
          <ol className="steps">
            {model.stages.map((s) => (
              <li key={s.step} className="reveal">
                <span className="step-num">{s.step}</span>
                <h3>Stage {Number(s.step)}: {s.title}</h3>
                <p>{s.text}</p>
                <p className="outcome"><strong>Outcome:</strong> {s.outcome}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
