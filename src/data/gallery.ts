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
    description: "Werke zwischen Licht, Schatten, Raum und architektonischem Zusammenhang.",
    image: "/images/work/kurt-lettow-memory-shadows.jpg",
    alt: "Relief von Kurt Lettow mit Licht- und Schattenspiel",
    position: "50% 50%",
  },
  {
    category: "Kirchenräume",
    title: "Sakrale Orte",
    date: "Bremen und Norddeutschland",
    description: "Religiöse Arbeiten für Kirchenräume in Bremen und im norddeutschen Raum.",
    image: "/images/archive-documents-placeholder.webp",
    alt: "Platzhalter für Arbeiten in Kirchenräumen",
  },
  {
    category: "Portale",
    title: "Portale und Wandgestaltungen",
    date: "Öffentlicher Raum",
    description: "Kunst im öffentlichen Raum, an Fassaden, Portalen und Wandflächen.",
    image: "/images/archive-documents-placeholder.webp",
    alt: "Platzhalter für Portale und Wandgestaltungen",
    position: "25% 55%",
  },
  {
    category: "Wandreliefs",
    title: "Licht und Fläche",
    date: "Architekturbezogene Kunst",
    description: "Reduzierte Formen, rhythmische Flächen und eine stille, klare Präsenz.",
    image: "/images/archive-documents-placeholder.webp",
    alt: "Platzhalter für Wandreliefs von Kurt Lettow",
    position: "78% 42%",
  },
  {
    category: "Gipsmodelle",
    title: "Modelle und Entwürfe",
    date: "Entwurfsprozess",
    description: "Gipsmodelle, Skizzen und Arbeitsmodelle aus dem Nachlass.",
    image: "/images/family-archive-placeholder.webp",
    alt: "Platzhalter für Skizzen und Modelle aus dem Atelier",
  },
  {
    category: "Dokumente",
    title: "Fotografien und Archiv",
    date: "Werkstoffe",
    description: "Dokumente, Fotografien und Spuren vom Auftrag bis zur Ausführung.",
    image: "/images/family-archive-placeholder.webp",
    alt: "Platzhalter für Materialstudien und Werkstoffe",
    position: "75% 35%",
  },
];
