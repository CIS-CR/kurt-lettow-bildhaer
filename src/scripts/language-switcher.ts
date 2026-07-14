type Language = "de" | "en" | "es";
type Translation = Record<Exclude<Language, "de">, string>;

const STORAGE_KEY = "kurt-lettow-language";
const supportedLanguages = new Set<Language>(["de", "en", "es"]);

const normalize = (value: string) => value
  .replace(/[–—]/g, "-")
  .replace(/[“”„]/g, "\"")
  .replace(/[‘’]/g, "'")
  .replace(/\s+/g, " ")
  .trim();

const textTranslations: Record<string, Translation> = {
  "Zum Inhalt springen": { en: "Skip to content", es: "Saltar al contenido" },
  Sprache: { en: "Language", es: "Idioma" },
  Biografie: { en: "Biography", es: "Biografía" },
  Zeitleiste: { en: "Timeline", es: "Cronología" },
  Atelier: { en: "Studio", es: "Atelier" },
  Werk: { en: "Work", es: "Obra" },
  Buch: { en: "Book", es: "Libro" },
  Legacy: { en: "Legacy", es: "Legado" },
  Kontakt: { en: "Contact", es: "Contacto" },
  Archiv: { en: "Archive", es: "Archivo" },
  Galerie: { en: "Gallery", es: "Galería" },
  Bildhauer: { en: "Sculptor", es: "Escultor" },
  "Über die Grenzen Bremens hinaus": { en: "Beyond the borders of Bremen", es: "Más allá de los límites de Bremen" },
  "Ein Leben zwischen Holz, Stein, Licht und Erinnerung.": {
    en: "A life between wood, stone, light and memory.",
    es: "Una vida entre madera, piedra, luz y memoria.",
  },
  "Weiter entdecken": { en: "Discover more", es: "Seguir descubriendo" },
  "Ein Leben im Material": { en: "A life in material", es: "Una vida en la materia" },
  "Kurt Lettow wurde 1908 in Bremen geboren und starb 1992 an seinem Geburtstag, dem 24. April, im Alter von 84 Jahren.": {
    en: "Kurt Lettow was born in Bremen in 1908 and died in 1992 on his birthday, April 24, at the age of 84.",
    es: "Kurt Lettow nació en Bremen en 1908 y murió en 1992 el día de su cumpleaños, el 24 de abril, a los 84 años.",
  },
  "Diese Website ist dem Bildhauer Kurt Lettow gewidmet - einem Künstler, dessen Werk weit über Bremen hinausreicht.": {
    en: "This website is dedicated to the sculptor Kurt Lettow, an artist whose work reaches far beyond Bremen.",
    es: "Este sitio está dedicado al escultor Kurt Lettow, un artista cuya obra llega mucho más allá de Bremen.",
  },
  "Geboren 1908 in Bremen, arbeitete Lettow mit handwerklicher Präzision, künstlerischer Reduktion und einer tiefen Beziehung zum Material.": {
    en: "Born in Bremen in 1908, Lettow worked with artisanal precision, artistic reduction and a profound relationship with material.",
    es: "Nacido en Bremen en 1908, Lettow trabajó con precisión artesanal, reducción artística y una profunda relación con el material.",
  },
  "Sein Werk entstand aus handwerklicher Präzision, künstlerischer Reduktion und einer tiefen Beziehung zum Material.": {
    en: "His work emerged from artisanal precision, artistic reduction and a profound relationship with material.",
    es: "Su obra nació de la precisión artesanal, la reducción artística y una profunda relación con el material.",
  },
  "Holz, Stein, Ton, Keramik, Glas, Metall und Licht wurden für ihn zu einer stillen, eindringlichen Sprache.": {
    en: "Wood, stone, clay, ceramics, glass, metal and light became for him a quiet, penetrating language.",
    es: "La madera, la piedra, el barro, la cerámica, el vidrio, el metal y la luz se convirtieron para él en un lenguaje silencioso e intenso.",
  },
  "Holz, Stein, Ton, Keramik, Glas, Metall und Licht wurden für ihn zu Formen einer stillen, eindringlichen Sprache.": {
    en: "Wood, stone, clay, ceramics, glass, metal and light became forms of a quiet, penetrating language for him.",
    es: "La madera, la piedra, el barro, la cerámica, el vidrio, el metal y la luz se convirtieron para él en formas de un lenguaje silencioso e intenso.",
  },
  "Heute wird sein Lebenswerk neu entdeckt, dokumentiert und sichtbar gemacht.": {
    en: "Today his life work is being rediscovered, documented and made visible.",
    es: "Hoy su obra de vida se redescubre, se documenta y se hace visible.",
  },
  "Das Werk der Erinnerung": { en: "The Work of Memory", es: "La obra de la memoria" },
  "Das Werk blieb.": { en: "The work remained.", es: "La obra permaneció." },
  "In Kirchen, Schulen, Plätzen und Erinnerungen.": {
    en: "In churches, schools, squares and memories.",
    es: "En iglesias, escuelas, plazas y recuerdos.",
  },
  "Viele Jahre nach seiner Entstehung begann Julia van Wilpe, geb. Lettow, das Lebenswerk ihres Vaters neu zu erfassen, zu dokumentieren und zu fotografieren.": {
    en: "Many years after it was created, Julia van Wilpe, née Lettow, began to record, document and photograph her father's life work anew.",
    es: "Muchos años después de su creación, Julia van Wilpe, nacida Lettow, comenzó a registrar, documentar y fotografiar de nuevo la obra de vida de su padre.",
  },
  "Eine Reise durch Städte und Dörfer Norddeutschlands - auf der Suche nach Plastiken, Portalen und majestätischen Wandreliefs.": {
    en: "A journey through the cities and villages of northern Germany, in search of sculptures, portals and majestic wall reliefs.",
    es: "Un viaje por ciudades y pueblos del norte de Alemania, en busca de esculturas, portales y majestuosos relieves murales.",
  },
  Norddeutschland: { en: "Northern Germany", es: "Norte de Alemania" },
  Kirchen: { en: "Churches", es: "Iglesias" },
  Schulen: { en: "Schools", es: "Escuelas" },
  Plätze: { en: "Squares", es: "Plazas" },
  Portale: { en: "Portals", es: "Portales" },
  Wandreliefs: { en: "Wall reliefs", es: "Relieves murales" },
  Dokumentation: { en: "Documentation", es: "Documentación" },
  "Ein Leben zwischen Handwerk, Kunst und öffentlichem Raum.": {
    en: "A life between craft, art and public space.",
    es: "Una vida entre oficio, arte y espacio público.",
  },
  "Die Biografie entfaltet sich in Kapiteln: Ausbildung, erste Aufträge, Krieg, Rückkehr und ein Werk, das Norddeutschland geprägt hat.": {
    en: "The biography unfolds in chapters: training, first commissions, war, return and a body of work that shaped northern Germany.",
    es: "La biografía se despliega en capítulos: formación, primeros encargos, guerra, regreso y una obra que marcó el norte de Alemania.",
  },
  "Ausbildung, erste Aufträge, Neubeginn und ein Werk, das weit über Bremen hinaus sichtbar wurde.": {
    en: "Training, first commissions, a new beginning and a body of work that became visible far beyond Bremen.",
    es: "Formación, primeros encargos, un nuevo comienzo y una obra que se hizo visible mucho más allá de Bremen.",
  },
  "Frühe Jahre": { en: "Early Years", es: "Primeros años" },
  Auftrag: { en: "Commission", es: "Encargo" },
  Neubeginn: { en: "New Beginning", es: "Nuevo comienzo" },
  Lebenswerk: { en: "Life Work", es: "Obra de vida" },
  "Ausbildung und erste Ateliers": { en: "Training and First Studios", es: "Formación y primeros ateliers" },
  "Der erste große Auftrag": { en: "The First Major Commission", es: "El primer gran encargo" },
  "Krieg, Rückkehr und Neubeginn": { en: "War, Return and a New Beginning", es: "Guerra, regreso y nuevo comienzo" },
  "Ein Werk in Norddeutschland": { en: "A Body of Work in Northern Germany", es: "Una obra en el norte de Alemania" },
  "Nach der Schule arbeitete Kurt Lettow zunächst ein Jahr lang in einer Fabrik. Danach absolvierte er eine vollständige Holzbildhauerlehre, erlernte auch den Steinmetzberuf und übernahm später die Leitung einer Steinmetzfirma.": {
    en: "After school, Kurt Lettow first worked for a year in a factory. He then completed a full apprenticeship as a wood sculptor, also learned the stonemason's trade and later managed a stonemasonry company.",
    es: "Tras la escuela, Kurt Lettow trabajó primero durante un año en una fábrica. Después completó una formación como escultor en madera, aprendió también el oficio de cantero y más tarde dirigió una empresa de cantería.",
  },
  "An der Kunstgewerbeschule in Bremen begegnete er Rebecka Meyer-Sprengel, seiner späteren Ehefrau. Bald machte er sich selbständig. Sein erstes Atelier befand sich in der Bührenstraße Nr. 2; später konnte er in das Atelier Nr. 9 in der Böttcherstraße einziehen.": {
    en: "At the School of Applied Arts in Bremen he met Rebecka Meyer-Sprengel, his future wife. He soon became self-employed. His first studio was at Bührenstraße No. 2; later he moved into Studio No. 9 in Böttcherstraße.",
    es: "En la Escuela de Artes Aplicadas de Bremen conoció a Rebecka Meyer-Sprengel, su futura esposa. Pronto se independizó. Su primer atelier estuvo en Bührenstraße n.º 2; más tarde pudo trasladarse al atelier n.º 9 en Böttcherstraße.",
  },
  "Nach der Schule arbeitete Kurt Lettow zunächst ein Jahr lang in einer Fabrik. Danach absolvierte er eine vollständige Holzbildhauerlehre, erlernte auch den Steinmetzberuf und übernahm später die Leitung einer Steinmetzfirma. An der Kunstgewerbeschule in Bremen begegnete er Rebecka Meyer-Sprengel, seiner späteren Ehefrau. Bald machte er sich selbständig. Sein erstes Atelier befand sich in der Bührenstraße Nr. 2; später konnte er in das Atelier Nr. 9 in der Böttcherstraße einziehen.": {
    en: "After school, Kurt Lettow first worked for a year in a factory. He then completed a full apprenticeship as a wood sculptor, also learned the stonemason's trade and later managed a stonemasonry company. At the School of Applied Arts in Bremen he met Rebecka Meyer-Sprengel, his future wife. He soon became self-employed. His first studio was at Bührenstraße No. 2; later he moved into Studio No. 9 in Böttcherstraße.",
    es: "Tras la escuela, Kurt Lettow trabajó primero durante un año en una fábrica. Después completó una formación como escultor en madera, aprendió también el oficio de cantero y más tarde dirigió una empresa de cantería. En la Escuela de Artes Aplicadas de Bremen conoció a Rebecka Meyer-Sprengel, su futura esposa. Pronto se independizó. Su primer atelier estuvo en Bührenstraße n.º 2; más tarde pudo trasladarse al atelier n.º 9 en Böttcherstraße.",
  },
  "Der erste große Auftrag kam 1930, als Lettow 22 Jahre alt war: ein Orgelprospekt aus Lindenholz für die St. Ulrichkirche in Halle, mit sechs Figuren und Ornamentik.": {
    en: "The first major commission came in 1930, when Lettow was 22: a limewood organ case for St. Ulrich's Church in Halle, with six figures and ornamentation.",
    es: "El primer gran encargo llegó en 1930, cuando Lettow tenía 22 años: una caja de órgano en madera de tilo para la iglesia de San Ulrico en Halle, con seis figuras y ornamentación.",
  },
  "1931 folgte ein überlebensgroßes Kruzifix für den neuen katholischen Friedhof in Delmenhorst, danach eine lebensgroße heilige Elisabeth für das Arbeitsamt in Vechta sowie weitere Aufträge und Restaurierungen.": {
    en: "In 1931 an oversized crucifix for the new Catholic cemetery in Delmenhorst followed, then a life-size Saint Elizabeth for the employment office in Vechta, as well as further commissions and restorations.",
    es: "En 1931 siguió un crucifijo de tamaño superior al natural para el nuevo cementerio católico de Delmenhorst, luego una Santa Isabel de tamaño natural para la oficina de empleo de Vechta, además de otros encargos y restauraciones.",
  },
  "Der erste große Auftrag kam 1930, als Lettow 22 Jahre alt war: ein Orgelprospekt aus Lindenholz für die St. Ulrichkirche in Halle, mit sechs Figuren und Ornamentik. 1931 folgte ein überlebensgroßes Kruzifix für den neuen katholischen Friedhof in Delmenhorst, danach eine lebensgroße heilige Elisabeth für das Arbeitsamt in Vechta sowie weitere Aufträge und Restaurierungen.": {
    en: "The first major commission came in 1930, when Lettow was 22: a limewood organ case for St. Ulrich's Church in Halle, with six figures and ornamentation. In 1931 an oversized crucifix for the new Catholic cemetery in Delmenhorst followed, then a life-size Saint Elizabeth for the employment office in Vechta, as well as further commissions and restorations.",
    es: "El primer gran encargo llegó en 1930, cuando Lettow tenía 22 años: una caja de órgano en madera de tilo para la iglesia de San Ulrico en Halle, con seis figuras y ornamentación. En 1931 siguió un crucifijo de tamaño superior al natural para el nuevo cementerio católico de Delmenhorst, luego una Santa Isabel de tamaño natural para la oficina de empleo de Vechta, además de otros encargos y restauraciones.",
  },
  "Kurz vor dem Krieg konnte Kurt Lettow sein Haus mit Atelier in Bremen-Oberneuland fertigstellen. Dann wurde er eingezogen, geriet in englische Gefangenschaft und kehrte Ende 1945 krank zurück.": {
    en: "Shortly before the war, Kurt Lettow was able to complete his house with studio in Bremen-Oberneuland. He was then drafted, became a British prisoner of war and returned ill at the end of 1945.",
    es: "Poco antes de la guerra, Kurt Lettow pudo terminar su casa con atelier en Bremen-Oberneuland. Luego fue reclutado, cayó prisionero de los ingleses y regresó enfermo a finales de 1945.",
  },
  "Existenz und Atelier mussten neu aufgebaut werden. Die ersten Aufträge nach dem Krieg kamen von katholischen Kirchen in Delmenhorst, Düsternort, Cloppenburg, Vechta und Oldenburg - und aus Bremen, wo Schulen und evangelische Kirchen wieder aufgebaut wurden.": {
    en: "His livelihood and studio had to be rebuilt. The first postwar commissions came from Catholic churches in Delmenhorst, Düsternort, Cloppenburg, Vechta and Oldenburg, and from Bremen, where schools and Protestant churches were being rebuilt.",
    es: "Su existencia y su atelier tuvieron que reconstruirse. Los primeros encargos de posguerra llegaron de iglesias católicas en Delmenhorst, Düsternort, Cloppenburg, Vechta y Oldenburg, y también de Bremen, donde se reconstruían escuelas e iglesias evangélicas.",
  },
  "Kurz vor dem Krieg konnte Kurt Lettow sein Haus mit Atelier in Bremen-Oberneuland fertigstellen. Dann wurde er eingezogen, geriet in englische Gefangenschaft und kehrte Ende 1945 krank zurück. Existenz und Atelier mussten neu aufgebaut werden. Die ersten Aufträge nach dem Krieg kamen von katholischen Kirchen in Delmenhorst, Düsternort, Cloppenburg, Vechta und Oldenburg - und aus Bremen, wo Schulen und evangelische Kirchen wieder aufgebaut wurden.": {
    en: "Shortly before the war, Kurt Lettow was able to complete his house with studio in Bremen-Oberneuland. He was then drafted, became a British prisoner of war and returned ill at the end of 1945. His livelihood and studio had to be rebuilt. The first postwar commissions came from Catholic churches in Delmenhorst, Düsternort, Cloppenburg, Vechta and Oldenburg, and from Bremen, where schools and Protestant churches were being rebuilt.",
    es: "Poco antes de la guerra, Kurt Lettow pudo terminar su casa con atelier en Bremen-Oberneuland. Luego fue reclutado, cayó prisionero de los ingleses y regresó enfermo a finales de 1945. Su existencia y su atelier tuvieron que reconstruirse. Los primeros encargos de posguerra llegaron de iglesias católicas en Delmenhorst, Düsternort, Cloppenburg, Vechta y Oldenburg, y también de Bremen, donde se reconstruían escuelas e iglesias evangélicas.",
  },
  "Bald wurde Kurt Lettow weit über Bremen hinaus bekannt. Seine Werke waren im ganzen norddeutschen Raum gefragt. Es begann eine intensive Schaffenszeit, die bis ins hohe Alter anhielt.": {
    en: "Kurt Lettow soon became known far beyond Bremen. His works were sought throughout northern Germany. An intense creative period began and continued into old age.",
    es: "Kurt Lettow pronto fue conocido mucho más allá de Bremen. Sus obras fueron solicitadas en todo el norte de Alemania. Comenzó una etapa de intensa creación que continuó hasta una edad avanzada.",
  },
  "Mit großer Ausdruckskraft und handwerklichem Können arbeitete er unermüdlich in unterschiedlichen Materialien: Ton, Holz, Stein, Keramik, Sgraffito, Emaille, Mosaik, Gips, Glas und Metall.": {
    en: "With great expressive force and craftsmanship, he worked tirelessly in many materials: clay, wood, stone, ceramics, sgraffito, enamel, mosaic, plaster, glass and metal.",
    es: "Con gran fuerza expresiva y dominio artesanal, trabajó incansablemente en diversos materiales: barro, madera, piedra, cerámica, esgrafiado, esmalte, mosaico, yeso, vidrio y metal.",
  },
  "Bald wurde Kurt Lettow weit über Bremen hinaus bekannt. Seine Werke waren im ganzen norddeutschen Raum gefragt. Es begann eine intensive Schaffenszeit, die bis ins hohe Alter anhielt. Mit großer Ausdruckskraft und handwerklichem Können arbeitete er unermüdlich in unterschiedlichen Materialien: Ton, Holz, Stein, Keramik, Sgraffito, Emaille, Mosaik, Gips, Glas und Metall.": {
    en: "Kurt Lettow soon became known far beyond Bremen. His works were sought throughout northern Germany. An intense creative period began and continued into old age. With great expressive force and craftsmanship, he worked tirelessly in many materials: clay, wood, stone, ceramics, sgraffito, enamel, mosaic, plaster, glass and metal.",
    es: "Kurt Lettow pronto fue conocido mucho más allá de Bremen. Sus obras fueron solicitadas en todo el norte de Alemania. Comenzó una etapa de intensa creación que continuó hasta una edad avanzada. Con gran fuerza expresiva y dominio artesanal, trabajó incansablemente en diversos materiales: barro, madera, piedra, cerámica, esgrafiado, esmalte, mosaico, yeso, vidrio y metal.",
  },
  "Stationen eines Lebens und Werkes.": { en: "Stations of a life and work.", es: "Etapas de una vida y una obra." },
  "Eine verdichtete Chronologie von Ausbildung, Werk, Neubeginn und Wiederentdeckung.": {
    en: "A condensed chronology of training, work, renewal and rediscovery.",
    es: "Una cronología condensada de formación, obra, nuevo comienzo y redescubrimiento.",
  },
  "Geburt in Bremen": { en: "Birth in Bremen", es: "Nacimiento en Bremen" },
  "Kurt Lettow wird in Bremen geboren.": { en: "Kurt Lettow is born in Bremen.", es: "Kurt Lettow nace en Bremen." },
  "Erster großer Auftrag": { en: "First major commission", es: "Primer gran encargo" },
  "Mit 22 Jahren erhält er seinen ersten großen Auftrag: einen Orgelprospekt aus Lindenholz für die St. Ulrichkirche in Halle.": {
    en: "At the age of 22, he receives his first major commission: a limewood organ case for St. Ulrich's Church in Halle.",
    es: "A los 22 años recibe su primer gran encargo: una caja de órgano en madera de tilo para la iglesia de San Ulrico en Halle.",
  },
  "Weitere frühe Arbeiten": { en: "Further early works", es: "Otros trabajos tempranos" },
  "Es folgen ein überlebensgroßes Kruzifix für den neuen katholischen Friedhof in Delmenhorst und weitere Arbeiten.": {
    en: "An oversized crucifix for the new Catholic cemetery in Delmenhorst and further works follow.",
    es: "Le siguen un crucifijo de tamaño superior al natural para el nuevo cementerio católico de Delmenhorst y otros trabajos.",
  },
  "Rückkehr und Neubeginn": { en: "Return and new beginning", es: "Regreso y nuevo comienzo" },
  "Nach Krieg und Gefangenschaft kehrt Lettow krank zurück. Existenz und Atelier müssen neu aufgebaut werden.": {
    en: "After war and imprisonment, Lettow returns ill. His livelihood and studio must be rebuilt.",
    es: "Tras la guerra y el cautiverio, Lettow regresa enfermo. Su vida profesional y su atelier deben reconstruirse.",
  },
  "Kirchen, Schulen, öffentliche Räume": { en: "Churches, schools, public spaces", es: "Iglesias, escuelas, espacios públicos" },
  "Neue Aufträge entstehen für Kirchen, Schulen und öffentliche Räume in Bremen und im norddeutschen Raum.": {
    en: "New commissions arise for churches, schools and public spaces in Bremen and northern Germany.",
    es: "Surgen nuevos encargos para iglesias, escuelas y espacios públicos en Bremen y el norte de Alemania.",
  },
  Familiengeschichte: { en: "Family history", es: "Historia familiar" },
  "Seine Tochter Julia verlässt das Elternhaus, um Architektur zu studieren. Später führen Familienreisen nach Costa Rica und Mittelamerika.": {
    en: "His daughter Julia leaves home to study architecture. Later, family journeys lead to Costa Rica and Central America.",
    es: "Su hija Julia deja la casa familiar para estudiar arquitectura. Más tarde, los viajes familiares conducen a Costa Rica y Centroamérica.",
  },
  "Tod am Geburtstag": { en: "Death on his birthday", es: "Muerte en su cumpleaños" },
  "Kurt Lettow stirbt am 24. April, seinem Geburtstag, im Alter von 84 Jahren.": {
    en: "Kurt Lettow dies on April 24, his birthday, at the age of 84.",
    es: "Kurt Lettow muere el 24 de abril, día de su cumpleaños, a los 84 años.",
  },
  "Nach 1992": { en: "After 1992", es: "Después de 1992" },
  "Dokumentation des Werkes": { en: "Documentation of the work", es: "Documentación de la obra" },
  "Julia van Wilpe beginnt, das Werk ihres Vaters neu zu erfassen, zu dokumentieren und sichtbar zu machen.": {
    en: "Julia van Wilpe begins to record, document and make her father's work visible anew.",
    es: "Julia van Wilpe comienza a registrar, documentar y hacer visible de nuevo la obra de su padre.",
  },
  "Die Sprache der Form": { en: "The Language of Form", es: "El lenguaje de la forma" },
  "Vom erzählerischen Detail zur reduzierten Präsenz.": {
    en: "From narrative detail to reduced presence.",
    es: "Del detalle narrativo a la presencia reducida.",
  },
  "In den 1930er Jahren experimentierte Kurt Lettow mit unterschiedlichen Formen und Motiven — zwischen naturalistischer und expressiver Darstellung.": {
    en: "In the 1930s, Kurt Lettow experimented with different forms and motifs, between naturalistic and expressive representation.",
    es: "En la década de 1930, Kurt Lettow experimentó con distintas formas y motivos, entre la representación naturalista y la expresiva.",
  },
  "Nach dem Krieg wurden vergrößerte Köpfe und große, ausdrucksstarke Augen typisch für seine Figuren. Die Details blieben sichtbar, doch die Formensprache wurde zunehmend klarer und ruhiger.": {
    en: "After the war, enlarged heads and large, expressive eyes became typical of his figures. The details remained visible, but the formal language became increasingly clearer and calmer.",
    es: "Después de la guerra, las cabezas ampliadas y los ojos grandes y expresivos se volvieron característicos de sus figuras. Los detalles seguían visibles, pero el lenguaje formal se hizo cada vez más claro y sereno.",
  },
  "In den Arbeiten der 1960er Jahre tragen Haltung, Gesichtsausdruck und Geste die Bedeutung der Figur. Lettows spätere Werke verdichten Inhalt in Form, Kontur und stiller Präsenz.": {
    en: "In the works of the 1960s, posture, facial expression and gesture carry the meaning of the figure. Lettow's later works condense content into form, contour and quiet presence.",
    es: "En las obras de la década de 1960, la postura, la expresión del rostro y el gesto sostienen el significado de la figura. Las obras tardías de Lettow condensan el contenido en forma, contorno y presencia silenciosa.",
  },
  "Werk und Archiv": { en: "Work and Archive", es: "Obra y archivo" },
  "Ein Werk in vielen Materialien.": { en: "A body of work in many materials.", es: "Una obra en muchos materiales." },
  "Lettows Arbeiten umfassen christliche und weltliche Werke, Reliefs, Plastiken, Portale und Wandgestaltungen. Sie zeigen ein feines Spiel von Licht und Schatten, eine reduzierte Formensprache und eine stille Kraft, die Raum für Betrachtung und Interpretation lässt.": {
    en: "Lettow's works include Christian and secular pieces, reliefs, sculptures, portals and wall designs. They reveal a subtle play of light and shadow, a reduced formal language and a quiet force that leaves room for contemplation and interpretation.",
    es: "Las obras de Lettow comprenden piezas cristianas y profanas, relieves, esculturas, portales y diseños murales. Muestran un delicado juego de luz y sombra, un lenguaje formal reducido y una fuerza silenciosa que deja espacio para la contemplación y la interpretación.",
  },
  Reliefs: { en: "Reliefs", es: "Relieves" },
  "Reliefs und Plastiken": { en: "Reliefs and Sculptures", es: "Relieves y esculturas" },
  Werkgruppe: { en: "Work group", es: "Grupo de obra" },
  "Werke zwischen Licht, Schatten und Raum.": { en: "Works between light, shadow and space.", es: "Obras entre luz, sombra y espacio." },
  Kirchenräume: { en: "Church spaces", es: "Espacios religiosos" },
  "Sakrale Orte": { en: "Sacred Places", es: "Lugares sagrados" },
  "Bremen und Norddeutschland": { en: "Bremen and northern Germany", es: "Bremen y norte de Alemania" },
  "Arbeiten für Kirchenräume in Bremen und im norddeutschen Raum.": {
    en: "Works for church spaces in Bremen and northern Germany.",
    es: "Trabajos para espacios religiosos en Bremen y el norte de Alemania.",
  },
  "Portale und Wandgestaltungen": { en: "Portals and Wall Designs", es: "Portales y diseños murales" },
  "Öffentlicher Raum": { en: "Public space", es: "Espacio público" },
  "Kunst im öffentlichen und architektonischen Raum.": { en: "Art in public and architectural space.", es: "Arte en el espacio público y arquitectónico." },
  "Licht und Fläche": { en: "Light and Surface", es: "Luz y superficie" },
  "Architekturbezogene Kunst": { en: "Art related to architecture", es: "Arte vinculado a la arquitectura" },
  "Reduzierte Formen, rhythmische Flächen und stille Präsenz.": {
    en: "Reduced forms, rhythmic surfaces and quiet presence.",
    es: "Formas reducidas, superficies rítmicas y presencia silenciosa.",
  },
  "Skizzen und Modelle": { en: "Sketches and Models", es: "Bocetos y modelos" },
  "Aus dem Atelier": { en: "From the Studio", es: "Desde el atelier" },
  Entwurfsprozess: { en: "Design process", es: "Proceso de diseño" },
  "Spuren des Entwurfsprozesses aus dem Atelier.": {
    en: "Traces of the design process from the studio.",
    es: "Huellas del proceso de diseño desde el atelier.",
  },
  Materialien: { en: "Materials", es: "Materiales" },
  "Stein, Keramik und Glas": { en: "Stone, Ceramics and Glass", es: "Piedra, cerámica y vidrio" },
  Werkstoffe: { en: "Materials", es: "Materiales" },
  "Ein Werk in vielen Materialien und handwerklichen Techniken.": {
    en: "A body of work in many materials and craft techniques.",
    es: "Una obra en muchos materiales y técnicas artesanales.",
  },
  "Das Atelier": { en: "The Studio", es: "El atelier" },
  "In meinen jungen Jahren war das Bild meines Vaters in seinem weißen Arbeitskittel Teil des täglichen Lebens.": {
    en: "In my younger years, the image of my father in his white work coat was part of daily life.",
    es: "En mis años jóvenes, la imagen de mi padre con su bata blanca de trabajo formaba parte de la vida cotidiana.",
  },
  "Sein Arbeitszimmer und das große, helle Atelier mit Blick in den weitläufigen Garten, auf Teich, Rhododendron und Wald, sind bis heute Teil unseres Hauses Am Querkamp in Bremen-Oberneuland.": {
    en: "His study and the large, bright studio overlooking the spacious garden, pond, rhododendrons and woods remain part of our house at Am Querkamp in Bremen-Oberneuland to this day.",
    es: "Su estudio y el amplio y luminoso atelier con vista al gran jardín, al estanque, los rododendros y el bosque siguen formando parte de nuestra casa en Am Querkamp, Bremen-Oberneuland.",
  },
  "Hier roch es nach Holz, feuchtem Ton, Gips und Tabakrauch. Es gab Drehböcke, Staffeleien, Arbeitsbänke, Tonkisten, Werkzeuge aller Art - und eine Vielzahl von Modellen, Entwürfen und Skizzen.": {
    en: "Here it smelled of wood, damp clay, plaster and tobacco smoke. There were turntables, easels, workbenches, clay boxes, tools of every kind, and a multitude of models, drafts and sketches.",
    es: "Aquí olía a madera, barro húmedo, yeso y humo de tabaco. Había caballetes giratorios, atriles, bancos de trabajo, cajas de barro, herramientas de todo tipo y una gran cantidad de modelos, proyectos y bocetos.",
  },
  "Das Buch": { en: "The Book", es: "El libro" },
  "Kurt Lettow, Bildhauer, 1908-1992 Über die Grenzen Bremens hinaus": {
    en: "Kurt Lettow, Sculptor, 1908-1992 Beyond the borders of Bremen",
    es: "Kurt Lettow, escultor, 1908-1992 Más allá de los límites de Bremen",
  },
  "Das Buch über das Lebenswerk des Bildhauers Kurt Lettow umfasst 240 Seiten, mehr als 400 farbige Abbildungen und erscheint als Hardcover.": {
    en: "The book on the life work of sculptor Kurt Lettow comprises 240 pages, more than 400 color illustrations and is published as a hardcover.",
    es: "El libro sobre la obra de vida del escultor Kurt Lettow tiene 240 páginas, más de 400 ilustraciones en color y se publica en tapa dura.",
  },
  "Es zeigt das große christliche wie weltliche Werk Lettows, das im gesamten norddeutschen Raum zu finden ist. Mit Beiträgen aus Bremen von Kunsthistorikern, Denkmalpflegern, Pastoren und weiteren Fachleuten eröffnet es einen umfassenden Blick auf einen Künstler, dessen Werk weit über die Grenzen Bremens hinausreicht.": {
    en: "It presents Lettow's extensive Christian and secular work, found throughout northern Germany. With contributions from Bremen by art historians, heritage conservators, pastors and other specialists, it opens a comprehensive view of an artist whose work reaches far beyond Bremen.",
    es: "Presenta la amplia obra cristiana y profana de Lettow, presente en todo el norte de Alemania. Con aportes desde Bremen de historiadores del arte, conservadores patrimoniales, pastores y otros especialistas, ofrece una mirada amplia a un artista cuya obra llega mucho más allá de Bremen.",
  },
  "Publikation ansehen": { en: "View publication", es: "Ver publicación" },
  "240 Seiten": { en: "240 pages", es: "240 páginas" },
  "Über 400 farbige Abbildungen": { en: "More than 400 color illustrations", es: "Más de 400 ilustraciones en color" },
  Hardcover: { en: "Hardcover", es: "Tapa dura" },
  "Mit Beiträgen von Dr. Frank Laukötter, Dr. Arie Hartog, Prof. Dr. Georg Skalecki, Pastor Kunze, Rebekka Schwiddessen und weiteren Fachleuten.": {
    en: "With contributions by Dr. Frank Laukötter, Dr. Arie Hartog, Prof. Dr. Georg Skalecki, Pastor Kunze, Rebekka Schwiddessen and other specialists.",
    es: "Con contribuciones de Dr. Frank Laukötter, Dr. Arie Hartog, Prof. Dr. Georg Skalecki, Pastor Kunze, Rebekka Schwiddessen y otros especialistas.",
  },
  "Das wiederentdeckte Werk": { en: "The Rediscovered Work", es: "La obra redescubierta" },
  "Ich wusste, dass mein Vater ein bekannter und gefragter Künstler war. Doch das Ausmaß, die Vielfalt und die Größe seines Werkes wurden mir erst später bewusst.": {
    en: "I knew that my father was a well-known and sought-after artist. But the scale, diversity and magnitude of his work only became clear to me later.",
    es: "Sabía que mi padre era un artista reconocido y solicitado. Pero la dimensión, la diversidad y la grandeza de su obra solo se hicieron evidentes para mí más tarde.",
  },
  "Heute betrete ich sein Atelier mit Andacht - und mit einer unstillbaren Neugier. Ich versuche, sein Werk zu erfassen, zu dokumentieren und sichtbar zu machen.": {
    en: "Today I enter his studio with reverence and with an insatiable curiosity. I try to record, document and make his work visible.",
    es: "Hoy entro en su atelier con recogimiento y con una curiosidad insaciable. Intento registrar, documentar y hacer visible su obra.",
  },
  "Tochter des Bildhauers": { en: "Daughter of the sculptor", es: "Hija del escultor" },
  "Informationen, Hinweise und Kommentare zum Werk von Kurt Lettow sind willkommen.": {
    en: "Information, references and comments on the work of Kurt Lettow are welcome.",
    es: "Información, referencias y comentarios sobre la obra de Kurt Lettow son bienvenidos.",
  },
  Architektin: { en: "Architect", es: "Arquitecta" },
  "Tochter des Bildhauers Kurt Lettow": { en: "Daughter of the sculptor Kurt Lettow", es: "Hija del escultor Kurt Lettow" },
  Deutschland: { en: "Germany", es: "Alemania" },
  "Bildhauer, 1908-1992. Über die Grenzen Bremens hinaus.": {
    en: "Sculptor, 1908-1992. Beyond the borders of Bremen.",
    es: "Escultor, 1908-1992. Más allá de los límites de Bremen.",
  },
  "Dokumentation des Werkes durch Prof. Julia van Wilpe, geb. Lettow.": {
    en: "Documentation of the work by Prof. Julia van Wilpe, née Lettow.",
    es: "Documentación de la obra por Prof. Julia van Wilpe, nacida Lettow.",
  },
  "Navigation im Footer": { en: "Footer navigation", es: "Navegación del pie de página" },
  "Eine wachsende Sammlung von Werkgruppen, Fotografien, Dokumenten und Spuren aus dem Atelier.": {
    en: "A growing collection of work groups, photographs, documents and traces from the studio.",
    es: "Una colección en crecimiento de grupos de obra, fotografías, documentos y huellas del atelier.",
  },
  "Visuelle Dokumentation": { en: "Visual Documentation", es: "Documentación visual" },
  "Bildmaterial, Werkgruppen und Archivspuren werden hier schrittweise ergänzt und dokumentiert.": {
    en: "Images, work groups and archival traces are gradually added and documented here.",
    es: "Aquí se agregan y documentan gradualmente imágenes, grupos de obra y huellas de archivo.",
  },
  Publikation: { en: "Publication", es: "Publicación" },
  Umfang: { en: "Scope", es: "Alcance" },
  "240 Seiten, mehr als 400 farbige Abbildungen, Hardcover.": {
    en: "240 pages, more than 400 color illustrations, hardcover.",
    es: "240 páginas, más de 400 ilustraciones en color, tapa dura.",
  },
  Beiträge: { en: "Contributions", es: "Contribuciones" },
  "Die Publikation macht ein Werk sichtbar, dessen Umfang, Vielfalt und Präsenz weit über Bremen hinausreichen.": {
    en: "The publication makes visible a body of work whose scope, diversity and presence reach far beyond Bremen.",
    es: "La publicación hace visible una obra cuyo alcance, diversidad y presencia llegan mucho más allá de Bremen.",
  },
  Chronologie: { en: "Chronology", es: "Cronología" },
  "Stationen eines Lebens zwischen Handwerk, Kunst, Neubeginn und öffentlichem Raum.": {
    en: "Stations of a life between craft, art, new beginnings and public space.",
    es: "Etapas de una vida entre oficio, arte, nuevo comienzo y espacio público.",
  },
  "Hommage und Wiederentdeckung": { en: "Homage and Rediscovery", es: "Homenaje y redescubrimiento" },
  Bremerhaven: { en: "Bremerhaven", es: "Bremerhaven" },
  "Als seine Tochter Julia Lettow van Wilpe im Sommer 2010 in Costa Rica von den Abrissplänen einer Kirche in Bremerhaven erfuhr - und davon, dass ein großes Relief ihres Vaters verschwinden sollte - begann eine Suche.": {
    en: "When his daughter, Julia Lettow van Wilpe, learned in Costa Rica in the summer of 2010 about the planned demolition of a church in Bremerhaven, and that a large relief by her father was to disappear, a search began.",
    es: "Cuando su hija, Julia Lettow van Wilpe, supo en Costa Rica, en el verano de 2010, de los planes de demolición de una iglesia en Bremerhaven, y de que un gran relieve de su padre podía desaparecer, comenzó una búsqueda.",
  },
  "Aus diesem Moment entstand der Wunsch, die erhaltenen Werke Kurt Lettows aufzuspüren, zu fotografieren, zu ordnen und sichtbar zu machen. Eine zweijährige Reise durch Städte und Dörfer Norddeutschlands begann: zu Kirchen, Schulen, Plätzen, Portalen und majestätischen Wandreliefs.": {
    en: "From that moment came the wish to trace, photograph, order and make visible the surviving works of Kurt Lettow. A two-year journey through the cities and villages of northern Germany began: to churches, schools, squares, portals and majestic wall reliefs.",
    es: "De ese momento nació el deseo de localizar, fotografiar, ordenar y hacer visibles las obras conservadas de Kurt Lettow. Comenzó un viaje de dos años por ciudades y pueblos del norte de Alemania: hacia iglesias, escuelas, plazas, portales y majestuosos relieves murales.",
  },
  "Bald wurde Kurt Lettow weit über Bremen hinaus bekannt. Seine religiösen und weltlichen Werke sind im ganzen norddeutschen Raum zu finden - in Kirchen, Schulen, öffentlichen Gebäuden, auf Plätzen und in privaten Sammlungen.": {
    en: "Kurt Lettow soon became known far beyond Bremen. His religious and secular works can be found throughout northern Germany, in churches, schools, public buildings, squares and private collections.",
    es: "Kurt Lettow pronto fue conocido mucho más allá de Bremen. Sus obras religiosas y profanas se encuentran en todo el norte de Alemania, en iglesias, escuelas, edificios públicos, plazas y colecciones privadas.",
  },
  "Mit großer Ausdruckskraft und handwerklichem Können arbeitete er unermüdlich in unterschiedlichen Materialien: Ton, Holz, Stein, Keramik, Sgraffito, Emaille, Mosaik, Gips, Glas und Metall. Besonders deutlich wird sein Gespür für Relief, Raum und Architektur: seine Werke entfalten ihre Wirkung nicht isoliert, sondern im Dialog mit dem Ort.": {
    en: "With great expressive force and craftsmanship, he worked tirelessly in many materials: clay, wood, stone, ceramics, sgraffito, enamel, mosaic, plaster, glass and metal. His feeling for relief, space and architecture is especially clear: his works do not unfold in isolation, but in dialogue with their place.",
    es: "Con gran fuerza expresiva y dominio artesanal, trabajó incansablemente en diversos materiales: barro, madera, piedra, cerámica, esgrafiado, esmalte, mosaico, yeso, vidrio y metal. Su sensibilidad para el relieve, el espacio y la arquitectura resulta especialmente clara: sus obras no actúan aisladas, sino en diálogo con el lugar.",
  },
  "Von Bremen nach Costa Rica, von der Erinnerung zur Dokumentation.": {
    en: "From Bremen to Costa Rica, from memory to documentation.",
    es: "De Bremen a Costa Rica, de la memoria a la documentación.",
  },
  "Across generations": { en: "Across generations", es: "A través de generaciones" },
  "Als Julia van Wilpe später nach Costa Rica zog, blieben die Reisen nach Mittelamerika Teil der Familiengeschichte. Doch die Spur des Werkes führte sie immer wieder zurück nach Norddeutschland - zu Kirchen, Schulen, Plätzen und Wandreliefs ihres Vaters.": {
    en: "When Julia van Wilpe later moved to Costa Rica, journeys to Central America remained part of the family history. Yet the trail of the work led her again and again back to northern Germany, to her father's churches, schools, squares and wall reliefs.",
    es: "Cuando Julia van Wilpe se mudó más tarde a Costa Rica, los viajes a Centroamérica siguieron formando parte de la historia familiar. Pero la huella de la obra la llevó una y otra vez de regreso al norte de Alemania, a las iglesias, escuelas, plazas y relieves murales de su padre.",
  },
  "Aus der Distanz entstand ein neuer Blick: auf das Atelier, die Modelle, die Fotografien und die Orte, an denen das Werk weiterlebt.": {
    en: "Distance opened a new perspective: on the studio, the models, the photographs and the places where the work continues to live.",
    es: "Desde la distancia surgió una nueva mirada: sobre el atelier, los modelos, las fotografías y los lugares donde la obra sigue viva.",
  },
  "Hier roch es nach Holz, feuchtem Ton, Gips und Tabakrauch. Es gab Drehböcke, Staffeleien, Arbeitsbänke, Tonkisten, eine Arbeitswand aus Holz, Werkzeuge aller Art - und eine Vielzahl von Modellen, Entwürfen und Skizzen.": {
    en: "Here it smelled of wood, damp clay, plaster and tobacco smoke. There were turntables, easels, workbenches, clay boxes, a wooden working wall, tools of every kind, and a multitude of models, drafts and sketches.",
    es: "Aquí olía a madera, barro húmedo, yeso y humo de tabaco. Había caballetes giratorios, atriles, bancos de trabajo, cajas de barro, una pared de trabajo de madera, herramientas de todo tipo y una gran cantidad de modelos, proyectos y bocetos.",
  },
  "Ich wusste, dass er ein bekannter und gefragter Künstler war. Doch das Ausmaß, die Vielfalt und die Größe seines Werkes wurden mir erst später bewusst.": {
    en: "I knew he was a well-known and sought-after artist. But the scale, diversity and magnitude of his work only became clear to me later.",
    es: "Sabía que era un artista conocido y solicitado. Pero la dimensión, la diversidad y la grandeza de su obra solo se hicieron evidentes para mí más tarde.",
  },
  Plastiken: { en: "Sculptures", es: "Esculturas" },
  Gipsmodelle: { en: "Plaster models", es: "Modelos de yeso" },
  Dokumente: { en: "Documents", es: "Documentos" },
  Sgraffito: { en: "Sgraffito", es: "Esgrafiado" },
  Emaille: { en: "Enamel", es: "Esmalte" },
  Mosaik: { en: "Mosaic", es: "Mosaico" },
  Glas: { en: "Glass", es: "Vidrio" },
  Metall: { en: "Metal", es: "Metal" },
  "Der Wirkungskreis des Künstlers reicht weit über die Grenzen Bremens hinaus. Seine großen religiösen und weltlichen Werke finden sich im gesamten norddeutschen Raum.": {
    en: "The artist's sphere of influence reaches far beyond the borders of Bremen. His major religious and secular works are found throughout northern Germany.",
    es: "El ámbito de influencia del artista llega mucho más allá de los límites de Bremen. Sus grandes obras religiosas y profanas se encuentran en todo el norte de Alemania.",
  },
  "Man entdeckt darin den persönlichen Stil eines Bildhauers mit großer Begabung für Reliefs und einem außergewöhnlichen Verständnis für die Fernwirkung von Plastik im architektonischen Zusammenhang.": {
    en: "In them one discovers the personal style of a sculptor with a great gift for reliefs and an exceptional understanding of the distant effect of sculpture within architectural settings.",
    es: "En ellas se descubre el estilo personal de un escultor con gran talento para los relieves y una comprensión excepcional del efecto a distancia de la escultura en el contexto arquitectónico.",
  },
  "Mit großer Ausdruckskraft und handwerklichem Können arbeitete Lettow bis ins hohe Alter in verschiedenen Materialien: Ton, Holz, Stein, Keramik, Sgraffito, Emaille, Mosaik, Gips, Glas und Metall.": {
    en: "With great expressive force and craftsmanship, Lettow worked into old age in various materials: clay, wood, stone, ceramics, sgraffito, enamel, mosaic, plaster, glass and metal.",
    es: "Con gran fuerza expresiva y dominio artesanal, Lettow trabajó hasta edad avanzada en distintos materiales: barro, madera, piedra, cerámica, esgrafiado, esmalte, mosaico, yeso, vidrio y metal.",
  },
  "Die erhaltenen Gipsmodelle geben einen ungewöhnlichen Einblick in die Entstehung dieses Werkes. Der Nachlass Kurt Lettows enthält nahezu alle Arbeiten in Modellform.": {
    en: "The surviving plaster models offer an unusual insight into the creation of this body of work. Kurt Lettow's estate contains nearly all works in model form.",
    es: "Los modelos de yeso conservados ofrecen una mirada poco común al origen de esta obra. El legado de Kurt Lettow contiene casi todos los trabajos en forma de modelo.",
  },
  "Diese Modelle zeigen unterschiedliche Phasen: erste Entwürfe zu Komposition, Proportion und räumlichem Zusammenhang, aber auch Modelle, die mithilfe einer Punktiermaschine in Holz oder Stein übertragen wurden.": {
    en: "These models show different phases: first drafts for composition, proportion and spatial context, but also models that were transferred into wood or stone with the help of a pointing machine.",
    es: "Estos modelos muestran distintas fases: primeros estudios de composición, proporción y relación espacial, pero también modelos trasladados a madera o piedra mediante una máquina de puntos.",
  },
  "Fotografien, Skizzen und zahlreiche Dokumente machen den Weg vom Auftrag bis zur Ausführung nachvollziehbar und vermitteln einen Eindruck von den Bedingungen, unter denen Lettow arbeitete.": {
    en: "Photographs, sketches and numerous documents make the path from commission to execution traceable and convey an impression of the conditions under which Lettow worked.",
    es: "Fotografías, bocetos y numerosos documentos permiten seguir el camino desde el encargo hasta la ejecución y transmiten una impresión de las condiciones en las que trabajaba Lettow.",
  },
  "Seine Werke ziehen die Menschen durch ihren klaren, verinnerlichten Stil in ihren Bann.": {
    en: "His works captivate people through their clear, inwardly concentrated style.",
    es: "Sus obras atraen por su estilo claro e interiorizado.",
  },
  "Werke zwischen Licht, Schatten, Raum und architektonischem Zusammenhang.": {
    en: "Works between light, shadow, space and architectural context.",
    es: "Obras entre luz, sombra, espacio y contexto arquitectónico.",
  },
  "Religiöse Arbeiten für Kirchenräume in Bremen und im norddeutschen Raum.": {
    en: "Religious works for church spaces in Bremen and northern Germany.",
    es: "Trabajos religiosos para espacios eclesiásticos en Bremen y el norte de Alemania.",
  },
  "Kunst im öffentlichen Raum, an Fassaden, Portalen und Wandflächen.": {
    en: "Art in public space, on facades, portals and wall surfaces.",
    es: "Arte en el espacio público, en fachadas, portales y superficies murales.",
  },
  "Reduzierte Formen, rhythmische Flächen und eine stille, klare Präsenz.": {
    en: "Reduced forms, rhythmic surfaces and a quiet, clear presence.",
    es: "Formas reducidas, superficies rítmicas y una presencia silenciosa y clara.",
  },
  "Modelle und Entwürfe": { en: "Models and Drafts", es: "Modelos y proyectos" },
  "Gipsmodelle, Skizzen und Arbeitsmodelle aus dem Nachlass.": {
    en: "Plaster models, sketches and working models from the estate.",
    es: "Modelos de yeso, bocetos y modelos de trabajo procedentes del legado.",
  },
  "Fotografien und Archiv": { en: "Photographs and Archive", es: "Fotografías y archivo" },
  "Dokumente, Fotografien und Spuren vom Auftrag bis zur Ausführung.": {
    en: "Documents, photographs and traces from commission to execution.",
    es: "Documentos, fotografías y huellas desde el encargo hasta la ejecución.",
  },
  "Dokumente · Werkstoffe": { en: "Documents · Materials", es: "Documentos · Materiales" },
  "Gipsmodelle · Entwurfsprozess": { en: "Plaster models · Design process", es: "Modelos de yeso · Proceso de diseño" },
  "Kirchenräume · Bremen und Norddeutschland": { en: "Church spaces · Bremen and northern Germany", es: "Espacios religiosos · Bremen y norte de Alemania" },
  "Portale · Öffentlicher Raum": { en: "Portals · Public space", es: "Portales · Espacio público" },
  "Reliefs · Werkgruppe": { en: "Reliefs · Work group", es: "Relieves · Grupo de obra" },
  "Wandreliefs · Architekturbezogene Kunst": { en: "Wall reliefs · Architecture-related art", es: "Relieves murales · Arte vinculado a la arquitectura" },
  "Aus der Suche nach den erhaltenen Werken entstand das Buch „Kurt Lettow, Bildhauer, 1908-1992. Über die Grenzen Bremens hinaus“.": {
    en: "The search for the surviving works gave rise to the book \"Kurt Lettow, Sculptor, 1908-1992. Beyond the borders of Bremen\".",
    es: "De la búsqueda de las obras conservadas nació el libro «Kurt Lettow, escultor, 1908-1992. Más allá de los límites de Bremen».",
  },
  "Es umfasst 240 Seiten und 400 farbige Abbildungen und erschien begleitend zur Ausstellung „Nachkriegskirchenkunst Ästhetik: Lettow“ in der Kulturkirche St. Stephani in Bremen, die vom 7. Juni bis zum 26. August 2012 gezeigt wurde.": {
    en: "It comprises 240 pages and 400 color illustrations and was published to accompany the exhibition \"Postwar Church Art Aesthetics: Lettow\" at Kulturkirche St. Stephani in Bremen, shown from June 7 to August 26, 2012.",
    es: "Comprende 240 páginas y 400 ilustraciones en color, y apareció como publicación vinculada a la exposición «Arte sacro de posguerra. Estética: Lettow» en la Kulturkirche St. Stephani de Bremen, presentada del 7 de junio al 26 de agosto de 2012.",
  },
  "Das Buch dokumentiert das große christliche wie weltliche Werk Lettows im norddeutschen Raum und macht die Vielfalt seiner Materialien, Orte und Formen sichtbar.": {
    en: "The book documents Lettow's major Christian and secular work in northern Germany and makes visible the diversity of his materials, places and forms.",
    es: "El libro documenta la gran obra cristiana y profana de Lettow en el norte de Alemania y hace visible la diversidad de sus materiales, lugares y formas.",
  },
  "400 farbige Abbildungen": { en: "400 color illustrations", es: "400 ilustraciones en color" },
  "Rasch-Verlag, 2012": { en: "Rasch Verlag, 2012", es: "Rasch-Verlag, 2012" },
  "Mit Beiträgen von Dr. Frank Laukötter, Dr. Arie Hartog, Prof. Dr. Georg Skalecki, Pastor Achim Kunze, Rebekka Schwiddessen und weiteren Fachleuten.": {
    en: "With contributions by Dr. Frank Laukötter, Dr. Arie Hartog, Prof. Dr. Georg Skalecki, Pastor Achim Kunze, Rebekka Schwiddessen and other specialists.",
    es: "Con contribuciones de Dr. Frank Laukötter, Dr. Arie Hartog, Prof. Dr. Georg Skalecki, Pastor Achim Kunze, Rebekka Schwiddessen y otros especialistas.",
  },
  "Die Ausstellung": { en: "The Exhibition", es: "La exposición" },
  "Nachkriegskirchenkunst Ästhetik: Lettow": {
    en: "Postwar Church Art Aesthetics: Lettow",
    es: "Arte sacro de posguerra. Estética: Lettow",
  },
  "Vom 7. Juni bis zum 26. August 2012 wurde die Ausstellung „Nachkriegskirchenkunst Ästhetik: Lettow“ in der Kulturkirche St. Stephani in Bremen gezeigt.": {
    en: "From June 7 to August 26, 2012, the exhibition \"Postwar Church Art Aesthetics: Lettow\" was shown at Kulturkirche St. Stephani in Bremen.",
    es: "Del 7 de junio al 26 de agosto de 2012 se presentó la exposición «Arte sacro de posguerra. Estética: Lettow» en la Kulturkirche St. Stephani de Bremen.",
  },
  "Sie war dem Werk des Bremer Bildhauers Kurt Lettow gewidmet und wurde vom Team des Gerhard-Marcks-Hauses unterstützt, von Direktor Dr. Arie Hartog konzipiert und von der Kunsthistorikerin Rebekka Schwiddessen kuratiert.": {
    en: "It was dedicated to the work of Bremen sculptor Kurt Lettow and was supported by the team of the Gerhard Marcks House, conceived by director Dr. Arie Hartog and curated by art historian Rebekka Schwiddessen.",
    es: "Estuvo dedicada a la obra del escultor de Bremen Kurt Lettow y contó con el apoyo del equipo del Gerhard-Marcks-Haus; fue concebida por su director, Dr. Arie Hartog, y curada por la historiadora del arte Rebekka Schwiddessen.",
  },
  "Möglich wurde sie durch Pastor Achim Kunze, Projektleiter der Kulturkirche St. Stephani, und sein Team.": {
    en: "It was made possible by Pastor Achim Kunze, project director of Kulturkirche St. Stephani, and his team.",
    es: "Fue posible gracias al pastor Achim Kunze, director del proyecto de la Kulturkirche St. Stephani, y a su equipo.",
  },
  "Sieben Originalwerke gaben einen Überblick über verschiedene Werkphasen von 1931 bis 1964. Ergänzt wurden sie durch zahlreiche Gipsmodelle und Arbeitsmodelle, die die Entwicklung des Bildhauers über fünf Jahrzehnte sichtbar machten.": {
    en: "Seven original works offered an overview of different creative phases from 1931 to 1964. They were complemented by numerous plaster and working models that made five decades of the sculptor's development visible.",
    es: "Siete obras originales ofrecieron una visión de distintas fases creativas entre 1931 y 1964. Se complementaron con numerosos modelos de yeso y modelos de trabajo que hicieron visible el desarrollo del escultor a lo largo de cinco décadas.",
  },
  "Lettow steht für eine Generation von Künstlern, die in den vergangenen Jahrzehnten vielfach in Vergessenheit geraten ist.": {
    en: "Lettow represents a generation of artists that has often fallen into oblivion in recent decades.",
    es: "Lettow representa a una generación de artistas que en las últimas décadas ha caído muchas veces en el olvido.",
  },
  "Ich wusste, dass mein Vater ein bekannter und gefragter Künstler war und dass seine Arbeiten bewundert wurden.": {
    en: "I knew that my father was a well-known and sought-after artist and that his works were admired.",
    es: "Sabía que mi padre era un artista conocido y solicitado, y que sus trabajos eran admirados.",
  },
  "Doch das Ausmaß, die Vielfalt und die Größe seines Werkes wurden mir erst bewusst, als er nicht mehr an unserer Seite war.": {
    en: "But the scale, diversity and magnitude of his work only became clear to me when he was no longer at our side.",
    es: "Pero la dimensión, la diversidad y la grandeza de su obra solo se hicieron evidentes para mí cuando él ya no estaba a nuestro lado.",
  },
  "Heute betrete ich sein Atelier mit Andacht - und diese Andacht verwandelt sich bald in eine unstillbare Neugier.": {
    en: "Today I enter his studio with reverence, and that reverence soon turns into an insatiable curiosity.",
    es: "Hoy entro en su atelier con recogimiento, y ese recogimiento pronto se transforma en una curiosidad insaciable.",
  },
  "Ich versuche, sein Werk zu erfassen, zu dokumentieren und sichtbar zu machen. Dabei wächst in mir eine tiefe Bewunderung für meinen Vater, den Künstler.": {
    en: "I try to record, document and make his work visible. In doing so, a deep admiration grows in me for my father, the artist.",
    es: "Intento registrar, documentar y hacer visible su obra. En ese proceso crece en mí una profunda admiración por mi padre, el artista.",
  },
  "Der Beginn der Suche": { en: "The Beginning of the Search", es: "El inicio de la búsqueda" },
  "Ausstellung und Buch": { en: "Exhibition and Book", es: "Exposición y libro" },
  "Kurt Lettow wird in Bremen geboren. Die Stadt, ihre Handwerke und ihr öffentlicher Raum werden später zu wichtigen Bezugspunkten seines Lebens und Arbeitens.": {
    en: "Kurt Lettow is born in Bremen. The city, its crafts and its public space later become important points of reference for his life and work.",
    es: "Kurt Lettow nace en Bremen. La ciudad, sus oficios y su espacio público se convierten más tarde en puntos de referencia importantes para su vida y su trabajo.",
  },
  "Mit 22 Jahren erhält Lettow seinen ersten großen Auftrag: einen Orgelprospekt aus Lindenholz für die St. Ulrichkirche in Halle, mit sechs Figuren und ornamentaler Gestaltung.": {
    en: "At the age of 22, Lettow receives his first major commission: a limewood organ case for St. Ulrich's Church in Halle, with six figures and ornamental design.",
    es: "A los 22 años, Lettow recibe su primer gran encargo: una caja de órgano en madera de tilo para la iglesia de San Ulrico en Halle, con seis figuras y diseño ornamental.",
  },
  "Es folgen ein überlebensgroßes Kruzifix für den neuen katholischen Friedhof in Delmenhorst, eine lebensgroße heilige Elisabeth für das Arbeitsamt in Vechta sowie weitere Aufträge und Restaurierungen.": {
    en: "An oversized crucifix for the new Catholic cemetery in Delmenhorst follows, along with a life-size Saint Elizabeth for the employment office in Vechta and further commissions and restorations.",
    es: "Le siguen un crucifijo de tamaño superior al natural para el nuevo cementerio católico de Delmenhorst, una Santa Isabel de tamaño natural para la oficina de empleo de Vechta y otros encargos y restauraciones.",
  },
  "Nach Krieg und englischer Gefangenschaft kehrt Lettow Ende 1945 krank zurück. Existenz, Atelier und Arbeitsgrundlagen müssen neu aufgebaut werden.": {
    en: "After the war and British captivity, Lettow returns ill at the end of 1945. His livelihood, studio and working foundations have to be rebuilt.",
    es: "Tras la guerra y el cautiverio inglés, Lettow regresa enfermo a finales de 1945. Su vida profesional, el atelier y las bases de trabajo deben reconstruirse.",
  },
  "Neue Aufträge entstehen für katholische Kirchen in Delmenhorst, Düsternort, Cloppenburg, Vechta und Oldenburg sowie für Schulen, evangelische Kirchen und öffentliche Räume in Bremen.": {
    en: "New commissions arise for Catholic churches in Delmenhorst, Düsternort, Cloppenburg, Vechta and Oldenburg, as well as for schools, Protestant churches and public spaces in Bremen.",
    es: "Surgen nuevos encargos para iglesias católicas en Delmenhorst, Düsternort, Cloppenburg, Vechta y Oldenburg, así como para escuelas, iglesias evangélicas y espacios públicos en Bremen.",
  },
  "Seine Tochter Julia verlässt das Elternhaus, um Architektur zu studieren. Später führen Familienreisen nach Costa Rica und Mittelamerika, während das Werk in Norddeutschland weiter seine Spuren hinterlässt.": {
    en: "His daughter Julia leaves the family home to study architecture. Later, family journeys lead to Costa Rica and Central America, while the work continues to leave its traces in northern Germany.",
    es: "Su hija Julia deja la casa familiar para estudiar arquitectura. Más tarde, los viajes familiares conducen a Costa Rica y Centroamérica, mientras la obra sigue dejando huellas en el norte de Alemania.",
  },
  "Kurt Lettow stirbt am 24. April, seinem Geburtstag, im Alter von 84 Jahren. Sein Atelier, die Modelle und viele Dokumente bleiben als konzentrierter Nachlass erhalten.": {
    en: "Kurt Lettow dies on April 24, his birthday, at the age of 84. His studio, the models and many documents remain as a concentrated estate.",
    es: "Kurt Lettow muere el 24 de abril, día de su cumpleaños, a los 84 años. Su atelier, los modelos y muchos documentos permanecen como un legado concentrado.",
  },
  "Julia van Wilpe erfährt in Costa Rica von den Abrissplänen einer Kirche in Bremerhaven und dem gefährdeten Relief ihres Vaters. Die systematische Suche nach den erhaltenen Werken beginnt.": {
    en: "In Costa Rica, Julia van Wilpe learns of the planned demolition of a church in Bremerhaven and of her father's endangered relief. The systematic search for the surviving works begins.",
    es: "En Costa Rica, Julia van Wilpe se entera de los planes de demolición de una iglesia en Bremerhaven y del relieve amenazado de su padre. Comienza la búsqueda sistemática de las obras conservadas.",
  },
  "Julia van Wilpe erfährt in Costa Rica von den Abrissplänen einer Kirche in Bremerhaven und dem gefährdeten Relief ihres Vaters. Daraus entsteht die systematische Suche nach den erhaltenen Werken.": {
    en: "In Costa Rica, Julia van Wilpe learns of the planned demolition of a church in Bremerhaven and of her father's endangered relief. From this emerges the systematic search for the surviving works.",
    es: "En Costa Rica, Julia van Wilpe se entera de los planes de demolición de una iglesia en Bremerhaven y del relieve amenazado de su padre. De ahí nace la búsqueda sistemática de las obras conservadas.",
  },
  "Die Ausstellung \"Nachkriegskirchenkunst Ästhetik: Lettow\" wird in der Kulturkirche St. Stephani in Bremen gezeigt. Begleitend erscheint das Buch über sein Lebenswerk.": {
    en: "The exhibition \"Postwar Church Art Aesthetics: Lettow\" is shown at Kulturkirche St. Stephani in Bremen. The book on his life work appears alongside it.",
    es: "La exposición «Arte sacro de posguerra. Estética: Lettow» se presenta en la Kulturkirche St. Stephani de Bremen. De forma paralela aparece el libro sobre su obra de vida.",
  },
  "Die Ausstellung \"Nachkriegskirchenkunst Ästhetik: Lettow\" wird in der Kulturkirche St. Stephani in Bremen gezeigt. Begleitend erscheint das Buch über sein Lebenswerk und seinen Wirkungskreis im norddeutschen Raum.": {
    en: "The exhibition \"Postwar Church Art Aesthetics: Lettow\" is shown at Kulturkirche St. Stephani in Bremen. The book on his life work and sphere of influence in northern Germany appears alongside it.",
    es: "La exposición «Arte sacro de posguerra. Estética: Lettow» se presenta en la Kulturkirche St. Stephani de Bremen. De forma paralela aparece el libro sobre su obra de vida y su ámbito de influencia en el norte de Alemania.",
  },
  "Das Buch zeigt das christliche wie weltliche Werk Lettows, das im gesamten norddeutschen Raum zu finden ist.": {
    en: "The book presents Lettow's Christian and secular work, found throughout northern Germany.",
    es: "El libro presenta la obra cristiana y profana de Lettow, presente en todo el norte de Alemania.",
  },
  "Kurt Lettow, Bildhauer, 1908-1992": {
    en: "Kurt Lettow, Sculptor, 1908-1992",
    es: "Kurt Lettow, escultor, 1908-1992",
  },
  "Kurt Lettow, Bildhauer, 1908-1992. Über die Grenzen Bremens hinaus.": {
    en: "Kurt Lettow, Sculptor, 1908-1992. Beyond the borders of Bremen.",
    es: "Kurt Lettow, escultor, 1908-1992. Más allá de los límites de Bremen.",
  },
  "Julia van Wilpe, geb. Lettow": { en: "Julia van Wilpe, née Lettow", es: "Julia van Wilpe, nacida Lettow" },
  "Prof. Julia van Wilpe, geb. Lettow": {
    en: "Prof. Julia van Wilpe, née Lettow",
    es: "Prof. Julia van Wilpe, nacida Lettow",
  },
  Skizzen: { en: "Sketches", es: "Bocetos" },
  "Am Querkamp 59": { en: "Am Querkamp 59", es: "Am Querkamp 59" },
  "Apartado 373": { en: "P.O. Box 373", es: "Apartado 373" },
  "Universidad Autónoma de Centroamérica, UACA": {
    en: "Autonomous University of Central America, UACA",
    es: "Universidad Autónoma de Centroamérica, UACA",
  },
  "© 2026 Kurt Lettow.": { en: "© 2026 Kurt Lettow.", es: "© 2026 Kurt Lettow." },
};

