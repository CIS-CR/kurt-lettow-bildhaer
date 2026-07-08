export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export const homeTimelineEvents: TimelineEvent[] = [
  {
    year: "1908",
    title: "Geburt in Bremen",
    description: "Kurt Lettow wird in Bremen geboren.",
  },
  {
    year: "1930",
    title: "Erster großer Auftrag",
    description: "Mit 22 Jahren erhält er seinen ersten großen Auftrag: einen Orgelprospekt aus Lindenholz für die St. Ulrichkirche in Halle.",
  },
  {
    year: "1945",
    title: "Rückkehr und Neubeginn",
    description: "Nach Krieg und Gefangenschaft kehrt Lettow krank zurück. Existenz und Atelier müssen neu aufgebaut werden.",
  },
  {
    year: "1992",
    title: "Tod am Geburtstag",
    description: "Kurt Lettow stirbt am 24. April, seinem Geburtstag, im Alter von 84 Jahren.",
  },
  {
    year: "2010",
    title: "Der Beginn der Suche",
    description: "Julia van Wilpe erfährt in Costa Rica von den Abrissplänen einer Kirche in Bremerhaven und dem gefährdeten Relief ihres Vaters. Die systematische Suche nach den erhaltenen Werken beginnt.",
  },
  {
    year: "2012",
    title: "Ausstellung und Buch",
    description: "Die Ausstellung \"Nachkriegskirchenkunst Ästhetik: Lettow\" wird in der Kulturkirche St. Stephani in Bremen gezeigt. Begleitend erscheint das Buch über sein Lebenswerk.",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1908",
    title: "Geburt in Bremen",
    description: "Kurt Lettow wird in Bremen geboren. Die Stadt, ihre Handwerke und ihr öffentlicher Raum werden später zu wichtigen Bezugspunkten seines Lebens und Arbeitens.",
    image: "/atelier/kurt-lettow-atelier.jpg",
    imageAlt: "Werkstatt und Ausbildung von Kurt Lettow",
    imagePosition: "50% 50%",
  },
  {
    year: "1930",
    title: "Erster großer Auftrag",
    description: "Mit 22 Jahren erhält Lettow seinen ersten großen Auftrag: einen Orgelprospekt aus Lindenholz für die St. Ulrichkirche in Halle, mit sechs Figuren und ornamentaler Gestaltung.",
    image: "/images/biography/kurt-lettow-erster-auftrag.jpg?v=977acbc",
    imageAlt: "Frühe bildhauerische Arbeit von Kurt Lettow",
    imagePosition: "50% 50%",
  },
  {
    year: "1931",
    title: "Weitere frühe Arbeiten",
    description: "Es folgen ein überlebensgroßes Kruzifix für den neuen katholischen Friedhof in Delmenhorst, eine lebensgroße heilige Elisabeth für das Arbeitsamt in Vechta sowie weitere Aufträge und Restaurierungen.",
    image: "/images/biography/kurt-lettow-erster-auftrag.jpg?v=977acbc",
    imageAlt: "Frühe bildhauerische Arbeit von Kurt Lettow",
    imagePosition: "50% 50%",
  },
  {
    year: "1945",
    title: "Rückkehr und Neubeginn",
    description: "Nach Krieg und englischer Gefangenschaft kehrt Lettow Ende 1945 krank zurück. Existenz, Atelier und Arbeitsgrundlagen müssen neu aufgebaut werden.",
    image: "/images/biography/kurt-lettow-neubeginn.jpg?v=977acbc",
    imageAlt: "Atelier und Neubeginn von Kurt Lettow in Bremen-Oberneuland",
    imagePosition: "52% 50%",
  },
  {
    year: "Nach 1945",
    title: "Kirchen, Schulen, öffentliche Räume",
    description: "Neue Aufträge entstehen für katholische Kirchen in Delmenhorst, Düsternort, Cloppenburg, Vechta und Oldenburg sowie für Schulen, evangelische Kirchen und öffentliche Räume in Bremen.",
    image: "/images/biography/kurt-lettow-werk-norddeutschland.jpg?v=977acbc",
    imageAlt: "Werk von Kurt Lettow im norddeutschen Raum",
    imagePosition: "50% 50%",
  },
  {
    year: "1961",
    title: "Familiengeschichte",
    description: "Seine Tochter Julia verlässt das Elternhaus, um Architektur zu studieren. Später führen Familienreisen nach Costa Rica und Mittelamerika, während das Werk in Norddeutschland weiter seine Spuren hinterlässt.",
    image: "/images/family-archive-placeholder.webp",
    imageAlt: "Familienarchiv als Platzhalter für die Dokumentation des Werkes von Kurt Lettow",
  },
  {
    year: "1992",
    title: "Tod am Geburtstag",
    description: "Kurt Lettow stirbt am 24. April, seinem Geburtstag, im Alter von 84 Jahren. Sein Atelier, die Modelle und viele Dokumente bleiben als konzentrierter Nachlass erhalten.",
    image: "/images/portrait-placeholder.webp",
    imageAlt: "Platzhalter für eine Atelieraufnahme oder ein Porträt von Kurt Lettow",
    imagePosition: "50% 20%",
  },
  {
    year: "2010",
    title: "Der Beginn der Suche",
    description: "Julia van Wilpe erfährt in Costa Rica von den Abrissplänen einer Kirche in Bremerhaven und dem gefährdeten Relief ihres Vaters. Daraus entsteht die systematische Suche nach den erhaltenen Werken.",
    image: "/images/memory/memory-document-01.jpg",
    imageAlt: "Archivdokument zum Lebenswerk von Kurt Lettow",
  },
  {
    year: "2012",
    title: "Ausstellung und Buch",
    description: "Die Ausstellung \"Nachkriegskirchenkunst Ästhetik: Lettow\" wird in der Kulturkirche St. Stephani in Bremen gezeigt. Begleitend erscheint das Buch über sein Lebenswerk und seinen Wirkungskreis im norddeutschen Raum.",
    image: "/images/memory/memory-work-detail-01.jpg",
    imageAlt: "Detail einer bildhauerischen Arbeit von Kurt Lettow",
  },
];
