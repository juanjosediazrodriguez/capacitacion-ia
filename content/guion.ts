/**
 * Contenido de la vista `/guia` — el guion del facilitador.
 *
 * No está enlazada desde la presentación. Es la que se lleva en el celular
 * el día de la sesión.
 */

export const guia = {
  titulo: "Guion de la sesión",
  entrada:
    "Siete bloques en sesenta minutos. Los cuatro primeros construyen el criterio " +
    "—quién eres, qué es un LLM, cómo se pide, y dónde NO usarla— y los tres últimos " +
    "montan una campaña de 35mm de principio a fin: brief en ChatGPT, página en Lovable, " +
    "campaña en Pomelli. Cierra con crítica, no con hype.",
};

export type Momento = {
  min: string;
  titulo: string;
  acciones: string[];
  frase?: string;
  ejercicio?: boolean;
};

export const minutado: Momento[] = [
  {
    min: "00 – 05",
    titulo: "Bloque 1 · Quién eres y qué estás construyendo",
    frase:
      "No vengo a hablarles de IA en abstracto: llevo un semestre construyendo con esto y peleándome con ello.",
    acciones: [
      "Presentación corta. Ingeniería de Sistemas, sexto semestre, módulo de IA de Makers.",
      "El priorizador: qué hace, en una frase. Lista desordenada entra, orden y agenda sale.",
      "LA PARTE QUE IMPORTA: contar que lo difícil no fue conectarlo sino que respondiera igual dos veces y en un formato usable. Por eso le construiste evals.",
      "Rematar con «esa desconfianza es la mitad de lo que les quiero dejar hoy». Deja sembrado el bloque 4 y el 7 desde el minuto tres.",
      "No estirarlo. Cinco minutos hablando de ti es el máximo que compra atención; a los seis empieza a gastarla.",
    ],
  },
  {
    min: "05 – 12",
    titulo: "Bloque 2 · Qué es un LLM",
    frase:
      "Escribe una palabra, mira todo lo que lleva escrito, predice la siguiente, y repite. No hay más magia que esa.",
    acciones: [
      "La frase de una línea, y decir de dónde sale la sigla: LLM, large language model. Que la oigan una vez sin misterio.",
      "Las tres consecuencias. No son datos sueltos: cada una explica algo que ya les pasó.",
      "Inventa datos porque predice qué SUENA bien, no qué es cierto.",
      "El contexto lo cambia todo porque solo ve lo escrito en esa conversación. Esta prepara el bloque 3.",
      "Se les pega el tono porque predice a partir de todo lo escrito, incluido lo de ellos.",
      "Si alguien pregunta por cómo se entrena, cuántos parámetros o qué es un transformer: «eso no cambia nada de lo que van a hacer el lunes» y seguir.",
    ],
  },
  {
    min: "12 – 24",
    titulo: "Bloque 3 · Prompt engineering",
    frase: "¿Cuál de los dos publicarían? A mano alzada.",
    acciones: [
      "Proyectar A y B sin explicar nada. Dejar que los lean en silencio 20 o 30 segundos.",
      "Votación a mano alzada. Va a ganar B por paliza — es el punto.",
      "Preguntarle a UNA persona por qué B. Lo que responda es la tesis del bloque, dicha por ellos.",
      "NO burlarse del A. Alguien en esa sala publicó algo así alguna vez. La gracia es que se rían solos.",
      "La revelación: los dos del mismo ChatGPT gratis, treinta segundos de diferencia. Eso es prompt engineering, y suena más complicado de lo que es.",
      "Las cinco preguntas. Detenerse en la 2 y la 5 — son las que nadie escribe.",
      "Este bloque tiene 12 minutos, el más largo de la primera mitad. Es el que sostiene los bloques 5 y 6: si acá se corre, el resto se cae.",
    ],
  },
  {
    min: "24 – 29",
    titulo: "Bloque 4 · Dónde NO usar IA",
    acciones: [
      "Presentarlo como lo que es: el bloque que las charlas de IA no dan, porque no venden nada.",
      "Los cuatro casos, general y sin señalar a nadie: la relación es el punto · la decisión es el producto · ya hay algo que funciona · no pueden verificar la respuesta.",
      "El tercero es el que más sorprende: a veces meter IA es MÁS lento. Vale la pena detenerse ahí un momento.",
      "El cuarto enlaza con tus evals del bloque 1. «Si no saben lo suficiente para detectar un error, no están delegando: están apostando.»",
      "Este bloque es el que te compra credibilidad para todo lo que viene después. Sin él, los bloques 5 y 6 suenan a venta.",
    ],
  },
  {
    min: "29 – 39",
    titulo: "Bloque 5 · El brief de 35mm",
    frase: "Ninguna herramienta inventa criterio. Le ponen forma al que ustedes traigan.",
    acciones: [
      "Mostrar el mapa de los cuatro eslabones. Señalar desde ya el cuarto —el copy en español lo escriben ellos— porque ahí vuelves en el bloque 6.",
      "Explicar por qué se empieza por el brief: si entran a las herramientas con «hagamos algo de 35mm», sale genérico y le echan la culpa a la herramienta.",
      "Proyectar el prompt del brief y PEDIRLES QUE LE BUSQUEN LAS CINCO PREGUNTAS. Están todas, en orden. Que las señalen ellos.",
      "Correrlo en vivo. Mientras responde, señalar los [SUPUESTO] que vayan apareciendo.",
      "El brief que salga es el insumo de los siguientes 15 minutos. Dejarlo en una pestaña abierta.",
    ],
  },
  {
    min: "39 – 54",
    titulo: "Bloque 6 · Lovable → Pomelli",
    acciones: [
      "Lovable primero, y decir por qué: Pomelli necesita leer una página, y TVU no tiene sitio web. El orden no es capricho.",
      "Pegar el prompt de la landing. Mientras compila (1–2 min de silencio incómodo), narrar qué está pasando: no busca plantilla, escribe el código línea por línea.",
      "Publicar y abrir la URL en el celular, en pantalla. Ese es el momento que se llevan.",
      "Copiar esa URL y pasar a Pomelli. Explicar el Business DNA: lee la página, saca colores, tipografía y tono, y sobre eso genera la campaña.",
      "AVISAR LO DEL INGLÉS ANTES de que salga, no después. Si lo descubren solos parece que la herramienta falló; dicho antes, es una limitación conocida.",
      "Y cerrar el círculo: la estructura y las piezas sirven, el copy en español lo escriben ellos. Volver al eslabón 4 del mapa y al bloque 3.",
      "Quince minutos para dos herramientas es apretado. Si hay que sacrificar algo, es la iteración en Lovable — no Pomelli, que es lo que no han visto nunca.",
    ],
  },
  {
    min: "54 – 60",
    titulo: "Bloque 7 · El banco de prompts y la reflexión",
    frase: "De todo lo que vieron hoy, ¿qué NO meterían en TVU?",
    acciones: [
      "Mostrar el banco de prompts y decir de una que NO hay que copiarlos ahora: quedan en la página. Si no lo dices, se ponen a transcribir y dejan de oírte.",
      "Bajar despacio por los cinco y nombrar para qué sirve cada uno. No leerlos completos.",
      "Detenerse en el número 4 —arreglar un copy que no convence—: es el único que arranca de algo que ellos ya escribieron, y por eso es el que más van a usar.",
      "Repetir lo del brief: todos empiezan pegándolo arriba. Por eso son tan cortos.",
      "AHORA SÍ la pregunta de la reflexión, y CALLARSE. Los primeros diez segundos de silencio son normales; aguantarlos.",
      "Si nadie arranca, dar tú un ejemplo propio y devolver la pregunta: «yo no le dejaría escoger a quién entrevistamos, ¿ustedes qué?».",
      "Cerrar con el remate del priorizador: no le crean, mídanlo.",
      "Compartir el enlace de esta página al final. Antes no.",
    ],
  },
];

