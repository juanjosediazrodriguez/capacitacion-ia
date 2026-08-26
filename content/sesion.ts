/**
 * El contenido de la capacitación, como secciones de la presentación.
 *
 * Cada entrada de `secciones` es una pantalla completa. Editar aquí cambia
 * la presentación sin tocar el diseño ni los componentes.
 *
 * En el texto, **lo que va entre asteriscos dobles** sale en negrita.
 *
 * El hilo de la sesión es el trabajo real del área de mercadeo de TVU:
 * publicar y administrar las redes. NO montar una convocatoria, y NO
 * producir piezas gráficas — eso es de edición.
 */

export const sesion = {
  grupo: "TVU · Área de mercadeo",
  titulo: "Publicar mejor, sin trabajar más",
  subtitulo: "Capacitación de IA aplicada a redes y contenido",
  fecha: "Viernes 28 de agosto, 2026",
};

/**
 * Los cuatro pasos. Se usan en el mapa y en el cierre.
 *
 * Los tres primeros son UNA cadena en el mismo chat: los perfiles del
 * paso 1 alimentan las ideas del 2, y la idea escogida alimenta el copy
 * del 3. Ese encadenamiento es medio contenido de la sesión.
 */
export const cadena = [
  { n: 1, titulo: "Audiencia", pregunta: "¿A quién le hablamos?", quien: "Ustedes" },
  { n: 2, titulo: "Ideación", pregunta: "¿Qué le contamos?", quien: "Ustedes" },
  { n: 3, titulo: "Copy", pregunta: "¿Cómo lo escribimos?", quien: "Ustedes" },
  { n: 4, titulo: "Web", pregunta: "¿Y si necesitan una página?", quien: "Lo ven" },
];

export const preguntas = [
  {
    texto: "¿Quién eres?",
    ejemplo: "Eres el encargado de redes de un grupo de producción audiovisual.",
    clave: false,
  },
  {
    texto: "¿Qué sé yo que tú no?",
    ejemplo: "TVU hace Perfiles, Charlas y 35mm. 3.500 seguidores. Publicamos en IG y YouTube.",
    clave: true,
  },
  {
    texto: "¿Qué quiero?",
    ejemplo: "Tres perfiles de audiencia.",
    clave: false,
  },
  {
    texto: "¿Cómo lo quiero?",
    ejemplo: "En tabla, con estas cinco columnas.",
    clave: false,
  },
  {
    texto: "¿Qué NO quiero?",
    ejemplo: 'Nada de "¡no te lo pierdas!", nada de emojis en el gancho.',
    clave: true,
  },
];

