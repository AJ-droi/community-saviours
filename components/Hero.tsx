import { hero } from "@/content/site";
import Photo from "./Photo";
import { ArrowButton, Label } from "./ui";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Photo file="hero.jpg" alt="Participant performing or recording music" size="1920×1080" className="hero-bg" priority />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-inner">
        <Label light>{hero.eyebrow}</Label>
        <h1>{hero.title}</h1>
        <p>{hero.text}</p>
        <div className="hero-actions">
          <ArrowButton href={hero.cta.href}>{hero.cta.label}</ArrowButton>
          <a className="link-light" href={hero.secondary.href}>{hero.secondary.label} →</a>
        </div>
      </div>
    </section>
  );
}
