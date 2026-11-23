import { contact, site } from "@/content/site";
import ContactForm from "./ContactForm";
import Photo from "./Photo";
import { Label } from "./ui";

// Template's contact block: map image + dark details card on the left, form on the right.
export default function Contact() {
  const details = [
    { k: "Email", v: site.email, href: site.email ? `mailto:${site.email}` : undefined, ph: "[Add email]" },
    { k: "Phone", v: site.phone, href: site.phone ? `tel:${site.phone.replace(/\s/g, "")}` : undefined, ph: "[Add phone]" },
  ];
  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div className="contact-left">
          <Photo file="map.jpg" alt={contact.mapLabel} size="800×520" className="map reveal" />
          <div className="info-card reveal">
            <div className="info-row">
              {details.map((d) => (
                <div key={d.k}>
                  <span>{d.k}</span>
                  {d.v && d.href ? <a href={d.href}>{d.v}</a> : <p>{d.ph}</p>}
                </div>
              ))}
            </div>
            <div>
              <span>Address</span>
              <p>{site.address || "[Add address]"}</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <Label>{contact.label}</Label>
          <h2 className="h2">{contact.title}</h2>
          <p className="muted">{contact.text}</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
