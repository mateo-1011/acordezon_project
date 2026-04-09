import "../stylesheets/stylecontacto.css"

export const Contacto = () => {
  return (
    <>
      <section className="contacto-page-section py-5">
        <div className="container py-3">

          <h2 className="fw-bold mb-4" style={{ fontSize: "2rem" }}>Contáctanos</h2>

          <div className="contacto-card mx-auto p-4 p-md-5">
            <h5 className="fw-semibold mb-1">Contáctanos</h5>
            <p className="text-secondary mb-4" style={{ fontSize: "0.9rem" }}>
              Escríbenos tus dudas o sugerencias.
            </p>

            <div className="mb-3">
              <label className="form-label fw-medium">Nombre</label>
              <input
                type="text"
                className="form-control contacto-input"
                placeholder="Ingresa tu nombre completo"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium">Correo electrónico</label>
              <input
                type="email"
                className="form-control contacto-input"
                placeholder="tunombre@ejemplo.com"
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-medium">Mensaje</label>
              <textarea
                className="form-control contacto-input"
                placeholder="Escribe tu mensaje..."
                rows="5"
              ></textarea>
            </div>

            <div className="text-end">
              <button className="btn btn-enviar px-5 py-2">
                Enviar mensaje
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
