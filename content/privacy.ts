// Privacy Policy content for /privacy. Edit the wording here, not in app/privacy/page.tsx.
//
// DRAFT FOR CLIENT REVIEW. This is a plain-English starting point based on the ICO's
// "right to be informed" checklist (UK GDPR Articles 13–14). It is not legal advice: the client
// should have it checked before launch, and update it whenever the site starts collecting
// anything new (analytics, newsletter, embedded maps/videos, donations, etc.).
//
// Anything in [square brackets] is a placeholder. Company details (name, number, registered
// office, email) are pulled from content/site.ts so they only need filling in once.

export const privacy = {
  title: "Privacy Policy",
  // TODO: set when the policy is published, e.g. "1 December 2026"
  lastUpdated: "[Date]",
  intro:
    "This policy explains how Community Saviours CIC collects and uses personal information through this website, and the rights you have over that information. We keep it short and only collect what we need.",
  // TODO: confirm with the client how long website enquiries are kept.
  retention: "12 months",
  // TODO: name of the hosting provider once chosen (e.g. "Vercel Inc." or "Netlify Inc.").
  host: "[Website hosting provider]",

  sections: [
    {
      id: "what-we-collect",
      title: "What information we collect",
      paragraphs: [
        "When you send us a message through the contact form, we collect the details you give us: your name, email address, organisation (if you provide it), the subject you choose and your message.",
        "If you email or phone us directly, we collect the information you choose to share in that conversation.",
        "Like most websites, our hosting provider automatically records basic technical information when you visit, such as your IP address, browser type and the pages requested. This is used to keep the site running securely. Our contact form also briefly holds your IP address in memory to stop spam (no more than a few messages every ten minutes); this is not stored.",
      ],
    },
    {
      id: "how-we-use",
      title: "How we use your information and our lawful basis",
      list: [
        "To reply to your enquiry and discuss partnerships, programmes, funding or volunteering. Our lawful basis is legitimate interests: responding to people who contact us. Where you are asking about working with us, it may also be steps taken at your request before entering into an agreement.",
        "To send you an automatic confirmation that we received your message, with a copy of what you sent.",
        "To keep the website secure and prevent misuse. Our lawful basis is legitimate interests.",
      ],
      paragraphs: [
        "We will not add you to a mailing list or send you marketing unless you have clearly asked us to. We never sell your information.",
      ],
    },
    {
      id: "sharing",
      title: "Who we share it with",
      paragraphs: [
        "We only share your information with service providers who help us run this website and reply to you, and only as far as they need it. They act on our instructions and must keep it secure:",
      ],
      list: [
        "Resend, which delivers contact form messages to our inbox.",
        "[Email provider, e.g. Google Workspace or Microsoft 365], which hosts our email inbox.",
        "{host}, which hosts this website.",
      ],
      after: [
        "Some of these providers may process information outside the UK. Where they do, we make sure appropriate safeguards are in place, such as UK adequacy regulations or the UK International Data Transfer Agreement or Addendum.",
        "We may also disclose information if the law requires it.",
      ],
    },
    {
      id: "retention",
      title: "How long we keep it",
      paragraphs: [
        "We keep website enquiries for up to {retention} after our last contact with you, then delete them, unless the enquiry leads to an ongoing working relationship, in which case we keep what is needed for that relationship. Server logs are kept by our hosting provider for a short period in line with their own policies.",
      ],
    },
    {
      id: "security",
      title: "Keeping it secure",
      paragraphs: [
        "This website uses an encrypted (HTTPS) connection. Access to messages is limited to the people at Community Saviours CIC who need it to reply to you.",
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      paragraphs: ["Under UK data protection law you have the right to:"],
      list: [
        "ask for a copy of the information we hold about you;",
        "ask us to correct information that is wrong or incomplete;",
        "ask us to delete your information;",
        "ask us to restrict how we use it, or object to us using it;",
        "ask us to transfer information you gave us to another organisation, where this applies.",
      ],
      after: [
        "To use any of these rights, contact us using the details below. You do not usually need to pay a fee, and we will respond within one month.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      paragraphs: [
        "This website does not use cookies or similar tracking technologies, and we do not use analytics or advertising tools. Our fonts are stored on our own site, so visiting it does not send your information to third-party font services.",
        "If we ever add features that use cookies (such as visitor statistics or embedded maps or videos), we will update this policy and, where the law requires it, ask for your consent first.",
      ],
    },
    {
      id: "programmes",
      title: "Programme participants",
      paragraphs: [
        "This policy covers this website only. People who take part in our programmes, including in prisons, schools and community settings, receive separate privacy information explaining how we and the host organisation use their information.",
      ],
    },
    {
      id: "complaints",
      title: "Questions and complaints",
      paragraphs: [
        "If you have a question or concern about how we handle your information, please contact us first and we will do our best to help.",
        "You also have the right to complain to the Information Commissioner’s Office (ICO), the UK’s data protection regulator: visit ico.org.uk/make-a-complaint or call 0303 123 1113.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The date at the top shows when it was last changed.",
      ],
    },
  ] as {
    id: string;
    title: string;
    paragraphs?: string[];
    list?: string[];
    after?: string[];
  }[],
};