export const preparacion: string[] = [
  "VERIFICAR QUE POMELLI ABRE desde Colombia con tu cuenta de Google, y hacerlo esta semana. Llegó a Latinoamérica hace poco y es beta: si no abre el viernes, el bloque 6 se queda a la mitad.",
  "Ensayar la cadena completa Lovable → Pomelli de punta a punta. Es el único tramo donde una herramienta depende de la otra.",
  "GUARDAR LA URL DE LA PÁGINA DEL ENSAYO. Si Lovable falla en vivo, Pomelli se queda sin nada que leer — con esa URL de respaldo el bloque 6 sobrevive igual.",
  "Grabar el ensayo en video. Es el plan B si falla el wifi.",
  "Crear la cuenta de Lovable con anticipación: el plan gratuito da 5 créditos de build al día y se reinician a las 00:00 UTC. Ensayar el jueves para llegar el viernes con los 5 frescos.",
  "Tener el brief del ensayo copiado en un bloc de notas, por si ChatGPT se cae y toca seguir con el bloque 6.",
  "Preparar tu propia respuesta para la pregunta del bloque 7, por si la sala se queda callada.",
  "Confirmar cuántos son, si hay proyector y si el audio sirve.",
];

export type Riesgo = { situacion: string; respuesta: string };

export const riesgos: Riesgo[] = [
  {
    situacion: "Pomelli no abre desde Colombia",
    respuesta:
      "Por eso se verifica esta semana. Si el viernes falla: mostrar el resultado del ensayo en capturas y dedicarle los minutos a iterar más la página de Lovable.",
  },
  {
    situacion: "Lovable falla y Pomelli se queda sin URL",
    respuesta:
      "Sacar la URL de respaldo del ensayo. El bloque 6 sigue completo aunque la página no se haya hecho en vivo.",
  },
  {
    situacion: "El copy de Pomelli sale en inglés y alguien lo señala",
    respuesta:
      "Ya lo avisaste antes de que saliera. Aprovecharlo: es la prueba de que el criterio y el idioma siguen siendo trabajo de ellos.",
  },
  {
    situacion: "El bloque 3 se estira",
    respuesta:
      "Es el que NO hay que recortar: los bloques 5 y 6 dependen de él. El tiempo sale del bloque 6, recortando iteración en Lovable.",
  },
  {
    situacion: "Nadie habla en el bloque 7",
    respuesta:
      "Dar tú un ejemplo propio y devolver la pregunta. Aguantar el silencio inicial: casi siempre alguien arranca al cabo de diez segundos.",
  },
  {
    situacion: "Preguntan por agentes, automatización o cómo se entrena un modelo",
    respuesta: "«Eso no cambia nada de lo que van a hacer el lunes» y seguir. No improvisar.",
  },
  {
    situacion: "Wifi caído",
    respuesta:
      "Los bloques 1 a 4 sobreviven completos: son los que no necesitan internet. Para el 5, 6 y 7, el video del ensayo y los prompts proyectados.",
  },
];

export const fuera: { tema: string; porque: string }[] = [
  {
    tema: "Generar imágenes y portadas con IA",
    porque:
      "Las portadas y las piezas las hace el área de edición. Una capacitación que le enseña a mercadeo a generarlas se mete en terreno ajeno.",
  },
  {
    tema: "Talleres individuales en el celular",
    porque:
      "Se probó en una versión anterior. Con este grupo y esta hora, el formato es demo conducida: la sala mira una pantalla y opina.",
  },
  {
    tema: "Montar una convocatoria como hilo",
    porque:
      "El trabajo del área es publicar y administrar redes todo el tiempo, no una campaña puntual de reclutamiento.",
  },
  {
    tema: "Cómo se entrena un modelo, transformers, parámetros",
    porque: "No cambia nada de lo que hacen el lunes, y se come el bloque 3.",
  },
  {
    tema: "Comparar ChatGPT vs. Claude vs. Gemini",
    porque: "Diez minutos que no producen ninguna decisión distinta.",
  },
  {
    tema: "Agentes y automatizaciones (n8n, Zapier)",
    porque: "Necesita bases que este grupo no tiene. Es la sesión 2.",
  },
];
