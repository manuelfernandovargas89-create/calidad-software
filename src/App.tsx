import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./App.css";

/* ======================= COMPONENTES ======================= */

function Inicio() {
  return (
    <div className="contenido inicio">
      <header style={{ textAlign: "center" }}>
        <h1>Calidad de Software</h1>
        <h3>Proyecto de Calidad de Software — Manuel Fernando Vargas Beltrán</h3>
      </header>

      <section style={{ maxWidth: "800px", margin: "20px auto" }}>
        <p>
          La <strong>calidad del software</strong> se refiere a la capacidad de un sistema
          para cumplir con los requisitos funcionales y no funcionales, satisfaciendo las
          expectativas de los usuarios y garantizando su desempeño confiable.
        </p>

        <p>
          Aplicar buenas prácticas desde las etapas iniciales del desarrollo permite obtener
          software más estable, seguro, eficiente y fácil de mantener. La calidad de software
          no solo asegura un producto funcional, sino también una experiencia positiva para
          el usuario.
        </p>

        <h2>Factores de Calidad (6 principales)</h2>
        <ul>
          <li><b>Funcionalidad:</b> El software debe cumplir con los requerimientos especificados.</li>
          <li><b>Seguridad:</b> Protección frente a accesos no autorizados y vulnerabilidades.</li>
          <li><b>Facilidad:</b> Facilidad de uso y comprensión para el usuario final.</li>
          <li><b>Eficiencia:</b> Uso óptimo de recursos como memoria y procesamiento.</li>
          <li><b>Usabilidad:</b> Experiencia intuitiva, navegación clara y documentación adecuada.</li>
          <li><b>Mantenibilidad:</b> Capacidad de realizar cambios, correcciones y mejoras de forma sencilla.</li>
        </ul>

        <p>
          En entornos educativos, estos principios ayudan a los estudiantes a desarrollar disciplina,
          documentación adecuada y trabajo en equipo, preparando futuros profesionales con buenas prácticas.
        </p>
      </section>
    </div>
  );
}

function Normas() {
  return (
    <div className="contenido">
      <h1>Normas de Calidad de Software</h1>
      <p>
        Las normas son documentos que establecen directrices y procedimientos que aseguran
        que el desarrollo de software cumpla con los estándares internacionales y las buenas
        prácticas de ingeniería.
      </p>

      <h2>ISO/IEC 25010</h2>
      <p>
        Esta norma define un modelo de calidad con 8 características principales (funcionalidad,
        seguridad, facilidad, eficiencia, portabilidad, usabilidad, mantenibilidad y compatibilidad).
        Permite evaluar el software y garantizar que cumpla con los requerimientos de los usuarios.
      </p>

      <h2>ISO/IEC 12207</h2>
      <p>
        Describe los procesos del ciclo de vida del software, desde la planificación y desarrollo
        hasta el mantenimiento. Proporciona un marco que ayuda a las organizaciones a estandarizar
        su forma de trabajar y mejorar la gestión de proyectos.
      </p>

      <h2>ISO 9001</h2>
      <p>
        Norma de gestión de calidad enfocada en procesos. Asegura que la organización implemente
        procedimientos de mejora continua, asegurando la satisfacción del cliente y la eficiencia
        en todos los procesos, incluyendo el desarrollo de software.
      </p>
    </div>
  );
}

function Modelos() {
  return (
    <div className="contenido">
      <h1>Modelos de Calidad</h1>

      <h2>CMMI (Capability Maturity Model Integration)</h2>
      <p>
        Evalúa la madurez de los procesos de desarrollo de software. Ayuda a las organizaciones
        a identificar áreas de mejora y aumentar la eficiencia, asegurando que los proyectos
        se completen con calidad y dentro de los plazos.
      </p>

      <h2>SPICE (ISO/IEC 15504)</h2>
      <p>
        Permite evaluar la calidad de los procesos de software y definir planes de mejora.
        Es ampliamente utilizado en corporaciones y proyectos de ingeniería de software críticos.
      </p>

      <h2>MoProSoft</h2>
      <p>
        Modelo mexicano adaptado a pequeñas y medianas empresas, que establece buenas prácticas
        de desarrollo y control de calidad. Facilita la estandarización de procesos y mejora
        continua.
      </p>
    </div>
  );
}

function Estandares() {
  return (
    <div className="contenido">
      <h1>Estándares de Calidad de Software</h1>
      <p>
        Los estándares proporcionan guías y reglas para desarrollar software consistente y
        de calidad. Ayudan a asegurar que todas las etapas del desarrollo se realicen de manera
        profesional y trazable.
      </p>

      <h2>IEEE 829</h2>
      <p>
        Establece la documentación para pruebas de software. Permite registrar casos de prueba,
        resultados y evidencias, asegurando que las pruebas sean repetibles y auditables.
      </p>

      <h2>IEEE 830</h2>
      <p>
        Define cómo documentar los requerimientos del software. Garantiza que los objetivos
        del sistema estén claros y comprensibles para todos los miembros del equipo.
      </p>

      <h2>ISO/IEC 9126</h2>
      <p>
        Norma enfocada en medir la calidad interna y externa del software, evaluando factores
        como funcionalidad, eficiencia, usabilidad, mantenibilidad y portabilidad.
      </p>
    </div>
  );
}

