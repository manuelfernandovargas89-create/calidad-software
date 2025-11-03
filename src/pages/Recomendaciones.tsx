import React from "react";
import "../App.css";

export default function Recomendaciones() {
  return (
    <div className="contenido">
      <h1>Recomendaciones</h1>
      <ul>
        <li>Implementar revisiones de código periódicas.</li>
        <li>Usar control de versiones (Git) y pruebas automatizadas.</li>
        <li>Adoptar metodologías ágiles con integración continua.</li>
        <li>Capacitar al equipo en normas ISO y prácticas seguras de desarrollo.</li>
      </ul>
      <p>
        Siguiendo estas recomendaciones, se promueve un entorno de desarrollo profesional,
        colaborativo y enfocado en la mejora continua.
      </p>
    </div>
  );
}
