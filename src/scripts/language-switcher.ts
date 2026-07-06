type Language = "de" | "en" | "es";
type Translation = Record<Exclude<Language, "de">, string>;

const STORAGE_KEY = "kurt-lettow-language";
const supportedLanguages = new Set<Language>(["de", "en", "es"]);

const normalize = (value: string) => value.replace(/\s+/g, " ").trim();

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
  "Zeitleiste öffnen": { en: "Open timeline", es: "Abrir cronología" },
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
  "Archiv öffnen": { en: "Open archive", es: "Abrir archivo" },
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
  "Platzhalter für eine Atelieraufnahme oder ein Porträt von Kurt Lettow": {
    en: "Placeholder for a studio photograph or portrait of Kurt Lettow",
    es: "Marcador para una fotografía del atelier o un retrato de Kurt Lettow",
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
  "Platzhalter für Wandreliefs von Kurt Lettow": {
    en: "Placeholder for wall reliefs by Kurt Lettow",
    es: "Marcador para relieves murales de Kurt Lettow",
  },
  "Platzhalter für Skizzen und Modelle aus dem Atelier": {
    en: "Placeholder for sketches and models from the studio",
    es: "Marcador para bocetos y modelos del atelier",
  },
  "Platzhalter für Materialstudien und Werkstoffe": {
    en: "Placeholder for material studies and materials",
    es: "Marcador para estudios de materiales y materias primas",
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
  "Zeitleiste | Kurt Lettow": { en: "Timeline | Kurt Lettow", es: "Cronología | Kurt Lettow" },
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

const translateValue = (value: string, language: Language, source: Record<string, Translation>) => {
  const key = normalize(value);
  if (language === "de") return value;
  return source[key]?.[language] ?? value;
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
