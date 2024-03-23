/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import nofoto from "./../assets/images/nofoto.jpg"
import { ApiWebURL } from "../utils"

function ProductoDetalle() {
    const [productoSeleccionado, setProductoSeleccionado] = useState([])

    const params = useParams()
    console.log(params)

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "productos.php?idproducto=" + params.idproducto
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProductoSeleccionado(data[0])
            });
    }

    return (
        <section id="producto-detalle" className="padded">
            <div className="container">
                <h2>{productoSeleccionado.nombre}</h2>
                <div className="row">
                    <div className="col">
                        <img src={productoSeleccionado.imagengrande === null
                            ? nofoto
                            : ApiWebURL + productoSeleccionado.imagengrande}
                            className="img-fluid" alt="..." />
                    </div>
                    <div className="col">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Detalle</th>
                                    <td>{productoSeleccionado.detalle}</td>
                                </tr>
                                <tr>
                                    <th>Proveedor</th>
                                    <td>{productoSeleccionado.proveedor}</td>
                                </tr>
                                <tr>
                                    <th>Stock</th>
                                    <td>{productoSeleccionado.unidadesenexistencia}</td>
                                </tr>
                                <tr>
                                    <th>Precio</th>
                                    <td>S/{productoSeleccionado.preciorebajado === "0"
                                        ? parseFloat(productoSeleccionado.precio).toFixed(2)
                                        : parseFloat(productoSeleccionado.preciorebajado).toFixed(2)}
                                        <span className="precio-anterior">
                                            {productoSeleccionado.preciorebajado === "0"
                                                ? ""
                                                : "S/" + parseFloat(productoSeleccionado.precio).toFixed(2)}
                                        </span></td>
                                </tr>
                                <tr>
                                    <th>Categoría</th>
                                    <td>{productoSeleccionado.categoria}</td>
                                </tr>
                                <tr>
                                    <th>País de origen</th>
                                    <td>{productoSeleccionado.pais}</td>
                                </tr>
                                <tr>
                                    <th>Atención al cliente</th>
                                    <td>{productoSeleccionado.telefono}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Descripción</h3>
                        <div dangerouslySetInnerHTML={{ __html: productoSeleccionado.descripcion}}></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProductoDetalle