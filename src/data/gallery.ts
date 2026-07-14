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
    image: "/images/work/religious-artwork-ecclesiastical-spaces.jpg",
    alt: "Religiöse Arbeit von Kurt Lettow in einem Kirchenraum",
    position: "50% 50%",
  },
  {
    category: "Portale",
    title: "Portale und Wandgestaltungen",
    date: "Öffentlicher Raum",
    description: "Kunst im öffentlichen Raum, an Fassaden, Portalen und Wandflächen.",
    image: "/images/public-art-portal-facade.jpg",
    alt: "Portale und Wandgestaltung von Kurt Lettow im öffentlichen Raum",
    position: "50% 50%",
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
    image: "/images/plaster-models-and-sketches.jpg",
    alt: "Gipsmodelle, Skizzen und Arbeitsmodelle aus dem Nachlass von Kurt Lettow",
  },
  {
    category: "Dokumente",
    title: "Fotografien und Archiv",
    date: "Werkstoffe",
    description: "Dokumente, Fotografien und Spuren vom Auftrag bis zur Ausführung.",
    image: "/images/photographs-and-archive-documents.jpg",
    alt: "Fotografien und Archivdokumente aus dem Nachlass von Kurt Lettow",
    position: "50% 50%",
  },
];
