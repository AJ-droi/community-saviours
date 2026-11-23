import { delivery } from "@/content/site";
import { Label } from "./ui";

export default function Delivery() {
  return (
    <section className="section section-alt" id="delivery">
      <div className="container">
        <div className="split-head">
          <div>
            <Label>{delivery.label}</Label>
            <h2 className="h2">{delivery.title}</h2>
          </div>
        </div>
        <div className="delivery-grid">
          <div className="panel reveal">
            <h3>{delivery.settingsTitle}</h3>
            <ul className="chips">{delivery.settings.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div className="panel reveal">
            <h3>{delivery.formatsTitle}</h3>
            <ul className="chips">{delivery.formats.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div className="panel panel-dark reveal">
            <h3>{delivery.partnersTitle}</h3>
            <p>{delivery.partnersText}</p>
            <ul className="chips chips-dark">{delivery.partners.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
