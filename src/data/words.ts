export type WordKind = 'verb' | 'noun' | 'adjective' | 'adverb' | 'prep' | 'phrase';

export type Sentence = {
  native: string;
  target: string;
  target_word_form: string;
  pers_pron_form?: string;
};

export type Word = {
  id: string;
  kind: WordKind;
  gender?: 'm' | 'f' | 'n';
  native: string;
  target: string;
  sentences: Sentence[];
};

export const words: Word[] = [

  // ===========================
  // VERBEN (6 Personalformen)
  // ===========================
  {
    id: 'v001', kind: 'verb', native: 'sein', target: 'ser',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich bin Student.',              target: 'Yo soy estudiante.',            target_word_form: 'soy' },
      { pers_pron_form: 'tú',       native: 'Du bist sehr freundlich.',      target: 'Tú eres muy amable.',           target_word_form: 'eres' },
      { pers_pron_form: 'él/ella',  native: 'Er ist Arzt.',                  target: 'Él es médico.',                 target_word_form: 'es' },
      { pers_pron_form: 'nosotros', native: 'Wir sind Freunde.',             target: 'Nosotros somos amigos.',        target_word_form: 'somos' },
      { pers_pron_form: 'vosotros', native: 'Ihr seid sympathisch.',         target: 'Vosotros sois simpáticos.',     target_word_form: 'sois' },
      { pers_pron_form: 'ellos',    native: 'Sie sind aus Spanien.',         target: 'Ellos son de España.',          target_word_form: 'son' },
    ],
  },
  {
    id: 'v002', kind: 'verb', native: 'haben', target: 'tener',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich habe einen Hund.',          target: 'Yo tengo un perro.',            target_word_form: 'tengo' },
      { pers_pron_form: 'tú',       native: 'Du hast viel Zeit.',            target: 'Tú tienes mucho tiempo.',       target_word_form: 'tienes' },
      { pers_pron_form: 'él/ella',  native: 'Sie hat zwei Kinder.',          target: 'Ella tiene dos hijos.',         target_word_form: 'tiene' },
      { pers_pron_form: 'nosotros', native: 'Wir haben Hunger.',             target: 'Nosotros tenemos hambre.',      target_word_form: 'tenemos' },
      { pers_pron_form: 'vosotros', native: 'Ihr habt recht.',               target: 'Vosotros tenéis razón.',        target_word_form: 'tenéis' },
      { pers_pron_form: 'ellos',    native: 'Sie haben ein großes Haus.',    target: 'Ellos tienen una casa grande.', target_word_form: 'tienen' },
    ],
  },
  {
    id: 'v003', kind: 'verb', native: 'gehen', target: 'ir',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich gehe zum Markt.',           target: 'Yo voy al mercado.',            target_word_form: 'voy' },
      { pers_pron_form: 'tú',       native: 'Du gehst zur Schule.',          target: 'Tú vas a la escuela.',          target_word_form: 'vas' },
      { pers_pron_form: 'él/ella',  native: 'Er geht zur Arbeit.',           target: 'Él va al trabajo.',             target_word_form: 'va' },
      { pers_pron_form: 'nosotros', native: 'Wir gehen in den Urlaub.',      target: 'Nosotros vamos de vacaciones.', target_word_form: 'vamos' },
      { pers_pron_form: 'vosotros', native: 'Ihr geht ins Kino.',            target: 'Vosotros vais al cine.',        target_word_form: 'vais' },
      { pers_pron_form: 'ellos',    native: 'Sie gehen an den Strand.',      target: 'Ellas van a la playa.',         target_word_form: 'van' },
    ],
  },
  {
    id: 'v004', kind: 'verb', native: 'sprechen', target: 'hablar',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich spreche Spanisch.',         target: 'Yo hablo español.',             target_word_form: 'hablo' },
      { pers_pron_form: 'tú',       native: 'Du sprichst sehr gut.',         target: 'Tú hablas muy bien.',           target_word_form: 'hablas' },
      { pers_pron_form: 'él/ella',  native: 'Er spricht mit seinem Chef.',   target: 'Él habla con su jefe.',         target_word_form: 'habla' },
      { pers_pron_form: 'nosotros', native: 'Wir sprechen jeden Tag.',       target: 'Nosotros hablamos cada día.',   target_word_form: 'hablamos' },
      { pers_pron_form: 'vosotros', native: 'Ihr sprecht zu viel.',          target: 'Vosotros habláis demasiado.',   target_word_form: 'habláis' },
      { pers_pron_form: 'ellos',    native: 'Sie sprechen drei Sprachen.',   target: 'Ellos hablan tres idiomas.',    target_word_form: 'hablan' },
    ],
  },
  {
    id: 'v005', kind: 'verb', native: 'essen', target: 'comer',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich esse morgens Obst.',        target: 'Yo como fruta por la mañana.', target_word_form: 'como' },
      { pers_pron_form: 'tú',       native: 'Du isst zu schnell.',           target: 'Tú comes demasiado rápido.',   target_word_form: 'comes' },
      { pers_pron_form: 'él/ella',  native: 'Sie isst im Restaurant.',       target: 'Ella come en el restaurante.', target_word_form: 'come' },
      { pers_pron_form: 'nosotros', native: 'Wir essen zusammen.',           target: 'Nosotros comemos juntos.',     target_word_form: 'comemos' },
      { pers_pron_form: 'vosotros', native: 'Ihr esst sehr spät.',           target: 'Vosotros coméis muy tarde.',   target_word_form: 'coméis' },
      { pers_pron_form: 'ellos',    native: 'Sie essen sonntags Paella.',    target: 'Ellos comen paella los domingos.', target_word_form: 'comen' },
    ],
  },
  {
    id: 'v006', kind: 'verb', native: 'trinken', target: 'beber',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich trinke Wasser.',            target: 'Yo bebo agua.',                 target_word_form: 'bebo' },
      { pers_pron_form: 'tú',       native: 'Du trinkst zu viel Kaffee.',    target: 'Tú bebes demasiado café.',      target_word_form: 'bebes' },
      { pers_pron_form: 'él/ella',  native: 'Er trinkt Rotwein.',            target: 'Él bebe vino tinto.',           target_word_form: 'bebe' },
      { pers_pron_form: 'nosotros', native: 'Wir trinken morgens Saft.',     target: 'Nosotros bebemos zumo.',        target_word_form: 'bebemos' },
      { pers_pron_form: 'vosotros', native: 'Ihr trinkt Bier.',              target: 'Vosotros bebéis cerveza.',      target_word_form: 'bebéis' },
      { pers_pron_form: 'ellos',    native: 'Sie trinken grünen Tee.',       target: 'Ellos beben té verde.',         target_word_form: 'beben' },
    ],
  },
  {
    id: 'v007', kind: 'verb', native: 'wohnen', target: 'vivir',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich wohne in Berlin.',          target: 'Yo vivo en Berlín.',            target_word_form: 'vivo' },
      { pers_pron_form: 'tú',       native: 'Du wohnst nah am Zentrum.',     target: 'Tú vives cerca del centro.',    target_word_form: 'vives' },
      { pers_pron_form: 'él/ella',  native: 'Sie wohnt bei ihrer Familie.',  target: 'Ella vive con su familia.',     target_word_form: 'vive' },
      { pers_pron_form: 'nosotros', native: 'Wir wohnen in einer Wohnung.',  target: 'Nosotros vivimos en un apartamento.', target_word_form: 'vivimos' },
      { pers_pron_form: 'vosotros', native: 'Ihr wohnt auf dem Land.',       target: 'Vosotros vivís en el campo.',   target_word_form: 'vivís' },
      { pers_pron_form: 'ellos',    native: 'Sie wohnen in Madrid.',         target: 'Ellos viven en Madrid.',        target_word_form: 'viven' },
    ],
  },
  {
    id: 'v008', kind: 'verb', native: 'arbeiten', target: 'trabajar',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich arbeite in einem Büro.',    target: 'Yo trabajo en una oficina.',    target_word_form: 'trabajo' },
      { pers_pron_form: 'tú',       native: 'Du arbeitest viel.',            target: 'Tú trabajas mucho.',            target_word_form: 'trabajas' },
      { pers_pron_form: 'él/ella',  native: 'Er arbeitet Mo bis Fr.',        target: 'Él trabaja de lunes a viernes.',target_word_form: 'trabaja' },
      { pers_pron_form: 'nosotros', native: 'Wir arbeiten im Team.',         target: 'Nosotros trabajamos en equipo.',target_word_form: 'trabajamos' },
      { pers_pron_form: 'vosotros', native: 'Ihr arbeitet zu viel.',         target: 'Vosotros trabajáis demasiado.', target_word_form: 'trabajáis' },
      { pers_pron_form: 'ellos',    native: 'Sie arbeiten im Krankenhaus.',  target: 'Ellas trabajan en el hospital.',target_word_form: 'trabajan' },
    ],
  },
  {
    id: 'v009', kind: 'verb', native: 'lernen', target: 'aprender',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich lerne jeden Tag Spanisch.', target: 'Yo aprendo español cada día.',  target_word_form: 'aprendo' },
      { pers_pron_form: 'tú',       native: 'Du lernst sehr schnell.',       target: 'Tú aprendes muy rápido.',       target_word_form: 'aprendes' },
      { pers_pron_form: 'él/ella',  native: 'Er lernt kochen.',              target: 'Él aprende a cocinar.',         target_word_form: 'aprende' },
      { pers_pron_form: 'nosotros', native: 'Wir lernen zusammen.',          target: 'Nosotros aprendemos juntos.',   target_word_form: 'aprendemos' },
      { pers_pron_form: 'vosotros', native: 'Ihr lernt viel im Unterricht.', target: 'Vosotros aprendéis mucho.',     target_word_form: 'aprendéis' },
      { pers_pron_form: 'ellos',    native: 'Sie lernen neue Sprachen.',     target: 'Ellos aprenden idiomas nuevos.',target_word_form: 'aprenden' },
    ],
  },
  {
    id: 'v010', kind: 'verb', native: 'schlafen', target: 'dormir',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich schlafe acht Stunden.',     target: 'Yo duermo ocho horas.',         target_word_form: 'duermo' },
      { pers_pron_form: 'tú',       native: 'Du schläfst zu wenig.',         target: 'Tú duermes muy poco.',          target_word_form: 'duermes' },
      { pers_pron_form: 'él/ella',  native: 'Das Baby schläft die ganze Nacht.', target: 'El bebé duerme toda la noche.', target_word_form: 'duerme' },
      { pers_pron_form: 'nosotros', native: 'Wir schlafen gut.',             target: 'Nosotros dormimos bien.',       target_word_form: 'dormimos' },
      { pers_pron_form: 'vosotros', native: 'Ihr schlaft am Wochenende lang.',target: 'Vosotros dormís tarde los fines de semana.', target_word_form: 'dormís' },
      { pers_pron_form: 'ellos',    native: 'Sie schlafen im Hotel.',        target: 'Ellos duermen en el hotel.',    target_word_form: 'duermen' },
    ],
  },
  {
    id: 'v011', kind: 'verb', native: 'kaufen', target: 'comprar',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich kaufe jeden Morgen Brot.',  target: 'Yo compro pan cada mañana.',    target_word_form: 'compro' },
      { pers_pron_form: 'tú',       native: 'Du kaufst zu viele Kleider.',   target: 'Tú compras demasiada ropa.',    target_word_form: 'compras' },
      { pers_pron_form: 'él/ella',  native: 'Sie kauft Blumen für ihre Mutter.', target: 'Ella compra flores para su madre.', target_word_form: 'compra' },
      { pers_pron_form: 'nosotros', native: 'Wir kaufen auf dem Markt.',     target: 'Nosotros compramos en el mercado.', target_word_form: 'compramos' },
      { pers_pron_form: 'vosotros', native: 'Ihr kauft online.',             target: 'Vosotros compráis online.',     target_word_form: 'compráis' },
      { pers_pron_form: 'ellos',    native: 'Sie kaufen ein neues Haus.',    target: 'Ellos compran una casa nueva.', target_word_form: 'compran' },
    ],
  },
  {
    id: 'v012', kind: 'verb', native: 'spielen', target: 'jugar',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich spiele Fußball.',           target: 'Yo juego al fútbol.',           target_word_form: 'juego' },
      { pers_pron_form: 'tú',       native: 'Du spielst sehr gut.',          target: 'Tú juegas muy bien.',           target_word_form: 'juegas' },
      { pers_pron_form: 'él/ella',  native: 'Er spielt mit seinen Kindern.', target: 'Él juega con sus hijos.',       target_word_form: 'juega' },
      { pers_pron_form: 'nosotros', native: 'Wir spielen Tennis.',           target: 'Nosotros jugamos al tenis.',    target_word_form: 'jugamos' },
      { pers_pron_form: 'vosotros', native: 'Ihr spielt Videospiele.',       target: 'Vosotros jugáis videojuegos.',  target_word_form: 'jugáis' },
      { pers_pron_form: 'ellos',    native: 'Sie spielen Basketball.',       target: 'Ellas juegan al baloncesto.',   target_word_form: 'juegan' },
    ],
  },
  {
    id: 'v013', kind: 'verb', native: 'lesen', target: 'leer',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich lese jede Woche ein Buch.', target: 'Yo leo un libro cada semana.',  target_word_form: 'leo' },
      { pers_pron_form: 'tú',       native: 'Du liest die Zeitung.',         target: 'Tú lees el periódico.',         target_word_form: 'lees' },
      { pers_pron_form: 'él/ella',  native: 'Sie liest Romane.',             target: 'Ella lee novelas.',             target_word_form: 'lee' },
      { pers_pron_form: 'nosotros', native: 'Wir lesen laut vor.',           target: 'Nosotros leemos en voz alta.',  target_word_form: 'leemos' },
      { pers_pron_form: 'vosotros', native: 'Ihr lest sehr viel.',           target: 'Vosotros leéis mucho.',         target_word_form: 'leéis' },
      { pers_pron_form: 'ellos',    native: 'Sie lesen vor dem Schlafen.',   target: 'Ellos leen antes de dormir.',   target_word_form: 'leen' },
    ],
  },
  {
    id: 'v014', kind: 'verb', native: 'schreiben', target: 'escribir',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich schreibe eine E-Mail.',     target: 'Yo escribo un correo.',         target_word_form: 'escribo' },
      { pers_pron_form: 'tú',       native: 'Du schreibst sehr gut.',        target: 'Tú escribes muy bien.',         target_word_form: 'escribes' },
      { pers_pron_form: 'él/ella',  native: 'Er schreibt einen Brief.',      target: 'Él escribe una carta.',         target_word_form: 'escribe' },
      { pers_pron_form: 'nosotros', native: 'Wir schreiben auf Spanisch.',   target: 'Nosotros escribimos en español.',target_word_form: 'escribimos' },
      { pers_pron_form: 'vosotros', native: 'Ihr schreibt ins Heft.',        target: 'Vosotros escribís en el cuaderno.', target_word_form: 'escribís' },
      { pers_pron_form: 'ellos',    native: 'Sie schreiben einen Roman.',    target: 'Ellos escriben una novela.',    target_word_form: 'escriben' },
    ],
  },
  {
    id: 'v015', kind: 'verb', native: 'kommen', target: 'venir',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich komme aus Deutschland.',    target: 'Yo vengo de Alemania.',         target_word_form: 'vengo' },
      { pers_pron_form: 'tú',       native: 'Du kommst morgen.',             target: 'Tú vienes mañana.',             target_word_form: 'vienes' },
      { pers_pron_form: 'él/ella',  native: 'Sie kommt zur Party.',          target: 'Ella viene a la fiesta.',       target_word_form: 'viene' },
      { pers_pron_form: 'nosotros', native: 'Wir kommen zusammen.',          target: 'Nosotros venimos juntos.',      target_word_form: 'venimos' },
      { pers_pron_form: 'vosotros', native: 'Ihr kommt mit dem Zug.',        target: 'Vosotros venís en tren.',       target_word_form: 'venís' },
      { pers_pron_form: 'ellos',    native: 'Sie kommen von weit her.',      target: 'Ellos vienen de lejos.',        target_word_form: 'vienen' },
    ],
  },
  {
    id: 'v016', kind: 'verb', native: 'sehen', target: 'ver',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich sehe einen Film.',          target: 'Yo veo una película.',          target_word_form: 'veo' },
      { pers_pron_form: 'tú',       native: 'Du siehst gut ohne Brille.',    target: 'Tú ves bien sin gafas.',        target_word_form: 'ves' },
      { pers_pron_form: 'él/ella',  native: 'Er sieht fern.',                target: 'Él ve la televisión.',          target_word_form: 've' },
      { pers_pron_form: 'nosotros', native: 'Wir sehen das Spiel.',          target: 'Nosotros vemos el partido.',    target_word_form: 'vemos' },
      { pers_pron_form: 'vosotros', native: 'Ihr seht Serien.',              target: 'Vosotros veis series.',         target_word_form: 'veis' },
      { pers_pron_form: 'ellos',    native: 'Sie sehen den Sonnenaufgang.',  target: 'Ellas ven el amanecer.',        target_word_form: 'ven' },
    ],
  },
  {
    id: 'v017', kind: 'verb', native: 'wollen', target: 'querer',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich möchte einen Kaffee.',      target: 'Yo quiero un café.',            target_word_form: 'quiero' },
      { pers_pron_form: 'tú',       native: 'Du willst Spanisch lernen.',    target: 'Tú quieres aprender español.',  target_word_form: 'quieres' },
      { pers_pron_form: 'él/ella',  native: 'Er will reisen.',               target: 'Él quiere viajar.',             target_word_form: 'quiere' },
      { pers_pron_form: 'nosotros', native: 'Wir wollen uns ausruhen.',      target: 'Nosotros queremos descansar.',  target_word_form: 'queremos' },
      { pers_pron_form: 'vosotros', native: 'Ihr wollt mehr Zeit.',          target: 'Vosotros queréis más tiempo.',  target_word_form: 'queréis' },
      { pers_pron_form: 'ellos',    native: 'Sie wollen eine Pizza.',        target: 'Ellos quieren una pizza.',      target_word_form: 'quieren' },
    ],
  },
  {
    id: 'v018', kind: 'verb', native: 'können', target: 'poder',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich kann dir helfen.',          target: 'Yo puedo ayudarte.',            target_word_form: 'puedo' },
      { pers_pron_form: 'tú',       native: 'Du kannst es schaffen.',        target: 'Tú puedes hacerlo.',            target_word_form: 'puedes' },
      { pers_pron_form: 'él/ella',  native: 'Sie kann morgen kommen.',       target: 'Ella puede venir mañana.',      target_word_form: 'puede' },
      { pers_pron_form: 'nosotros', native: 'Wir können es versuchen.',      target: 'Nosotros podemos intentarlo.',  target_word_form: 'podemos' },
      { pers_pron_form: 'vosotros', native: 'Ihr könnt bleiben.',            target: 'Vosotros podéis quedaros.',     target_word_form: 'podéis' },
      { pers_pron_form: 'ellos',    native: 'Sie können schnell laufen.',    target: 'Ellos pueden correr rápido.',   target_word_form: 'pueden' },
    ],
  },
  {
    id: 'v019', kind: 'verb', native: 'machen', target: 'hacer',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich mache täglich Sport.',      target: 'Yo hago deporte cada día.',     target_word_form: 'hago' },
      { pers_pron_form: 'tú',       native: 'Du machst die Hausaufgaben.',   target: 'Tú haces la tarea.',            target_word_form: 'haces' },
      { pers_pron_form: 'él/ella',  native: 'Er kocht das Abendessen.',      target: 'Él hace la cena.',              target_word_form: 'hace' },
      { pers_pron_form: 'nosotros', native: 'Wir machen eine Reise.',        target: 'Nosotros hacemos un viaje.',    target_word_form: 'hacemos' },
      { pers_pron_form: 'vosotros', native: 'Ihr macht Sport.',              target: 'Vosotros hacéis ejercicio.',    target_word_form: 'hacéis' },
      { pers_pron_form: 'ellos',    native: 'Sie machen eine Party.',        target: 'Ellas hacen una fiesta.',       target_word_form: 'hacen' },
    ],
  },
  {
    id: 'v020', kind: 'verb', native: 'reisen', target: 'viajar',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich reise nach Spanien.',       target: 'Yo viajo a España.',            target_word_form: 'viajo' },
      { pers_pron_form: 'tú',       native: 'Du reist viel für die Arbeit.', target: 'Tú viajas mucho por trabajo.',  target_word_form: 'viajas' },
      { pers_pron_form: 'él/ella',  native: 'Er reist mit dem Flugzeug.',    target: 'Él viaja en avión.',            target_word_form: 'viaja' },
      { pers_pron_form: 'nosotros', native: 'Wir reisen im Sommer.',         target: 'Nosotros viajamos en verano.',  target_word_form: 'viajamos' },
      { pers_pron_form: 'vosotros', native: 'Ihr reist mit dem Rucksack.',   target: 'Vosotros viajáis con mochila.', target_word_form: 'viajáis' },
      { pers_pron_form: 'ellos',    native: 'Sie reisen durch ganz Europa.', target: 'Ellos viajan por toda Europa.', target_word_form: 'viajan' },
    ],
  },
  {
    id: 'v021', kind: 'verb', native: 'helfen', target: 'ayudar',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich helfe meinen Freunden.',    target: 'Yo ayudo a mis amigos.',        target_word_form: 'ayudo' },
      { pers_pron_form: 'tú',       native: 'Du hilfst viel zu Hause.',      target: 'Tú ayudas mucho en casa.',      target_word_form: 'ayudas' },
      { pers_pron_form: 'él/ella',  native: 'Er hilft anderen.',             target: 'Él ayuda a los demás.',         target_word_form: 'ayuda' },
      { pers_pron_form: 'nosotros', native: 'Wir helfen immer.',             target: 'Nosotros ayudamos siempre.',    target_word_form: 'ayudamos' },
      { pers_pron_form: 'vosotros', native: 'Ihr helft beim Projekt.',       target: 'Vosotros ayudáis en el proyecto.', target_word_form: 'ayudáis' },
      { pers_pron_form: 'ellos',    native: 'Sie helfen den Nachbarn.',      target: 'Ellos ayudan a los vecinos.',   target_word_form: 'ayudan' },
    ],
  },
  {
    id: 'v022', kind: 'verb', native: 'kochen', target: 'cocinar',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich koche Pasta.',              target: 'Yo cocino pasta.',              target_word_form: 'cocino' },
      { pers_pron_form: 'tú',       native: 'Du kochst sehr gut.',           target: 'Tú cocinas muy bien.',          target_word_form: 'cocinas' },
      { pers_pron_form: 'él/ella',  native: 'Sie kocht für die Familie.',    target: 'Ella cocina para la familia.',  target_word_form: 'cocina' },
      { pers_pron_form: 'nosotros', native: 'Wir kochen zusammen.',          target: 'Nosotros cocinamos juntos.',    target_word_form: 'cocinamos' },
      { pers_pron_form: 'vosotros', native: 'Ihr kocht exotische Gerichte.', target: 'Vosotros cocináis platos exóticos.', target_word_form: 'cocináis' },
      { pers_pron_form: 'ellos',    native: 'Sie kochen sonntags.',          target: 'Ellos cocinan los domingos.',   target_word_form: 'cocinan' },
    ],
  },
  {
    id: 'v023', kind: 'verb', native: 'vergessen', target: 'olvidar',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich vergesse meine Schlüssel.', target: 'Yo olvido las llaves.',         target_word_form: 'olvido' },
      { pers_pron_form: 'tú',       native: 'Du vergisst immer deinen Schirm.', target: 'Tú olvidas siempre tu paraguas.', target_word_form: 'olvidas' },
      { pers_pron_form: 'él/ella',  native: 'Sie vergisst seinen Geburtstag.', target: 'Ella olvida su cumpleaños.', target_word_form: 'olvida' },
      { pers_pron_form: 'nosotros', native: 'Wir vergessen die Zeit.',       target: 'Nosotros olvidamos el tiempo.', target_word_form: 'olvidamos' },
      { pers_pron_form: 'vosotros', native: 'Ihr vergesst die Hausaufgaben.',target: 'Vosotros olvidáis los deberes.', target_word_form: 'olvidáis' },
      { pers_pron_form: 'ellos',    native: 'Sie vergessen die Probleme.',   target: 'Ellos olvidan los problemas.',  target_word_form: 'olvidan' },
    ],
  },
  {
    id: 'v024', kind: 'verb', native: 'verstehen', target: 'entender',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich verstehe Spanisch.',        target: 'Yo entiendo español.',          target_word_form: 'entiendo' },
      { pers_pron_form: 'tú',       native: 'Du verstehst die Grammatik.',   target: 'Tú entiendes bien la gramática.', target_word_form: 'entiendes' },
      { pers_pron_form: 'él/ella',  native: 'Er versteht das Problem.',      target: 'Él entiende el problema.',      target_word_form: 'entiende' },
      { pers_pron_form: 'nosotros', native: 'Wir verstehen die Situation.',  target: 'Nosotros entendemos la situación.', target_word_form: 'entendemos' },
      { pers_pron_form: 'vosotros', native: 'Ihr versteht die Aufgabe.',     target: 'Vosotros entendéis el ejercicio.', target_word_form: 'entendéis' },
      { pers_pron_form: 'ellos',    native: 'Sie verstehen alles.',          target: 'Ellas entienden todo.',         target_word_form: 'entienden' },
    ],
  },
  {
    id: 'v025', kind: 'verb', native: 'lieben', target: 'amar',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich liebe Musik.',              target: 'Yo amo la música.',             target_word_form: 'amo' },
      { pers_pron_form: 'tú',       native: 'Du liebst das Reisen.',         target: 'Tú amas viajar.',               target_word_form: 'amas' },
      { pers_pron_form: 'él/ella',  native: 'Sie liebt ihre Familie.',       target: 'Ella ama a su familia.',        target_word_form: 'ama' },
      { pers_pron_form: 'nosotros', native: 'Wir lieben dieses Land.',       target: 'Nosotros amamos este país.',    target_word_form: 'amamos' },
      { pers_pron_form: 'vosotros', native: 'Ihr liebt die Natur.',          target: 'Vosotros amáis la naturaleza.', target_word_form: 'amáis' },
      { pers_pron_form: 'ellos',    native: 'Sie lieben Spanisch.',          target: 'Ellos aman el español.',        target_word_form: 'aman' },
    ],
  },
  {
    id: 'v026', kind: 'verb', native: 'suchen', target: 'buscar',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich suche eine Wohnung.',       target: 'Yo busco un apartamento.',      target_word_form: 'busco' },
      { pers_pron_form: 'tú',       native: 'Du suchst Arbeit.',             target: 'Tú buscas trabajo.',            target_word_form: 'buscas' },
      { pers_pron_form: 'él/ella',  native: 'Er sucht seinen Schlüssel.',    target: 'Él busca sus llaves.',          target_word_form: 'busca' },
      { pers_pron_form: 'nosotros', native: 'Wir suchen eine Lösung.',       target: 'Nosotros buscamos una solución.',target_word_form: 'buscamos' },
      { pers_pron_form: 'vosotros', native: 'Ihr sucht Informationen.',      target: 'Vosotros buscáis información.', target_word_form: 'buscáis' },
      { pers_pron_form: 'ellos',    native: 'Sie suchen ein Restaurant.',    target: 'Ellas buscan un restaurante.',  target_word_form: 'buscan' },
    ],
  },
  {
    id: 'v027', kind: 'verb', native: 'laufen', target: 'correr',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich laufe jeden Morgen.',       target: 'Yo corro cada mañana.',         target_word_form: 'corro' },
      { pers_pron_form: 'tú',       native: 'Du läufst sehr schnell.',       target: 'Tú corres muy rápido.',         target_word_form: 'corres' },
      { pers_pron_form: 'él/ella',  native: 'Er läuft zehn Kilometer.',      target: 'Él corre diez kilómetros.',     target_word_form: 'corre' },
      { pers_pron_form: 'nosotros', native: 'Wir laufen im Park.',           target: 'Nosotros corremos en el parque.',target_word_form: 'corremos' },
      { pers_pron_form: 'vosotros', native: 'Ihr lauft den Marathon.',       target: 'Vosotros corréis la maratón.',  target_word_form: 'corréis' },
      { pers_pron_form: 'ellos',    native: 'Sie laufen zusammen.',          target: 'Ellos corren juntos.',          target_word_form: 'corren' },
    ],
  },
  {
    id: 'v028', kind: 'verb', native: 'fragen', target: 'preguntar',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich frage den Lehrer.',         target: 'Yo pregunto al profesor.',      target_word_form: 'pregunto' },
      { pers_pron_form: 'tú',       native: 'Du fragst viel.',               target: 'Tú preguntas mucho.',           target_word_form: 'preguntas' },
      { pers_pron_form: 'él/ella',  native: 'Er fragt nach dem Weg.',        target: 'Él pregunta la dirección.',     target_word_form: 'pregunta' },
      { pers_pron_form: 'nosotros', native: 'Wir fragen nach dem Preis.',    target: 'Nosotros preguntamos por el precio.', target_word_form: 'preguntamos' },
      { pers_pron_form: 'vosotros', native: 'Ihr fragt immer.',              target: 'Vosotros preguntáis siempre.',  target_word_form: 'preguntáis' },
      { pers_pron_form: 'ellos',    native: 'Sie fragen nach dir.',          target: 'Ellos preguntan por ti.',       target_word_form: 'preguntan' },
    ],
  },
  {
    id: 'v029', kind: 'verb', native: 'kennen', target: 'conocer',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich kenne Madrid gut.',         target: 'Yo conozco Madrid bien.',       target_word_form: 'conozco' },
      { pers_pron_form: 'tú',       native: 'Du kennst viele Menschen.',     target: 'Tú conoces a mucha gente.',     target_word_form: 'conoces' },
      { pers_pron_form: 'él/ella',  native: 'Sie kennt den Weg.',            target: 'Ella conoce el camino.',        target_word_form: 'conoce' },
      { pers_pron_form: 'nosotros', native: 'Wir kennen dieses Restaurant.', target: 'Nosotros conocemos este restaurante.', target_word_form: 'conocemos' },
      { pers_pron_form: 'vosotros', native: 'Ihr kennt die Stadt.',          target: 'Vosotros conocéis la ciudad.',  target_word_form: 'conocéis' },
      { pers_pron_form: 'ellos',    native: 'Sie kennen sich gut.',          target: 'Ellos se conocen bien.',        target_word_form: 'conocen' },
    ],
  },
  {
    id: 'v030', kind: 'verb', native: 'denken', target: 'pensar',
    sentences: [
      { pers_pron_form: 'yo',       native: 'Ich denke an dich.',            target: 'Yo pienso en ti.',              target_word_form: 'pienso' },
      { pers_pron_form: 'tú',       native: 'Du denkst zu viel.',            target: 'Tú piensas demasiado.',         target_word_form: 'piensas' },
      { pers_pron_form: 'él/ella',  native: 'Er denkt nach.',                target: 'Él piensa antes de hablar.',    target_word_form: 'piensa' },
      { pers_pron_form: 'nosotros', native: 'Wir denken positiv.',           target: 'Nosotros pensamos en positivo.',target_word_form: 'pensamos' },
      { pers_pron_form: 'vosotros', native: 'Ihr denkt zu kompliziert.',     target: 'Vosotros pensáis demasiado.',   target_word_form: 'pensáis' },
      { pers_pron_form: 'ellos',    native: 'Sie denken anders.',            target: 'Ellos piensan diferente.',      target_word_form: 'piensan' },
    ],
  },

  // ===========================
  // NOMEN (6 thematisch verschiedene Sätze)
  // ===========================
  {
    id: 'n001', kind: 'noun', gender: 'm', native: 'der Hund', target: 'el perro',
    sentences: [
      { native: 'Der Hund spielt im Garten.',        target: 'El perro juega en el jardín.',      target_word_form: 'perro' },
      { native: 'Mein Hund heißt Max.',              target: 'Mi perro se llama Max.',            target_word_form: 'perro' },
      { native: 'Der Hund frisst sein Futter.',      target: 'El perro come su comida.',          target_word_form: 'perro' },
      { native: 'Ich habe einen netten Hund.',       target: 'Tengo un perro muy simpático.',     target_word_form: 'perro' },
      { native: 'Der Hund schläft auf dem Sofa.',    target: 'El perro duerme en el sofá.',       target_word_form: 'perro' },
      { native: 'Der Hund läuft sehr schnell.',      target: 'El perro corre muy rápido.',        target_word_form: 'perro' },
    ],
  },
  {
    id: 'n002', kind: 'noun', gender: 'f', native: 'die Stadt', target: 'la ciudad',
    sentences: [
      { native: 'Die Stadt ist sehr groß.',          target: 'La ciudad es muy grande.',          target_word_form: 'ciudad' },
      { native: 'Ich wohne in einer schönen Stadt.', target: 'Vivo en una ciudad bonita.',        target_word_form: 'ciudad' },
      { native: 'Die Stadt hat viele Museen.',       target: 'La ciudad tiene muchos museos.',    target_word_form: 'ciudad' },
      { native: 'Mir gefällt diese Stadt.',          target: 'Me gusta esta ciudad.',             target_word_form: 'ciudad' },
      { native: 'Die Stadt ist voller Menschen.',    target: 'La ciudad está llena de gente.',    target_word_form: 'ciudad' },
      { native: 'Die Stadt hat guten Nahverkehr.',   target: 'La ciudad tiene buen transporte.',  target_word_form: 'ciudad' },
    ],
  },
  {
    id: 'n003', kind: 'noun', gender: 'n', native: 'das Haus', target: 'la casa',
    sentences: [
      { native: 'Das Haus ist sehr groß.',           target: 'La casa es muy grande.',            target_word_form: 'casa' },
      { native: 'Mein Haus hat drei Zimmer.',        target: 'Mi casa tiene tres habitaciones.',  target_word_form: 'casa' },
      { native: 'Das Haus liegt nah am Park.',       target: 'La casa está cerca del parque.',    target_word_form: 'casa' },
      { native: 'Wir kaufen ein neues Haus.',        target: 'Compramos una casa nueva.',         target_word_form: 'casa' },
      { native: 'Das Haus hat einen schönen Garten.',target: 'La casa tiene un jardín bonito.',   target_word_form: 'casa' },
      { native: 'Das Haus ist sehr gemütlich.',      target: 'La casa es muy cómoda.',            target_word_form: 'casa' },
    ],
  },
  {
    id: 'n004', kind: 'noun', gender: 'n', native: 'das Auto', target: 'el coche',
    sentences: [
      { native: 'Das Auto ist rot.',                 target: 'El coche es rojo.',                 target_word_form: 'coche' },
      { native: 'Mein Auto springt nicht an.',       target: 'Mi coche no arranca.',              target_word_form: 'coche' },
      { native: 'Das Auto steht draußen.',           target: 'El coche está aparcado fuera.',     target_word_form: 'coche' },
      { native: 'Ich habe ein neues Auto.',          target: 'Tengo un coche nuevo.',             target_word_form: 'coche' },
      { native: 'Das Auto fährt sehr schnell.',      target: 'El coche va muy rápido.',           target_word_form: 'coche' },
      { native: 'Das Auto verbraucht wenig Benzin.', target: 'El coche consume poca gasolina.',   target_word_form: 'coche' },
    ],
  },
  {
    id: 'n005', kind: 'noun', gender: 'f', native: 'die Familie', target: 'la familia',
    sentences: [
      { native: 'Familie ist das Wichtigste.',       target: 'La familia es lo más importante.',  target_word_form: 'familia' },
      { native: 'Meine Familie wohnt in Berlin.',    target: 'Mi familia vive en Berlín.',        target_word_form: 'familia' },
      { native: 'Die Familie isst sonntags zusammen.',target: 'La familia come junta los domingos.',target_word_form: 'familia' },
      { native: 'Ich habe eine große Familie.',      target: 'Tengo una familia grande.',         target_word_form: 'familia' },
      { native: 'Die Familie trifft sich zu Weihnachten.', target: 'La familia se reúne en Navidad.', target_word_form: 'familia' },
      { native: 'Die Familie reist im Sommer zusammen.', target: 'La familia viaja junta en verano.', target_word_form: 'familia' },
    ],
  },
  {
    id: 'n006', kind: 'noun', gender: 'n', native: 'das Geld', target: 'el dinero',
    sentences: [
      { native: 'Geld ist nicht alles.',             target: 'El dinero no es todo.',             target_word_form: 'dinero' },
      { native: 'Ich habe nicht genug Geld.',        target: 'No tengo dinero suficiente.',       target_word_form: 'dinero' },
      { native: 'Das Geld liegt auf der Bank.',      target: 'El dinero está en el banco.',       target_word_form: 'dinero' },
      { native: 'Ich spare jeden Monat Geld.',       target: 'Ahorro dinero cada mes.',           target_word_form: 'dinero' },
      { native: 'Das Geld kommt am Monatsende.',     target: 'El dinero llega a fin de mes.',     target_word_form: 'dinero' },
      { native: 'Ich gebe wenig Geld für Kleidung aus.', target: 'Gasto poco dinero en ropa.',   target_word_form: 'dinero' },
    ],
  },
  {
    id: 'n007', kind: 'noun', gender: 'n', native: 'das Wasser', target: 'el agua',
    sentences: [
      { native: 'Das Wasser ist kalt.',              target: 'El agua está fría.',                target_word_form: 'agua' },
      { native: 'Ich trinke täglich viel Wasser.',   target: 'Bebo mucha agua cada día.',         target_word_form: 'agua' },
      { native: 'Wasser ist lebensnotwendig.',       target: 'El agua es esencial para vivir.',   target_word_form: 'agua' },
      { native: 'Das Leitungswasser ist sauber.',    target: 'El agua del grifo está limpia.',    target_word_form: 'agua' },
      { native: 'Ich brauche ein Glas Wasser.',      target: 'Necesito un vaso de agua.',         target_word_form: 'agua' },
      { native: 'Das Meerwasser ist salzig.',        target: 'El agua del mar es salada.',        target_word_form: 'agua' },
    ],
  },
  {
    id: 'n008', kind: 'noun', gender: 'n', native: 'das Buch', target: 'el libro',
    sentences: [
      { native: 'Das Buch ist sehr interessant.',    target: 'El libro es muy interesante.',      target_word_form: 'libro' },
      { native: 'Ich lese jede Woche ein Buch.',     target: 'Leo un libro cada semana.',         target_word_form: 'libro' },
      { native: 'Das Buch liegt auf dem Tisch.',     target: 'El libro está en la mesa.',         target_word_form: 'libro' },
      { native: 'Ich kaufe ein neues Buch.',         target: 'Compro un libro nuevo.',            target_word_form: 'libro' },
      { native: 'Das Buch hat dreihundert Seiten.',  target: 'El libro tiene trescientas páginas.',target_word_form: 'libro' },
      { native: 'Das Buch gefällt mir sehr gut.',    target: 'El libro me gusta mucho.',          target_word_form: 'libro' },
    ],
  },
  {
    id: 'n009', kind: 'noun', gender: 'f', native: 'die Reise', target: 'el viaje',
    sentences: [
      { native: 'Die Reise war unglaublich.',        target: 'El viaje fue increíble.',           target_word_form: 'viaje' },
      { native: 'Wir planen eine Reise nach Mexiko.',target: 'Planeamos un viaje a México.',      target_word_form: 'viaje' },
      { native: 'Die Reise dauert zwei Wochen.',     target: 'El viaje dura dos semanas.',        target_word_form: 'viaje' },
      { native: 'Die Zugreise ist bequem.',          target: 'El viaje en tren es cómodo.',       target_word_form: 'viaje' },
      { native: 'Die Reise kostet viel Geld.',       target: 'El viaje cuesta mucho dinero.',     target_word_form: 'viaje' },
      { native: 'Die Reise beginnt am Montag.',      target: 'El viaje empieza el lunes.',        target_word_form: 'viaje' },
    ],
  },
  {
    id: 'n010', kind: 'noun', gender: 'n', native: 'das Flugzeug', target: 'el avión',
    sentences: [
      { native: 'Das Flugzeug kommt pünktlich.',     target: 'El avión llega puntual.',           target_word_form: 'avión' },
      { native: 'Ich fliege mit dem Flugzeug.',      target: 'Viajo en avión a Barcelona.',       target_word_form: 'avión' },
      { native: 'Das Flugzeug ist sehr bequem.',     target: 'El avión es muy cómodo.',           target_word_form: 'avión' },
      { native: 'Das Flugzeug startet um zehn.',     target: 'El avión despega a las diez.',      target_word_form: 'avión' },
      { native: 'Das Lufthansa-Flugzeug ist groß.',  target: 'El avión de Lufthansa es grande.',  target_word_form: 'avión' },
      { native: 'Das Flugzeug landet in Madrid.',    target: 'El avión aterriza en Madrid.',      target_word_form: 'avión' },
    ],
  },
  {
    id: 'n011', kind: 'noun', gender: 'm', native: 'der Strand', target: 'la playa',
    sentences: [
      { native: 'Der Strand ist wunderschön.',       target: 'La playa es preciosa.',             target_word_form: 'playa' },
      { native: 'Im Sommer gehe ich zum Strand.',    target: 'Voy a la playa en verano.',         target_word_form: 'playa' },
      { native: 'Der Strand ist voller Menschen.',   target: 'La playa está llena de gente.',     target_word_form: 'playa' },
      { native: 'Ich entspanne mich am Strand.',     target: 'Me relajo en la playa.',            target_word_form: 'playa' },
      { native: 'Der Strand hat weißen Sand.',       target: 'La playa tiene arena blanca.',      target_word_form: 'playa' },
      { native: 'Der Strand liegt nah am Hotel.',    target: 'La playa está cerca del hotel.',    target_word_form: 'playa' },
    ],
  },
  {
    id: 'n012', kind: 'noun', gender: 'm', native: 'der Kaffee', target: 'el café',
    sentences: [
      { native: 'Der Kaffee ist sehr heiß.',         target: 'El café está muy caliente.',        target_word_form: 'café' },
      { native: 'Ich trinke jeden Morgen Kaffee.',   target: 'Tomo un café cada mañana.',         target_word_form: 'café' },
      { native: 'Der Kaffee hier ist ausgezeichnet.',target: 'El café de aquí es excelente.',     target_word_form: 'café' },
      { native: 'Einen Kaffee mit Milch bitte.',     target: 'Un café con leche, por favor.',     target_word_form: 'café' },
      { native: 'Der Kaffee weckt mich auf.',        target: 'El café me despierta.',             target_word_form: 'café' },
      { native: 'Spanischer Kaffee ist sehr stark.', target: 'El café español es muy fuerte.',   target_word_form: 'café' },
    ],
  },
  {
    id: 'n013', kind: 'noun', gender: 'm', native: 'der Zug', target: 'el tren',
    sentences: [
      { native: 'Der Zug kommt um drei.',            target: 'El tren llega a las tres.',         target_word_form: 'tren' },
      { native: 'Ich fahre mit dem Zug nach Madrid.',target: 'Viajo en tren a Madrid.',           target_word_form: 'tren' },
      { native: 'Der Zug ist schnell und bequem.',   target: 'El tren es rápido y cómodo.',       target_word_form: 'tren' },
      { native: 'Der Zug fährt vom Bahnhof ab.',     target: 'El tren sale de la estación.',      target_word_form: 'tren' },
      { native: 'Der Zug hat viel Verspätung.',      target: 'El tren tiene mucho retraso.',      target_word_form: 'tren' },
      { native: 'Der Zug ist günstiger als das Flugzeug.', target: 'El tren es más barato que el avión.', target_word_form: 'tren' },
    ],
  },
  {
    id: 'n014', kind: 'noun', gender: 'm', native: 'der Supermarkt', target: 'el supermercado',
    sentences: [
      { native: 'Der Supermarkt ist nah.',           target: 'El supermercado está cerca.',       target_word_form: 'supermercado' },
      { native: 'Ich kaufe bei Lidl ein.',           target: 'Compro en el supermercado Lidl.',   target_word_form: 'supermercado' },
      { native: 'Der Supermarkt schließt spät.',     target: 'El supermercado cierra tarde.',     target_word_form: 'supermercado' },
      { native: 'Ich gehe jede Woche einkaufen.',    target: 'Voy al supermercado cada semana.',  target_word_form: 'supermercado' },
      { native: 'Der Supermarkt hat gute Angebote.', target: 'El supermercado tiene buenas ofertas.', target_word_form: 'supermercado' },
      { native: 'Der Supermarkt ist heute offen.',   target: 'El supermercado está abierto hoy.', target_word_form: 'supermercado' },
    ],
  },
  {
    id: 'n015', kind: 'noun', gender: 'n', native: 'das Restaurant', target: 'el restaurante',
    sentences: [
      { native: 'Das Restaurant ist sehr gut.',      target: 'El restaurante es muy bueno.',      target_word_form: 'restaurante' },
      { native: 'Ich esse in einem Restaurant.',     target: 'Ceno en un restaurante.',           target_word_form: 'restaurante' },
      { native: 'Das Restaurant hat eine gute Karte.', target: 'El restaurante tiene buena carta.', target_word_form: 'restaurante' },
      { native: 'Das Restaurant ist voll.',          target: 'El restaurante está lleno.',        target_word_form: 'restaurante' },
      { native: 'Ich reserviere einen Tisch.',       target: 'Reservo mesa en el restaurante.',   target_word_form: 'restaurante' },
      { native: 'Das Restaurant ist montags geschlossen.', target: 'El restaurante cierra los lunes.', target_word_form: 'restaurante' },
    ],
  },
  {
    id: 'n016', kind: 'noun', gender: 'm', native: 'der Sport', target: 'el deporte',
    sentences: [
      { native: 'Sport ist sehr gesund.',            target: 'El deporte es muy sano.',           target_word_form: 'deporte' },
      { native: 'Ich mache täglich Sport.',          target: 'Hago deporte cada día.',            target_word_form: 'deporte' },
      { native: 'Mein Lieblingssport ist Fußball.',  target: 'Mi deporte favorito es el fútbol.', target_word_form: 'deporte' },
      { native: 'Sport verbessert die Stimmung.',    target: 'El deporte mejora el humor.',       target_word_form: 'deporte' },
      { native: 'Teamsport macht Spaß.',             target: 'El deporte en equipo es divertido.',target_word_form: 'deporte' },
      { native: 'Sport kostet viel Mühe.',           target: 'El deporte cuesta mucho esfuerzo.', target_word_form: 'deporte' },
    ],
  },
  {
    id: 'n017', kind: 'noun', gender: 'f', native: 'die Musik', target: 'la música',
    sentences: [
      { native: 'Musik entspannt mich.',             target: 'La música me relaja.',              target_word_form: 'música' },
      { native: 'Spanische Musik ist fröhlich.',     target: 'La música española es alegre.',     target_word_form: 'música' },
      { native: 'Ich höre Musik im Zug.',            target: 'Escucho música en el tren.',        target_word_form: 'música' },
      { native: 'Live-Musik ist unglaublich.',       target: 'La música en directo es increíble.',target_word_form: 'música' },
      { native: 'Klassische Musik ist wunderschön.', target: 'La música clásica es hermosa.',     target_word_form: 'música' },
      { native: 'Musik gibt mir Energie.',           target: 'La música me da energía.',          target_word_form: 'música' },
    ],
  },
  {
    id: 'n018', kind: 'noun', gender: 'f', native: 'die Arbeit', target: 'el trabajo',
    sentences: [
      { native: 'Die Arbeit ist interessant.',       target: 'El trabajo es interesante.',        target_word_form: 'trabajo' },
      { native: 'Ich fahre mit dem Rad zur Arbeit.', target: 'Voy al trabajo en bicicleta.',      target_word_form: 'trabajo' },
      { native: 'Meine Arbeit ist sehr anspruchsvoll.', target: 'Mi trabajo es muy exigente.',    target_word_form: 'trabajo' },
      { native: 'Die Arbeit beginnt um neun.',       target: 'El trabajo empieza a las nueve.',   target_word_form: 'trabajo' },
      { native: 'Ich suche eine neue Arbeit.',       target: 'Busco un trabajo nuevo.',           target_word_form: 'trabajo' },
      { native: 'Die Arbeit endet um fünf.',         target: 'El trabajo termina a las cinco.',   target_word_form: 'trabajo' },
    ],
  },
  {
    id: 'n019', kind: 'noun', gender: 'f', native: 'die Zeit', target: 'el tiempo',
    sentences: [
      { native: 'Die Zeit vergeht sehr schnell.',    target: 'El tiempo pasa muy rápido.',        target_word_form: 'tiempo' },
      { native: 'Ich habe heute keine Zeit.',        target: 'No tengo tiempo hoy.',              target_word_form: 'tiempo' },
      { native: 'Zeit ist Geld.',                    target: 'El tiempo es oro.',                 target_word_form: 'tiempo' },
      { native: 'Ich brauche mehr Zeit.',            target: 'Necesito más tiempo.',              target_word_form: 'tiempo' },
      { native: 'Freizeit ist wichtig.',             target: 'El tiempo libre es importante.',    target_word_form: 'tiempo' },
      { native: 'Ich nutze meine Zeit gut.',         target: 'Aprovecho bien el tiempo.',         target_word_form: 'tiempo' },
    ],
  },
  {
    id: 'n020', kind: 'noun', gender: 'n', native: 'das Essen', target: 'la comida',
    sentences: [
      { native: 'Das spanische Essen ist lecker.',   target: 'La comida española es deliciosa.',  target_word_form: 'comida' },
      { native: 'Das Essen ist fertig.',             target: 'La comida está lista.',             target_word_form: 'comida' },
      { native: 'Ich mag italienisches Essen.',      target: 'Me gusta la comida italiana.',      target_word_form: 'comida' },
      { native: 'Das Essen riecht sehr gut.',        target: 'La comida huele muy bien.',         target_word_form: 'comida' },
      { native: 'Das Essen ist sehr gesund.',        target: 'La comida es muy sana.',            target_word_form: 'comida' },
      { native: 'Ich bereite das Essen zu Hause zu.',target: 'Preparo la comida en casa.',        target_word_form: 'comida' },
    ],
  },

  // ===========================
  // ADJEKTIVE (6 verschiedene Sätze)
  // ===========================
  {
    id: 'a001', kind: 'adjective', native: 'groß', target: 'grande',
    sentences: [
      { native: 'Die Stadt ist sehr groß.',          target: 'La ciudad es muy grande.',          target_word_form: 'grande' },
      { native: 'Ich habe eine große Familie.',      target: 'Tengo una familia grande.',         target_word_form: 'grande' },
      { native: 'Der Hund ist groß und stark.',      target: 'El perro es grande y fuerte.',      target_word_form: 'grande' },
      { native: 'Das ist eine große Chance.',        target: 'Es una oportunidad grande.',        target_word_form: 'grande' },
      { native: 'Das Gebäude ist sehr groß.',        target: 'El edificio es muy grande.',        target_word_form: 'grande' },
      { native: 'Er hat ein großes Herz.',           target: 'Tiene un corazón grande.',          target_word_form: 'grande' },
    ],
  },
  {
    id: 'a002', kind: 'adjective', native: 'klein', target: 'pequeño',
    sentences: [
      { native: 'Die Wohnung ist klein.',            target: 'El apartamento es pequeño.',        target_word_form: 'pequeño' },
      { native: 'Ich habe einen kleinen Hund.',      target: 'Tengo un perro pequeño.',           target_word_form: 'pequeño' },
      { native: 'Das Dorf ist sehr klein.',          target: 'El pueblo es muy pequeño.',         target_word_form: 'pequeño' },
      { native: 'Das ist ein kleines Detail.',       target: 'Es un detalle pequeño.',            target_word_form: 'pequeño' },
      { native: 'Das Mädchen ist sehr klein.',       target: 'La niña es muy pequeña.',           target_word_form: 'pequeña' },
      { native: 'Das Problem ist klein.',            target: 'El problema es pequeño.',           target_word_form: 'pequeño' },
    ],
  },
  {
    id: 'a003', kind: 'adjective', native: 'schön', target: 'bonito',
    sentences: [
      { native: 'Die Landschaft ist sehr schön.',    target: 'El paisaje es muy bonito.',         target_word_form: 'bonito' },
      { native: 'Sie hat ein schönes Lächeln.',      target: 'Tiene una sonrisa bonita.',         target_word_form: 'bonita' },
      { native: 'Das Kleid ist sehr schön.',         target: 'El vestido es muy bonito.',         target_word_form: 'bonito' },
      { native: 'Es ist ein schöner Tag.',           target: 'Es un día bonito.',                 target_word_form: 'bonito' },
      { native: 'Die Musik ist schön.',              target: 'La música es bonita.',              target_word_form: 'bonita' },
      { native: 'Wie schön der Garten ist.',         target: 'Qué bonito está el jardín.',        target_word_form: 'bonito' },
    ],
  },
  {
    id: 'a004', kind: 'adjective', native: 'schnell', target: 'rápido',
    sentences: [
      { native: 'Der Zug ist sehr schnell.',         target: 'El tren es muy rápido.',            target_word_form: 'rápido' },
      { native: 'Er läuft sehr schnell.',            target: 'Corre muy rápido.',                 target_word_form: 'rápido' },
      { native: 'Ich brauche eine schnelle Antwort.',target: 'Necesito una respuesta rápida.',    target_word_form: 'rápida' },
      { native: 'Die Zeit vergeht schnell.',         target: 'El tiempo pasa rápido.',            target_word_form: 'rápido' },
      { native: 'Das ist ein sehr schnelles Auto.',  target: 'Es un coche muy rápido.',           target_word_form: 'rápido' },
      { native: 'Sie lernt sehr schnell.',           target: 'Aprende muy rápido.',               target_word_form: 'rápido' },
    ],
  },
  {
    id: 'a005', kind: 'adjective', native: 'gut', target: 'bueno',
    sentences: [
      { native: 'Das Essen ist sehr gut.',           target: 'La comida está muy buena.',         target_word_form: 'buena' },
      { native: 'Das ist ein gutes Buch.',           target: 'Es un buen libro.',                 target_word_form: 'buen' },
      { native: 'Er hat ein gutes Herz.',            target: 'Tiene un corazón bueno.',           target_word_form: 'bueno' },
      { native: 'Das Wetter ist heute gut.',         target: 'El tiempo es bueno hoy.',           target_word_form: 'bueno' },
      { native: 'Das ist eine gute Idee.',           target: 'Es una buena idea.',                target_word_form: 'buena' },
      { native: 'Sie hat gute Noten.',               target: 'Tiene buenas notas.',               target_word_form: 'buenas' },
    ],
  },
  {
    id: 'a006', kind: 'adjective', native: 'neu', target: 'nuevo',
    sentences: [
      { native: 'Ich habe eine neue Arbeit.',        target: 'Tengo un trabajo nuevo.',           target_word_form: 'nuevo' },
      { native: 'Das neue Telefon funktioniert gut.',target: 'El teléfono nuevo funciona bien.',  target_word_form: 'nuevo' },
      { native: 'Das ist ein neues Restaurant.',     target: 'Es un restaurante nuevo.',          target_word_form: 'nuevo' },
      { native: 'Wir beginnen ein neues Jahr.',      target: 'Empezamos un año nuevo.',           target_word_form: 'nuevo' },
      { native: 'Sie hat ein neues Haus.',           target: 'Tiene una casa nueva.',             target_word_form: 'nueva' },
      { native: 'Ich suche neue Freunde.',           target: 'Busco amigos nuevos.',              target_word_form: 'nuevos' },
    ],
  },
  {
    id: 'a007', kind: 'adjective', native: 'teuer', target: 'caro',
    sentences: [
      { native: 'Das Restaurant ist sehr teuer.',    target: 'El restaurante es muy caro.',       target_word_form: 'caro' },
      { native: 'Markenkleidung ist teuer.',         target: 'La ropa de marca es cara.',         target_word_form: 'cara' },
      { native: 'Die Miete ist sehr teuer.',         target: 'El alquiler es muy caro.',          target_word_form: 'caro' },
      { native: 'Die Reise ist teuer aber lohnenswert.', target: 'El viaje es caro pero vale la pena.', target_word_form: 'caro' },
      { native: 'Das neue Auto ist teuer.',          target: 'El coche nuevo es caro.',           target_word_form: 'caro' },
      { native: 'Das Leben in der Stadt ist teuer.', target: 'La vida en la ciudad es cara.',     target_word_form: 'cara' },
    ],
  },
  {
    id: 'a008', kind: 'adjective', native: 'glücklich', target: 'feliz',
    sentences: [
      { native: 'Ich bin heute sehr glücklich.',     target: 'Estoy muy feliz hoy.',              target_word_form: 'feliz' },
      { native: 'Ich habe ein glückliches Leben.',   target: 'Tengo una vida feliz.',             target_word_form: 'feliz' },
      { native: 'Das Kind ist glücklich.',           target: 'El niño está feliz.',               target_word_form: 'feliz' },
      { native: 'Ich fühle mich glücklich mit dir.', target: 'Me siento feliz contigo.',          target_word_form: 'feliz' },
      { native: 'Sie ist eine glückliche Person.',   target: 'Es una persona muy feliz.',         target_word_form: 'feliz' },
      { native: 'Wir sind zusammen glücklich.',      target: 'Somos felices juntos.',             target_word_form: 'felices' },
    ],
  },
  {
    id: 'a009', kind: 'adjective', native: 'müde', target: 'cansado',
    sentences: [
      { native: 'Ich bin heute sehr müde.',          target: 'Estoy muy cansado hoy.',            target_word_form: 'cansado' },
      { native: 'Das Kind ist müde.',                target: 'El niño está cansado.',             target_word_form: 'cansado' },
      { native: 'Ich kam müde nach Hause.',          target: 'Llegué cansado a casa.',            target_word_form: 'cansado' },
      { native: 'Wir sind müde von der Reise.',      target: 'Estamos cansados del viaje.',       target_word_form: 'cansados' },
      { native: 'Er ist müde vom Arbeiten.',         target: 'Está cansado de trabajar.',         target_word_form: 'cansado' },
      { native: 'Ich fühle mich nachmittags müde.',  target: 'Me siento cansado por la tarde.',  target_word_form: 'cansado' },
    ],
  },
  {
    id: 'a010', kind: 'adjective', native: 'interessant', target: 'interesante',
    sentences: [
      { native: 'Das Buch ist sehr interessant.',    target: 'El libro es muy interesante.',      target_word_form: 'interesante' },
      { native: 'Der Unterricht ist interessant.',   target: 'La clase es interesante.',          target_word_form: 'interesante' },
      { native: 'Er ist eine interessante Person.',  target: 'Es una persona muy interesante.',   target_word_form: 'interesante' },
      { native: 'Das Projekt ist interessant.',      target: 'El proyecto es interesante.',       target_word_form: 'interesante' },
      { native: 'Die Geschichte ist interessant.',   target: 'La historia es interesante.',       target_word_form: 'interesante' },
      { native: 'Das ist ein sehr interessantes Land.', target: 'Es un país muy interesante.',    target_word_form: 'interesante' },
    ],
  },
  {
    id: 'a011', kind: 'adjective', native: 'billig', target: 'barato',
    sentences: [
      { native: 'Der Markt ist sehr günstig.',       target: 'El mercado es muy barato.',         target_word_form: 'barato' },
      { native: 'Ich habe einen günstigen Flug gefunden.', target: 'Encontré un vuelo barato.',   target_word_form: 'barato' },
      { native: 'Das Essen ist hier günstig.',       target: 'La comida es barata aquí.',         target_word_form: 'barata' },
      { native: 'Das ist ein günstiges Hotel.',      target: 'Es un hotel barato pero limpio.',   target_word_form: 'barato' },
      { native: 'Die Kleidung ist günstig.',         target: 'La ropa es barata.',                target_word_form: 'barata' },
      { native: 'Lidl ist sehr günstig.',            target: 'El supermercado Lidl es barato.',   target_word_form: 'barato' },
    ],
  },
  {
    id: 'a012', kind: 'adjective', native: 'kalt', target: 'frío',
    sentences: [
      { native: 'Das Wasser ist sehr kalt.',         target: 'El agua está muy fría.',            target_word_form: 'fría' },
      { native: 'Im Winter ist es kalt.',            target: 'Hace frío en invierno.',            target_word_form: 'frío' },
      { native: 'Das Bier ist kalt.',                target: 'La cerveza está fría.',             target_word_form: 'fría' },
      { native: 'Der Wind ist sehr kalt.',           target: 'El viento es muy frío.',            target_word_form: 'frío' },
      { native: 'Meine Hände sind kalt.',            target: 'Tengo las manos frías.',            target_word_form: 'frías' },
      { native: 'Im Winter ist es in Berlin kalt.',  target: 'El invierno es frío en Berlín.',    target_word_form: 'frío' },
    ],
  },
  {
    id: 'a013', kind: 'adjective', native: 'warm', target: 'caliente',
    sentences: [
      { native: 'Der Kaffee ist sehr warm.',         target: 'El café está muy caliente.',        target_word_form: 'caliente' },
      { native: 'Im Sommer ist es warm.',            target: 'Hace calor en verano.',             target_word_form: 'calor' },
      { native: 'Die Suppe ist sehr warm.',          target: 'La sopa está muy caliente.',        target_word_form: 'caliente' },
      { native: 'Der Tag ist warm.',                 target: 'El día es caluroso.',               target_word_form: 'caluroso' },
      { native: 'Das Duschwasser ist warm.',         target: 'El agua de la ducha está caliente.',target_word_form: 'caliente' },
      { native: 'Spanien ist sehr warm im Sommer.',  target: 'España es muy caliente en verano.', target_word_form: 'caliente' },
    ],
  },
  {
    id: 'a014', kind: 'adjective', native: 'einfach', target: 'fácil',
    sentences: [
      { native: 'Die Aufgabe ist sehr einfach.',     target: 'El ejercicio es muy fácil.',        target_word_form: 'fácil' },
      { native: 'Spanisch lernen ist einfach.',      target: 'Aprender español es fácil.',        target_word_form: 'fácil' },
      { native: 'Das ist eine einfache Frage.',      target: 'Es una pregunta fácil.',            target_word_form: 'fácil' },
      { native: 'Das Rezept ist einfach zu machen.', target: 'La receta es fácil de hacer.',      target_word_form: 'fácil' },
      { native: 'Der Weg ist einfach.',              target: 'El camino es fácil.',               target_word_form: 'fácil' },
      { native: 'Das ist eine einfache Lösung.',     target: 'Es una solución fácil.',            target_word_form: 'fácil' },
    ],
  },
  {
    id: 'a015', kind: 'adjective', native: 'schwierig', target: 'difícil',
    sentences: [
      { native: 'Das Examen ist sehr schwierig.',    target: 'El examen es muy difícil.',         target_word_form: 'difícil' },
      { native: 'Chinesisch ist schwierig zu lernen.',target: 'El chino es difícil de aprender.',  target_word_form: 'difícil' },
      { native: 'Das ist eine schwierige Frage.',    target: 'Es una pregunta difícil.',          target_word_form: 'difícil' },
      { native: 'Die Situation ist schwierig.',      target: 'La situación es difícil.',          target_word_form: 'difícil' },
      { native: 'Es war ein schwieriges Jahr.',      target: 'Fue un año difícil.',               target_word_form: 'difícil' },
      { native: 'Der Weg ist schwierig.',            target: 'El camino es difícil.',             target_word_form: 'difícil' },
    ],
  },

  // ===========================
  // ADVERBIEN & PHRASEN
  // ===========================
  {
    id: 'x001', kind: 'adverb', native: 'heute', target: 'hoy',
    sentences: [
      { native: 'Heute ist schönes Wetter.',         target: 'Hoy hace buen tiempo.',             target_word_form: 'Hoy' },
      { native: 'Ich habe heute keine Zeit.',        target: 'No tengo tiempo hoy.',              target_word_form: 'hoy' },
      { native: 'Heute esse ich zu Hause.',          target: 'Hoy como en casa.',                 target_word_form: 'Hoy' },
      { native: 'Heute ist Montag.',                 target: 'Hoy es lunes.',                     target_word_form: 'Hoy' },
      { native: 'Heute habe ich viel Arbeit.',       target: 'Hoy tengo mucho trabajo.',          target_word_form: 'Hoy' },
      { native: 'Heute fühle ich mich gut.',         target: 'Hoy me siento bien.',               target_word_form: 'Hoy' },
    ],
  },
  {
    id: 'x002', kind: 'adverb', native: 'morgen', target: 'mañana',
    sentences: [
      { native: 'Morgen habe ich ein Meeting.',      target: 'Mañana tengo una reunión.',         target_word_form: 'Mañana' },
      { native: 'Ich reise morgen nach Madrid.',     target: 'Viajo mañana a Madrid.',            target_word_form: 'mañana' },
      { native: 'Morgen ist mein Geburtstag.',       target: 'Mañana es mi cumpleaños.',          target_word_form: 'Mañana' },
      { native: 'Ich rufe dich morgen an.',          target: 'Te llamo mañana.',                  target_word_form: 'mañana' },
      { native: 'Morgen beginnt der Sommer.',        target: 'Mañana empieza el verano.',         target_word_form: 'Mañana' },
      { native: 'Morgen habe ich frei.',             target: 'Mañana tengo el día libre.',        target_word_form: 'Mañana' },
    ],
  },
  {
    id: 'x003', kind: 'adverb', native: 'immer', target: 'siempre',
    sentences: [
      { native: 'Ich esse immer Obst.',              target: 'Siempre como fruta.',               target_word_form: 'Siempre' },
      { native: 'Er kommt immer pünktlich.',         target: 'Siempre llega puntual.',            target_word_form: 'Siempre' },
      { native: 'Ich werde dir immer helfen.',       target: 'Siempre te ayudaré.',               target_word_form: 'Siempre' },
      { native: 'Er macht immer dasselbe.',          target: 'Siempre hace lo mismo.',            target_word_form: 'Siempre' },
      { native: 'Ich bin immer für dich da.',        target: 'Siempre estoy aquí para ti.',       target_word_form: 'Siempre' },
      { native: 'Es gibt immer eine Lösung.',        target: 'Siempre hay una solución.',         target_word_form: 'Siempre' },
    ],
  },
  {
    id: 'x004', kind: 'adverb', native: 'nie', target: 'nunca',
    sentences: [
      { native: 'Ich esse nie Fleisch.',             target: 'Nunca como carne.',                 target_word_form: 'Nunca' },
      { native: 'Er kommt nie zu spät.',             target: 'Nunca llega tarde.',                target_word_form: 'Nunca' },
      { native: 'Ich war nie in Mexiko.',            target: 'Nunca he estado en México.',        target_word_form: 'Nunca' },
      { native: 'Ich gebe nie auf.',                 target: 'Nunca me rindo.',                   target_word_form: 'Nunca' },
      { native: 'Ich vergesse nie deinen Geburtstag.',target: 'Nunca olvido tu cumpleaños.',      target_word_form: 'Nunca' },
      { native: 'Es ist nie zu spät.',               target: 'Nunca es demasiado tarde.',         target_word_form: 'Nunca' },
    ],
  },
  {
    id: 'x005', kind: 'adverb', native: 'vielleicht', target: 'quizás',
    sentences: [
      { native: 'Vielleicht kommt er morgen.',       target: 'Quizás venga mañana.',              target_word_form: 'Quizás' },
      { native: 'Vielleicht hast du recht.',         target: 'Quizás tengas razón.',              target_word_form: 'Quizás' },
      { native: 'Vielleicht ist das eine gute Idee.',target: 'Quizás sea una buena idea.',        target_word_form: 'Quizás' },
      { native: 'Vielleicht gehen wir an den Strand.',target: 'Quizás vayamos a la playa.',       target_word_form: 'Quizás' },
      { native: 'Vielleicht regnet es heute.',       target: 'Quizás llueva hoy.',                target_word_form: 'Quizás' },
      { native: 'Vielleicht wechsle ich den Job.',   target: 'Quizás cambie de trabajo.',         target_word_form: 'Quizás' },
    ],
  },
  {
    id: 'x006', kind: 'adverb', native: 'gestern', target: 'ayer',
    sentences: [
      { native: 'Gestern war ich im Kino.',          target: 'Ayer fui al cine.',                 target_word_form: 'Ayer' },
      { native: 'Gestern hat es viel geregnet.',     target: 'Ayer llovió mucho.',                target_word_form: 'Ayer' },
      { native: 'Gestern habe ich Paella gegessen.', target: 'Ayer comí paella.',                 target_word_form: 'Ayer' },
      { native: 'Gestern lernte ich jemanden kennen.',target: 'Ayer conocí a alguien interesante.',target_word_form: 'Ayer' },
      { native: 'Gestern habe ich schlecht geschlafen.', target: 'Ayer no dormí bien.',           target_word_form: 'Ayer' },
      { native: 'Gestern war ein schwieriger Tag.',  target: 'Ayer fue un día difícil.',          target_word_form: 'Ayer' },
    ],
  },
  {
    id: 'x007', kind: 'phrase', native: 'Entschuldigung', target: 'perdón',
    sentences: [
      { native: 'Entschuldigung, das wusste ich nicht.', target: 'Perdón, no lo sabía.',         target_word_form: 'Perdón' },
      { native: 'Entschuldigung, können Sie wiederholen?', target: 'Perdón, ¿puede repetir?',    target_word_form: 'Perdón' },
      { native: 'Entschuldigung für die Verspätung.', target: 'Perdón por el retraso.',           target_word_form: 'Perdón' },
      { native: 'Entschuldigung, wo ist das Bad?',   target: 'Perdón, ¿dónde está el baño?',     target_word_form: 'Perdón' },
      { native: 'Entschuldigung, darf ich vorbei?',  target: 'Perdón, ¿puedo pasar?',            target_word_form: 'Perdón' },
      { native: 'Entschuldigung, ich habe mich geirrt.', target: 'Perdón, me equivoqué.',         target_word_form: 'Perdón' },
    ],
  },
  {
    id: 'x008', kind: 'phrase', native: 'Bitte sehr', target: 'de nada',
    sentences: [
      { native: 'Bitte sehr, es war mir ein Vergnügen.', target: 'De nada, fue un placer.',      target_word_form: 'nada' },
      { native: 'Danke! – Bitte sehr.',              target: '¡Gracias! – De nada.',              target_word_form: 'nada' },
      { native: 'Bitte sehr, dafür bin ich da.',     target: 'De nada, para eso estoy.',          target_word_form: 'nada' },
      { native: 'Bitte sehr, das ist das Mindeste.', target: 'De nada, es lo mínimo.',            target_word_form: 'nada' },
      { native: 'Bitte sehr, jederzeit.',            target: 'De nada, cuando quieras.',          target_word_form: 'nada' },
      { native: 'Bitte sehr, es war einfach.',       target: 'De nada, ha sido fácil.',           target_word_form: 'nada' },
    ],
  },
  {
    id: 'x009', kind: 'phrase', native: 'Wie geht es dir?', target: '¿Cómo estás?',
    sentences: [
      { native: 'Wie geht es dir heute?',            target: '¿Cómo estás hoy?',                 target_word_form: 'estás' },
      { native: 'Hallo, wie geht es dir?',           target: 'Hola, ¿cómo estás?',               target_word_form: 'estás' },
      { native: 'Wie geht es dir nach der Reise?',   target: '¿Cómo estás después del viaje?',   target_word_form: 'estás' },
      { native: 'Wie geht es dir gesundheitlich?',   target: '¿Cómo estás de salud?',            target_word_form: 'estás' },
      { native: 'Guten Morgen, wie geht es dir?',    target: 'Buenos días, ¿cómo estás?',        target_word_form: 'estás' },
      { native: 'Wie geht es dir mit der neuen Arbeit?', target: '¿Cómo estás con el nuevo trabajo?', target_word_form: 'estás' },
    ],
  },
  {
    id: 'x010', kind: 'prep', native: 'mit', target: 'con',
    sentences: [
      { native: 'Ich gehe mit meinen Freunden.',     target: 'Voy con mis amigos.',               target_word_form: 'con' },
      { native: 'Kaffee mit Milch bitte.',           target: 'Café con leche, por favor.',        target_word_form: 'con' },
      { native: 'Ich spreche mit meinem Chef.',      target: 'Hablo con mi jefe.',                target_word_form: 'con' },
      { native: 'Ich reise mit meiner Familie.',     target: 'Viajo con mi familia.',             target_word_form: 'con' },
      { native: 'Mit Mühe ist alles möglich.',       target: 'Con esfuerzo todo es posible.',     target_word_form: 'con' },
      { native: 'Ich wohne mit meinen Eltern.',      target: 'Vivo con mis padres.',              target_word_form: 'con' },
    ],
  },
  {
    id: 'x011', kind: 'prep', native: 'ohne', target: 'sin',
    sentences: [
      { native: 'Einen Kaffee ohne Zucker.',         target: 'Un café sin azúcar.',               target_word_form: 'sin' },
      { native: 'Ich kann nicht ohne Musik leben.',  target: 'No puedo vivir sin música.',        target_word_form: 'sin' },
      { native: 'Ich bin ohne Schirm rausgegangen.', target: 'Salí sin paraguas.',                target_word_form: 'sin' },
      { native: 'Ohne Arbeit kein Geld.',            target: 'Sin trabajo no hay dinero.',        target_word_form: 'sin' },
      { native: 'Ich bin ohne Probleme angekommen.', target: 'Llegué sin problemas.',             target_word_form: 'sin' },
      { native: 'Ich habe es ohne Hilfe gemacht.',   target: 'Lo hice sin ayuda.',                target_word_form: 'sin' },
    ],
  },

  // ===========================
  // WEITERE NOMEN (auf 100 auffüllen)
  // ===========================
  {
    id: 'n021', kind: 'noun', gender: 'f', native: 'die Sprache', target: 'el idioma',
    sentences: [
      { native: 'Spanisch ist eine schöne Sprache.', target: 'El español es un idioma bonito.',   target_word_form: 'idioma' },
      { native: 'Ich lerne eine neue Sprache.',      target: 'Aprendo un idioma nuevo.',          target_word_form: 'idioma' },
      { native: 'Die Sprache ist schwierig.',        target: 'El idioma es difícil.',             target_word_form: 'idioma' },
      { native: 'Ich spreche zwei Sprachen.',        target: 'Hablo dos idiomas.',                target_word_form: 'idiomas' },
      { native: 'Sprachen öffnen Türen.',            target: 'Los idiomas abren puertas.',        target_word_form: 'idiomas' },
      { native: 'Die offizielle Sprache ist Spanisch.', target: 'El idioma oficial es el español.',target_word_form: 'idioma' },
    ],
  },
  {
    id: 'n022', kind: 'noun', gender: 'n', native: 'das Wetter', target: 'el tiempo',
    sentences: [
      { native: 'Das Wetter ist heute sehr gut.',    target: 'El tiempo está muy bueno hoy.',     target_word_form: 'tiempo' },
      { native: 'Das Wetter ändert sich oft.',       target: 'El tiempo cambia mucho aquí.',      target_word_form: 'tiempo' },
      { native: 'Das Wetter ist perfekt zum Ausgehen.', target: 'El tiempo es perfecto para salir.', target_word_form: 'tiempo' },
      { native: 'Das Wetter wird nachmittags schlechter.', target: 'El tiempo empeora por la tarde.', target_word_form: 'tiempo' },
      { native: 'Das Wetter in Spanien ist warm.',   target: 'El tiempo en España es cálido.',    target_word_form: 'tiempo' },
      { native: 'Das Wetter ist heute bewölkt.',     target: 'El tiempo está nublado hoy.',       target_word_form: 'tiempo' },
    ],
  },
  {
    id: 'n023', kind: 'noun', gender: 'n', native: 'das Hotel', target: 'el hotel',
    sentences: [
      { native: 'Das Hotel ist sehr schön.',         target: 'El hotel es muy bonito.',           target_word_form: 'hotel' },
      { native: 'Ich buche ein Hotel in Barcelona.', target: 'Reservo un hotel en Barcelona.',    target_word_form: 'hotel' },
      { native: 'Das Hotel hat einen Pool.',         target: 'El hotel tiene piscina.',           target_word_form: 'hotel' },
      { native: 'Das Hotel liegt im Zentrum.',       target: 'El hotel está en el centro.',       target_word_form: 'hotel' },
      { native: 'Das Hotel hat ein gutes Frühstück.',target: 'El hotel tiene buen desayuno.',     target_word_form: 'hotel' },
      { native: 'Das Hotel ist günstig und sauber.', target: 'El hotel es barato y limpio.',      target_word_form: 'hotel' },
    ],
  },
  {
    id: 'n024', kind: 'noun', gender: 'f', native: 'die Nacht', target: 'la noche',
    sentences: [
      { native: 'Die Nacht ist sternenklar.',        target: 'La noche está estrellada.',         target_word_form: 'noche' },
      { native: 'Nachts schlafe ich acht Stunden.',  target: 'Por la noche duermo ocho horas.',   target_word_form: 'noche' },
      { native: 'Das Nachtleben in Madrid ist toll.',target: 'La noche en Madrid es animada.',    target_word_form: 'noche' },
      { native: 'Gute Nacht allerseits.',            target: 'Buenas noches a todos.',            target_word_form: 'noches' },
      { native: 'Im Winter ist die Nacht kalt.',     target: 'La noche es fría en invierno.',     target_word_form: 'noche' },
      { native: 'Nachts lerne ich.',                 target: 'Por la noche estudio.',             target_word_form: 'noche' },
    ],
  },
  {
    id: 'n025', kind: 'noun', gender: 'm', native: 'der Freund', target: 'el amigo',
    sentences: [
      { native: 'Mein Freund wohnt in Madrid.',      target: 'Mi amigo vive en Madrid.',          target_word_form: 'amigo' },
      { native: 'Der Freund hilft mir immer.',       target: 'El amigo me ayuda siempre.',        target_word_form: 'amigo' },
      { native: 'Ich habe einen lustigen Freund.',   target: 'Tengo un amigo muy divertido.',     target_word_form: 'amigo' },
      { native: 'Der Freund ruft mich an.',          target: 'El amigo llama por teléfono.',      target_word_form: 'amigo' },
      { native: 'Mein Freund spricht drei Sprachen.',target: 'Mi amigo habla tres idiomas.',      target_word_form: 'amigo' },
      { native: 'Der Freund kommt zum Abendessen.',  target: 'El amigo viene a cenar.',           target_word_form: 'amigo' },
    ],
  },
  {
    id: 'n026', kind: 'noun', gender: 'm', native: 'der Tag', target: 'el día',
    sentences: [
      { native: 'Der Tag ist sehr sonnig.',          target: 'El día está muy soleado.',          target_word_form: 'día' },
      { native: 'Ich habe morgen einen freien Tag.', target: 'Tengo un día libre mañana.',        target_word_form: 'día' },
      { native: 'Der Tag vergeht sehr schnell.',     target: 'El día pasa muy rápido.',           target_word_form: 'día' },
      { native: 'Es ist ein guter Tag zum Ausgehen.',target: 'Es un buen día para salir.',        target_word_form: 'día' },
      { native: 'Der Tag beginnt mit Kaffee.',       target: 'El día empieza con café.',          target_word_form: 'día' },
      { native: 'Guten Morgen und guten Tag.',       target: 'Buenos días a todos.',              target_word_form: 'días' },
    ],
  },
  {
    id: 'n027', kind: 'noun', gender: 'f', native: 'die Woche', target: 'la semana',
    sentences: [
      { native: 'Nächste Woche reise ich.',          target: 'La semana que viene viajo.',        target_word_form: 'semana' },
      { native: 'Ich arbeite fünf Tage die Woche.',  target: 'Trabajo cinco días a la semana.',   target_word_form: 'semana' },
      { native: 'Die Woche vergeht sehr schnell.',   target: 'La semana pasa muy rápido.',        target_word_form: 'semana' },
      { native: 'Diese Woche habe ich viel zu tun.', target: 'Esta semana tengo mucho trabajo.',  target_word_form: 'semana' },
      { native: 'Die Woche hat sieben Tage.',        target: 'La semana tiene siete días.',       target_word_form: 'semana' },
      { native: 'Am Wochenende ruhe ich mich aus.',  target: 'El fin de semana descanso.',        target_word_form: 'semana' },
    ],
  },
  {
    id: 'n028', kind: 'noun', gender: 'm', native: 'der Arzt', target: 'el médico',
    sentences: [
      { native: 'Der Arzt ist sehr freundlich.',     target: 'El médico es muy amable.',          target_word_form: 'médico' },
      { native: 'Ich gehe morgen zum Arzt.',         target: 'Voy al médico mañana.',             target_word_form: 'médico' },
      { native: 'Der Arzt arbeitet im Krankenhaus.', target: 'El médico trabaja en el hospital.', target_word_form: 'médico' },
      { native: 'Der Arzt gibt mir einen Rat.',      target: 'El médico me da un consejo.',       target_word_form: 'médico' },
      { native: 'Der Arzt spricht langsam.',         target: 'El médico habla despacio.',         target_word_form: 'médico' },
      { native: 'Der Arzt hat viel Erfahrung.',      target: 'El médico tiene mucha experiencia.',target_word_form: 'médico' },
    ],
  },
  {
    id: 'n029', kind: 'noun', gender: 'n', native: 'das Jahr', target: 'el año',
    sentences: [
      { native: 'Das Jahr hat zwölf Monate.',        target: 'El año tiene doce meses.',          target_word_form: 'año' },
      { native: 'Dieses Jahr reise ich nach Mexiko.',target: 'Este año viajo a México.',           target_word_form: 'año' },
      { native: 'Letztes Jahr war schwierig.',       target: 'El año pasado fue difícil.',        target_word_form: 'año' },
      { native: 'Das neue Jahr beginnt gut.',        target: 'El año nuevo empieza bien.',        target_word_form: 'año' },
      { native: 'Ich lebe seit drei Jahren in Spanien.', target: 'Llevo tres años en España.',    target_word_form: 'años' },
      { native: 'Nächstes Jahr beende ich mein Studium.', target: 'El año que viene termino mis estudios.', target_word_form: 'año' },
    ],
  },
  {
    id: 'n030', kind: 'noun', gender: 'f', native: 'die Küche', target: 'la cocina',
    sentences: [
      { native: 'Die spanische Küche ist lecker.',   target: 'La cocina española es deliciosa.',  target_word_form: 'cocina' },
      { native: 'Ich liebe die italienische Küche.', target: 'Me encanta la cocina italiana.',    target_word_form: 'cocina' },
      { native: 'Die Küche ist sauber.',             target: 'La cocina está limpia.',            target_word_form: 'cocina' },
      { native: 'Ich koche in der Küche.',           target: 'Cocino en la cocina.',              target_word_form: 'cocina' },
      { native: 'Die Küche hat einen neuen Ofen.',   target: 'La cocina tiene horno nuevo.',      target_word_form: 'cocina' },
      { native: 'Die Küche riecht sehr gut.',        target: 'La cocina huele muy bien.',         target_word_form: 'cocina' },
    ],
  },
  {
    id: 'n031', kind: 'noun', gender: 'f', native: 'die Gesundheit', target: 'la salud',
    sentences: [
      { native: 'Gesundheit ist das Wichtigste.',    target: 'La salud es lo más importante.',    target_word_form: 'salud' },
      { native: 'Ich achte auf meine Gesundheit.',   target: 'Cuido mi salud.',                   target_word_form: 'salud' },
      { native: 'Sport verbessert die Gesundheit.',  target: 'La salud mejora con deporte.',      target_word_form: 'salud' },
      { native: 'Gesundheit ist ein Schatz.',        target: 'La salud es un tesoro.',            target_word_form: 'salud' },
      { native: 'Mentale Gesundheit ist wichtig.',   target: 'La salud mental es importante.',    target_word_form: 'salud' },
      { native: 'Auf deine Gesundheit!',             target: '¡A tu salud!',                      target_word_form: 'salud' },
    ],
  },
  {
    id: 'n032', kind: 'noun', gender: 'm', native: 'der Sommer', target: 'el verano',
    sentences: [
      { native: 'Der Sommer in Spanien ist heiß.',   target: 'El verano en España es muy caluroso.', target_word_form: 'verano' },
      { native: 'Im Sommer gehe ich zum Strand.',    target: 'En verano voy a la playa.',         target_word_form: 'verano' },
      { native: 'Der Sommer ist meine Lieblingsjahreszeit.', target: 'El verano es mi estación favorita.', target_word_form: 'verano' },
      { native: 'Im Sommer sind die Tage lang.',     target: 'El verano tiene días muy largos.',  target_word_form: 'verano' },
      { native: 'Im Sommer ruhe ich mich viel aus.', target: 'En verano descanso mucho.',         target_word_form: 'verano' },
      { native: 'Der Sommer beginnt im Juni.',       target: 'El verano empieza en junio.',       target_word_form: 'verano' },
    ],
  },
  {
    id: 'n033', kind: 'noun', gender: 'm', native: 'der Winter', target: 'el invierno',
    sentences: [
      { native: 'Der Winter ist hier sehr kalt.',    target: 'El invierno es muy frío aquí.',     target_word_form: 'invierno' },
      { native: 'Im Winter fahre ich Ski.',          target: 'En invierno esquío en los Alpes.',  target_word_form: 'invierno' },
      { native: 'Im Winter sind die Tage kurz.',     target: 'El invierno tiene días cortos.',    target_word_form: 'invierno' },
      { native: 'Im Winter trinke ich viel Tee.',    target: 'En invierno bebo mucho té.',        target_word_form: 'invierno' },
      { native: 'Der Winter beginnt im Dezember.',   target: 'El invierno empieza en diciembre.', target_word_form: 'invierno' },
      { native: 'Der Winter in Madrid ist mild.',    target: 'El invierno en Madrid es suave.',   target_word_form: 'invierno' },
    ],
  },

  {
    id: 'a016', kind: 'adjective', native: 'alt', target: 'viejo',
    sentences: [
      { native: 'Das Gebäude ist sehr alt.',         target: 'El edificio es muy viejo.',         target_word_form: 'viejo' },
      { native: 'Mein Auto ist alt aber es läuft.', target: 'Mi coche es viejo pero funciona.',  target_word_form: 'viejo' },
      { native: 'Das ist ein sehr altes Buch.',      target: 'Es un libro muy viejo.',            target_word_form: 'viejo' },
      { native: 'Die Brücke ist alt.',               target: 'El puente es viejo.',               target_word_form: 'viejo' },
      { native: 'Er trägt alte Kleidung.',           target: 'Tiene ropa vieja.',                 target_word_form: 'vieja' },
      { native: 'Alter Wein ist besser.',            target: 'El vino viejo es mejor.',           target_word_form: 'viejo' },
    ],
  },
  {
    id: 'a017', kind: 'adjective', native: 'schlecht', target: 'malo',
    sentences: [
      { native: 'Das Wetter ist sehr schlecht.',     target: 'El tiempo está muy malo.',          target_word_form: 'malo' },
      { native: 'Der Film ist schlecht.',            target: 'La película es mala.',              target_word_form: 'mala' },
      { native: 'Ich habe einen schlechten Tag.',    target: 'Tengo un día malo.',                target_word_form: 'malo' },
      { native: 'Das ist eine schlechte Idee.',      target: 'Es una mala idea.',                 target_word_form: 'mala' },
      { native: 'Das Ergebnis ist schlecht.',        target: 'El resultado es malo.',             target_word_form: 'malo' },
      { native: 'Er hat einen schlechten Charakter.',target: 'Tiene un carácter malo.',           target_word_form: 'malo' },
    ],
  },
  {
    id: 'x012', kind: 'adverb', native: 'sehr', target: 'muy',
    sentences: [
      { native: 'Das Essen ist sehr lecker.',        target: 'La comida está muy rica.',          target_word_form: 'muy' },
      { native: 'Er spricht sehr schnell.',          target: 'Habla muy rápido.',                 target_word_form: 'muy' },
      { native: 'Das ist sehr interessant.',         target: 'Eso es muy interesante.',           target_word_form: 'muy' },
      { native: 'Ich bin sehr müde.',                target: 'Estoy muy cansado.',                target_word_form: 'muy' },
      { native: 'Sie ist sehr freundlich.',          target: 'Es muy amable.',                    target_word_form: 'muy' },
      { native: 'Das Wetter ist sehr gut.',          target: 'El tiempo está muy bueno.',         target_word_form: 'muy' },
    ],
  },
  {
    id: 'x013', kind: 'adverb', native: 'zusammen', target: 'juntos',
    sentences: [
      { native: 'Wir essen zusammen.',               target: 'Comemos juntos.',                   target_word_form: 'juntos' },
      { native: 'Sie reisen zusammen.',              target: 'Viajan juntos.',                    target_word_form: 'juntos' },
      { native: 'Wir arbeiten zusammen.',            target: 'Trabajamos juntos.',                target_word_form: 'juntos' },
      { native: 'Sie lernen zusammen.',              target: 'Aprenden juntos.',                  target_word_form: 'juntos' },
      { native: 'Wir sind zusammen glücklich.',      target: 'Somos felices juntos.',             target_word_form: 'juntos' },
      { native: 'Sie laufen zusammen im Park.',      target: 'Corren juntos en el parque.',       target_word_form: 'juntos' },
    ],
  },
  {
    id: 'x014', kind: 'adverb', native: 'noch nicht', target: 'todavía no',
    sentences: [
      { native: 'Ich habe noch nicht gegessen.',     target: 'Todavía no he comido.',             target_word_form: 'todavía' },
      { native: 'Er ist noch nicht angekommen.',     target: 'Todavía no ha llegado.',            target_word_form: 'todavía' },
      { native: 'Ich spreche noch nicht perfekt.', target: 'Todavía no hablo perfectamente.',   target_word_form: 'todavía' },
      { native: 'Wir haben noch nicht entschieden.', target: 'Todavía no hemos decidido.',        target_word_form: 'todavía' },
      { native: 'Das Essen ist noch nicht fertig.',  target: 'La comida todavía no está lista.',  target_word_form: 'todavía' },
      { native: 'Ich bin noch nicht müde.',          target: 'Todavía no estoy cansado.',         target_word_form: 'todavía' },
    ],
  },
  {
    id: 'x015', kind: 'adverb', native: 'schon', target: 'ya',
    sentences: [
      { native: 'Ich habe schon gegessen.',          target: 'Ya he comido.',                     target_word_form: 'Ya' },
      { native: 'Er ist schon angekommen.',          target: 'Ya ha llegado.',                    target_word_form: 'Ya' },
      { native: 'Wir sind schon fertig.',            target: 'Ya hemos terminado.',               target_word_form: 'Ya' },
      { native: 'Ich spreche schon besser.',         target: 'Ya hablo mejor.',                   target_word_form: 'Ya' },
      { native: 'Das Restaurant ist schon offen.',   target: 'El restaurante ya está abierto.',   target_word_form: 'ya' },
      { native: 'Er weiß es schon.',                 target: 'Ya lo sabe.',                       target_word_form: 'Ya' },
    ],
  },
  {
    id: 'x016', kind: 'adverb', native: 'dort', target: 'allí',
    sentences: [
      { native: 'Das Hotel ist dort.',               target: 'El hotel está allí.',               target_word_form: 'allí' },
      { native: 'Meine Familie wohnt dort.',         target: 'Mi familia vive allí.',             target_word_form: 'allí' },
      { native: 'Das Restaurant ist dort drüben.',   target: 'El restaurante está allí.',         target_word_form: 'allí' },
      { native: 'Ich war schon dort.',               target: 'Ya he estado allí.',                target_word_form: 'allí' },
      { native: 'Der Zug hält dort.',                target: 'El tren para allí.',                target_word_form: 'allí' },
      { native: 'Wir treffen uns dort.',             target: 'Nos encontramos allí.',             target_word_form: 'allí' },
    ],
  },
  {
    id: 'x017', kind: 'phrase', native: 'Ich mag...', target: 'Me gusta...',
    sentences: [
      { native: 'Ich mag Kaffee sehr.',              target: 'Me gusta mucho el café.',           target_word_form: 'gusta' },
      { native: 'Ich mag diese Stadt.',              target: 'Me gusta esta ciudad.',             target_word_form: 'gusta' },
      { native: 'Ich mag Spanisch.',                 target: 'Me gusta el español.',              target_word_form: 'gusta' },
      { native: 'Ich mag es nicht.',                 target: 'No me gusta.',                      target_word_form: 'gusta' },
      { native: 'Mir gefällt das Hotel.',            target: 'Me gusta el hotel.',                target_word_form: 'gusta' },
      { native: 'Ich mag die spanische Küche.',      target: 'Me gusta la cocina española.',      target_word_form: 'gusta' },
    ],
  },
  {
    id: 'x018', kind: 'prep', native: 'für', target: 'para',
    sentences: [
      { native: 'Das ist für dich.',                 target: 'Esto es para ti.',                  target_word_form: 'para' },
      { native: 'Ich arbeite für meine Familie.',    target: 'Trabajo para mi familia.',           target_word_form: 'para' },
      { native: 'Ein Ticket für Madrid bitte.',      target: 'Un billete para Madrid, por favor.', target_word_form: 'para' },
      { native: 'Das ist gut für die Gesundheit.',   target: 'Esto es bueno para la salud.',      target_word_form: 'para' },
      { native: 'Ich lerne für das Examen.',         target: 'Estudio para el examen.',           target_word_form: 'para' },
      { native: 'Das ist zu schwierig für mich.',    target: 'Esto es muy difícil para mí.',      target_word_form: 'para' },
    ],
  },
  {
    id: 'x019', kind: 'prep', native: 'in', target: 'en',
    sentences: [
      { native: 'Ich wohne in Berlin.',              target: 'Vivo en Berlín.',                   target_word_form: 'en' },
      { native: 'Das Buch ist in der Tasche.',       target: 'El libro está en la mochila.',      target_word_form: 'en' },
      { native: 'Wir sind in einem Restaurant.',     target: 'Estamos en un restaurante.',        target_word_form: 'en' },
      { native: 'Er ist in der Schule.',             target: 'Está en la escuela.',               target_word_form: 'en' },
      { native: 'Im Sommer ist es heiß.',            target: 'En verano hace calor.',             target_word_form: 'En' },
      { native: 'Ich bin in Spanien.',               target: 'Estoy en España.',                  target_word_form: 'en' },
    ],
  },
  {
    id: 'x020', kind: 'phrase', native: 'Ich brauche...', target: 'Necesito...',
    sentences: [
      { native: 'Ich brauche Hilfe.',                target: 'Necesito ayuda.',                   target_word_form: 'Necesito' },
      { native: 'Ich brauche mehr Zeit.',            target: 'Necesito más tiempo.',              target_word_form: 'Necesito' },
      { native: 'Ich brauche ein Taxi.',             target: 'Necesito un taxi.',                 target_word_form: 'Necesito' },
      { native: 'Ich brauche einen Arzt.',           target: 'Necesito un médico.',               target_word_form: 'Necesito' },
      { native: 'Ich brauche eine Pause.',           target: 'Necesito un descanso.',             target_word_form: 'Necesito' },
      { native: 'Ich brauche das Passwort.',         target: 'Necesito la contraseña.',           target_word_form: 'Necesito' },
    ],
  },

];