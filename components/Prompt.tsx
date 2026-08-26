"use client";

import { useRef, useState } from "react";

/**
 * Un prompt copiable. Es el componente que más se usa el día después de
 * la sesión: la gente entra desde el celular y copia.
 */
export function Prompt({ donde, texto }: { donde: string; texto: string }) {
  const [estado, setEstado] = useState<"listo" | "copiado" | "falló">("listo");
  const temporizador = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copiar() {
    let bien = false;

    try {
      await navigator.clipboard.writeText(texto);
      bien = true;
    } catch {
      // Safari viejo y contextos sin permiso de portapapeles.
      try {
        const campo = document.createElement("textarea");
        campo.value = texto;
        campo.setAttribute("readonly", "");
        campo.style.position = "fixed";
        campo.style.opacity = "0";
        document.body.appendChild(campo);
        campo.select();
        bien = document.execCommand("copy");
        document.body.removeChild(campo);
      } catch {
        bien = false;
      }
    }

    setEstado(bien ? "copiado" : "falló");

    if (temporizador.current) clearTimeout(temporizador.current);
    temporizador.current = setTimeout(() => setEstado("listo"), 1800);
  }

  return (
    <div className="prompt">
      <div className="prompt-barra">
        <span className="prompt-donde">{donde}</span>
        <button
          type="button"
          className="copiar"
          onClick={copiar}
          data-listo={estado === "copiado" ? "si" : undefined}
        >
          {estado === "copiado"
            ? "Copiado"
            : estado === "falló"
              ? "Selecciónalo y cópialo"
              : "Copiar"}
        </button>
      </div>
      <pre>{texto}</pre>
    </div>
  );
}
