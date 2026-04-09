import "../stylesheets/stylehome.css"

export const Home = () => {
  return (
    <>
      {/* SECCIÓN 1 — Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-80">
            <div className="col-lg-5 col-md-6 py-5">
              <h1 className="hero-title display-5 fw-bold">
                El eco que conquistó corazones
              </h1>
              <p className="text-secondary mt-3 mb-4" style={{ fontSize: "0.92rem", lineHeight: "1.7" }}>
                "El eco que conquistó corazones" es un viaje interactivo por la vida y el legado de Rafael Orozco, la voz inolvidable del vallenato.
                Entre acordes, recuerdos y emociones, descubrirás cómo un joven soñador de Becerril transformó la música en un patrimonio cultural que sigue vivo en cada canción.
                Prepárate para explorar su historia, sentir su pasión y vivir el vallenato como nunca antes.
              </p>
              <a href="#" className="btn btn-hero px-4 py-2">Ver comic</a>
            </div>
            <div className="col-lg-7 col-md-6 p-0 hero-img-col">
              <img
                src="https://placehold.co/720x480/1a1a2e/ffffff?text=Hero+Image"
                alt="Hero"
                className="img-fluid hero-img w-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — Misión y Visión */}
      <section className="mision-section py-5">
        <div className="container text-center py-4">
          <h2 className="fw-bold text-white display-6 mb-2 text-uppercase letter-spacing-wide">ACORDEZÓN</h2>
          <p className="text-white-50 mb-4 fw-medium">Misión y Visión</p>
          <p className="text-white mx-auto mb-4" style={{ maxWidth: "600px", lineHeight: "1.8" }}>
            Nuestra misión, es buscar crear experiencias únicas que inspiren,
            entretengan y fortalezcan el vínculo entre las personas y la cultura
            narrativa, impulsando la creatividad de Mateo, Sara e Isabel como
            un equipo innovador.
          </p>
          <p className="text-white mx-auto mb-5" style={{ maxWidth: "600px", lineHeight: "1.8" }}>
            Nuestra visión es lograr no solo impactar audiencias globales,
            sino que también reaviva el vallenato como patrimonio cultural
            de Colombia, preservando su esencia y transmitiéndola a
            nuevas generaciones.
          </p>
          <a href="#" className="btn btn-hero px-4 py-2">Sobre Nosotros</a>
        </div>
      </section>

      {/* SECCIÓN 3 — Preguntas frecuentes */}
      <section className="faq-section py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6">Preguntas</h2>
            <p className="text-secondary">
              Respuestas a las consultas más frecuentes sobre<br />nuestra experiencia transmedia
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <h6 className="fw-bold mb-2">¿Qué es un cómic transmedia?</h6>
              <p className="text-secondary" style={{ fontSize: "0.9rem", lineHeight: "1.7" }}>
                Un cómic transmedia es una narrativa interactiva que se extiende a través de múltiples plataformas y medios, permitiendo una experiencia única e inmersiva.
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="fw-bold mb-2">¿Puedo acceder desde cualquier lugar?</h6>
              <p className="text-secondary" style={{ fontSize: "0.9rem", lineHeight: "1.7" }}>
                Los lectores pueden tomar decisiones que modifican la historia, explorar contenido adicional y sumergirse completamente en el mundo narrativo.
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="fw-bold mb-2">¿Qué dispositivos son compatibles?</h6>
              <p className="text-secondary" style={{ fontSize: "0.9rem", lineHeight: "1.7" }}>
                Nuestra plataforma es compatible con smartphones, tablets, computadoras y otros dispositivos modernos.
              </p>
            </div>
            <div className="col-md-4 offset-md-4">
              <h6 className="fw-bold mb-2">¿Cómo funciona la interactividad?</h6>
              <p className="text-secondary" style={{ fontSize: "0.9rem", lineHeight: "1.7" }}>
                Sí, nuestros cómics están disponibles en línea y se pueden disfrutar desde cualquier ubicación con conexión a internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — Contacto */}
      <section className="contacto-section py-5">
        <div className="container py-4 text-center">

          {/* CTA superior */}
          <h2 className="fw-bold mb-2" style={{ color: "#8B1A1A", fontSize: "2rem" }}>¿Tienes más preguntas?</h2>
          <p className="text-secondary mb-4">Estamos aquí para ayudarte en tu viaje</p>
          <a href="#" className="btn btn-hero px-4 py-2">Contactar</a>

          {/* Info de contacto */}
          <h4 className="fw-bold mt-5 mb-1" style={{ color: "#c0392b" }}>Contáctanos</h4>
          <p className="text-secondary mb-5" style={{ fontSize: "0.9rem" }}>
            Estamos listos para responder tus preguntas e inquietudes
          </p>

          <div className="row justify-content-center g-4">
            <div className="col-md-4 text-center">
              <div className="mb-2" style={{ fontSize: "1.8rem" }}>✉️</div>
              <p className="fw-semibold mb-0">Correo</p>
              <p className="text-secondary mb-1" style={{ fontSize: "0.85rem" }}>Contáctanos para más información</p>
              <a href="mailto:contacto@comictransmedia.com" className="text-secondary" style={{ fontSize: "0.85rem" }}>
                contacto@comictransmedia.com
              </a>
            </div>
            <div className="col-md-4 text-center">
              <div className="mb-2" style={{ fontSize: "1.8rem" }}>📞</div>
              <p className="fw-semibold mb-0">Teléfono</p>
              <p className="text-secondary mb-1" style={{ fontSize: "0.85rem" }}>Llámenos para soporte inmediato</p>
              <a href="tel:+543114567890" className="text-secondary" style={{ fontSize: "0.85rem" }}>
                +54 (311) 4567 8901
              </a>
            </div>
          </div>

          {/* Mapa placeholder centrado */}
          <div className="mt-5">
            <img
              src="https://placehold.co/800x350/d4c5b0/7B4A2D?text=Mapa+Google+Maps"
              alt="Mapa de ubicación"
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "800px", width: "100%" }}
            />
          </div>

        </div>
      </section>
    </>
  )
}
