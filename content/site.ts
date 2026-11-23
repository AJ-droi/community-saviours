// ALL the copy and links for the site. Edit text here, not in the components.
// Wording is taken from the Community Saviours CIC company profile (see copy.md).

export const site = {
  name: "Community Saviours CIC",
  shortName: "Community Saviours",
  tagline: "Transforming Lives. Building Skills. Creating New Pathways.",
  pillars: ["Music", "Rehabilitation", "Prevention", "Reintegration", "Skills", "Community"],
  meta: {
    title: "Community Saviours CIC | Transforming Lives Through Music, Creativity and Opportunity",
    description:
      "Community Saviours CIC uses the power of music and creativity to help people rebuild confidence, develop skills and create positive pathways for the future.",
  },
  // TODO: fill these in. Empty values are hidden on the page or show a [placeholder].
  email: "", // e.g. "hello@communitysaviours.org"
  phone: "",
  address: "", // registered / correspondence address
  companyNumber: "", // CIC company number for the footer
  socials: [] as { label: string; href: string }[], // e.g. { label: "Instagram", href: "https://instagram.com/..." }
  nav: [
    { label: "About", href: "#about" },
    { label: "What We Do", href: "#programmes" },
    { label: "Our Model", href: "#model" },
    { label: "Impact", href: "#impact" },
  ],
  cta: { label: "Partner With Us", href: "#contact" },
};

export const hero = {
  eyebrow: "Music · Rehabilitation · Community",
  title: "Transforming Lives Through Music, Creativity and Opportunity",
  text: "Community Saviours CIC uses the power of music and creativity to help people rebuild confidence, develop skills and create positive pathways for the future.",
  cta: { label: "Partner With Us", href: "#contact" },
  secondary: { label: "Explore Our Programmes", href: "#programmes" },
};

export const about = {
  label: "Who We Are",
  lead: "Community Saviours CIC is a community-focused organisation established to use music and creative arts as tools for rehabilitation, prevention, personal development, and social reintegration.",
  side: "We believe that creativity has the power to unlock potential, restore confidence, develop discipline, and create meaningful pathways towards education, employment, entrepreneurship, and positive participation in society.",
  // Factual counts taken from the profile (no invented statistics).
  facts: [
    { value: "4", label: "Key programme areas" },
    { value: "4", label: "Stage development pathway" },
  ],
  body: [
    "Our programmes are designed primarily to support individuals affected by the criminal justice system, including people in custodial settings and those preparing to reintegrate into society. We also work preventatively with at-risk young people, marginalised communities, individuals experiencing social exclusion, and people participating in rehabilitation and recovery programmes.",
    "Through structured music and creative development programmes, we provide participants with opportunities to discover their abilities, develop practical skills, build confidence, and explore positive futures.",
    "Community Saviours CIC operates for community benefit and not for private profit. Any surplus generated through our activities will be reinvested into the organisation to support and expand our social impact.",
  ],
  approachTitle: "Our Approach",
  approach: [
    { title: "Creativity", text: "We believe every individual has creative potential. Music provides a powerful and accessible platform for expression, learning and development." },
    { title: "Empowerment", text: "We aim to help participants recognise their strengths and develop the confidence to pursue positive opportunities." },
    { title: "Opportunity", text: "We believe that sustainable change requires access to meaningful opportunities, skills and progression pathways." },
    { title: "Inclusion", text: "Our programmes aim to be accessible and responsive to people from diverse backgrounds and life experiences." },
    { title: "Transformation", text: "We are committed to supporting positive personal development and contributing to stronger communities." },
  ],
};

export const vision = {
  label: "Our Vision",
  title: "To create safer, stronger and more inclusive communities by transforming lives through music, creativity, skills development, rehabilitation and opportunity.",
  text: "We envision a society where individuals affected by imprisonment, disadvantage, exclusion, or challenging life circumstances are given meaningful opportunities to rebuild their confidence, develop their potential, and contribute positively to their communities.",
};

