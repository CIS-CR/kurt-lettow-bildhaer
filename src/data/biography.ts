export type BiographyChapter = {
  number: string;
  title: string;
  period: string;
  summary: string;
  image?: string;
  imageAlt?: string;
};

const placeholder =
  "Placeholder biography content. Replace this passage with verified information supplied by family records, archival documents, or cited historical sources.";

export const biographyChapters: BiographyChapter[] = [
  {
    number: "I",
    title: "Early Life",
    period: "Year to be verified",
    summary: `${placeholder} This chapter should establish the places, relationships, and early experiences that shaped his life.`,
    image: "/images/portrait-placeholder.webp",
    imageAlt: "Fictional anonymous archival portrait used as a placeholder, not Kurt Lettow Bildhaer",
  },
  {
    number: "II",
    title: "Family & Origins",
    period: "Dates to be verified",
    summary: `${placeholder} Use this section to document family origins, connections, migrations, and traditions with careful attribution.`,
  },
  {
    number: "III",
    title: "Historical Context",
    period: "Period to be verified",
    summary: `${placeholder} Add only the historical circumstances directly supported by reliable sources and clearly separate context from personal biography.`,
    image: "/images/archive-documents-placeholder.webp",
    imageAlt: "Fictional archival papers and map used as a historical research placeholder",
  },
  {
    number: "IV",
    title: "Work & Contributions",
    period: "Dates to be verified",
    summary: `${placeholder} Record professional work, community involvement, and personal contributions without inferring details not present in the archive.`,
  },
  {
    number: "V",
    title: "Later Years",
    period: "Dates to be verified",
    summary: `${placeholder} This chapter can preserve later memories, places, correspondence, and family testimony once each detail has been reviewed.`,
  },
  {
    number: "VI",
    title: "Legacy",
    period: "An evolving record",
    summary: `${placeholder} Gather the ways his life is remembered across generations and identify the people or documents behind each contribution.`,
    image: "/images/family-archive-placeholder.webp",
    imageAlt: "Fictional family album and archival materials used as a legacy placeholder",
  },
];
