import React from 'react'
import "../stylesheets/about.css"

export const About = () => {
  return (
    <>
    <div className="about">

      {/* SOBRE NOSOTROS */}
      <div className="container text-center py-4 py-md-5">
        <h2 className="text-danger fw-bold mb-3">Sobre Nosotros</h2>

        <p className="text-muted mx-auto about-text">
          En Acordezón creemos que la música es más que melodía: es memoria,
          identidad y cultura. El proyecto nace de la pasión de Sara, Ostin y Mateo,
          tres estudiantes que comparten el amor por el arte y la tradición colombiana.
        </p>
      </div>

      {/* IDEA */}
      <div className="container mb-4 mb-md-5">
        <div className="card p-3 p-md-4 shadow-sm idea-card">

          <div className="row">
            
            {/* ICONO */}
            <div className="col-12 col-md-2 text-center mb-3 mb-md-0">
              <div className="icono">💡</div>
            </div>

            {/* TEXTO */}
            <div className="col-12 col-md-10 text-start">
              <h5 className="fw-bold">Cómo nace la idea</h5>

              <p className="text-muted">
                Nuestra idea surge de una pregunta simple: ¿cómo acercar a los jóvenes a las raíces musicales colombianas sin que se pierda en el tiempo?
              </p>

              <p className="text-muted">
                De ahí nace "El eco que conquistó corazones", un cómic digital interactivo inspirado en la vida y legado de Rafael Orozco.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* LOGO */}
      <div className="container text-center py-4 py-md-5">
        <div className="logo-container p-3 p-md-5">
          <img
            src="../public/images/imagevideo"
            alt="logo"
            className="img-fluid"
          />
        </div>

        <button className="btn btn-danger mt-3">
          Conoce el equipo detrás de Acordezón
        </button>
      </div>

    </div>
    </>
  )
}
