import type { Metadata } from "next";
import Link from "next/link";
import { guia, minutado, preparacion, riesgos, fuera } from "@/content/guion";

export const metadata: Metadata = {
  title: "Guion de la sesión · TVU",
  description: "El minutado del facilitador. No está enlazada desde la presentación.",
  robots: { index: false, follow: false },
};

export default function Guia() {
  return (
    <main className="guia">
      <header style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <span className="etiqueta-seccion">Solo para el facilitador</span>
        <h1>{guia.titulo}</h1>
        <p className="texto">{guia.entrada}</p>
      </header>

      <section>
        <span className="etiqueta-seccion">Minuto a minuto</span>
        <div className="momentos">
          {minutado.map((momento) => (
            <article className="momento" key={momento.min}>
              <span className="momento-min">{momento.min}</span>
              <div className="momento-cuerpo">
                <h3>{momento.titulo}</h3>
                {momento.ejercicio ? (
                  <span className="chip-ejercicio">Ellos teclean</span>
                ) : null}
                {momento.frase ? <p className="frase">«{momento.frase}»</p> : null}
                <ul>
                  {momento.acciones.map((accion) => (
                    <li key={accion}>{accion}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <span className="etiqueta-seccion">Antes del viernes</span>
        <ul className="checklist">
          {preparacion.map((tarea) => (
            <li key={tarea}>{tarea}</li>
          ))}
        </ul>
      </section>

      <section>
        <span className="etiqueta-seccion">Si algo sale mal</span>
        <div className="tabla-envoltura">
          <table>
            <thead>
              <tr>
                <th>Situación</th>
                <th>Respuesta</th>
              </tr>
            </thead>
            <tbody>
              {riesgos.map((riesgo) => (
                <tr key={riesgo.situacion}>
                  <td>{riesgo.situacion}</td>
                  <td>{riesgo.respuesta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <span className="etiqueta-seccion">Se dejó por fuera, a propósito</span>
        <div className="tabla-envoltura">
          <table>
            <thead>
              <tr>
                <th>Tema</th>
                <th>Por qué</th>
              </tr>
            </thead>
            <tbody>
              {fuera.map((tema) => (
                <tr key={tema.tema}>
                  <td>{tema.tema}</td>
                  <td>{tema.porque}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Link href="/" className="enlace-volver">
        ← Ir a la presentación
      </Link>
    </main>
  );
}
