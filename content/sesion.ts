/**
 * El contenido de la capacitación, como secciones de la presentación.
 *
 * Cada entrada de `secciones` es una pantalla completa. Editar aquí cambia
 * la presentación sin tocar el diseño ni los componentes.
 *
 * En el texto, **lo que va entre asteriscos dobles** sale en negrita.
 *
 * ------------------------------------------------------------------
 * LA ESTRUCTURA, EN SIETE BLOQUES
 *
 *   1 · Quién soy y qué estoy construyendo      00–05
 *   2 · Qué es un LLM                           05–12
 *   3 · Prompt engineering                      12–24
 *   4 · Dónde NO usar IA                        24–29
 *   5 · El brief de 35mm                        29–39
 *   6 · Lovable → Pomelli                       39–54
 *   7 · Reflexión                               54–60
 *
 * El bloque 5 es la bisagra: sin brief, las herramientas del 6
 * devuelven basura genérica. Y Pomelli necesita una URL que lee para
 * sacar la identidad — por eso Lovable va ANTES que Pomelli y no al
 * revés.
 * ------------------------------------------------------------------
 */

export const sesion = {
  grupo: "TVU · Área de mercadeo",
  titulo: "Una campaña con IA, de principio a fin",
  subtitulo: "Marketing digital, prompt engineering y dónde conviene no usarla",
  fecha: "Viernes 28 de agosto, 2026",
};

/** La cadena de la campaña. Se usa en el mapa y en el cierre. */
export const cadena = [
  { n: 1, titulo: "Brief", pregunta: "¿Qué vamos a decir?", quien: "ChatGPT" },
  { n: 2, titulo: "Página", pregunta: "¿Dónde aterriza?", quien: "Lovable" },
  { n: 3, titulo: "Campaña", pregunta: "¿Qué piezas van?", quien: "Pomelli" },
  { n: 4, titulo: "Copy", pregunta: "¿Cómo suena?", quien: "Ustedes" },
];

export const preguntas = [
  {
    texto: "¿Quién eres?",
    ejemplo: "Eres estratega de marketing digital.",
    clave: false,
  },
  {
    texto: "¿Qué sé yo que tú no?",
    ejemplo: "TVU hace Perfiles, Charlas y 35mm. 3.500 seguidores. Publicamos en IG y YouTube.",
    clave: true,
  },
  {
    texto: "¿Qué quiero?",
    ejemplo: "El brief de la próxima edición de 35mm.",
    clave: false,
  },
  {
    texto: "¿Cómo lo quiero?",
    ejemplo: "Cuatro puntos: a quién, qué prometemos, qué piezas, qué no.",
    clave: false,
  },
  {
    texto: "¿Qué NO quiero?",
    ejemplo: 'Nada de "sumérgete en el mundo del cine", nada de adjetivos vacíos.',
    clave: true,
  },
];

/** Se usan en el cierre, después de la reflexión. */
export const limites = [
  {
    titulo: "Verificar todo dato",
    texto:
      "Cifras, fechas, nombres propios. Suena igual de convencido cuando acierta que cuando falla.",
  },
  {
    titulo: "Nada sensible adentro",
    texto: "Datos de entrevistados, material sin estrenar, cosas internas del grupo.",
  },
  {
    titulo: "La firma es de ustedes",
    texto: "Si un post sale mal, el responsable es quien le dio publicar. La IA no responde por nada.",
  },
];