export const limites = [
  {
    titulo: "Se inventa cosas, con total seguridad",
    texto:
      "Toda cifra, fecha o nombre propio se verifica aparte antes de publicarse. Suena igual de convencido cuando acierta que cuando falla.",
  },
  {
    titulo: "No entra información sensible",
    texto:
      "Datos de entrevistados, material sin estrenar, nada interno del grupo que no publicarían de todas formas.",
  },
  {
    titulo: "Se nota cuando sale tal cual",
    texto:
      "Lo que devuelve es un borrador, no una publicación. Si lo copian sin tocarlo, la audiencia lo huele — y ustedes viven de que no suene a robot.",
  },
  {
    titulo: "La firma es de ustedes",
    texto:
      "Si un post sale mal, el responsable es quien le dio publicar. La IA no responde por nada.",
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
  /** Dos salidas lado a lado, sin decir de dónde salió cada una. */
  | {
      id: string;
      tipo: "comparacion";
      rotulo: string;
      titulo: string;
      opciones: { etiqueta: string; texto: string }[];
    }
  /** Un prompt que solo se muestra. */
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
  /** Un prompt que ellos corren en su celular. Es el corazón de la sesión. */
  | {
      id: string;
      tipo: "taller";
      rotulo: string;
      titulo: string;
      minutos: number;
      consigna: string;
      donde: string;
      texto: string;
      regla: string;
    }
  | { id: string; tipo: "aviso"; rotulo: string; titulo: string; texto: string }
  | { id: string; tipo: "limites"; rotulo: string; titulo: string }
  | { id: string; tipo: "cierre"; rotulo: string; titulo: string; texto: string };

export const secciones: Seccion[] = [
  { id: "portada", tipo: "portada" },

  // ----------------------------------------------------------------
  // Apertura — se demuestra, no se afirma. 3 minutos.
  // ----------------------------------------------------------------

  {
    id: "cual",
    tipo: "comparacion",
    rotulo: "Sin contexto, sin explicación",
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
    id: "revelacion",
    tipo: "declaracion",
    rotulo: "La respuesta",
    titulo: "Los dos los escribió el mismo ChatGPT gratis, con diez minutos de diferencia.",
    texto:
      "No cambió la herramienta. No cambió la versión de paga. **Cambiaron cinco líneas de instrucción.** Eso es todo lo que vamos a practicar hoy.",
  },

  // ----------------------------------------------------------------
  // Introducción — dónde están parados. 10 minutos.
  // ----------------------------------------------------------------

  {
    id: "quienes-son",
    tipo: "declaracion",
    rotulo: "Y antes de hablar de IA",
    titulo: "Más de 3.500 personas los siguen. Eso ya es una audiencia real.",
    texto:
      "TVU lleva años contando historias: Perfiles, Charlas, 35mm. **Nada de lo de hoy reemplaza eso.** Lo que vamos a ver es cómo el área de mercadeo mueve más rápido lo que ustedes ya saben hacer.",
  },

  {
    id: "que-cambio",
    tipo: "declaracion",
    rotulo: "Dónde estamos parados",
    titulo: "Lo que cambió no es que escriba bonito. Es que el primer borrador dejó de costar.",
    texto:
      "Sentarse a sacar diez ideas de publicación era media tarde. Hoy son dos minutos. Eso no los reemplaza: les mueve el trabajo de lugar.",
  },

  {
    id: "lo-escaso",
    tipo: "lista",
    rotulo: "Y por eso",
    titulo: "Lo escaso ya no es producir opciones. Es decidir cuál sirve.",
    items: [
      {
        titulo: "Antes el cuello de botella era hacer",
        texto: "Escribir diez ganchos tomaba una tarde. Por eso se escribían tres.",
      },
      {
        titulo: "Ahora el cuello de botella es escoger",
        texto: "Tienen cuarenta ganchos en un minuto. Treinta y ocho son mediocres.",
      },
      {
        titulo: "El criterio sigue siendo de ustedes",
        texto:
          "El modelo no sabe cuál funciona con su audiencia. Ustedes llevan años viéndolo, y esa parte no se delega.",
      },
    ],
  },

  // ----------------------------------------------------------------
  // Qué es la máquina. 6 minutos: la frase, lo que no es, y las
  // cuatro consecuencias que hacen que todo lo demás se entienda.
  // ----------------------------------------------------------------

  {
    id: "que-es",
    tipo: "declaracion",
    rotulo: "Qué es esto, en serio",
    titulo:
      "Un programa que predice la palabra siguiente, muy bien, sobre casi todo lo que se ha escrito en internet.",
    texto:
      "Eso es un modelo de lenguaje —un **LLM**, por *large language model*—. No hay más magia que esa. Escribe una palabra, mira todo lo que lleva escrito, predice la siguiente, y repite.",
  },

  {
    id: "que-no-es",
    tipo: "lista",
    rotulo: "Y esto importa más",
    titulo: "Qué NO es",
    items: [
      {
        titulo: "No es un buscador",
        texto: "No consulta una base de datos de verdades. Genera texto que suena correcto.",
      },
      {
        titulo: "No sabe nada de TVU",
        texto: "Todo lo que sepa de ustedes se lo tienen que dar ustedes.",
      },
      {
        titulo: "No tiene criterio",
        texto: "Repite lo promedio de internet. Y lo promedio es mediocre.",
      },
    ],
  },

  {
    id: "por-que-pasa",
    tipo: "lista",
    rotulo: "Si entienden eso, se explica todo lo demás",
    titulo: "Cuatro cosas que dejan de ser raras",
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
        titulo: "Por qué responde distinto cada vez",
        texto:
          "Entre las palabras probables escoge una al azar. Corran el mismo prompt dos veces y compárenlo: no es un error, es cómo funciona.",
      },
      {
        titulo: "Por qué se les pega el tono",
        texto:
          "Predice a partir de todo lo escrito, incluido lo que ustedes escribieron. Si le hablan en corporativo, les responde en corporativo.",
      },
    ],
  },

  {
    id: "mapa",
    tipo: "mapa",
    rotulo: "Cómo va a funcionar esta hora",
    titulo: "Ustedes teclean. Yo solo voy marcando el paso.",
    texto:
      "Cuatro pasos del trabajo de redes. **Tres los hacen ustedes**, en su celular, con contenido real de TVU. El último se los muestro porque necesita una cuenta que no alcanzamos a crear hoy.",
  },

  {
    id: "no-tocamos",
    tipo: "aviso",
    rotulo: "Y algo que no vamos a tocar",
    titulo: "Las portadas y las piezas las hace edición",
    texto:
      "Nada de lo de hoy se mete ahí. Esto es sobre el trabajo de mercadeo: a quién le hablamos, qué le decimos, y cómo se distribuye lo que edición ya produjo.",
  },

  // ----------------------------------------------------------------
  // La técnica, y de ahí en adelante ellos trabajan.
  // ----------------------------------------------------------------

  {
    id: "cinco-preguntas",
    tipo: "preguntas",
    rotulo: "Lo único que hay que memorizar",
    titulo: "Las cinco preguntas",
    nota:
      "Las dos resaltadas son las que casi nadie escribe, y son exactamente las que separan un resultado genérico de uno que sirve.",
  },

  {
    id: "taller-1",
    tipo: "taller",
    rotulo: "Paso 1 · ¿A quién le hablamos?",
    titulo: "Audiencia",
    minutos: 6,
    consigna:
      "Copien el prompt y péguenlo en ChatGPT. Corran el de TVU primero, y después **cámbienlo por otra audiencia que les interese**: los que ven Charlas, los que solo ven reels, los de primeros semestres.",
    donde: "ChatGPT · mensaje 1",
    texto: `Eres el encargado de redes de un grupo estudiantil de producción
audiovisual.

Contexto: TVU (Producciones TVU) es el grupo de producción
audiovisual de la Universidad EAFIT, en Medellín. Se describen así:
"Voces apasionadas por contar historias. Informamos, entretenemos y
nos divertimos." Publican en Instagram y YouTube: entrevistas
(Perfiles TVU), charlas y fotografía (35mm). Tienen alrededor de
3.500 seguidores en Instagram.

Queremos entender mejor a quién le estamos hablando.

Ayúdame a construir 3 perfiles de audiencia distintos dentro de la
comunidad EAFIT.

Para cada perfil dame: carrera y semestre típico, qué contenido
nuestro vería y cuál se saltaría, a qué hora está en Instagram, y
una frase que diría en voz alta sobre un grupo estudiantil que hace
video.

Marca con [SUPUESTO] cualquier cosa que estés infiriendo y no
puedas saber.`,
    regla: "No borren la última línea. Ahora les explico por qué.",
  },

  {
    id: "supuesto",
    tipo: "declaracion",
    rotulo: "Esa última línea",
    titulo: "Marca con [SUPUESTO] lo que estés infiriendo y no puedas saber",
    texto:
      "Búsquenla en lo que les acaba de salir. El modelo señala solo lo que se está inventando. Sin esa línea, las suposiciones vienen escritas con el mismo tono de certeza que los hechos — y así es como se publica un dato falso sobre su propia audiencia.",
  },

  {
    id: "taller-2",
    tipo: "taller",
    rotulo: "Paso 2 · ¿Qué le contamos?",
    titulo: "Ideación",
    minutos: 7,
    consigna:
      "**En el mismo chat**, sin volver a explicar quién es TVU ni quién es el perfil 1. La conversación ya acumuló todo eso: por eso este prompt arranca en «seguimos».",
    donde: "ChatGPT · mismo chat",
    texto: `Seguimos con el perfil 1.

Necesitamos ideas de contenido para las próximas dos semanas en
Instagram.

Dame 10 ideas de publicación pensadas para ese perfil. Mézclalas:
unas que salgan de material que ya tenemos grabado (Perfiles,
Charlas, 35mm) y otras que se puedan hacer solo con un celular.

Para cada idea: el formato (reel, carrusel o historia), la idea en
una línea, y por qué le hablaría a ese perfil en particular.

No propongas nada que necesite un rodaje nuevo ni equipo adicional.`,
    regla:
      "De las 10 les van a servir 3. Escójanlas y pídanle que desarrolle esas. **Ese filtro es su trabajo, y es el que no se delega.**",
  },

  {
    id: "taller-3",
    tipo: "taller",
    rotulo: "Paso 3 · ¿Cómo lo escribimos?",
    titulo: "Copy",
    minutos: 5,
    consigna:
      "Tercer prompt del mismo chat. Ya sabe a quién le habla y ya sabe cuál es la idea — **por eso este es el más corto de los tres**.",
    donde: "ChatGPT · mismo chat",
    texto: `Tomemos la primera de las ideas que escogimos.

Escribe 3 opciones de copy para ese post de Instagram.

Cada opción con: gancho de máximo 8 palabras, cuerpo de 3 líneas,
llamado a la acción y 5 hashtags. Devuélvelo en una tabla.

Tono cercano y directo. Nada de "¡No te lo pierdas!", nada de
signos de admiración dobles, nada de emojis en el gancho.`,
    regla:
      "Cuando salgan: cámbienle UNA sola restricción —el tono, el largo o el perfil al que le habla— y córranlo otra vez. Comparen las dos salidas.",
  },

  {
    id: "paso-4",
    tipo: "prompt",
    rotulo: "Paso 4 · ¿Y si necesitan una página? · Este se los muestro",
    titulo: "Una página web, sin programar",
    intro:
      "Este es el que menos tiene que ver con su día a día, y es a propósito. **Lo importante no es esta página: es que a partir de hoy pueden hacerse una para lo que sea** — un proyecto de clase, un portafolio, una idea suya. Necesita cuenta, por eso lo hago yo.",
    donde: "Lovable · primer mensaje",
    texto: `Crea una landing page de una sola sección para inscribirse a una
Charla de TVU (Producciones TVU), el grupo de producción
audiovisual de la Universidad EAFIT.

Debe tener:
- Encabezado con el nombre TVU y el título de la charla
- Fecha, hora y lugar bien visibles
- Un párrafo corto de qué se va a hablar y para quién es
- Un formulario con nombre, correo institucional y semestre
- Un pie de página con Instagram (@tvueafit) y YouTube (@TVUeafit)

Diseño limpio, una sola columna, tipografía grande, que se vea
bien en celular. Paleta de azules oscuros y blanco.`,
    nota:
      "El plan gratuito da 5 mensajes de construcción al día. Escriban el primero lo más completo posible: cada «cámbiame el color» gasta uno.",
  },

  {
    id: "limites",
    tipo: "limites",
    rotulo: "Antes de publicar",
    titulo: "Cuatro cosas que no se negocian",
  },

  {
    id: "cierre",
    tipo: "cierre",
    rotulo: "Eso fue todo",
    titulo: "Los cuatro pasos",
    texto:
      "Los prompts quedan en esta misma página. Y fíjense en algo: **los tres primeros fueron un solo chat.** Cada prompt era más corto que el anterior porque la conversación ya sabía de qué estábamos hablando. Eso es lo que hay que llevarse.",
  },
];
