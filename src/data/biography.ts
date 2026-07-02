export type BiographyChapter = {
  number: string;
  title: string;
  period: string;
  summary: string;
  image?: string;
  imageAlt?: string;
};

export const biographyChapters: BiographyChapter[] = [
  {
    number: "I",
    title: "Ausbildung und erste Ateliers",
    period: "Bremen",
    summary:
      "Nach der Schule arbeitete Kurt Lettow zunächst ein Jahr lang in einer Fabrik. Danach absolvierte er eine vollständige Holzbildhauerlehre, erlernte auch den Steinmetzberuf und übernahm später die Leitung einer Steinmetzfirma. An der Kunstgewerbeschule in Bremen begegnete er Rebecka Meyer-Sprengel, seiner späteren Ehefrau. Bald machte er sich selbständig. Sein erstes Atelier befand sich in der Bührenstraße Nr. 2; später konnte er in das Atelier Nr. 9 in der Böttcherstraße einziehen.",
    image: "/images/portrait-placeholder.webp",
    imageAlt: "Platzhalter für ein Porträt von Kurt Lettow",
  },
  {
    number: "II",
    title: "Der erste große Auftrag",
    period: "1930-1931",
    summary:
      "Der erste große Auftrag kam 1930, als Lettow 22 Jahre alt war: ein Orgelprospekt aus Lindenholz für die St. Ulrichkirche in Halle, mit sechs Figuren und Ornamentik. 1931 folgte ein überlebensgroßes Kruzifix für den neuen katholischen Friedhof in Delmenhorst, danach eine lebensgroße heilige Elisabeth für das Arbeitsamt in Vechta sowie weitere Aufträge und Restaurierungen.",
    image: "/images/archive-documents-placeholder.webp",
    imageAlt: "Platzhalter für Dokumente zu frühen Aufträgen von Kurt Lettow",
  },
  {
    number: "III",
    title: "Krieg, Rückkehr und Neubeginn",
    period: "1940er Jahre",
    summary:
      "Kurz vor dem Krieg konnte Kurt Lettow sein Haus mit Atelier in Bremen-Oberneuland fertigstellen. Dann wurde er eingezogen, geriet in englische Gefangenschaft und kehrte Ende 1945 krank zurück. Existenz und Atelier mussten neu aufgebaut werden. Die ersten Aufträge nach dem Krieg kamen von katholischen Kirchen in Delmenhorst, Düsternort, Cloppenburg, Vechta und Oldenburg - und aus Bremen, wo Schulen und evangelische Kirchen wieder aufgebaut wurden.",
  },
  {
    number: "IV",
    title: "Ein Werk in Norddeutschland",
    period: "Nach 1945",
    summary:
      "Bald wurde Kurt Lettow weit über Bremen hinaus bekannt. Seine Werke waren im ganzen norddeutschen Raum gefragt. Es begann eine intensive Schaffenszeit, die bis ins hohe Alter anhielt. Mit großer Ausdruckskraft und handwerklichem Können arbeitete er unermüdlich in unterschiedlichen Materialien: Ton, Holz, Stein, Keramik, Sgraffito, Emaille, Mosaik, Gips, Glas und Metall.",
    image: "/images/family-archive-placeholder.webp",
    imageAlt: "Platzhalter für Archivmaterial zum Werk von Kurt Lettow",
  },
];