function Codigo() {
  return (
    <div className="contenido">
      <h1>Código del Proyecto</h1>
      <p>
        La aplicación está desarrollada en <strong>React</strong> y <strong>TypeScript</strong>,
        usando <strong>React Router</strong> para navegación y <strong>Recharts</strong> para gráficos.
      </p>
      <p>
        Cada sección está en un componente independiente para facilitar mantenimiento y escalabilidad.
      </p>
      <pre>
{`function Evaluacion() {
  const [data, setData] = useState([
    { criterio: "Funcionalidad", puntaje: 80 },
    { criterio: "Usabilidad", puntaje: 90 },
    { criterio: "Eficiencia", puntaje: 70 },
  ]);

  const handleChange = (index, field, value) => {
    setData(prevData =>
      prevData.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  }
}`}
      </pre>
      <p>Permite modificar los puntajes de los factores de calidad y ver cambios en tiempo real.</p>
    </div>
  );
}

function Pruebas() {
  return (
    <div className="contenido">
      <h1>Pruebas de Calidad</h1>
      <p>
        Las pruebas garantizan que el software cumpla los requisitos y funcione correctamente.
        Algunos ejemplos son:
      </p>
      <ul>
        <li><b>Pruebas unitarias:</b> Validan componentes individuales de manera aislada (ej. una función de cálculo de puntajes).</li>
        <li><b>Pruebas de integración:</b> Verifican la interacción entre varios módulos (ej. la conexión entre formulario y gráfico).</li>
        <li><b>Pruebas funcionales:</b> Comprueban que el sistema cumpla las funciones esperadas (ej. navegación correcta entre secciones).</li>
        <li><b>Pruebas de rendimiento:</b> Miden velocidad y estabilidad bajo carga (ej. actualización rápida de gráficos con muchos datos).</li>
      </ul>
      <p>
        Herramientas como <code>Jest</code> y <code>React Testing Library</code> permiten automatizar estas pruebas y mejorar la confiabilidad del software.
      </p>
    </div>
  );
}

function Conclusiones() {
  return (
    <div className="contenido">
      <h1>Conclusiones</h1>
      <p>
        La calidad de software es un proceso integral y continuo que abarca normas, modelos,
        estándares, buenas prácticas y pruebas constantes. Su implementación asegura que los
        sistemas sean confiables, eficientes, seguros y fáciles de mantener.
      </p>
      <p>
        Los factores de calidad, como funcionalidad, seguridad, facilidad, eficiencia, usabilidad
        y mantenibilidad, deben ser considerados desde el inicio de cualquier proyecto.
        Aplicarlos no solo reduce errores y costos, sino que incrementa la satisfacción del usuario.
      </p>
      <p>
        Las normas ISO y los modelos de calidad proporcionan marcos de referencia y procesos estandarizados
        que ayudan a las organizaciones a mejorar continuamente sus productos. La documentación,
        las pruebas automatizadas y la evaluación constante son pilares fundamentales para alcanzar
        la excelencia.
      </p>
      <p>
        Finalmente, integrar todas estas prácticas no solo garantiza un producto de calidad,
        sino que también fortalece la reputación de la organización, facilita la mejora continua
        y prepara a los equipos de desarrollo para entornos profesionales reales.
      </p>
    </div>
  );
}

function Recomendaciones() {
  return (
    <div className="contenido">
      <h1>Recomendaciones</h1>
      <ul>
        <li>Implementar revisiones de código y auditorías internas periódicas.</li>
        <li>Adoptar un modelo de madurez de procesos (CMMI o MoProSoft).</li>
        <li>Automatizar pruebas unitarias y de integración para garantizar confiabilidad.</li>
        <li>Capacitar constantemente al equipo en estándares y buenas prácticas.</li>
        <li>Documentar procesos y requerimientos de forma clara y actualizada.</li>
      </ul>
    </div>
  );
}

function Evaluacion() {
  const [data, setData] = useState([
    { criterio: "Funcionalidad", puntaje: 80 },
    { criterio: "Seguridad", puntaje: 85 },
    { criterio: "Facilidad", puntaje: 75 },
    { criterio: "Eficiencia", puntaje: 70 },
    { criterio: "Usabilidad", puntaje: 90 },
    { criterio: "Mantenibilidad", puntaje: 80 },
  ]);

  const handleChange = (index: number, field: string, value: any) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div className="contenido">
      <h1>Evaluación</h1>
      <p>Modifica los valores de puntaje y observa la gráfica actualizada.</p>

      <table className="tabla">
        <thead>
          <tr>
            <th>Criterio</th>
            <th>Puntaje (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.criterio}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={row.puntaje}
                  onChange={(e) =>
                    handleChange(i, "puntaje", Number(e.target.value))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="criterio" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="puntaje" fill="#0059b3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ======================= APP PRINCIPAL ======================= */
export default function App() {
  return (
    <Router>
      <nav className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/normas">Normas</Link>
        <Link to="/modelos">Modelos</Link>
        <Link to="/estandares">Estándares</Link>
        <Link to="/codigo">Código</Link>
        <Link to="/pruebas">Pruebas</Link>
        <Link to="/conclusiones">Conclusiones</Link>
        <Link to="/recomendaciones">Recomendaciones</Link>
        <Link to="/evaluacion">Evaluación</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/normas" element={<Normas />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/estandares" element={<Estandares />} />
        <Route path="/codigo" element={<Codigo />} />
        <Route path="/pruebas" element={<Pruebas />} />
        <Route path="/conclusiones" element={<Conclusiones />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
        <Route path="/evaluacion" element={<Evaluacion />} />
      </Routes>

      <footer style={{ textAlign: "center", padding: "20px", marginTop: "30px", background: "#f0f0f0" }}>
        Proyecto de Calidad de Software — Manuel Fernando Vargas Beltrán © 2025
      </footer>
    </Router>
  );
}