const attributeTranslations: Record<string, Translation> = {
  "Startseite Kurt Lettow": { en: "Kurt Lettow homepage", es: "Página de inicio de Kurt Lettow" },
  "Navigation öffnen": { en: "Open navigation", es: "Abrir navegación" },
  Hauptnavigation: { en: "Main navigation", es: "Navegación principal" },
  "Sprache auswählen": { en: "Select language", es: "Seleccionar idioma" },
  "Weiter zur Einführung": { en: "Continue to the introduction", es: "Continuar a la introducción" },
  "Thematische Schwerpunkte": { en: "Thematic focus areas", es: "Ejes temáticos" },
  "Kurt Lettow neben einer seiner bildhauerischen Arbeiten": {
    en: "Kurt Lettow beside one of his sculptural works",
    es: "Kurt Lettow junto a una de sus obras escultóricas",
  },
  "Werk von Kurt Lettow im architektonischen Raum": {
    en: "Work by Kurt Lettow in an architectural space",
    es: "Obra de Kurt Lettow en un espacio arquitectónico",
  },
  "Archivdokument zum Lebenswerk von Kurt Lettow": {
    en: "Archive document on Kurt Lettow's life work",
    es: "Documento de archivo sobre la obra de vida de Kurt Lettow",
  },
  "Detail einer bildhauerischen Arbeit von Kurt Lettow": {
    en: "Detail of a sculptural work by Kurt Lettow",
    es: "Detalle de una obra escultórica de Kurt Lettow",
  },
  "Archivbild zum Werk des Bildhauers Kurt Lettow": {
    en: "Archive image related to the work of sculptor Kurt Lettow",
    es: "Imagen de archivo relacionada con la obra del escultor Kurt Lettow",
  },
  "Platzhalter für ein Porträt von Kurt Lettow": {
    en: "Placeholder for a portrait of Kurt Lettow",
    es: "Marcador para un retrato de Kurt Lettow",
  },
  "Platzhalter für Dokumente zu frühen Aufträgen von Kurt Lettow": {
    en: "Placeholder for documents on Kurt Lettow's early commissions",
    es: "Marcador para documentos sobre los primeros encargos de Kurt Lettow",
  },
  "Platzhalter für Archivmaterial zum Werk von Kurt Lettow": {
    en: "Placeholder for archive material on Kurt Lettow's work",
    es: "Marcador para material de archivo sobre la obra de Kurt Lettow",
  },
  "Werkstatt und Ausbildung von Kurt Lettow": {
    en: "Workshop and training of Kurt Lettow",
    es: "Taller y formación de Kurt Lettow",
  },
  "Frühe bildhauerische Arbeit von Kurt Lettow": {
    en: "Early sculptural work by Kurt Lettow",
    es: "Trabajo escultórico temprano de Kurt Lettow",
  },
  "Atelier und Neubeginn von Kurt Lettow in Bremen-Oberneuland": {
    en: "Studio and new beginning of Kurt Lettow in Bremen-Oberneuland",
    es: "Atelier y nuevo comienzo de Kurt Lettow en Bremen-Oberneuland",
  },
  "Werk von Kurt Lettow im norddeutschen Raum": {
    en: "Work by Kurt Lettow in northern Germany",
    es: "Obra de Kurt Lettow en el norte de Alemania",
  },
  "Familienarchiv als Platzhalter für die Dokumentation des Werkes von Kurt Lettow": {
    en: "Family archive placeholder for documenting Kurt Lettow's work",
    es: "Marcador de archivo familiar para la documentación de la obra de Kurt Lettow",
  },
  "Archivbild zur Verbindung von Bremen, Costa Rica und der Dokumentation des Werkes von Kurt Lettow": {
    en: "Archive image connecting Bremen, Costa Rica and the documentation of Kurt Lettow's work",
    es: "Imagen de archivo que conecta Bremen, Costa Rica y la documentación de la obra de Kurt Lettow",
  },
  "Platzhalter für eine Atelieraufnahme oder ein Porträt von Kurt Lettow": {
    en: "Placeholder for a studio photograph or portrait of Kurt Lettow",
    es: "Marcador para una fotografía del atelier o un retrato de Kurt Lettow",
  },
  "Kurt Lettow im Atelier bei der Arbeit": {
    en: "Kurt Lettow working in the studio",
    es: "Kurt Lettow trabajando en el atelier",
  },
  "Platzhalter für Reliefs und Plastiken von Kurt Lettow": {
    en: "Placeholder for reliefs and sculptures by Kurt Lettow",
    es: "Marcador para relieves y esculturas de Kurt Lettow",
  },
  "Platzhalter für Arbeiten in Kirchenräumen": {
    en: "Placeholder for works in church spaces",
    es: "Marcador para trabajos en espacios religiosos",
  },
  "Platzhalter für Portale und Wandgestaltungen": {
    en: "Placeholder for portals and wall designs",
    es: "Marcador para portales y diseños murales",
  },
  "Portale und Wandgestaltung von Kurt Lettow im öffentlichen Raum": {
    en: "Portals and wall design by Kurt Lettow in public space",
    es: "Portales y diseño mural de Kurt Lettow en el espacio público",
  },
  "Platzhalter für Wandreliefs von Kurt Lettow": {
    en: "Placeholder for wall reliefs by Kurt Lettow",
    es: "Marcador para relieves murales de Kurt Lettow",
  },
  "Wandrelief von Kurt Lettow mit rhythmischen Flächen": {
    en: "Wall relief by Kurt Lettow with rhythmic surfaces",
    es: "Relieve mural de Kurt Lettow con superficies rítmicas",
  },
  "Platzhalter für Skizzen und Modelle aus dem Atelier": {
    en: "Placeholder for sketches and models from the studio",
    es: "Marcador para bocetos y modelos del atelier",
  },
  "Gipsmodelle, Skizzen und Arbeitsmodelle aus dem Nachlass von Kurt Lettow": {
    en: "Plaster models, sketches and working models from Kurt Lettow's estate",
    es: "Modelos de yeso, bocetos y modelos de trabajo del legado de Kurt Lettow",
  },
  "Platzhalter für Materialstudien und Werkstoffe": {
    en: "Placeholder for material studies and materials",
    es: "Marcador para estudios de materiales y materias primas",
  },
  "Fotografien und Archivdokumente aus dem Nachlass von Kurt Lettow": {
    en: "Photographs and archive documents from Kurt Lettow's estate",
    es: "Fotografías y documentos de archivo del legado de Kurt Lettow",
  },
};

