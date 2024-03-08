import { useEffect } from "react";
import { useState } from "react";

function Empleados() {
  const [listaEmpleados, setListaEmpleados] = useState([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    const rutaServicio = "https://servicios.campus.pe/empleados.php";
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListaEmpleados(data);
      });
  };

  const dibujarCuadricula = () => {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {listaEmpleados.map((item) => (
          <div className="card" key={item.idempleado}>
            <img src={"https://servicios.campus.pe/fotos/" + item.foto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.nombres} {item.apellidos}</h5>
              <p className="card-text">{item.cargo}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="empleados" className="padded">
      <div className="container">
        <h2>Empleados</h2>
        {dibujarCuadricula()}
      </div>
    </section>
  );
}

export default Empleados;