export const mission = {
  label: "Our Mission",
  title: "Our mission is to use music, creativity, mentoring and vocational development to support rehabilitation, prevent social exclusion, and create pathways towards positive reintegration.",
  aimsTitle: "We aim to:",
  aims: [
    "Deliver meaningful music and creative programmes within prisons and custodial settings.",
    "Support individuals transitioning from custody back into the community.",
    "Provide creative, emotional and personal development opportunities.",
    "Build confidence, discipline, communication and teamwork skills.",
    "Develop practical and vocational skills connected to the creative and music industries.",
    "Support at-risk young people through preventative and early-intervention programmes.",
    "Reduce social exclusion and encourage positive community participation.",
    "Create progression pathways into education, employment, entrepreneurship and creative careers.",
    "Build partnerships with prisons, rehabilitation organisations, schools, community groups and other stakeholders.",
  ],
  purposeTitle: "Our Purpose",
  purpose:
    "Community Saviours CIC exists to demonstrate that creativity can be a powerful vehicle for personal transformation and social change.",
};

export const programmes = {
  label: "What We Do",
  title: "Programmes Across Four Key Areas",
  intro: "Community Saviours CIC delivers programmes across four key areas.",
  items: [
    {
      tag: "Rehabilitation",
      title: "Music-Based Rehabilitation",
      image: "programme-rehabilitation.jpg",
      alt: "Participants in a group music session",
      text: "We deliver structured creative and music programmes within appropriate custodial, rehabilitation and community settings.",
      listTitle: "Programmes may include",
      list: ["Songwriting", "Music production", "Vocal development", "Musical performance", "Creative collaboration", "Recording projects", "Group music-making", "Artist and creative development"],
    },
    {
      tag: "Reintegration",
      title: "Reintegration and Progression",
      image: "programme-reintegration.jpg",
      alt: "A mentor and participant planning next steps",
      text: "For individuals preparing to return to the community, our programmes aim to support positive progression. Our long-term ambition is to help participants move from participation to progression.",
      listTitle: "Pathways through",
      list: ["Creative mentoring", "Personal development", "Skills development", "Portfolio creation", "Progression planning", "Signposting to education and training", "Connections with community organisations and relevant partners"],
    },
    {
      tag: "Prevention",
      title: "Prevention and Youth Development",
      image: "programme-youth.jpg",
      alt: "Young people at a creative workshop",
      text: "We work with young people and communities where early intervention and positive opportunities can help prevent social exclusion and disengagement.",
      listTitle: "Activities focus on",
      list: ["Confidence-building", "Creative expression", "Teamwork", "Communication", "Leadership", "Positive identity", "Personal responsibility", "Creative and employable skills"],
    },
    {
      tag: "Skills",
      title: "Creative Skills and Vocational Development",
      image: "programme-skills.jpg",
      alt: "A participant learning music production on a laptop",
      text: "The purpose is not simply to teach participants how to create music. We aim to help them develop transferable skills that can be applied across education, employment, enterprise and community life.",
      listTitle: "Training may include",
      list: ["Songwriting", "Music production", "Creative entrepreneurship", "Introduction to the music industry", "Music business fundamentals", "Personal branding", "Digital marketing", "Portfolio development"],
    },
  ],
};

export const model = {
  label: "Our Programme Model",
  title: "A Structured Development Pathway",
  intro: "Community Saviours CIC can deliver programmes through a structured development pathway.",
  image: "programme-model.jpg",
  imageAlt: "Participants recording in a studio",
  stages: [
    { step: "01", title: "Engage", text: "We create accessible and inclusive creative activities that encourage participants to engage positively.", outcome: "Participants begin to build trust, confidence and willingness to participate." },
    { step: "02", title: "Develop", text: "Participants are supported to develop creative, personal and transferable skills.", outcome: "Participants develop greater confidence and practical abilities." },
    { step: "03", title: "Empower", text: "Participants are encouraged to identify their strengths, interests and future goals.", outcome: "Participants gain a stronger sense of identity, purpose and direction." },
    { step: "04", title: "Progress", text: "Where appropriate, participants are supported towards further opportunities.", outcome: "Participants are better equipped to take positive next steps." },
  ],
};

