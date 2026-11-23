import { mission, vision } from "@/content/site";
import Photo from "./Photo";
import { Check, Label } from "./ui";

// Template's image cards with text over a dark gradient, used for Vision and Purpose,
// followed by the Mission statement and aims.
export default function VisionMission() {
  return (
    <section className="section section-tight" id="vision">
      <div className="container">
        <div className="vm-cards">
          <article className="overlay-card reveal">
            <Photo file="vision.jpg" alt="Community gathered at a creative showcase" size="1200×800" />
            <div className="overlay-text">
              <Label light>{vision.label}</Label>
              <h3>{vision.title}</h3>
              <p>{vision.text}</p>
            </div>
          </article>
          <article className="overlay-card overlay-card-sm reveal">
            <Photo file="purpose.jpg" alt="Participant writing lyrics" size="800×800" />
            <div className="overlay-text">
              <Label light>{mission.purposeTitle}</Label>
              <h3>{mission.purpose}</h3>
            </div>
          </article>
        </div>

        <div className="mission reveal">
          <div>
            <Label>{mission.label}</Label>
            <p className="mission-title">{mission.title}</p>
          </div>
          <div>
            <p className="prog-list-title">{mission.aimsTitle}</p>
            <ul className="ticks ticks-lg">
              {mission.aims.map((a) => <li key={a}><Check />{a}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
