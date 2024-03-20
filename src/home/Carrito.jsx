import { useEffect, useState } from "react"

function Carrito() {

    const [listaItems, setListaItems] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        let datosCarrito = JSON.parse(sessionStorage.getItem("carritocompras"))
        console.log(datosCarrito)
        setListaItems(datosCarrito)
        if(datosCarrito !== null){
            calcularTotal(datosCarrito)
        }
    }

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Producto</th>
                        <th className="text-end">Precio</th>
                        <th className="text-end">Cantidad</th>
                        <th className="text-end">Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listaItems !== null
                    ? listaItems.map(item =>
                        <tr key={item.idproducto}>
                            <td>{item.idproducto}</td>
                            <td>{item.nombre}</td>
                            <td className="text-end">{parseFloat(item.precio).toFixed(2)}</td>
                            <td className="text-end">{item.cantidad}</td>
                            <td className="text-end">{parseFloat(item.precio * item.cantidad).toFixed(2)}</td>
                            <td><i className="bi bi-x-lg" title="Eliminar" onClick={() => eliminarItem(item)}></i></td>
                        </tr>
                    )
                    :<></>
                }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="text-end">Total</td>
                        <td className="text-end">S/ {total.toFixed(2)}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        )
    }

    const eliminarItem = (item) => {
        let carritoMenos = listaItems.filter(itemCart => itemCart.idproducto !== item.idproducto)
        setListaItems(carritoMenos)
        sessionStorage.setItem("carritocompras", JSON.stringify(carritoMenos))
        calcularTotal(carritoMenos)
    }

    const vaciarCarrito = () => {
        setListaItems([])
        sessionStorage.removeItem("carritocompras")
        setTotal(0)
    }

    const calcularTotal = (datosCarrito) => {
        let sumaTotal = datosCarrito.reduce((acumulador, fila) => acumulador + fila["precio"] * fila["cantidad"], 0)
        setTotal(sumaTotal)
    }

    return (
        <section id="carrito" className="padded">
            <div className="container">
                <h2>Carrito de compras</h2>
                {dibujarTabla()}
                <button className="btn btn-danger" onClick={() => vaciarCarrito()}>Vaciar carrito</button>
            </div>
        </section>
    )
}

export default Carrito