/**
 * Contenido de la vista `/guia` — el guion del facilitador.
 *
 * No está enlazada desde la presentación. Es la que se lleva en el celular
 * el día de la sesión.
 */

export const guia = {
  titulo: "Guion de la sesión",
  entrada:
    "Sesenta minutos, público de cero. Tres de apertura que demuestran en vez de afirmar, " +
    "once de contexto y de entender qué es un LLM, y de ahí en adelante ellos trabajan: " +
    "audiencia, ideación y copy, los tres en el mismo chat y sobre contenido real de TVU. " +
    "Solo el bloque de la página web es demo tuya.",
};

export type Momento = {
  min: string;
  titulo: string;
  /** Lo que pasa en pantalla y en la sala. */
  acciones: string[];
  /** Frase textual para arrancar el bloque, cuando ayuda tenerla escrita. */
  frase?: string;
  /** Es un bloque donde ellos tocan el teclado. */
  ejercicio?: boolean;
};

export const minutado: Momento[] = [
  {
    min: "00 – 03",
    titulo: "Apertura · ¿Cuál publicarían?",
    frase: "¿Cuál de los dos publicarían? A mano alzada. No hay respuesta correcta todavía.",
    acciones: [
      "Proyectar los dos copys y NO explicar nada. Ni de dónde salieron, ni qué se va a ver hoy. Dejar que los lean en silencio 20 o 30 segundos.",
      "Votación a mano alzada. Va a ganar B por paliza — es el punto.",
      "Preguntarle a UNA persona por qué B. Lo que responda («suena a persona», «el otro no dice nada») es la tesis de la hora, dicha por ellos y no por ti.",
      "No burlarse del A. Alguien en esa sala publicó algo así alguna vez. La gracia es que se rían solos.",
      "Ahí sí, la revelación: los dos los escribió el mismo ChatGPT gratis. Cambiaron cinco líneas de instrucción.",
      "Cerrar con: «saquen el celular, lo van a necesitar toda la hora».",
    ],
  },
  {
    min: "03 – 08",
    titulo: "Dónde están parados",
    frase:
      "Lo que cambió no es que escriba bonito. Es que el primer borrador dejó de costar.",
    acciones: [
      "Abrir con lo que ya son: más de 3.500 seguidores, años de Perfiles, Charlas y 35mm. Decir explícitamente que nada de lo de hoy reemplaza eso. Si el bloque arranca sonando a que la IA les quita el trabajo, la sala se cierra y no se vuelve a abrir.",
      "Qué cambió: sentarse a sacar diez ideas de publicación era media tarde; hoy son dos minutos.",
      "Lo escaso ya no es producir opciones, es escoger. Cuarenta ganchos en un minuto, treinta y ocho mediocres. El criterio sigue siendo de ellos, que llevan años viendo qué funciona.",
    ],
  },
  {
    min: "08 – 14",
    titulo: "Qué es un LLM",
    frase:
      "Escribe una palabra, mira todo lo que lleva escrito, predice la siguiente, y repite. No hay más magia que esa.",
    acciones: [
      "La frase de una línea, y decir de dónde viene la sigla: LLM, large language model. Que la oigan una vez sin que sea un misterio.",
      "Qué NO es: no es buscador, no sabe nada de TVU, no tiene criterio.",
      "Y ahora el bloque que hace clic — las cuatro consecuencias. Cada una es una cosa que ya les pasó y no sabían por qué.",
      "Se inventa datos porque predice qué SUENA bien, no qué es cierto. Un dato falso que suena bien le gana a uno verdadero que suena raro.",
      "El contexto lo cambia todo porque solo ve lo que está escrito en esa conversación. Esto prepara los tres talleres seguidos en el mismo chat.",
      "Responde distinto cada vez porque entre las palabras probables escoge una al azar. Decirles que corran el mismo prompt dos veces — no es error, es cómo funciona.",
      "Se les pega el tono porque predice a partir de todo lo escrito, incluido lo que ellos escribieron. Si le hablan en corporativo, responde en corporativo.",
      "Este bloque es la inversión más rentable de la hora: cada minuto acá ahorra explicaciones en los tres talleres.",
    ],
  },
  {
    min: "14 – 16",
    titulo: "Cómo funciona la hora · y lo de edición",
    acciones: [
      "El mapa: cuatro pasos, tres los hacen ellos. Decirlo explícitamente — es la promesa de la sesión.",
      "Señalar que los tres primeros son UN SOLO chat. Que lo esperen.",
      "CERRAR CON LO DE EDICIÓN. «Las portadas y las piezas las hace edición, y nada de lo de hoy se mete ahí.» Dicho por ti y temprano, deja de ser un problema. No dicho, alguien lo va a estar pensando toda la hora.",
    ],
  },
  {
    min: "16 – 19",
    titulo: "Las cinco preguntas",
    acciones: [
      "Leerlas en orden. Detenerse en la 2 y la 5: son las que nadie escribe.",
      "No dar ejemplo propio aquí — el ejemplo es el prompt del taller que viene enseguida.",
    ],
  },
  {
    min: "19 – 27",
    titulo: "Taller 1 · Audiencia",
    ejercicio: true,
    acciones: [
      "Que copien el prompt del botón. Verificar que todos lo tengan pegado antes de arrancar el reloj.",
      "Antes de que arranquen, señalar el bloque de contexto del prompt: lleva la bio real de TVU, los formatos reales y el número real de seguidores. Ese párrafo ES la pregunta 2 en acción — si lo ven ahí, la lección se entiende sin explicarla.",
      "6 minutos: corren el de TVU y después lo cambian por otra audiencia — los que ven Charlas, los que solo ven reels, los de primeros semestres.",
      "Recorrer la sala. En el primer taller siempre hay dos o tres atascados en algo tonto.",
      "AVISAR QUE NO CIERREN EL CHAT. Los dos talleres siguientes van encima de este. Si alguien lo cierra, que vuelva a pegar el prompt 1 y siga.",
      "2 minutos de puesta en común: dos voluntarios leen QUÉ CAMBIARON, no el resultado completo.",
    ],
  },
  {
    min: "27 – 29",
    titulo: "El [SUPUESTO]",
    acciones: [
      "Que lo busquen en lo que les acaba de salir en pantalla. Que lo vean en su propio resultado, no en el tuyo.",
      "El ejemplo que aterriza: el modelo puede afirmar a qué hora está su audiencia en Instagram. No tiene cómo saberlo. Ellos sí, mirando las estadísticas de la cuenta.",
      "Enlazar con la consecuencia número uno del bloque del LLM: predice lo que suena bien. Ahí lo vieron en abstracto; acá lo están viendo en su pantalla.",
    ],
  },
  {
    min: "29 – 37",
    titulo: "Taller 2 · Ideación",
    ejercicio: true,
    acciones: [
      "Insistir en que es el MISMO chat y que el prompt arranca en «seguimos con el perfil 1» — no repite nada. Es la consecuencia número dos, demostrada.",
      "7 minutos: 10 ideas mezcladas, unas de material ya grabado y otras que se hacen con un celular.",
      "Señalar la última restricción —«nada que necesite rodaje nuevo ni equipo adicional»— y por qué está: sin ella el modelo propone cinco rodajes más, que es justo lo que mercadeo no puede pedirle a edición.",
      "LA PARTE IMPORTANTE, y hay que decirla en voz alta: de las 10 les sirven 3. Que escojan y le pidan desarrollar esas. Ese filtro es su trabajo — es la sección «lo escaso es decidir» convertida en ejercicio.",
      "1 minuto: preguntar a la sala cuántas ideas descartaron. La respuesta —siempre siete u ocho— vale más que cualquier diapositiva.",
    ],
  },
  {
    min: "37 – 45",
    titulo: "Taller 3 · Copy",
    ejercicio: true,
    acciones: [
      "Tercer prompt del mismo chat, y el más corto de los tres. Hacerlo notar: ya sabe a quién le habla y ya sabe cuál es la idea.",
      "5 minutos: los 3 copys, y después cambiar UNA sola restricción —tono, largo o perfil— y correrlo otra vez.",
      "3 minutos de puesta en común: que comparen las dos salidas y digan qué cambió al cambiar una línea.",
      "Si alguien saca algo mejor que el copy B de la apertura, léelo en voz alta. Cierra el círculo de la hora.",
    ],
  },
  {
    min: "45 – 53",
    titulo: "Demo · Una página web sin programar",
    acciones: [
      "El único bloque donde solo miran. Decirlo: «este necesita cuenta, por eso lo hago yo».",
      "Encuadrarlo bien: no es para TVU necesariamente, es una capacidad que se llevan. Un proyecto de clase, un portafolio, una idea propia.",
      "Pegar el prompt y dejar que compile. Mientras compila (1–2 min de silencio incómodo), narrar qué está pasando: no busca plantilla, escribe el código línea por línea.",
      "Si sobra tiempo, UN solo cambio en vivo. Si no, publicar directo.",
      "Cerrar abriendo la URL en el celular, en pantalla. Ese es el momento que se llevan.",
    ],
  },
  {
    min: "53 – 57",
    titulo: "Los límites",
    acciones: [
      "Corto, porque las alucinaciones ya se explicaron dos veces: en el bloque del LLM y en su propia pantalla con el [SUPUESTO].",
      "No entra información sensible: datos de entrevistados, material sin estrenar.",
      "El texto de IA se nota: es borrador, no publicación. Con este grupo el argumento es directo — viven de que no suene a robot.",
      "La firma es de ustedes. La IA no responde por nada.",
    ],
  },
  {
    min: "57 – 60",
    titulo: "Cierre",
    acciones: [
      "Repasar los cuatro pasos: audiencia → ideación → copy → web.",
      "El remate: los tres primeros fueron un solo chat, y cada prompt era más corto que el anterior. Eso es lo que se llevan.",
      "Compartir el enlace de esta página. Antes no: dejarían de mirar la pantalla.",
    ],
  },
];

