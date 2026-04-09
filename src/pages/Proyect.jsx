
import "../stylesheets/styleproject.css"

export const Proyect = () => {
  return (
    <>
    <div className="proyecto">

      {/* TITULO */}
      <div className="container text-center py-4 py-md-5">
        <h2 className="text-danger fw-bold">Proyecto</h2>
        <p className="text-muted">Comic interactivo</p>

        <p className="mx-auto proyecto-text">
          "El eco que conquistó corazones"
        </p>

        <p className="text-muted mx-auto proyecto-text">
          El proyecto inicial toma forma en el cómic digital interactivo
          inspirado en la vida y legado de Rafael Orozco. Este formato permite
          que los lectores no sean simples espectadores, sino participantes
          activos en la historia.
        </p>
      </div>

      {/* IMAGEN */}
      <div className="container-fluid px-0">
        <img
          src="../public/images/image_23.png"
          alt="escenario"
          className="img-fluid w-100"
        />
      </div>

      {/* SUBTITULO */}
      <div className="container text-center py-4">
        <h5 className="fw-bold">-CÓMIC INTERACTIVO-</h5>
        <p className="fw-bold">"El eco que conquistó corazones"</p>
      </div>

      {/* PROCESO CREATIVO */}
      <div className="container mb-4">
        <div className="card p-3 p-md-4 shadow-sm">

          <div className="row align-items-center">
            
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <img
                src="../public/images/process.png"
                alt="proceso"
                className="img-fluid rounded"
              />
            </div>

            <div className="col-12 col-md-8">
              <h6 className="fw-bold">Proceso creativo</h6>
              <p className="text-muted">
                Ha sido un camino creativo y colaborativo, en el que Mateo,
                Ostin y Sara han unido sus talentos para dar vida a una obra
                que mezcla diseño gráfico, narrativa visual y recursos
                interactivos.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* PERSONAJES */}
      <div className="container mb-5">
        <div className="card p-3 p-md-4 shadow-sm">

          <div className="row align-items-center">

            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <img
                src="../public/images/personajes.png"
                alt="personajes"
                className="img-fluid rounded"
              />
            </div>

            <div className="col-12 col-md-8 text-center">
              <h6 className="fw-bold">PERSONAJES</h6>

              <button className="btn btn-danger mt-2">
                Ver personajes
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* TEXTO FINAL */}
      <div className="container text-center py-4">
        <p className="text-muted mx-auto proyecto-text">
          Nuestro propósito es preservar y dar a conocer el vallenato como
          patrimonio cultural, utilizando la figura de Rafael Orozco como
          protagonista e inspiración.
        </p>
      </div>

      {/* IMAGEN FINAL */}
      <div className="container-fluid px-0">
        <img
          src="../public/images/escenario.png"
          alt="escenario"
          className="img-fluid w-100"
        />
      </div>

    </div>
    </>
  )
}
