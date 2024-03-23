import "./Directores.css"
import { useEffect } from "react";
import { useState } from "react";
import { ApiWebURL } from "../utils";

function Directores() {

    const [listaDirectores, setListaDirectores] = useState([])
    const [nombres, setNombres] = useState("")
    const [peliculas, setPeliculas] = useState("")
    const [iddirector, setIddirector] = useState("")

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "directores.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListaDirectores(data)
            });
    }

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombres</th>
                        <th>Películas</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listaDirectores.map(item =>
                        <tr key={item.iddirector}>
                            <td>{item.iddirector}</td>
                            <td>{item.nombres}</td>
                            <td>{item.peliculas}</td>
                            <td><i className="bi bi-pencil icono-editar" title="Editar"
                                data-bs-toggle="modal" data-bs-target="#updateModal"
                                onClick={() => llenarCampos(item)}></i></td>
                            <td><i className="bi bi-x-lg icono-eliminar" title="Eliminar"></i></td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const llenarCampos = (item) => {
        setIddirector(item.iddirector)
        setNombres(item.nombres)
        setPeliculas(item.peliculas)
    }

    const dibujarInsertModal = () => {
        return (
            <div className="modal fade" id="insertModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5" id="exampleModalLabel">Nuevo director</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={(event) => insertDirector(event)}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Nombres"
                                        value={nombres} onChange={(event) => setNombres(event.target.value)}
                                        required minLength="4" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Películas"
                                        value={peliculas} onChange={(event) => setPeliculas(event.target.value)}
                                        required minLength="1" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const dibujarUpdateModal = () => {
        return (
            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5" id="exampleModalLabel">Editar director</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={(event) => updateDirector(event)}>
                            <div className="modal-body">
                            <div className="mb-3">
                                    <input type="text" className="form-control" 
                                        value={iddirector} readOnly />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Nombres"
                                        value={nombres} onChange={(event) => setNombres(event.target.value)}
                                        required minLength="4" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Películas"
                                        value={peliculas} onChange={(event) => setPeliculas(event.target.value)}
                                        required minLength="1" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const insertDirector = (event) => {
        event.preventDefault()
        console.log(nombres + " - - " + peliculas)
        const rutaServicio = ApiWebURL + "directoresinsert.php"

        let formData = new FormData()
        formData.append("nombres", nombres)
        formData.append("peliculas", peliculas)

        fetch(rutaServicio, {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                console.log(data)
                leerServicio()
                setNombres("")
                setPeliculas("")
                document.querySelector("#insertModal .btn-close").click()
            });
    }
    const updateDirector = (event) => {
        event.preventDefault()
        const rutaServicio = ApiWebURL + "directoresupdate.php"

        let formData = new FormData()
        formData.append("iddirector", iddirector)
        formData.append("nombres", nombres)
        formData.append("peliculas", peliculas)

        fetch(rutaServicio, {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                console.log(data)
                leerServicio()
                setNombres("")
                setPeliculas("")
                document.querySelector("#updateModal .btn-close").click()
            });
    }
    return (
        <section id="directores" className="padded">
            <div className="container">
                <h2>Directores</h2>
                <div className="mb-3">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#insertModal">
                        Nuevo Director</button>
                </div>
                {dibujarTabla()}
                {dibujarInsertModal()}
                {dibujarUpdateModal()}
            </div>
        </section>
    )
}

export default Directores