export const preparacion: string[] = [
  "LO PRIMERO: verificar desde el wifi de la universidad si ChatGPT deja usarse sin iniciar sesión. Tres de los cuatro bloques dependen de que ellos puedan correr prompts. Si pide cuenta, la sesión se hace en parejas y hay que avisarlo al entrar.",
  "Avisar antes de la sesión que lleven el celular cargado. Suena obvio y es la causa número uno de que alguien se quede por fuera.",
  "Tener el enlace de esta presentación listo para dictarlo o pasarlo por el grupo — lo van a necesitar desde el taller 1 para copiar los prompts.",
  "Correr los tres prompts encadenados una vez, tú, antes del viernes. Es el esqueleto de la sesión y conviene saber qué devuelve.",
  "Crear la cuenta de Lovable con anticipación. El plan gratuito da 5 créditos de build al día y se reinician a las 00:00 UTC.",
  "Ensayar la demo de Lovable de punta a punta el jueves, para llegar el viernes con los 5 créditos frescos.",
  "Grabar ese ensayo en video. Es el plan B si falla el wifi o los créditos.",
  "Confirmar cuántos son, si hay proyector y si el audio sirve.",
];

export type Riesgo = { situacion: string; respuesta: string };

export const riesgos: Riesgo[] = [
  {
    situacion: "ChatGPT pide cuenta y no todos tienen",
    respuesta:
      "Parejas: uno teclea, el otro dicta los cambios. Decidirlo al entrar, no a mitad del taller 1.",
  },
  {
    situacion: "Alguien cerró el chat entre talleres",
    respuesta:
      "Que vuelva a pegar el prompt 1 y siga desde ahí. Por eso se avisa al final del taller 1 que no lo cierren.",
  },
  {
    situacion: "Los talleres se estiran",
    respuesta:
      "Cronómetro visible y cortar en seco. El tiempo sale de la puesta en común, nunca del trabajo.",
  },
  {
    situacion: "Alguien se atasca en el taller 1",
    respuesta:
      "Que corra el prompt tal cual está, sin cambiarle nada. Alcanza para seguir con los otros dos.",
  },
  {
    situacion: "Alguien de edición se siente invadido",
    respuesta:
      "Ya está atendido en la introducción, y es la razón por la que el bloque de generar imágenes no existe en esta sesión. Si sale igual: «las piezas son de ustedes, esto es sobre cómo se distribuyen».",
  },
  {
    situacion: "Lovable se demora o falla",
    respuesta: "Poner el video del ensayo. No reintentar en vivo.",
  },
  {
    situacion: "Preguntan por agentes o automatización",
    respuesta: "«Eso es la sesión 2» y seguir. No improvisar.",
  },
  {
    situacion: "Wifi caído",
    respuesta:
      "Se cae la mitad de la sesión. Plan mínimo: los prompts proyectados, el video del ensayo, y convertir los talleres en escribir el prompt a mano en papel.",
  },
];