export type Seccion =
  | { id: string; tipo: "portada" }
  | { id: string; tipo: "mapa"; rotulo: string; titulo: string; texto: string }
  | { id: string; tipo: "declaracion"; rotulo: string; titulo: string; texto?: string }
  | {
      id: string;
      tipo: "lista";
      rotulo: string;
      titulo: string;
      items: { titulo: string; texto: string }[];
    }
  | { id: string; tipo: "preguntas"; rotulo: string; titulo: string; nota: string }
  | {
      id: string;
      tipo: "comparacion";
      rotulo: string;
      titulo: string;
      opciones: { etiqueta: string; texto: string }[];
    }
  | {
      id: string;
      tipo: "prompt";
      rotulo: string;
      titulo: string;
      intro?: string;
      donde: string;
      texto: string;
      nota?: string;
    }
  | { id: string; tipo: "aviso"; rotulo: string; titulo: string; texto: string }
  /**
   * El banco de prompts que se llevan. Es la sección más larga y NO cabe
   * en una pantalla: está pensada para leerse después desde el celular,
   * no para proyectarse completa.
   */
  | {
      id: string;
      tipo: "banco";
      rotulo: string;
      titulo: string;
      intro: string;
      prompts: { para: string; texto: string }[];
    }
  | { id: string; tipo: "limites"; rotulo: string; titulo: string }
  | { id: string; tipo: "cierre"; rotulo: string; titulo: string; texto: string };