const titleTranslations: Record<string, Translation> = {
  "Kurt Lettow | Bildhauer 1908-1992": {
    en: "Kurt Lettow | Sculptor 1908-1992",
    es: "Kurt Lettow | Escultor 1908-1992",
  },
  "Archiv | Kurt Lettow": { en: "Archive | Kurt Lettow", es: "Archivo | Kurt Lettow" },
  "Galerie | Kurt Lettow": { en: "Gallery | Kurt Lettow", es: "Galería | Kurt Lettow" },
  "Das Buch | Kurt Lettow": { en: "The Book | Kurt Lettow", es: "El libro | Kurt Lettow" },
};

const metaTranslations: Record<string, Translation> = {
  "Eine biografische und künstlerische Annäherung an das Werk des Bremer Bildhauers Kurt Lettow.": {
    en: "A biographical and artistic approach to the work of Bremen sculptor Kurt Lettow.",
    es: "Una aproximación biográfica y artística a la obra del escultor de Bremen Kurt Lettow.",
  },
  "Werkgruppen, Archivmaterial und visuelle Dokumentation zum Bildhauer Kurt Lettow.": {
    en: "Work groups, archive material and visual documentation on sculptor Kurt Lettow.",
    es: "Grupos de obra, material de archivo y documentación visual sobre el escultor Kurt Lettow.",
  },
  "Visuelle Galerie zum Werk und Archiv des Bildhauers Kurt Lettow.": {
    en: "Visual gallery of the work and archive of sculptor Kurt Lettow.",
    es: "Galería visual de la obra y el archivo del escultor Kurt Lettow.",
  },
  "Publikation und Beiträge zum Lebenswerk des Bildhauers Kurt Lettow.": {
    en: "Publication and contributions on the life work of sculptor Kurt Lettow.",
    es: "Publicación y contribuciones sobre la obra de vida del escultor Kurt Lettow.",
  },
  "Stationen im Leben und Werk des Bremer Bildhauers Kurt Lettow.": {
    en: "Stations in the life and work of Bremen sculptor Kurt Lettow.",
    es: "Etapas en la vida y obra del escultor de Bremen Kurt Lettow.",
  },
};

