import React from "react";
import "../App.css";
import estandares from "../assets/estandares.jpg";

export default function Estandares() {
  return (
    <div className="contenido">
      <h1>Estándares de Desarrollo</h1>
      <img src={estandares} alt="Estándares de desarrollo" style={{ width: "60%", borderRadius: "12px" }} />
      <p>
        Los estándares garantizan que el software cumpla con los requisitos técnicos,
        de seguridad y mantenibilidad de forma consistente.
      </p>

      <h2>IEEE 830</h2>
      <p>
        Define cómo elaborar especificaciones de requerimientos de software claras,
        completas y verificables.
      </p>

      <h2>IEEE 1016</h2>
      <p>
        Estandariza la documentación del diseño del software, asegurando claridad
        y trazabilidad entre requerimientos y componentes.
      </p>

      <h2>IEEE 829</h2>
      <p>
        Describe los documentos usados en pruebas de software: plan de pruebas,
        casos, resultados y reportes.
      </p>
    </div>
  );
}
