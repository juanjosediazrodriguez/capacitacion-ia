# Capacitación de IA — TVU

El sitio **es** la presentación. Se proyecta el viernes 28 de agosto de 2026 en la
capacitación de IA aplicada a marketing para el área de mercadeo de TVU, y después
queda como material para el grupo.

## Las dos rutas

| Ruta | Para quién | Qué es |
|---|---|---|
| `/` | El salón, y después el grupo | La presentación. Una sección por pantalla, se avanza con **→**. Los prompts se copian con un botón. |
| `/guia` | Solo tú | El minutado del facilitador, la lista de preparación y qué hacer si algo falla. No está enlazada desde la presentación ni se indexa. |

En el celular la presentación se lee de corrido, como documento. Es la misma página:
no hay dos versiones que mantener.

## Correr en local

```bash
npm install
```

```bash
npm run dev
```

Queda en `http://localhost:3000`. La guía, en `http://localhost:3000/guia`.

## Editar el contenido

Todo el texto vive en `content/`, separado del diseño:

- **`content/sesion.ts`** — la presentación. El arreglo `secciones` es el orden de las
  pantallas; agregar, quitar o reordenar ahí cambia la presentación. En el texto,
  `**lo que va entre asteriscos dobles**` sale en negrita.
- **`content/guion.ts`** — el minutado, la preparación y los riesgos de `/guia`.

Los componentes de `components/` y los estilos de `app/globals.css` no hay que
tocarlos para cambiar contenido.

## Estructura

```
app/
  layout.tsx      fuentes y metadatos
  page.tsx        la presentación — un caso por tipo de sección
  guia/page.tsx   el guion del facilitador
  globals.css     todo el diseño
components/
  Deck.tsx        flechas, riel de puntos y contador (cliente)
  Prompt.tsx      bloque de prompt con botón de copiar (cliente)
  Negrita.tsx     convierte **asteriscos** en negrita
content/
  sesion.ts       contenido de la presentación
  guion.ts        contenido de la guía
```

## Desplegar

Next.js 16, sin base de datos, sin variables de entorno, sin API keys. En Vercel se
importa el repo y despliega sin configurar nada.

## Antes del viernes

La lista completa está en `/guia`. Las tres que no se pueden saltar:

1. Crear la cuenta de Lovable con anticipación — el plan gratuito da 5 créditos de
   build al día.
2. Ensayar la demo de Lovable el jueves, para llegar el viernes con los créditos
   frescos.
3. Grabar ese ensayo en video. Es el plan B si falla el wifi o los créditos.
