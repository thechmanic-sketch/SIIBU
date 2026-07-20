export const ARTIST_NAME = "SIIBU";

export const BIO_SHORT =
  "SIIBU moves between screen, stage, and studio — an actor and musician whose work traces the same thread through every medium: the space between control and vulnerability.";

export const BIO_LONG =
  "Raised between two coasts, SIIBU started performing before they could name what they were reaching for. A decade on, the throughline is unmistakable — restless, unhurried, always circling the same questions from a new angle. Feature films and short work sit alongside three studio albums and a growing body of visual art, each one a different way of asking the same thing.";

export const PAGE_INTROS = {
  film: "Selected screen work spanning feature films, shorts, and one very cold six weeks on the Atlantic coast.",
  press: "A running record of what's been written, said, and occasionally misquoted.",
  journal: "Unfiltered notes from the studio, the set, and everywhere in between.",
  faq: "The questions that land most often — booking, licensing, and the rest.",
} as const;

const PALETTE = [
  "from-terracotta via-umber-2 to-ink",
  "from-ochre via-clay to-ink",
  "from-clay via-umber-2 to-ink",
  "from-olive via-umber-2 to-ink",
  "from-umber-2 via-clay to-ink",
  "from-ochre via-terracotta to-clay",
] as const;

export function paletteFor(index: number) {
  return PALETTE[index % PALETTE.length];
}

export const SECTIONS = [
  { id: "hero", number: "01", label: "Cinematic Hero" },
  { id: "universe", number: "02", label: "Visual Universe" },
  { id: "music", number: "03", label: "Music Experience" },
  { id: "story", number: "04", label: "Story" },
  { id: "gallery", number: "05", label: "Art Gallery" },
  { id: "performances", number: "06", label: "Performances" },
  { id: "shop", number: "07", label: "Shop" },
  { id: "contact", number: "08", label: "Contact" },
] as const;

export const NAV_ITEMS = [
  { href: "/music", number: "01", label: "Music Experience" },
  { href: "/story", number: "02", label: "Story" },
  { href: "/gallery", number: "03", label: "Art Gallery" },
  { href: "/performances", number: "04", label: "Performances" },
  { href: "/shop", number: "05", label: "Shop" },
  { href: "/film", number: "06", label: "Filmography" },
  { href: "/press", number: "07", label: "Press" },
  { href: "/journal", number: "08", label: "Journal" },
  { href: "/faq", number: "09", label: "FAQ" },
  { href: "/contact", number: "10", label: "Contact" },
] as const;

export const PAGE_HEROES = {
  music: {
    eyebrow: "Music Experience",
    title: "Discography",
    subtitle: "Three studio albums, one continuous conversation with sound.",
    palette: "from-clay via-umber-2 to-ink",
    align: "left" as const,
  },
  story: {
    eyebrow: "Story",
    title: "Biography",
    subtitle: "A decade moving between screen, stage, and studio.",
    palette: "from-umber-2 via-umber to-ink",
    align: "left" as const,
  },
  gallery: {
    eyebrow: "Art Gallery",
    title: "Visual Work",
    subtitle: "Paintings, photography, and design — the practice between takes.",
    palette: "from-clay via-umber-2 to-ink",
    align: "center" as const,
  },
  performances: {
    eyebrow: "Performances",
    title: "Tours & Events",
    subtitle: "On stage, on the road, city to city.",
    palette: "from-ochre via-clay to-ink",
    align: "left" as const,
  },
  shop: {
    eyebrow: "Shop",
    title: "Merchandise",
    subtitle: "Vinyl, apparel, and limited-run prints.",
    palette: "from-olive via-umber-2 to-ink",
    align: "left" as const,
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in Touch",
    subtitle: "Booking, press, or just to say hello.",
    palette: "from-ink via-umber to-umber-2",
    align: "center" as const,
  },
} as const;