export const support = {
  label: "Who We Support",
  title: "Opportunities for Those Who Need Them Most",
  text: "By supporting individuals to develop confidence, skills and positive progression opportunities, we aim to contribute towards stronger and more inclusive communities.",
  image: "who-we-support.jpg",
  imageAlt: "Community members taking part in a workshop",
  primaryTitle: "Primary Beneficiaries",
  primary: [
    { title: "In Custody", text: "Individuals in prisons and custodial settings." },
    { title: "Leaving Custody", text: "People transitioning from custody into the community." },
    { title: "Rehabilitation", text: "Individuals involved with rehabilitation programmes." },
    { title: "Social Inclusion", text: "People experiencing social exclusion and marginalisation." },
    { title: "Young People", text: "At-risk young people." },
    { title: "Opportunity", text: "Individuals facing barriers to education, employment or personal development." },
  ],
  secondaryTitle: "Our work can also positively benefit",
  secondary: ["Families", "Local communities", "Employers and training providers", "Community organisations", "Schools and youth services", "Rehabilitation partners", "Wider society"],
};

export const impact = {
  label: "Our Social Impact",
  title: "Positive and Measurable Social Impact",
  intro: "Community Saviours CIC aims to create positive and measurable social impact.",
  groups: [
    { title: "Individual Impact", list: ["Increased confidence", "Improved self-expression", "Development of practical skills", "Improved communication", "Greater motivation", "Increased sense of purpose", "Improved teamwork and collaboration"] },
    { title: "Community Impact", list: ["Increased community participation", "Reduced social exclusion", "Greater access to positive opportunities", "Improved community cohesion", "Development of local creative talent"] },
    { title: "Long-Term Impact", list: ["Positive reintegration", "Increased employability", "Improved access to education and training", "Greater social inclusion", "Reduced disengagement", "Prevention and early intervention"] },
  ],
  measureTitle: "How We Measure Impact",
  measureText: "Community Saviours CIC aims to monitor and evaluate its programmes to understand their impact and continually improve delivery.",
  measures: ["Participants engaged", "Attendance and completion", "Participant feedback", "Confidence and self-belief", "Skills developed", "Progression into education or training", "Employment or volunteering outcomes", "Creative outputs and portfolios", "Partner and stakeholder feedback"],
};

// TODO: replace with real testimonials/case studies once collected (never invent these).
export const testimonials = {
  label: "Testimonials",
  title: "Voices from Our Community",
  tabs: [
    { tab: "Participant", quote: "[Add participant testimonial]", name: "[Name]", role: "Programme participant", image: "testimonial-participant.jpg" },
    { tab: "Partner", quote: "[Add partner testimonial]", name: "[Name]", role: "[Partner organisation]", image: "testimonial-partner.jpg" },
    { tab: "Facilitator", quote: "[Add facilitator or mentor testimonial]", name: "[Name]", role: "Facilitator", image: "testimonial-facilitator.jpg" },
  ],
};

export const delivery = {
  label: "Where & How We Deliver",
  title: "Programmes Adapted to Every Setting",
  settingsTitle: "Delivery settings",
  settings: ["Prisons", "Custodial environments", "Rehabilitation facilities", "Community centres", "Schools", "Youth clubs", "Alternative education settings", "Faith and community organisations", "Recovery and rehabilitation programmes"],
  formatsTitle: "Programme formats",
  formats: ["One-off workshops", "Short-term projects", "Multi-week programmes", "Long-term development programmes", "Creative showcases", "Skills development courses", "Mentoring programmes"],
  partnersTitle: "Partnership Working",
  partnersText: "Community Saviours CIC recognises that meaningful social impact is achieved through collaboration. We aim to develop partnerships with:",
  partners: ["Prisons and custodial institutions", "Criminal justice and rehabilitation organisations", "Local authorities", "Schools and educational providers", "Youth organisations", "Community organisations", "Arts and cultural organisations", "Employers and training providers", "Faith and voluntary sector organisations"],
};

