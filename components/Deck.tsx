"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";

/**
 * El armazón de la presentación.
 *
 * Las secciones las dibuja el servidor; esto solo agrega lo que necesita
 * el navegador: las flechas para avanzar cuando está proyectado, el riel
 * de puntos y el contador. En el celular nada de esto estorba — se
 * desplaza como cualquier página.
 */
export function Deck({ ids, children }: { ids: string[]; children: ReactNode }) {
  const [actual, setActual] = useState(0);

  const irA = useCallback(
    (indice: number) => {
      const destino = Math.max(0, Math.min(ids.length - 1, indice));
      document
        .getElementById(ids[destino])
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [ids],
  );

  // Cuál sección se está viendo. Se toma la que cruce el tercio superior.
  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            const indice = ids.indexOf(entrada.target.id);
            if (indice >= 0) setActual(indice);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const id of ids) {
      const nodo = document.getElementById(id);
      if (nodo) observador.observe(nodo);
    }

    return () => observador.disconnect();
  }, [ids]);

  useEffect(() => {
    function alTeclear(evento: KeyboardEvent) {
      // No robarle la barra espaciadora ni las flechas a un botón enfocado
      // ni a un campo de texto.
      const objetivo = evento.target as HTMLElement | null;
      if (
        objetivo &&
        (objetivo.tagName === "INPUT" ||
          objetivo.tagName === "TEXTAREA" ||
          objetivo.isContentEditable ||
          (evento.key === " " && objetivo.tagName === "BUTTON"))
      ) {
        return;
      }

      switch (evento.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          evento.preventDefault();
          irA(actual + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          evento.preventDefault();
          irA(actual - 1);
          break;
        case "Home":
          evento.preventDefault();
          irA(0);
          break;
        case "End":
          evento.preventDefault();
          irA(ids.length - 1);
          break;
      }
    }

    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
  }, [actual, ids.length, irA]);

  return (
    <>
      <div className="deck">{children}</div>

      <nav className="riel" aria-label="Secciones de la presentación">
        {ids.map((id, i) => (
          <button
            key={id}
            type="button"
            aria-current={i === actual}
            aria-label={`Ir a la sección ${i + 1} de ${ids.length}`}
            onClick={() => irA(i)}
          />
        ))}
      </nav>

      <div className="contador" aria-hidden="true">
        {String(actual + 1).padStart(2, "0")} / {String(ids.length).padStart(2, "0")}
      </div>
    </>
  );
}