export const FILMOGRAPHY = [
  { year: "2025", title: "Midnight Frequencies (Tour Film)", role: "Director / Lead", type: "Feature" },
  { year: "2024", title: "Undercurrent", role: "Supporting — Wren", type: "Feature Film" },
  { year: "2023", title: "Glass Horizon", role: "Lead — Mara", type: "Feature Film" },
  { year: "2023", title: "The Long Exhale", role: "Lead — Sam", type: "Short Film" },
  { year: "2022", title: "Afterglow", role: "Supporting — Dex", type: "Feature Film" },
  { year: "2021", title: "Static Bloom", role: "Lead — Iris", type: "Short Film" },
  { year: "2020", title: "Halflight", role: "Supporting — Noel", type: "Feature Film" },
  { year: "2019", title: "Corner Booth", role: "Lead — Ren", type: "Short Film" },
] as const;

export const PRESS_MENTIONS = [
  { outlet: "Rolling Stone", quote: "A singular voice bridging screen and sound.", year: "2025" },
  { outlet: "Pitchfork", quote: "Midnight Frequencies is a genre-defying triumph.", year: "2025" },
  { outlet: "The Wrap", quote: "Glass Horizon's breakout performance.", year: "2023" },
  { outlet: "IndieWire", quote: "Undercurrent's quiet standout.", year: "2024" },
  { outlet: "Variety", quote: "One to watch across every medium.", year: "2022" },
  { outlet: "NME", quote: "Glass Horizon reshaped what a debut album could sound like.", year: "2023" },
] as const;

export const JOURNAL_POSTS = [
  {
    slug: "studio-diary-midnight-frequencies",
    date: "2026-06-02",
    title: "Studio Diary: Making Midnight Frequencies",
    excerpt: "Three weeks locked in a converted warehouse, chasing the sound that became the album's spine.",
  },
  {
    slug: "on-set-undercurrent",
    date: "2026-03-18",
    title: "On Set: Undercurrent",
    excerpt: "Notes from a six-week shoot on the coast — cold water, early calls, and the scene that almost didn't make the cut.",
  },
  {
    slug: "why-i-paint-between-takes",
    date: "2025-11-09",
    title: "Why I Paint Between Takes",
    excerpt: "Painting started as a way to stay quiet on set. It's become its own practice entirely.",
  },
  {
    slug: "tour-postmortem-glass-horizon",
    date: "2025-08-21",
    title: "Tour Postmortem: Glass Horizon",
    excerpt: "40 cities, one broken amp, and everything I'd do differently next time.",
  },
] as const;

export const FAQS = [
  {
    question: "How do I book you for an event or performance?",
    answer: "Send booking inquiries to booking@siibu.com with your event date, location, and budget range. We typically respond within 5 business days.",
  },
  {
    question: "Can I license your music or artwork?",
    answer: "Yes — sync licensing and art licensing requests go through licensing@siibu.com. Include the project type, intended use, and territory.",
  },
  {
    question: "Do you take on acting roles outside of film?",
    answer: "We consider select television, theater, and voice work. Reach out via the contact form with the project details and casting timeline.",
  },
  {
    question: "Where can I buy merchandise?",
    answer: "All official merch is available in the Shop section on the homepage. Limited drops are announced first via the newsletter.",
  },
  {
    question: "Do you accept fan art or fan mail?",
    answer: "Always. Tag us on Instagram or send physical mail to the address listed on the Contact page.",
  },
] as const;

export const ALBUMS = [
  {
    id: "midnight-frequencies",
    title: "Midnight Frequencies",
    year: "2025",
    cover: "/albums/midnight-frequencies.jpg",
    tracks: [
      { title: "Afterglow", duration: "3:42", src: "/audio/afterglow.mp3" },
      { title: "Static Bloom", duration: "4:10", src: "/audio/static-bloom.mp3" },
      { title: "Halflight", duration: "3:28", src: "/audio/halflight.mp3" },
      { title: "Echo Chamber", duration: "5:01", src: "/audio/echo-chamber.mp3" },
    ],
  },
  {
    id: "glass-horizon",
    title: "Glass Horizon",
    year: "2023",
    cover: "/albums/glass-horizon.jpg",
    tracks: [
      { title: "Tidewalk", duration: "3:15", src: "/audio/tidewalk.mp3" },
      { title: "Neon Rain", duration: "4:44", src: "/audio/neon-rain.mp3" },
      { title: "Glass Horizon", duration: "3:59", src: "/audio/glass-horizon.mp3" },
    ],
  },
  {
    id: "corner-booth-ep",
    title: "Corner Booth EP",
    year: "2019",
    cover: "/albums/corner-booth.jpg",
    tracks: [
      { title: "Corner Booth", duration: "2:58", src: "/audio/corner-booth.mp3" },
      { title: "Late Checkout", duration: "3:33", src: "/audio/late-checkout.mp3" },
      { title: "Ren", duration: "3:04", src: "/audio/ren.mp3" },
    ],
  },
];

