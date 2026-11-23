import { callout } from "@/content/site";
import Photo from "./Photo";
import { ArrowButton } from "./ui";

// Template's "Your Action Can Change Lives" image banner.
export default function Callout() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="callout reveal">
          <Photo file={callout.image} alt="Participant smiling after a performance" size="1600×640" className="callout-bg" />
          <div className="callout-shade" aria-hidden="true" />
          <div className="callout-inner">
            <div>
              <h2>{callout.title}<br /><span>{callout.subtitle}</span></h2>
              <p>{callout.text}</p>
            </div>
            <ArrowButton href={callout.cta.href}>{callout.cta.label}</ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
