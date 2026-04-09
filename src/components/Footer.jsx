import "../stylesheets/stylefooter.css"

export const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <div className="container text-center">

        {/* Logo */}
        <div className="mb-4">
          <img src="/images/logo.png" alt="AcordeZón" height="60" />
        </div>

        {/* Nav links */}
        <nav className="mb-4">
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li><a href="#" className="footer-link">Inicio</a></li>
            <li><a href="#" className="footer-link">Proyectos</a></li>
            <li><a href="#" className="footer-link">Misión</a></li>
            <li><a href="#" className="footer-link">Visión</a></li>
            <li><a href="#" className="footer-link">Contacto</a></li>
          </ul>
        </nav>

        {/* Redes sociales */}
        <div className="d-flex justify-content-center gap-3 mb-5">
          <a href="#" className="social-icon" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="social-icon" aria-label="Twitter / X">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="social-icon" aria-label="YouTube">
            <i className="bi bi-youtube"></i>
          </a>
        </div>

        {/* Divisor */}
        <hr className="footer-divider" />

        {/* Links legales */}
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-3">
          <a href="#" className="footer-legal-link">Política de privacidad</a>
          <a href="#" className="footer-legal-link">Términos de servicio</a>
          <a href="#" className="footer-legal-link">Configuración de cookies</a>
        </div>

        <p className="text-secondary mt-3 mb-0" style={{ fontSize: "0.82rem" }}>
          © 2024 Comic Transmedia. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  )
}
