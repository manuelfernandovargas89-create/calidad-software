import React from "react";
import "../App.css";
import pruebas from "../assets/pruebas.jpg";

export default function Pruebas() {
  return (
    <div className="contenido">
      <h1>Pruebas de Software</h1>
      <img src={pruebas} alt="Pruebas de software" style={{ width: "60%", borderRadius: "12px" }} />
      <p>
        Las pruebas aseguran que el software cumpla con sus requerimientos y funcione
        correctamente bajo distintas condiciones.
      </p>

      <h2>Tipos de Pruebas</h2>
      <ul>
        <li><b>Unitarias:</b> verifican el funcionamiento de módulos o funciones individuales.</li>
        <li><b>Integración:</b> prueban la interacción entre componentes del sistema.</li>
        <li><b>Sistema:</b> evalúan el comportamiento completo del sistema.</li>
        <li><b>Aceptación:</b> validan que el producto cumple las expectativas del usuario final.</li>
      </ul>
    </div>
  );
}
