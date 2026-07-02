export type GalleryItem = {
  category: string;
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  position?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    category: "Reliefs",
    title: "Reliefs und Plastiken",
    date: "Werkgruppe",
    description: "Werke zwischen Licht, Schatten und Raum.",
    image: "/images/portrait-placeholder.webp",
    alt: "Platzhalter für Reliefs und Plastiken von Kurt Lettow",
    position: "50% 22%",
  },
  {
    category: "Kirchenräume",
    title: "Sakrale Orte",
    date: "Bremen und Norddeutschland",
    description: "Arbeiten für Kirchenräume in Bremen und im norddeutschen Raum.",
    image: "/images/archive-documents-placeholder.webp",
    alt: "Platzhalter für Arbeiten in Kirchenräumen",
  },
  {
    category: "Portale",
    title: "Portale und Wandgestaltungen",
    date: "Öffentlicher Raum",
    description: "Kunst im öffentlichen und architektonischen Raum.",
    image: "/images/archive-documents-placeholder.webp",
    alt: "Platzhalter für Portale und Wandgestaltungen",
    position: "25% 55%",
  },
  {
    category: "Wandreliefs",
    title: "Licht und Fläche",
    date: "Architekturbezogene Kunst",
    description: "Reduzierte Formen, rhythmische Flächen und stille Präsenz.",
    image: "/images/archive-documents-placeholder.webp",
    alt: "Platzhalter für Wandreliefs von Kurt Lettow",
    position: "78% 42%",
  },
  {
    category: "Skizzen und Modelle",
    title: "Aus dem Atelier",
    date: "Entwurfsprozess",
    description: "Spuren des Entwurfsprozesses aus dem Atelier.",
    image: "/images/family-archive-placeholder.webp",
    alt: "Platzhalter für Skizzen und Modelle aus dem Atelier",
  },
  {
    category: "Materialien",
    title: "Stein, Keramik und Glas",
    date: "Werkstoffe",
    description: "Ein Werk in vielen Materialien und handwerklichen Techniken.",
    image: "/images/family-archive-placeholder.webp",
    alt: "Platzhalter für Materialstudien und Werkstoffe",
    position: "75% 35%",
  },
];
