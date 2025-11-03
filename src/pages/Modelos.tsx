import React from "react";
import "../App.css";
import modelos from "../assets/modelos.jpg";

export default function Modelos() {
  return (
    <div className="contenido">
      <h1>Modelos de Calidad de Software</h1>
      <img src={modelos} alt="Modelos de calidad" style={{ width: "60%", borderRadius: "12px" }} />
      <p>
        Los modelos de calidad ayudan a estructurar y evaluar los procesos y productos del software.
      </p>

      <h2>Modelo McCall</h2>
      <p>
        Propone factores como confiabilidad, mantenibilidad y eficiencia. Ideal para analizar el
        producto terminado desde la perspectiva del usuario.
      </p>

      <h2>Modelo Boehm</h2>
      <p>
        Se enfoca en la calidad del diseño y la estructura del código, priorizando la facilidad
        de mantenimiento y la corrección.
      </p>

      <h2>Modelo FURPS</h2>
      <p>
        Divide la calidad en cinco dimensiones: Funcionalidad, Usabilidad, Fiabilidad, Rendimiento y Soporte.
      </p>
    </div>
  );
}