export const values = {
  label: "Our Values",
  title: "What Guides Our Work",
  items: [
    { title: "Creativity", text: "We encourage imagination, artistic expression and innovative thinking." },
    { title: "Inclusion", text: "We believe that everyone should have access to opportunities to learn, develop and participate." },
    { title: "Empowerment", text: "We support people to recognise their strengths and take positive steps towards their future." },
    { title: "Integrity", text: "We are committed to ethical practice, accountability and professionalism." },
    { title: "Collaboration", text: "We believe meaningful change is strengthened through partnership and shared expertise." },
    { title: "Transformation", text: "We believe individuals and communities can experience positive change when given the right support and opportunities." },
    { title: "Excellence", text: "We are committed to delivering high-quality programmes that create meaningful experiences and measurable impact." },
  ],
};

export const governance = {
  label: "Governance & Safeguarding",
  items: [
    {
      title: "Governance and Accountability",
      text: "Community Saviours CIC will be governed by a board of directors who share responsibility for ensuring that the organisation operates effectively, ethically and in accordance with its community purpose.",
      list: ["Strategic direction", "Financial accountability", "Legal and regulatory compliance", "Safeguarding", "Risk management", "Programme quality", "Social impact", "Community benefit"],
    },
    {
      title: "Safeguarding and Ethical Practice",
      text: "The organisation is committed to creating safe, respectful and inclusive environments for participants, staff, volunteers and partners. Where activities involve vulnerable adults, young people or custodial environments, delivery will be undertaken in accordance with relevant safeguarding requirements and host organisation procedures.",
      list: ["Safeguarding", "Health and safety", "Equality, diversity and inclusion", "Data protection", "Risk management", "Professional boundaries", "Complaints and concerns", "Financial controls"],
    },
  ],
  ambitionTitle: "Our Long-Term Ambition",
  ambitionText: "Our ambition is to establish Community Saviours CIC as a recognised organisation delivering high-quality music-based rehabilitation, prevention and reintegration programmes.",
  ambition: [
    "Develop structured programmes that can be delivered across multiple locations.",
    "Build strong partnerships within criminal justice, education and community sectors.",
    "Create progression pathways for participants.",
    "Develop a network of skilled facilitators and mentors.",
    "Build a strong evidence base demonstrating the impact of creative rehabilitation.",
    "Expand preventative work with young people and marginalised communities.",
  ],
};

export const callout = {
  title: "Rehabilitation is not simply about addressing the past.",
  subtitle: "It is about creating opportunities for a different future.",
  text: "Through music, creativity, mentoring and skills development, we aim to support individuals to discover their potential, develop practical abilities and take meaningful steps towards positive participation in society.",
  cta: { label: "Get Involved", href: "#contact" },
  image: "cta-band.jpg",
};

export const contact = {
  label: "Get In Touch",
  title: "Let’s Work Together",
  text: "Whether you represent a prison, school, youth service, rehabilitation provider, funder or community group, we would love to hear from you.",
  mapLabel: "Map / location image",
  form: {
    title: "Send us a message",
    button: "Submit",
    confirmation: "Thank you. Your message has been sent and we will be in touch soon.",
    error: "Sorry, your message couldn't be sent right now. Please try again later.",
    to: "", // TODO: inbox for form messages (or set CONTACT_TO)
    interests: [
      { value: "partnership", label: "Partnership" },
      { value: "custodial", label: "Prison / custodial programme" },
      { value: "youth", label: "Schools & youth programme" },
      { value: "funding", label: "Funding or sponsorship" },
      { value: "volunteer", label: "Volunteering or mentoring" },
      { value: "other", label: "Something else" },
    ],
  },
};