type SourceTextNode = Text & { sourceText?: string };

const getLanguage = (value: string | null): Language => (
  supportedLanguages.has(value as Language) ? value as Language : "de"
);

const lookupTranslation = (key: string, source: Record<string, Translation>) => {
  if (source[key]) return source[key];
  return Object.entries(source).find(([sourceKey]) => normalize(sourceKey) === key)?.[1];
};

const translateValue = (value: string, language: Language, source: Record<string, Translation>) => {
  const key = normalize(value);
  if (language === "de") return value;
  return lookupTranslation(key, source)?.[language] ?? value;
};

const shouldSkipTextNode = (node: Text) => {
  const parent = node.parentElement;
  return !parent || Boolean(parent.closest("script, style, noscript, textarea, select"));
};

const translateTextNodes = (language: Language) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (shouldSkipTextNode(node as Text) || !normalize(node.textContent || "")) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let node = walker.nextNode() as SourceTextNode | null;
  while (node) {
    node.sourceText ||= node.nodeValue || "";
    const source = node.sourceText;
    const leading = source.match(/^\s*/)?.[0] ?? "";
    const trailing = source.match(/\s*$/)?.[0] ?? "";
    const translated = translateValue(source, language, textTranslations);
    node.nodeValue = translated === source ? source : `${leading}${translated}${trailing}`;
    node = walker.nextNode() as SourceTextNode | null;
  }
};