export const fuera: { tema: string; porque: string }[] = [
  {
    tema: "Generar imágenes y portadas con IA",
    porque:
      "Las portadas y las piezas las hace el área de edición. Una capacitación que le enseña a mercadeo a generarlas se mete en terreno ajeno y crea un problema que no existía.",
  },
  {
    tema: "Generación de video con IA",
    porque:
      "Mismo motivo que las portadas, y además hoy solo sirve para clips de 5 a 10 segundos y lo bueno es de pago.",
  },
  {
    tema: "Montar una convocatoria como hilo de la sesión",
    porque:
      "Era el enfoque de las primeras versiones y estaba mal: el trabajo del área es publicar y administrar las redes todo el tiempo, no una campaña puntual.",
  },
  {
    tema: "Un bloque aparte de «reciclar una pieza en 5 posts»",
    porque:
      "Se solapaba con ideación. Su parte útil —sacar contenido de lo que ya está grabado— quedó dentro del prompt del taller 2.",
  },
  {
    tema: "Pegar material real de otras cuentas para analizarlo",
    porque:
      "Buen truco, pero exige llegar con texto de tres cuentas ya copiado y que ellos también lo consigan. Demasiado frágil en vivo. Va para la sesión 2.",
  },
  {
    tema: "Que ellos escriban un prompt desde cero",
    porque:
      "Con público de cero, la hoja en blanco quema minutos sin enseñar. Aprenden más modificando un prompt que ya funciona.",
  },
  {
    tema: "Agentes y automatizaciones (n8n, Zapier)",
    porque: "Necesita bases que este grupo no tiene. Es la sesión 2.",
  },
];
