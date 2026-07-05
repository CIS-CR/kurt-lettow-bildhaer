export type BiographyChapter = {
  number: string;
  label: string;
  title: string;
  period: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export const biographyChapters: BiographyChapter[] = [
  {
    number: "01",
    label: "Frühe Jahre",
    title: "Ausbildung und erste Ateliers",
    period: "Bremen",
    paragraphs: [
      "Nach der Schule arbeitete Kurt Lettow zunächst ein Jahr lang in einer Fabrik. Danach absolvierte er eine vollständige Holzbildhauerlehre, erlernte auch den Steinmetzberuf und übernahm später die Leitung einer Steinmetzfirma.",
      "An der Kunstgewerbeschule in Bremen begegnete er Rebecka Meyer-Sprengel, seiner späteren Ehefrau. Bald machte er sich selbständig. Sein erstes Atelier befand sich in der Bührenstraße Nr. 2; später konnte er in das Atelier Nr. 9 in der Böttcherstraße einziehen.",
    ],
    image: "/images/biography/kurt-lettow-ausbildung-atelier.jpg?v=977acbc",
    imageAlt: "Werkstatt und Ausbildung von Kurt Lettow",
    imagePosition: "50% 50%",
  },
  {
    number: "02",
    label: "Auftrag",
    title: "Der erste große Auftrag",
    period: "1930-1931",
    paragraphs: [
      "Der erste große Auftrag kam 1930, als Lettow 22 Jahre alt war: ein Orgelprospekt aus Lindenholz für die St. Ulrichkirche in Halle, mit sechs Figuren und Ornamentik.",
      "1931 folgte ein überlebensgroßes Kruzifix für den neuen katholischen Friedhof in Delmenhorst, danach eine lebensgroße heilige Elisabeth für das Arbeitsamt in Vechta sowie weitere Aufträge und Restaurierungen.",
    ],
    image: "/images/biography/kurt-lettow-erster-auftrag.jpg?v=977acbc",
    imageAlt: "Frühe bildhauerische Arbeit von Kurt Lettow",
    imagePosition: "50% 50%",
  },
  {
    number: "03",
    label: "Neubeginn",
    title: "Krieg, Rückkehr und Neubeginn",
    period: "1940er Jahre",
    paragraphs: [
      "Kurz vor dem Krieg konnte Kurt Lettow sein Haus mit Atelier in Bremen-Oberneuland fertigstellen. Dann wurde er eingezogen, geriet in englische Gefangenschaft und kehrte Ende 1945 krank zurück.",
      "Existenz und Atelier mussten neu aufgebaut werden. Die ersten Aufträge nach dem Krieg kamen von katholischen Kirchen in Delmenhorst, Düsternort, Cloppenburg, Vechta und Oldenburg - und aus Bremen, wo Schulen und evangelische Kirchen wieder aufgebaut wurden.",
    ],
    image: "/images/biography/kurt-lettow-neubeginn.jpg?v=977acbc",
    imageAlt: "Atelier und Neubeginn von Kurt Lettow in Bremen-Oberneuland",
    imagePosition: "52% 50%",
  },
  {
    number: "04",
    label: "Lebenswerk",
    title: "Ein Werk in Norddeutschland",
    period: "Nach 1945",
    paragraphs: [
      "Bald wurde Kurt Lettow weit über Bremen hinaus bekannt. Seine religiösen und weltlichen Werke sind im ganzen norddeutschen Raum zu finden - in Kirchen, Schulen, öffentlichen Gebäuden, auf Plätzen und in privaten Sammlungen.",
      "Mit großer Ausdruckskraft und handwerklichem Können arbeitete er unermüdlich in unterschiedlichen Materialien: Ton, Holz, Stein, Keramik, Sgraffito, Emaille, Mosaik, Gips, Glas und Metall. Besonders deutlich wird sein Gespür für Relief, Raum und Architektur: seine Werke entfalten ihre Wirkung nicht isoliert, sondern im Dialog mit dem Ort.",
    ],
    image: "/images/biography/kurt-lettow-werk-norddeutschland.jpg?v=977acbc",
    imageAlt: "Werk von Kurt Lettow im norddeutschen Raum",
    imagePosition: "50% 50%",
  },
];
