import { useEffect } from "react";
import { useState } from "react";

function Envios() {
  //Se define una variable con su metodo para cambiar su valor
  const [listaEnvios, setListaEnvios] = useState([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    const rutaServicio = "https://servicios.campus.pe/envios.php";
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListaEnvios(data);
      });
  };

  const dibujarTabla = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Empresa</th>
            <th>Teléfono</th>
            <th>Latitud</th>
            <th>Longitud</th>
          </tr>
        </thead>
        <tbody>
          {listaEnvios.map((item) => (
            <tr key={item.idempresaenvio}>
              <td>{item.idempresaenvio}</td>
              <td>{item.nombre}</td>
              <td>{item.telefono}</td>
              <td>{item.latitud}</td>
              <td>{item.longitud}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <section id="envios" className="padded">
      <div className="container">
        <h2>Empresas de envío</h2>
        {/*Comentario*/}
        {dibujarTabla()}
      </div>
    </section>
  );
}

export default Envios;
