import { useEffect } from "react";
import { useState } from "react";
import Productos from "../components/Productos";

function Tienda() {
  const [ListaCategorias, setListaCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);

  useEffect(() => {
    leerCategorias();
  }, []);

  const leerCategorias = () => {
    const rutaServicio = "https://servicios.campus.pe/categorias.php";
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListaCategorias(data);
      });
  };

  const seleccionarCategoria = (item) => {
    console.log(item);
    setCategoriaSeleccionada(item);
  };

  const dibujarCategorias = () => {
    return (
      <ul className="list-group">
        {ListaCategorias.map((item) => (
          <li
            className={
              item.idcategoria === categoriaSeleccionada.idcategoria
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => seleccionarCategoria(item)}
            key={item.idcategoria}
            title={item.descripcion}
          >
            {item.nombre}
            <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
              {item.total}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section id="tienda" className="padded">
      <div className="container">
        <h2>Tienda</h2>
        <div className="row">
          <div className="col-3">
            <h3>Categorías</h3>
            {dibujarCategorias()}
          </div>
          <div className="col-9">
            <h3>{categoriaSeleccionada.nombre}</h3>
            <p>
              {categoriaSeleccionada.descripcion}
              <br />
              {categoriaSeleccionada.total} productos encontrados.
            </p>
            <Productos categoriaProductos = {categoriaSeleccionada.idcategoria}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tienda;
