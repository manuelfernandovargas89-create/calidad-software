import React from "react";
import "../App.css";
import iso25010 from "../assets/iso25010.png";

export default function Normas() {
  return (
    <div className="contenido">
      <h1>Normas de Calidad de Software</h1>
      <p>Las normas establecen lineamientos internacionales que aseguran la calidad y gestión del software.</p>

      <h2>ISO/IEC 25010</h2>
      <img src={iso25010} alt="ISO 25010" style={{ width: "50%", borderRadius: "12px" }} />
      <p>
        Define un modelo de calidad con ocho características principales:
        funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad,
        portabilidad, seguridad y compatibilidad.
      </p>

      <h2>ISO/IEC 12207</h2>
      <p>
        Establece los procesos del ciclo de vida del software, desde la concepción
        hasta el retiro del sistema. Se aplica en la gestión y control del desarrollo.
      </p>

      <h2>ISO/IEC 15504 (SPICE)</h2>
      <p>
        Evalúa la madurez de los procesos de desarrollo y mantenimiento de software.
        Se utiliza para mejorar continuamente la capacidad de las organizaciones.
      </p>
    </div>
  );
}