const translateAttributes = (language: Language) => {
  const attributes = ["aria-label", "alt", "title", "placeholder"];
  document.querySelectorAll<HTMLElement>("*").forEach((element) => {
    attributes.forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value) return;
      const sourceAttribute = `data-i18n-source-${attribute}`;
      const source = element.getAttribute(sourceAttribute) || value;
      if (!element.hasAttribute(sourceAttribute)) {
        element.setAttribute(sourceAttribute, source);
      }
      element.setAttribute(attribute, translateValue(source, language, attributeTranslations));
    });
  });
};

const translateHead = (language: Language) => {
  const sourceTitle = document.documentElement.dataset.i18nSourceTitle || document.title;
  document.documentElement.dataset.i18nSourceTitle = sourceTitle;
  document.title = translateValue(sourceTitle, language, titleTranslations);

  document
    .querySelectorAll<HTMLMetaElement>('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]')
    .forEach((meta) => {
      const source = meta.dataset.i18nSourceContent || meta.content;
      meta.dataset.i18nSourceContent = source;
      meta.content = translateValue(source, language, metaTranslations);
    });

  document
    .querySelectorAll<HTMLMetaElement>('meta[property="og:title"], meta[name="twitter:title"]')
    .forEach((meta) => {
      const source = meta.dataset.i18nSourceContent || meta.content;
      meta.dataset.i18nSourceContent = source;
      meta.content = translateValue(source, language, titleTranslations);
    });
};

const applyLanguage = (language: Language) => {
  document.documentElement.lang = language;
  translateHead(language);
  translateTextNodes(language);
  translateAttributes(language);
  document.querySelectorAll<HTMLSelectElement>("[data-language-select]").forEach((select) => {
    select.value = language;
  });
};

const initLanguageSwitcher = () => {
  const selectedLanguage = getLanguage(localStorage.getItem(STORAGE_KEY));
  applyLanguage(selectedLanguage);

  document.querySelectorAll<HTMLSelectElement>("[data-language-select]").forEach((select) => {
    select.addEventListener("change", () => {
      const language = getLanguage(select.value);
      localStorage.setItem(STORAGE_KEY, language);
      applyLanguage(language);
    });
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLanguageSwitcher, { once: true });
} else {
  initLanguageSwitcher();
}
