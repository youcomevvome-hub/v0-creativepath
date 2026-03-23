export const services: Record<string, { title: string; description: string }> = {
  "wes-support": {
    title: "WES Evaluation Support",
    description: "We pay between 100% to 25% of WES evaluation fees for your credential assessment.",
  },
  "gre-support": {
    title: "GRE / ETS Fee Support",
    description: "We cover full or partial GRE testing fees to help you prepare for graduate school.",
  },
  "application-fee-support": {
    title: "Application Fee Support",
    description: "Financial help for university application fees across multiple institutions.",
  },
  "initial-deposit-support": {
    title: "Initial Deposit Support",
    description: "We support your first enrollment deposit to secure your admission offer.",
  },
  "english-test-support": {
    title: "English Test Fee Support",
    description: "Support for IELTS, TOEFL, and Duolingo English test fees.",
  },
  "sevis-fee-support": {
    title: "SEVIS Fee Support",
    description: "Help with U.S. SEVIS immigration fee required for your student visa.",
  },
  "visa-fee-support": {
    title: "Visa Application Fee Support",
    description: "Support for visa application costs to study in your destination country.",
  },
  "tuition-fee-support": {
    title: "Tuition Fee Support",
    description: "Partial scholarship assistance to help cover your tuition costs.",
  },
  "transcript-support": {
    title: "Transcript Evaluation Support",
    description: "Support for transcript verification and evaluation services.",
  },
  "college-board-support": {
    title: "College Board Fee Support",
    description: "Support for SAT and related College Board services.",
  },
  "mentorship-program": {
    title: "Mentorship Program",
    description: "Personalized academic guidance from experienced scholars and mentors.",
  },
  "enrollment-deposit-support": {
    title: "Enrollment Deposit Support",
    description: "Financial help for confirming your admission and securing your spot.",
  },
}

export function getServiceBySlug(slug: string) {
  return services[slug] || null
}

export function getAllServiceSlugs() {
  return Object.keys(services)
}
