export const ARTIST_NAME = "SIIBU";

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
];

export const TIMELINE = [
  { year: "2016", title: "First Stage", copy: "Debut open-mic performance that started it all." },
  { year: "2018", title: "First EP", copy: "Released a self-produced 5-track EP from a bedroom studio." },
  { year: "2020", title: "Screen Debut", copy: "First supporting role in an independent feature film." },
  { year: "2022", title: "Breakthrough Role", copy: "Lead role earned festival recognition and critical acclaim." },
  { year: "2023", title: "Glass Horizon", copy: "Sophomore album charted internationally." },
  { year: "2025", title: "Midnight Frequencies", copy: "Third studio album paired with a world tour." },
] as const;

export const ARTWORKS = [
  { id: 1, title: "Afterglow I", category: "painting", image: "/art/afterglow-i.jpg" },
  { id: 2, title: "Static Bloom", category: "photography", image: "/art/static-bloom.jpg" },
  { id: 3, title: "Glass Horizon Poster", category: "design", image: "/art/glass-horizon-poster.jpg" },
  { id: 4, title: "Halflight", category: "painting", image: "/art/halflight.jpg" },
  { id: 5, title: "Echo Chamber", category: "photography", image: "/art/echo-chamber.jpg" },
  { id: 6, title: "Tidewalk Study", category: "design", image: "/art/tidewalk-study.jpg" },
] as const;

export const SHOWS = [
  { id: 1, date: "2026-09-12", city: "Los Angeles, CA", venue: "The Wiltern", status: "upcoming" },
  { id: 2, date: "2026-09-20", city: "Austin, TX", venue: "Stubb's", status: "upcoming" },
  { id: 3, date: "2026-10-02", city: "New York, NY", venue: "Brooklyn Steel", status: "upcoming" },
  { id: 4, date: "2025-11-14", city: "London, UK", venue: "O2 Academy Brixton", status: "past" },
  { id: 5, date: "2025-08-03", city: "Berlin, DE", venue: "Astra Kulturhaus", status: "past" },
] as const;

export const PRODUCTS = [
  { id: 1, name: "Midnight Frequencies Vinyl", price: "$34", image: "/shop/vinyl.jpg" },
  { id: 2, name: "Tour Hoodie", price: "$68", image: "/shop/hoodie.jpg" },
  { id: 3, name: "Glass Horizon Tee", price: "$32", image: "/shop/tee.jpg" },
  { id: 4, name: "Signed Print Set", price: "$45", image: "/shop/prints.jpg" },
] as const;
