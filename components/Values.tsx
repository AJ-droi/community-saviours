import { values } from "@/content/site";
import { Label } from "./ui";

export default function Values() {
  return (
    <section className="section" id="values">
      <div className="container">
        <div className="head-center">
          <Label>{values.label}</Label>
          <h2 className="h2">{values.title}</h2>
        </div>
        <ul className="values">
          {values.items.map((v, i) => (
            <li key={v.title} className="reveal">
              <span className="value-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
