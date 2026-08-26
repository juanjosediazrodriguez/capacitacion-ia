import { Deck } from "@/components/Deck";
import { Prompt } from "@/components/Prompt";
import { negrita } from "@/components/Negrita";
import {
  cadena,
  limites,
  preguntas,
  secciones,
  sesion,
  type Seccion,
} from "@/content/sesion";

function Cadena() {
  return (
    <div className="cadena">
      {cadena.map((paso) => (
        <div className="cadena-paso" key={paso.n}>
          <span className="cadena-n">{String(paso.n).padStart(2, "0")}</span>
          <span className="cadena-titulo">{paso.titulo}</span>
          <span className="cadena-pregunta">{paso.pregunta}</span>
          <span
            className="cadena-quien"
            data-activo={paso.quien === "Ustedes" ? "si" : undefined}
          >
            {paso.quien}
          </span>
        </div>
      ))}
    </div>
  );
}

function Contenido({ seccion }: { seccion: Seccion }) {
  switch (seccion.tipo) {
    case "portada":
      return (
        <>
          <span className="portada-marca">{sesion.grupo}</span>
          <h1 className="portada-titulo">{sesion.titulo}</h1>
          <p className="texto">{sesion.subtitulo}</p>
          <div className="portada-meta">
            <span>{sesion.fecha}</span>
            <span>60 minutos</span>
          </div>
          <p className="pista">
            <span className="tecla">→</span> para avanzar
          </p>
        </>
      );

    case "mapa":
      return (
        <>
          <span className="rotulo">{seccion.rotulo}</span>
          <h2 className="titulo-menor">{seccion.titulo}</h2>
          <Cadena />
          <p className="texto">{negrita(seccion.texto)}</p>
        </>
      );

    case "declaracion":
      return (
        <>
          <span className="rotulo">{seccion.rotulo}</span>
          <h2 className="titulo">{seccion.titulo}</h2>
          {seccion.texto ? <p className="texto">{negrita(seccion.texto)}</p> : null}
        </>
      );

    case "lista":
      return (
        <>
          <span className="rotulo">{seccion.rotulo}</span>
          <h2 className="titulo-menor">{seccion.titulo}</h2>
          <ul className="puntos">
            {seccion.items.map((item) => (
              <li key={item.titulo}>
                <span className="punto-titulo">{item.titulo}</span>
                <span className="punto-texto">{negrita(item.texto)}</span>
              </li>
            ))}
          </ul>
        </>
      );

    case "preguntas":
      return (
        <>
          <span className="rotulo">{seccion.rotulo}</span>
          <h2 className="titulo-menor">{seccion.titulo}</h2>
          <ol className="preguntas">
            {preguntas.map((pregunta) => (
              <li key={pregunta.texto} className={pregunta.clave ? "clave" : undefined}>
                <span className="pregunta-texto">{pregunta.texto}</span>
                <span className="pregunta-ejemplo">{pregunta.ejemplo}</span>
              </li>
            ))}
          </ol>
          <p className="nota-lateral">{seccion.nota}</p>
        </>
      );

    case "comparacion":
      return (
        <>
          <span className="rotulo">{seccion.rotulo}</span>
          <h2 className="titulo-menor">{seccion.titulo}</h2>
          <div className="comparacion">
            {seccion.opciones.map((opcion) => (
              <div className="opcion" key={opcion.etiqueta}>
                <span className="opcion-etiqueta">{opcion.etiqueta}</span>
                <p className="opcion-texto">{opcion.texto}</p>
              </div>
            ))}
          </div>
        </>
      );

    case "prompt":
      return (
        <>
          <span className="rotulo">{seccion.rotulo}</span>
          <h2 className="titulo-menor">{seccion.titulo}</h2>
          {seccion.intro ? <p className="texto">{negrita(seccion.intro)}</p> : null}
          <Prompt donde={seccion.donde} texto={seccion.texto} />
          {seccion.nota ? <p className="aviso">{negrita(seccion.nota)}</p> : null}
        </>
      );

    case "taller":
      return (
        <>
          <span className="rotulo">{seccion.rotulo}</span>
          <div className="taller-cabeza">
            <h2 className="titulo-menor">{seccion.titulo}</h2>
            <span className="reloj">
              <span className="reloj-numero">{seccion.minutos}</span>
              <span className="reloj-unidad">min</span>
            </span>
          </div>
          <p className="texto">{negrita(seccion.consigna)}</p>
          <Prompt donde={seccion.donde} texto={seccion.texto} />
          <p className="regla">{negrita(seccion.regla)}</p>
        </>
      );

    case "aviso":
      return (
        <>
          <span className="rotulo">{seccion.rotulo}</span>
          <h2 className="titulo-menor">{seccion.titulo}</h2>
          <p className="aviso">{negrita(seccion.texto)}</p>
        </>
      );

    case "limites":
      return (
        <>
          <span className="rotulo">{seccion.rotulo}</span>
          <h2 className="titulo-menor">{seccion.titulo}</h2>
          <ul className="puntos en-columnas">
            {limites.map((limite) => (
              <li key={limite.titulo}>
                <span className="punto-titulo">{limite.titulo}</span>
                <span className="punto-texto">{limite.texto}</span>
              </li>
            ))}
          </ul>
        </>
      );

    case "cierre":
      return (
        <>
          <span className="rotulo">{seccion.rotulo}</span>
          <h2 className="titulo-menor">{seccion.titulo}</h2>
          <Cadena />
          <p className="texto">{negrita(seccion.texto)}</p>
        </>
      );
  }
}

export default function Presentacion() {
  return (
    <main>
      <Deck ids={secciones.map((s) => s.id)}>
        {secciones.map((seccion) => (
          <section className="slide" id={seccion.id} key={seccion.id}>
            <div className="slide-inner">
              <Contenido seccion={seccion} />
            </div>
          </section>
        ))}
      </Deck>
    </main>
  );
}
