import "../stylesheets/styleequipo.css"

export const Equipo = () => {
  return (
    <>
      <section className="equipo-section py-5">
        <div className="container py-3">

          <h2 className="fw-bold text-center mb-5" style={{ color: "#c0392b" }}>
            Conoce Nuestro Equipo
          </h2>

          {/* Miembro 1 — Sara */}
          <div className="equipo-card d-flex align-items-center gap-4 mb-4 p-3">
            <img
              src="https://placehold.co/80x80/cccccc/333333?text=Sara"
              alt="Sara"
              className="equipo-avatar"
            />
            <div>
              <h6 className="fw-bold mb-0">Sara</h6>
              <p className="text-muted mb-1" style={{ fontSize: "0.85rem" }}>
                Diseñadora e Ilustradora 🎨
              </p>
              <p className="text-secondary mb-0" style={{ fontSize: "0.82rem", lineHeight: "1.5" }}>
                Apasionada por el color visual y la paleta digital.
                Detrás de ilustraciones y experiencias gráficas del cómic.
              </p>
            </div>
          </div>

          {/* Miembro 2 — Ostin */}
          <div className="equipo-card d-flex align-items-center gap-4 mb-4 p-3">
            <img
              src="https://placehold.co/80x80/cccccc/333333?text=Isabel"
              alt="Isabel"
              className="equipo-avatar"
            />
            <div>
              <h6 className="fw-bold mb-0">Ostin</h6>
              <p className="text-muted mb-1" style={{ fontSize: "0.85rem" }}>
                Narrativa y Creatividad 🖊️
              </p>
              <p className="text-secondary mb-0" style={{ fontSize: "0.82rem", lineHeight: "1.5" }}>
                Su talento se enfoca en las narrativas del cómic.
                Desarrolló diálogos y redacción para los proyectos del equipo.
              </p>
            </div>
          </div>

          {/* Miembro 3 — Mateo */}
          <div className="equipo-card d-flex align-items-center gap-4 mb-4 p-3">
            <img
              src="https://placehold.co/80x80/cccccc/333333?text=Mateo"
              alt="Mateo"
              className="equipo-avatar"
            />
            <div>
              <h6 className="fw-bold mb-0">Mateo</h6>
              <p className="text-muted mb-1" style={{ fontSize: "0.85rem" }}>
                Desarrollador y Estratega 💻
              </p>
              <p className="text-secondary mb-0" style={{ fontSize: "0.82rem", lineHeight: "1.5" }}>
                Líder técnico de AcordeZón Transmedia.
              </p>
            </div>
          </div>

          {/* Imagen decorativa abajo */}
          <div className="mt-5">
            <img
              src="https://placehold.co/900x320/1a1a2e/ffffff?text=Imagen+del+equipo"
              alt="Equipo trabajando"
              className="img-fluid w-100 rounded"
            />
          </div>

        </div>
      </section>
    </>
  )
}
