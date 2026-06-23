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
  { category: "Photographs", title: "Portrait Collection", date: "Date unknown", description: "Placeholder for a verified portrait or family photograph.", image: "/images/portrait-placeholder.webp", alt: "Anonymous fictional portrait placeholder, not Kurt Lettow Bildhaer", position: "50% 22%" },
  { category: "Documents", title: "Personal Papers", date: "Date unknown", description: "Placeholder for correspondence, certificates, or personal records.", image: "/images/archive-documents-placeholder.webp", alt: "Fictional archival documents used as a placeholder" },
  { category: "Letters", title: "Family Correspondence", date: "Date unknown", description: "Placeholder for a transcribed and attributed family letter.", image: "/images/archive-documents-placeholder.webp", alt: "Fictional handwritten papers used as a letter placeholder", position: "25% 55%" },
  { category: "Maps", title: "Places & Journeys", date: "Locations unverified", description: "Placeholder for maps connected to documented places in the biography.", image: "/images/archive-documents-placeholder.webp", alt: "Fictional folded map used as a location placeholder", position: "78% 42%" },
  { category: "Family records", title: "The Family Archive", date: "Record pending", description: "Placeholder for family albums, registers, and contributed memories.", image: "/images/family-archive-placeholder.webp", alt: "Fictional family album in an archive used as a placeholder" },
  { category: "References", title: "Historical Sources", date: "Citation pending", description: "Placeholder for a reliable published or archival historical reference.", image: "/images/family-archive-placeholder.webp", alt: "Fictional archival reading room used as a references placeholder", position: "75% 35%" },
];
