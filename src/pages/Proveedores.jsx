import { useEffect } from "react";
import { useState } from "react";



function Proveedores() {

  const [listaProveedores, setListaProveedores] = useState([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    const rutaServicio = "https://servicios.campus.pe/proveedores.php";
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListaProveedores(data);
      });
  };


  const dibujarTabla = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Empresa</th>
            <th>Contacto</th>
            <th>Cargo</th>
            <th>Ciudad</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {listaProveedores.map((item) => (
            <tr key={item.idproveedor}>
              <td>{item.idproveedor}</td>
              <td>{item.nombreempresa}</td>
              <td>{item.nombrecontacto}</td>
              <td>{item.cargocontacto}</td>
              <td>{item.ciudad}</td>
              <td>{item.pais}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };




  return (
    <section id="proveedores" className="padded">
      <div className="container">
        <h2>Proveedores</h2>
        {dibujarTabla()}
      </div>
    </section>
  );
}

export default Proveedores;
