import "../stylesheets/styleheader.css"

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" alt="AcordeZón Logo" height="45" />
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
              <li className="nav-item">
                <a className="nav-link fw-medium text-dark" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium text-dark" href="#">Mision y vision</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium text-dark" href="#">Contacto</a>
              </li>
            </ul>
            <button className="btn btn-dark px-4 py-2 rounded-pill fw-semibold" type="button">
              explorar
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