export const TIMELINE = [
  { year: "2016", title: "First Stage", copy: "Debut open-mic performance that started it all." },
  { year: "2018", title: "First EP", copy: "Released a self-produced 5-track EP from a bedroom studio." },
  { year: "2019", title: "Corner Booth", copy: "Debut EP and first lead film role, released the same month." },
  { year: "2020", title: "Screen Debut", copy: "First supporting role in an independent feature film." },
  { year: "2022", title: "Breakthrough Role", copy: "Lead role earned festival recognition and critical acclaim." },
  { year: "2023", title: "Glass Horizon", copy: "Sophomore album charted internationally." },
  { year: "2024", title: "Undercurrent", copy: "First coastal-shot feature, six weeks on location." },
  { year: "2025", title: "Midnight Frequencies", copy: "Third studio album paired with a world tour." },
] as const;

export const HEADSHOTS = [
  "/headshots/headshot-01.jpg",
  "/headshots/headshot-02.jpg",
  "/headshots/headshot-03.jpg",
  "/headshots/headshot-04.jpg",
  "/headshots/headshot-05.jpg",
  "/headshots/headshot-06.jpg",
  "/headshots/headshot-07.jpg",
] as const;

export const ARTWORKS = [
  { id: 1, title: "Afterglow I", category: "painting", image: "/art/afterglow-i.jpg" },
  { id: 2, title: "Static Bloom", category: "photography", image: "/art/static-bloom.jpg" },
  { id: 3, title: "Glass Horizon Poster", category: "design", image: "/art/glass-horizon-poster.jpg" },
  { id: 4, title: "Halflight", category: "painting", image: "/art/halflight.jpg" },
  { id: 5, title: "Echo Chamber", category: "photography", image: "/art/echo-chamber.jpg" },
  { id: 6, title: "Tidewalk Study", category: "design", image: "/art/tidewalk-study.jpg" },
  { id: 7, title: "Corner Booth", category: "painting", image: "/art/corner-booth.jpg" },
  { id: 8, title: "Undercurrent Stills I", category: "photography", image: "/art/undercurrent-stills-i.jpg" },
  { id: 9, title: "Midnight Frequencies Cover Art", category: "design", image: "/art/midnight-frequencies-cover.jpg" },
] as const;

export const SHOWS = [
  { id: 1, date: "2026-09-12", city: "Los Angeles, CA", venue: "The Wiltern", status: "upcoming" },
  { id: 2, date: "2026-09-20", city: "Austin, TX", venue: "Stubb's", status: "upcoming" },
  { id: 3, date: "2026-10-02", city: "New York, NY", venue: "Brooklyn Steel", status: "upcoming" },
  { id: 4, date: "2026-10-15", city: "Toronto, ON", venue: "The Danforth Music Hall", status: "upcoming" },
  { id: 5, date: "2026-11-01", city: "Chicago, IL", venue: "Thalia Hall", status: "upcoming" },
  { id: 6, date: "2025-11-14", city: "London, UK", venue: "O2 Academy Brixton", status: "past" },
  { id: 7, date: "2025-08-03", city: "Berlin, DE", venue: "Astra Kulturhaus", status: "past" },
  { id: 8, date: "2025-05-19", city: "Paris, FR", venue: "La Cigale", status: "past" },
] as const;

export const PRODUCTS = [
  { id: 1, name: "Midnight Frequencies Vinyl", price: "$34", image: "/shop/vinyl.jpg" },
  { id: 2, name: "Tour Hoodie", price: "$68", image: "/shop/hoodie.jpg" },
  { id: 3, name: "Glass Horizon Tee", price: "$32", image: "/shop/tee.jpg" },
  { id: 4, name: "Signed Print Set", price: "$45", image: "/shop/prints.jpg" },
  { id: 5, name: "Corner Booth EP Cassette", price: "$18", image: "/shop/cassette.jpg" },
  { id: 6, name: "Tour Poster (Limited)", price: "$25", image: "/shop/poster.jpg" },
] as const;
