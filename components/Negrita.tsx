import { Fragment, type ReactNode } from "react";

/**
 * Convierte **texto entre asteriscos dobles** en negrita.
 *
 * Es todo el markdown que necesita el contenido, y así se evita meter un
 * parser entero —y `dangerouslySetInnerHTML`— por una sola marca.
 */
export function negrita(texto: string): ReactNode {
  return texto.split(/\*\*(.+?)\*\*/g).map((parte, i) =>
    i % 2 === 1 ? (
      <strong key={i}>{parte}</strong>
    ) : (
      <Fragment key={i}>{parte}</Fragment>
    ),
  );
}
