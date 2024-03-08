import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container">
  <Link className="nav-brand" to="/">ID+</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/inversiones">Inversiones</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/proveedores">Proveedores</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/empleados">Empleados</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tienda">Tienda</Link>
        </li>
      </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
  </div>
</nav>
  );
}

export default MainNav;
