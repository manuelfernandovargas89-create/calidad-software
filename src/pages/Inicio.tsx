import React from "react";
import "../App.css";

export default function Inicio() {
  return (
    <div className="contenido inicio">
      <header style={{ textAlign: "center" }}>
        <h1>Calidad de Software</h1>
        <h3>Proyecto de Calidad de Software — Manuel Fernando Vargas Beltrán</h3>
      </header>

      <section className="intro" style={{ maxWidth: "800px", margin: "20px auto" }}>
        <p>
          La <strong>calidad del software</strong> es el grado en que un sistema, componente o
          proceso satisface los requisitos especificados y las necesidades o expectativas del
          cliente o usuario. No se trata solo de que el sistema funcione, sino de que lo haga
          bien, de forma segura, eficiente y confiable.
        </p>

        <h2>Importancia</h2>
        <p>
          Aplicar prácticas de calidad desde el inicio del desarrollo garantiza productos más
          estables, seguros y fáciles de mantener. En entornos educativos, fomenta la disciplina,
          la documentación y el trabajo en equipo, preparando a los futuros profesionales para
          entornos reales de desarrollo.
        </p>

        <h2>Beneficios</h2>
        <ul>
          <li>Reducción de errores en producción.</li>
          <li>Mayor satisfacción del usuario final.</li>
          <li>Disminución de costos de mantenimiento.</li>
          <li>Mayor reputación y confianza en el producto.</li>
          <li>Facilita la mejora continua del software.</li>
        </ul>
      </section>

      <section style={{ textAlign: "center", marginTop: "30px" }}>
        <p>
          Este proyecto fue desarrollado como parte del curso de <em>Calidad de Software</em>,
          con el propósito de comprender y aplicar los principios y estándares que garantizan la
          excelencia en los sistemas informáticos.
        </p>
        <p style={{ fontWeight: "bold", color: "#0059b3", marginTop: "10px" }}>
          Proyecto de Calidad de Software — Manuel Fernando Vargas Beltrán
        </p>
      </section>
    </div>
  );
}