export const secciones: Seccion[] = [
  { id: "portada", tipo: "portada" },

  // ================================================================
  // BLOQUE 1 · 00–05 · Quién soy y qué estoy construyendo
  // ================================================================

  {
    id: "quien-soy",
    tipo: "declaracion",
    rotulo: "Bloque 1 · Quién les está hablando",
    titulo: "Juan José Díaz — Ingeniería de Sistemas, sexto semestre.",
    texto:
      "No vengo a hablarles de IA en abstracto. **Llevo un semestre construyendo con esto**, y lo que les traigo hoy es lo que aprendí peleándome con ello, no lo que dice un video de YouTube.",
  },

  {
    id: "priorizador",
    tipo: "lista",
    rotulo: "Lo que estoy construyendo",
    titulo: "Un priorizador de tareas, en el módulo de IA de Makers",
    items: [
      {
        titulo: "Qué hace",
        texto:
          "Le entra una lista de tareas desordenada y devuelve en qué orden hacerlas y cuándo. Por debajo llama a una API de IA.",
      },
      {
        titulo: "Lo que más me costó",
        texto:
          "No fue conectarlo. Fue lograr que respondiera lo mismo dos veces seguidas y en un formato que el resto del programa pudiera usar.",
      },
      {
        titulo: "Y por eso le construí evals",
        texto:
          "Una forma de medir si acierta, en vez de creerle. **Esa desconfianza es la mitad de lo que les quiero dejar hoy.**",
      },
    ],
  },

  // ================================================================
  // BLOQUE 2 · 05–12 · Qué es un LLM
  // ================================================================

  {
    id: "que-es",
    tipo: "declaracion",
    rotulo: "Bloque 2 · La base",
    titulo:
      "Un programa que predice la palabra siguiente, muy bien, sobre casi todo lo que se ha escrito en internet.",
    texto:
      "Eso es un modelo de lenguaje — un **LLM**, por *large language model*. Escribe una palabra, mira todo lo que lleva escrito, predice la siguiente, y repite. No hay más magia que esa.",
  },

  {
    id: "consecuencias",
    tipo: "lista",
    rotulo: "Y de ahí sale todo lo demás",
    titulo: "Tres cosas que dejan de ser raras",
    items: [
      {
        titulo: "Por qué se inventa datos",
        texto:
          "No busca la respuesta: predice qué texto sonaría bien ahí. Un dato falso que suena bien le gana a uno verdadero que suena raro.",
      },
      {
        titulo: "Por qué el contexto lo cambia todo",
        texto:
          "Solo ve lo que está escrito en esa conversación. Lo que no le pongan, para él no existe.",
      },
      {
        titulo: "Por qué se les pega el tono",
        texto:
          "Predice a partir de todo lo escrito, incluido lo que ustedes escribieron. Si le hablan en corporativo, les responde en corporativo.",
      },
    ],
  },

  // ================================================================
  // BLOQUE 3 · 12–24 · Prompt engineering
  // ================================================================

  {
    id: "cual",
    tipo: "comparacion",
    rotulo: "Bloque 3 · Sin explicación, por ahora",
    titulo: "¿Cuál de los dos publicarían?",
    opciones: [
      {
        etiqueta: "A",
        texto: `🎬✨ ¡Nuevo episodio de Perfiles TVU! ✨🎬

¿Ya viste nuestro más reciente contenido? En TVU
creemos en el poder de las historias y esta vez te
traemos una charla imperdible. 🚀

¡Corre a verlo, el link está en nuestra bio! 💫

#TVU #EAFIT #Audiovisual #Contenido #Perfiles
#NuevoEpisodio #Creatividad #Pasión`,
      },
      {
        etiqueta: "B",
        texto: `"Me gradué sin saber qué quería hacer."

Así arranca la entrevista con Daniel, egresado de
EAFIT que hoy trabaja en cine.

12 minutos sobre los años raros entre salir de la
universidad y encontrar el oficio.

Nuevo Perfiles TVU. Link en la bio.

#TVUeafit #EAFIT`,
      },
    ],
  },

  {
    id: "apuesta",
    tipo: "declaracion",
    rotulo: "Los dos salieron del mismo ChatGPT gratis",
    titulo: "Escribir el B tomó treinta segundos más que escribir el A.",
    texto:
      "No cambió la herramienta ni la versión de paga. **Cambiaron cinco líneas de instrucción.** Eso es lo que se llama *prompt engineering*, y suena mucho más complicado de lo que es.",
  },

  {
    id: "cinco-preguntas",
    tipo: "preguntas",
    rotulo: "Todo el prompt engineering que necesitan hoy",
    titulo: "Las cinco preguntas",
    nota:
      "Un prompt malo es una orden suelta. Uno bueno responde estas cinco antes de pedir nada. Las dos resaltadas son las que casi nadie escribe — y son las que separan el A del B.",
  },

  // ================================================================
  // BLOQUE 4 · 24–29 · Dónde NO usar IA
  // ================================================================

  {
    id: "no-todo",
    tipo: "lista",
    rotulo: "Bloque 4 · El bloque que nadie da",
    titulo: "Cuatro casos donde meterle IA lo empeora",
    items: [
      {
        titulo: "Cuando la relación es el punto",
        texto:
          "Contestarle a alguien que escribió. El valor no está en el texto: está en que contestó una persona.",
      },
      {
        titulo: "Cuando la decisión es el producto",
        texto:
          "Escoger qué historia contar, a quién entrevistar, qué se publica. Ese criterio es justamente lo que distingue a un equipo de otro.",
      },
      {
        titulo: "Cuando ya hay algo que funciona",
        texto:
          "Si una tarea ya tiene su plantilla y toma dos minutos, pedírsela a la IA toma cinco. A veces meterla es sencillamente más lento.",
      },
      {
        titulo: "Cuando no pueden verificar la respuesta",
        texto:
          "Si no saben lo suficiente del tema para detectar un error, no están delegando: están apostando.",
      },
    ],
  },

  // ================================================================
  // BLOQUE 5 · 29–39 · El brief — la bisagra de la sesión
  // ================================================================

  {
    id: "mapa",
    tipo: "mapa",
    rotulo: "Bloque 5 · Lo que sigue",
    titulo: "Vamos a montar una campaña de 35mm, completa, en veinticinco minutos",
    texto:
      "Cuatro eslabones y tres herramientas. Fíjense en el último: **el copy en español lo escriben ustedes.** Ahí voy a volver.",
  },

  {
    id: "el-brief",
    tipo: "declaracion",
    rotulo: "Y se empieza por acá, no por la herramienta",
    titulo: "El brief se escribe una vez y se pega arriba de todos los prompts que vengan.",
    texto:
      "No es un documento para archivar: es **la pregunta 2 escrita una sola vez y guardada**. Sin él, cada vez que quieran un copy les toca volver a explicar quién es TVU, qué es 35mm y a quién le hablan. Con él, el prompt de un copy son cuatro líneas.",
  },

  {
    id: "prompt-brief",
    tipo: "prompt",
    rotulo: "Bloque 5 · Las cinco preguntas, aplicadas",
    titulo: "El brief de 35mm",
    intro:
      "Búsquenle las cinco preguntas mientras lo leo. Están todas, en orden.",
    donde: "ChatGPT",
    texto: `Eres estratega de marketing digital.

Contexto: TVU (Producciones TVU) es el grupo de producción
audiovisual de la Universidad EAFIT, en Medellín. Publican en
Instagram (@tvueafit, unos 3.500 seguidores) y en YouTube. Uno de
sus proyectos es 35mm: un festival anual de cortometrajes, de
estudiantes para estudiantes, abierto a universitarios del Área
Metropolitana. Cada edición propone una temática y los
participantes hacen un corto de 7 minutos.

Vamos a hacer una campaña para la próxima edición de 35mm.

Ayúdame a armar el brief. Necesito:
- A quién le hablamos: 2 perfiles concretos de la comunidad EAFIT
- Qué les prometemos: una frase, sin adjetivos vacíos
- Qué piezas necesitamos: formato y cantidad, nada más
- Qué NO queremos: 3 clichés que este tipo de campaña siempre usa
  y que nosotros no vamos a usar

Marca con [SUPUESTO] cualquier cosa que estés infiriendo y no
puedas saber.`,
    nota:
      "Esa última línea hace que el modelo señale lo que se está inventando. Sin ella, las suposiciones llegan con el mismo tono de certeza que los hechos.",
  },

  // ================================================================
  // BLOQUE 6 · 39–54 · Lovable → Pomelli
  // ================================================================

  {
    id: "lovable",
    tipo: "prompt",
    rotulo: "Bloque 6 · Eslabón 2",
    titulo: "La página, en Lovable",
    intro:
      "**lovable.dev.** No busca una plantilla: escribe el código de la página desde cero y al terminar da una URL real. Y esa URL nos hace falta para el paso siguiente.",
    donde: "Lovable · primer mensaje",
    texto: `Crea una landing page de una sola sección para la próxima
edición de 35mm, el festival anual de cortometrajes de TVU
(Producciones TVU), el grupo de producción audiovisual de la
Universidad EAFIT en Medellín. Es de estudiantes para
estudiantes: cortos de 7 minutos sobre una temática que se
anuncia cada edición.

Debe tener:
- Encabezado con el nombre 35mm enorme y una frase de qué es
- La temática de esta edición, la fecha límite y cómo inscribirse
- Tres bloques: quién puede participar, qué se entrega, qué se gana
- Un formulario con nombre, universidad, correo y título del corto
- Un pie con Instagram (@tvueafit) y YouTube (@TVUeafit)

Identidad de marca, respétala:
- Fondo #191818
- Acentos #8446F3 (violeta) y #39E4FF (cian), y #4820B7 para
  bloques secundarios
- Texto en #FFFFFF
- Titulares en una tipografía sans ultra condensada y muy pesada,
  en mayúsculas, tamaño enorme
- El resto del texto en una sans limpia de peso medio
- Los rótulos de sección terminan en guion bajo, así: INSCRIPCIÓN_

Una sola columna, mucho aire, que se vea bien en celular.`,
    nota:
      "El plan gratuito da 5 mensajes de construcción al día. El primero va lo más completo posible: cada «cámbiame el color» gasta uno. Por eso la identidad va desde el mensaje uno y no como corrección.",
  },

  {
    id: "pomelli",
    tipo: "lista",
    rotulo: "Bloque 6 · Eslabón 3",
    titulo: "Pomelli lee esa página y saca la campaña",
    items: [
      {
        titulo: "Qué es",
        texto:
          "Una herramienta de Google Labs para campañas de marketing. Gratis en beta, se entra con cuenta de Google.",
      },
      {
        titulo: "Cómo funciona",
        texto:
          "Le dan una URL, la lee, y arma lo que llama el «Business DNA»: colores, tipografía, tono. Sobre eso genera las piezas de campaña.",
      },
      {
        titulo: "Por eso Lovable va primero",
        texto:
          "TVU no tiene sitio web, y Pomelli necesita uno para leer. La página que acabamos de publicar es justamente lo que le vamos a dar.",
      },
      {
        titulo: "Y lo que adivine mal, se corrige",
        texto:
          "El Business DNA se edita a mano: colores, tipografía y tono. **Ahí es donde entra el manual de marca de 35mm** — la herramienta propone, ustedes corrigen con lo que ya está definido.",
      },
    ],
  },

  {
    id: "pomelli-ojo",
    tipo: "aviso",
    rotulo: "Y acá está el pero",
    titulo: "Pomelli solo trabaja en inglés",
    texto:
      "La interfaz y el contenido que genera salen en inglés. Para el Instagram de TVU eso no se publica tal cual. **Les sirve la estructura de la campaña y las piezas — el copy en español lo escriben ustedes**, con lo del bloque 3. Que es exactamente lo que decía el eslabón 4 del mapa.",
  },

  // ================================================================
  // BLOQUE 7 · 54–60 · Reflexión
  // ================================================================

  {
    id: "banco",
    tipo: "banco",
    rotulo: "Bloque 7 · Lo que se llevan",
    titulo: "Cinco prompts para los copys del día a día",
    intro:
      "Todos empiezan igual: **pegan el brief arriba** y después el prompt. Por eso son tan cortos — el contexto ya está puesto. Esta parte queda en la página, no hay que copiarla ahora.",
    prompts: [
      {
        para: "Anunciar un estreno",
        texto: `[Pega aquí el brief]

Vamos a publicar: [qué es, y en una línea de qué trata].

Escribe 3 opciones de copy para Instagram. Cada una con: gancho de
máximo 8 palabras, cuerpo de 3 líneas, llamado a la acción y 5
hashtags. Devuélvelo en una tabla.

Nada de "no te lo pierdas", nada de signos de admiración dobles,
nada de emojis en el gancho.`,
      },
      {
        para: "Convertir una idea en carrusel",
        texto: `[Pega aquí el brief]

Convierte esta idea en un carrusel de 6 slides: [la idea].

Para cada slide: el texto que va en la imagen (máximo 12 palabras)
y qué debería mostrarse.

El slide 1 tiene que funcionar solo, sin los demás. El último es el
llamado a la acción.`,
      },
      {
        para: "Guion de un reel",
        texto: `[Pega aquí el brief]

Escribe el guion de un reel de 30 segundos sobre: [tema].

Dame los primeros 3 segundos palabra por palabra — es lo único que
decide si lo ven. Después el desarrollo en 4 frases y el cierre.

Marca qué va como texto en pantalla y qué va como voz.`,
      },
      {
        para: "Arreglar un copy que no convence",
        texto: `[Pega aquí el brief]

Este es un copy que escribimos y no nos convence:

[pega el copy]

Dime primero qué está fallando, en 3 puntos. Después dame 2
versiones mejores. No me expliques las versiones, solo escríbelas.`,
      },
      {
        para: "Llevar un copy a otro formato",
        texto: `[Pega aquí el brief]

Este copy funcionó en Instagram:

[pega el copy]

Adáptalo a tres formatos: una historia de 15 segundos, un tuit, y
la descripción del video en YouTube.

Respeta el tono. No lo alargues para YouTube solo por rellenar.`,
      },
    ],
  },

  {
    id: "limites",
    tipo: "limites",
    rotulo: "Y con lo que sí usen",
    titulo: "Tres cosas que no se negocian",
  },

  {
    id: "cierre",
    tipo: "cierre",
    rotulo: "Y una pregunta antes de irnos",
    titulo: "De todo lo que vieron hoy, ¿qué NO meterían en TVU?",
    texto:
      "Montamos una campaña en veinticinco minutos, y hay partes de eso que a este grupo no le convienen. Si se llevan una sola cosa, que sea la del priorizador: **no le crean, mídanlo.** Ustedes ya saben cómo suena TVU — la IA no, y no lo va a aprender sola.",
  },
];
