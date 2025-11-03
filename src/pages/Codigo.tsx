import React from "react";
import "../App.css";
import codigo from "../assets/codigo.jpg";

export default function Codigo() {
  return (
    <div className="contenido">
      <h1>Código del Proyecto</h1>
      <img src={codigo} alt="Código fuente" style={{ width: "60%", borderRadius: "12px" }} />
      <p>
        A continuación se muestra un fragmento del código fuente del proyecto React que conforma
        este sitio web educativo:
      </p>

      <pre>
{`function Evaluacion() {
  const [data, setData] = useState([
    { criterio: "Funcionalidad", puntaje: 80 },
    { criterio: "Usabilidad", puntaje: 90 },
  ]);
  
  const handleChange = (i, field, value) => {
    setData(prev => prev.map((item, index) =>
      index === i ? { ...item, [field]: value } : item
    ));
  };
}`}
      </pre>

      <p>
        Este componente permite modificar valores de evaluación y visualizar en tiempo real
        los cambios reflejados en una gráfica.
      </p>
    </div>
  );
}
