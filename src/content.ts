/**
 * All site copy lives here. Edit text, prices and links in this file —
 * components read from it and contain no hard-coded copy.
 */
import {
  BadgeCheck,
  Brain,
  ClipboardList,
  Clock,
  EyeOff,
  Laptop,
  Leaf,
  Lock,
  Pause,
  RefreshCw,
  ShieldCheck,
  Stethoscope,
  Target,
  Truck,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export type Highlighted = { title: string; italic?: string }
export type IconText = { icon: LucideIcon; label: string }

/* -------------------------------------------------------------------------- */
/* Site                                                                       */
/* -------------------------------------------------------------------------- */

export const site = {
  brand: 'modafinil',
  domain: 'TryModafinil',
  /** Where every "Get Started" button points. */
  getStartedHref: '/pills',
  /** Replace with your intake / checkout URL. The selected plan id is appended as ?plan= */
  checkoutHref: '#checkout',
  rating: '4.9',
  reviewCount: '1,284',
  fromPrice: '$69/mo',
}

export const announcements = [
  'Review within 24h',
  'Free discreet shipping on every order',
  'Full refund if you are not prescribed',
  'Licensed U.S. providers · Review within 24h',
]

export const nav: Array<{ label: string; href: string; badge?: string }> = [
  { label: 'The Formula', href: '/#formula' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Gum', href: '/gum', badge: 'SOON' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'FAQ', href: '/#faq' },
]

export const ctaLabel = 'Get Started'

export const trustRow: IconText[] = [
  { icon: ShieldCheck, label: 'Licensed U.S. providers' },
  { icon: Truck, label: 'Free discreet shipping' },
  { icon: Lock, label: 'Secure & private' },
]

export const stickyCta = {
  title: 'Modafinil Pills',
  titleSuffix: 'Up to 12 hours of focus',
  meta: `${site.rating} · From ${site.fromPrice} · Free shipping`,
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

export const footer = {
  tagline: 'More focus. More of your day. Prescription modafinil, delivered.',
  newsletter: {
    title: 'Get 10% off your first order',
    placeholder: 'Email address',
    button: 'Sign up',
    success: "You're in. Check your inbox for your code.",
  },
  columns: [
    {
      title: 'Treatments',
      links: [
        { label: 'Modafinil Pills', href: '/pills' },
        { label: 'Modafinil Gum (soon)', href: '/gum' },
        { label: 'All Treatments', href: '/#treatments' },
      ],
    },
    {
      title: 'Learn',
      links: [
        { label: 'The Formula', href: '/#formula' },
        { label: 'How It Works', href: '/#how-it-works' },
        { label: 'Our Story', href: '/our-story' },
        { label: 'FAQ', href: '/#faq' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-of-service' },
        { label: 'Shipping Policy', href: '/shipping-policy' },
        { label: 'Refund Policy', href: '/refund-policy' },
        { label: 'Telehealth Consent', href: '/telehealth-consent' },
      ],
    },
  ],
  seals: [
    { icon: Stethoscope, label: 'Dispensed by licensed U.S. pharmacies' },
    { icon: BadgeCheck, label: 'Licensed U.S. providers' },
    { icon: Lock, label: 'HIPAA-compliant & secure' },
  ] as IconText[],
  legitScript: 'LEGITSCRIPT SEAL',
  disclaimer:
    'Modafinil is a prescription medication and a Schedule IV controlled substance. It is only available after an online consultation with a licensed U.S. healthcare provider, who determines whether a prescription is appropriate. Prescriptions are not guaranteed. Medication is dispensed by licensed U.S. pharmacies. Modafinil is FDA-approved to improve wakefulness in adults with excessive sleepiness associated with narcolepsy, obstructive sleep apnea or shift work disorder; any other use is off-label at the discretion of your provider. Individual results may vary. This website does not provide medical advice; always talk to a healthcare provider about your health. These statements about L-theanine have not been evaluated by the Food and Drug Administration.',
  copyright: '© 2026 TryModafinil. All rights reserved.',
}

/* -------------------------------------------------------------------------- */
/* Home                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  badge: '🇺🇸 Prescribed online by licensed U.S. providers',
  title: 'More Focus.',
  italic: 'More of Your Day.',
  subtitle:
    'Prescription modafinil with L-theanine for up to 12 hours of steady, crash-free focus. Online consult in 5 minutes.',
  chips: ['No caffeine', 'No jitters', 'Up to 12 hours', 'Ships in 24h if prescribed'],
  stats: [
    { value: 'Up to 12h', label: 'of sustained focus' },
    { value: '5 min', label: 'online consultation' },
    { value: '24h', label: 'provider review' },
    { value: '$0', label: 'discreet shipping' },
  ],
}

export const whatIs = {
  eyebrow: 'What is modafinil?',
  title: 'The focus medication',
  italic: 'doctors trust.',
  body: "Modafinil is an FDA-approved, prescription wakefulness-promoting medication, prescribed since 1998. Unlike caffeine, it doesn't spike and crash. It helps you stay alert, clear and on task for up to 10 to 12 hours.",
  link: { label: 'Explore the formula', href: '/pills' },
  cards: [
    {
      eyebrow: 'The Engine',
      title: 'Modafinil',
      icon: Zap,
      tag: 'Rx',
      body: 'A prescription wakefulness-promoting agent that supports sustained alertness and focus, without the spike-and-crash of stimulants like caffeine.',
      dark: true,
    },
    {
      eyebrow: 'The Smoother',
      title: 'L-Theanine',
      icon: Leaf,
      tag: 'Amino acid',
      body: 'A calming amino acid naturally found in green tea. It promotes relaxed alertness, helping keep your focus smooth, steady and jitter-free.',
      dark: false,
    },
  ],
}

export const treatments = {
  eyebrow: 'Our treatments',
  title: 'Start your focus routine.',
  aside: 'Clinically guided, prescribed online, delivered to your door if approved.',
  pills: {
    badge: 'BESTSELLER',
    name: 'Modafinil Pills',
    tagline: 'Up to 12 hours of clear, steady focus.',
    bullets: ['Up to 12 hours of alertness', 'Modafinil + L-theanine blend', 'No caffeine, no crash'],
    priceLead: 'Starting at',
    price: '$69/mo',
    priceNote: 'Consult + medication if prescribed',
    primary: 'Get Started',
    secondary: 'Learn More',
  },
  gum: {
    badge: 'COMING SOON',
    status: 'Launching soon',
    name: 'Modafinil Gum',
    tagline: 'Rx focus you can chew. Coming soon.',
    bullets: ['Chew-and-go, no water needed', 'Clean mint flavor', 'Prescribed by licensed providers'],
    cta: 'Join the Waitlist',
  },
}

export const science = {
  eyebrow: 'The science',
  title: 'Steady focus.',
  italic: 'Not another caffeine spike.',
  body: 'Caffeine delivers a quick jolt, then a crash, then another cup. Modafinil works differently, supporting the brain’s own wakefulness pathways for smooth, sustained alertness that carries you through the workday.',
  chart: {
    title: 'Alertness throughout the day',
    legendModafinil: 'Modafinil',
    legendCoffee: 'Coffee',
    yLabel: 'Alertness',
    note: 'Illustrative only, not clinical outcome data.',
  },
  table: {
    title: 'How it compares',
    columns: ['Modafinil', 'Coffee', 'Energy drinks'],
    rows: [
      { label: 'Hours of focus', values: ['Up to 12', '2–4', '2–4'] },
      { label: 'No afternoon crash', values: [true, false, false] },
      { label: 'No jitters', values: [true, false, false] },
      { label: 'Zero sugar', values: [true, true, false] },
      { label: 'Reviewed by a licensed provider', values: [true, false, false] },
    ] as Array<{ label: string; values: Array<string | boolean> }>,
  },
}

export const benefits = [
  { icon: Clock, title: 'Up to 12 hours', body: 'Sustained alertness that lasts your whole workday.' },
  { icon: Target, title: 'Sharper focus', body: 'Lock into deep work and stay on task for longer.' },
  { icon: Brain, title: 'Mental clarity', body: 'Think clearly and make decisions with less fog.' },
  { icon: Zap, title: 'No caffeine crash', body: 'Smooth from morning to evening, no 3PM slump.' },
]

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'A simple, secure process.',
  body: '100% online. No waiting rooms, no pharmacy lines.',
  steps: [
    {
      icon: ClipboardList,
      title: 'Choose your plan',
      body: 'Pick a 1, 3 or 6-month supply. You only pay for medication if you are prescribed.',
    },
    {
      icon: Laptop,
      title: 'Complete a quick consult',
      body: 'Answer a 5-minute online health questionnaire from any device. No video call required.',
    },
    {
      icon: Stethoscope,
      title: 'Provider review',
      body: 'A licensed U.S. provider reviews your consult within 24 hours and messages you with any questions.',
    },
    {
      icon: Truck,
      title: 'Ships to your door',
      body: 'If prescribed, your medication ships free in discreet packaging from a licensed U.S. pharmacy.',
    },
  ],
}

export const reviews = {
  eyebrow: 'Real people. Real results.',
  title: 'What our patients say.',
  summaryLabel: `from ${site.reviewCount} reviews`,
  note: 'Sample reviews for layout. Replace with verified patient reviews.',
  items: [
    {
      title: 'Finally, focus without the crash.',
      body: 'I used to live on three cold brews a day. Now I get through long coding sessions without the jitters or the 3PM wall. The consult took five minutes.',
      name: 'Daniel R.',
      role: 'Software engineer, 34',
    },
    {
      title: 'A game changer for long shifts.',
      body: 'My provider walked me through everything and answered every question. I feel clear-headed and steady on long shifts, not wired.',
      name: 'Priya S.',
      role: 'ER nurse, 29',
    },
    {
      title: 'Clear, calm and on task.',
      body: 'Running a company means 12-hour days. This keeps me sharp through back-to-back meetings, and I still sleep fine when I take it early.',
      name: 'Marcus T.',
      role: 'Founder, 41',
    },
    {
      title: 'Studying feels doable again.',
      body: 'Bar prep was brutal. Being able to sit down and actually focus for hours made a huge difference. Shipping was fast and discreet.',
      name: 'Jessica L.',
      role: 'Law student, 26',
    },
  ],
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Common questions.',
  body: 'Still unsure? Our care team is here to help, 7 days a week.',
  contact: { label: 'Contact our care team', href: '/contact' },
  items: [
    {
      q: 'What is modafinil?',
      a: 'Modafinil is an FDA-approved prescription medication that promotes wakefulness. It is approved to treat excessive sleepiness associated with narcolepsy, obstructive sleep apnea and shift work disorder, and has been prescribed in the U.S. since 1998. Our formula pairs it with L-theanine for smoother, steadier focus.',
    },
    {
      q: 'Do I need a prescription?',
      a: 'Yes. Modafinil is a prescription-only medication. You complete a short online consultation, and a licensed U.S. provider reviews your health history to decide whether it is appropriate for you. If you are not prescribed, you get a full refund.',
    },
    {
      q: 'What are the possible side effects?',
      a: 'The most common side effects are headache, nausea, nervousness, trouble sleeping and dizziness. Rare but serious reactions, including severe skin rash, can occur. Your provider reviews your history, medications and risks with you before prescribing. Stop taking it and get medical help right away if you have a serious reaction.',
    },
    {
      q: 'How quickly does it work?',
      a: 'Most people notice the effects within 30 to 60 minutes, with alertness lasting up to 10 to 12 hours. Take it in the morning so it does not interfere with your sleep.',
    },
    {
      q: 'Can I cancel or pause my plan?',
      a: 'Yes. You can pause, change or cancel your plan anytime from your account. No fees, no long-term commitment.',
    },
    {
      q: 'How is my order shipped?',
      a: 'Prescribed orders are filled by a licensed U.S. pharmacy and ship free in plain, discreet packaging, usually within 24 hours of approval.',
    },
    {
      q: 'Is my information secure?',
      a: 'Yes. Your consultation and health records are encrypted and handled in line with HIPAA. We never sell your personal or medical information.',
    },
  ],
}

export const finalCta = {
  title: 'Take control of',
  italic: 'your productivity.',
  body: 'Start your 5-minute online consultation and see if prescription modafinil is right for you.',
}

/* -------------------------------------------------------------------------- */
/* Product page (/pills)                                                      */
/* -------------------------------------------------------------------------- */

export type Plan = {
  id: string
  name: string
  perMonth: string
  save?: string
  total: number
  compareAt?: number
  badge?: string
}

export const pillsPage = {
  breadcrumb: 'Modafinil Pills',
  badge: 'BESTSELLER',
  title: 'Modafinil Pills',
  subtitle: 'Up to 12 hours of clear, steady focus.',
  description:
    'Prescription modafinil paired with L-theanine in one easy morning tablet. Clinically guided, prescribed online by licensed U.S. providers and shipped free if approved.',
  checklist: [
    'Up to 12 hours of alertness',
    'Modafinil + L-theanine blend',
    'No caffeine, no crash',
    'Online consult in 5 minutes',
  ],
  galleryTabs: [
    { id: 'product', label: 'Product' },
    { id: 'duration', label: 'Duration' },
    { id: 'provider', label: 'Provider' },
  ],
  durationPanel: {
    value: 'Up to 12h',
    label: 'of steady focus from one morning tablet',
    timeline: ['8AM', '12PM', '4PM', '8PM'],
  },
  providerPanel: {
    title: 'Licensed U.S. provider',
    body: 'Every consult is reviewed by a licensed provider within 24 hours. Message your care team anytime.',
    points: ['Board-certified clinicians', 'Unlimited follow-up messaging', 'Dose adjustments as needed'],
  },
  supplyTitle: 'Choose your supply',
  plans: [
    { id: '1-month', name: '1-month supply', perMonth: '$89/mo', total: 89 },
    {
      id: '3-month',
      name: '3-month supply',
      perMonth: '$79/mo',
      save: 'Save $30',
      total: 237,
      compareAt: 267,
      badge: 'MOST POPULAR',
    },
    {
      id: '6-month',
      name: '6-month supply',
      perMonth: '$69/mo',
      save: 'Save $120',
      total: 414,
      compareAt: 534,
      badge: 'BEST VALUE',
    },
  ] as Plan[],
  defaultPlan: '3-month',
  ctaNote: 'Includes provider consultation. Medication ships only if prescribed.',
  guarantees: [
    { icon: RefreshCw, label: 'Full refund if not prescribed' },
    { icon: Truck, label: 'Free discreet shipping' },
    { icon: Pause, label: 'Pause or cancel anytime' },
  ] as IconText[],
  gumCard: {
    title: 'Coming soon: Modafinil Gum',
    body: 'Join the waitlist for first access',
    href: '/gum',
  },
  accordion: [
    {
      title: "What's inside",
      body: [
        'Each tablet combines prescription modafinil with L-theanine. Your provider determines the dose that is right for you.',
        'Modafinil (Rx): a wakefulness-promoting agent for sustained alertness and focus.',
        'L-Theanine: an amino acid from green tea that supports calm, relaxed focus.',
        'No caffeine. No sugar. No artificial colors.',
      ],
    },
    {
      title: 'How to take it',
      body: [
        'Take one tablet in the morning, with or without food, exactly as directed by your provider.',
        'Avoid taking it later in the day, as it may make it harder to fall asleep. Limit alcohol while taking modafinil.',
        'Message your care team anytime if you want to adjust your dose or have questions.',
      ],
    },
    {
      title: 'Safety information',
      body: [
        'Modafinil is a Schedule IV controlled substance and is not right for everyone. Tell your provider about any heart conditions, high blood pressure, mental health history, liver or kidney problems, pregnancy or breastfeeding, and every medication you take.',
        'Modafinil can make hormonal birth control less effective during use and for one month after stopping.',
        'Stop taking it and seek medical care right away if you develop a rash, hives, mouth sores, swelling, chest pain or trouble breathing.',
      ],
    },
  ],
  formulaLink: { lead: 'What is modafinil?', label: 'Explore the formula', href: '/#formula' },
}

/* -------------------------------------------------------------------------- */
/* Gum page (/gum)                                                            */
/* -------------------------------------------------------------------------- */

export const gumPage = {
  badge: 'COMING SOON',
  title: 'Modafinil Gum.',
  italic: 'Focus you can chew.',
  body: 'The same clinically guided modafinil, in a clean mint gum. Be the first to try it, and get early-access pricing.',
  form: {
    placeholder: 'Enter your email',
    button: 'Join the Waitlist',
    note: 'No spam. Just one email when it launches.',
    success: "You're on the list. We'll email you the moment it launches.",
  },
  why: {
    eyebrow: 'Why gum',
    title: 'Your focus routine,',
    italic: 'simplified.',
    cards: [
      {
        icon: Zap,
        title: 'Chew-and-go',
        body: 'No water, no swallowing tablets. Just chew and get on with your day.',
      },
      {
        icon: EyeOff,
        title: 'Discreet anywhere',
        body: 'A clean mint gum that fits in your pocket, desk drawer or carry-on.',
      },
      {
        icon: Stethoscope,
        title: 'Same care model',
        body: 'Prescribed by licensed U.S. providers, with the same 5-minute online consult.',
      },
    ],
  },
  upsell: {
    eyebrow: 'Available now',
    title: "Can't wait? Start with the pills.",
    body: 'The same clinically guided modafinil, available today in one easy morning tablet.',
    price: 'From $69/mo',
  },
}

/* -------------------------------------------------------------------------- */
/* Simple content pages                                                       */
/* -------------------------------------------------------------------------- */

const legalPlaceholder =
  'This page is a placeholder. Replace it with the final, counsel-reviewed text before launch.'

export const infoPages: Record<string, { eyebrow: string; title: string; italic?: string; body: string[] }> = {
  'our-story': {
    eyebrow: 'Our story',
    title: 'Built for people who',
    italic: 'do a lot.',
    body: [
      'We started TryModafinil after years of watching friends, founders, nurses and students run on cold brew and energy drinks, riding the same spike and crash every single day.',
      'There was a better option, but getting it meant waiting weeks for an appointment. So we built a simpler path: a 5-minute online consult, a licensed U.S. provider who actually reviews your history, and a thoughtfully formulated tablet shipped free to your door if it is right for you.',
      'No waiting rooms. No pharmacy lines. Just more focus, and more of your day.',
    ],
  },
  contact: {
    eyebrow: 'Contact us',
    title: "We're here to",
    italic: 'help.',
    body: [
      'Our care team is available 7 days a week. Email support@trymodafinil.com and we will reply within one business day.',
      'Existing patients can message their provider anytime from their account.',
    ],
  },
  'privacy-policy': { eyebrow: 'Legal', title: 'Privacy Policy', body: [legalPlaceholder] },
  'terms-of-service': { eyebrow: 'Legal', title: 'Terms of Service', body: [legalPlaceholder] },
  'shipping-policy': { eyebrow: 'Legal', title: 'Shipping Policy', body: [legalPlaceholder] },
  'refund-policy': { eyebrow: 'Legal', title: 'Refund Policy', body: [legalPlaceholder] },
  'telehealth-consent': { eyebrow: 'Legal', title: 'Telehealth Consent', body: [legalPlaceholder] },
}
