import "../stylesheets/stylepersonajes.css"

export const Personajes = () => {
  return (
    <>
      <section className="personajes-section py-5">
        <div className="container py-3">

          <h2 className="fw-bold text-center text-uppercase mb-5">
            Nuestros Personajes
          </h2>

          <div className="row g-4 justify-content-center">

            {/* Personaje 1 */}
            <div className="col-md-5 col-sm-6">
              <div className="personaje-card text-center p-4">
                <img
                  src="https://placehold.co/120x120/e8ddd0/7B4A2D?text=R.A"
                  alt="Rafael Adulto"
                  className="personaje-img mb-3"
                />
                <p className="fw-medium mb-3" style={{ fontSize: "0.9rem" }}>Rafael Adulto</p>
                <a href="#" className="btn btn-personaje px-4 py-1">Ver más</a>
              </div>
            </div>

            {/* Personaje 2 */}
            <div className="col-md-5 col-sm-6">
              <div className="personaje-card text-center p-4">
                <img
                  src="https://placehold.co/120x120/e8ddd0/7B4A2D?text=R.N"
                  alt="Rafael Niño"
                  className="personaje-img mb-3"
                />
                <p className="fw-medium mb-3" style={{ fontSize: "0.9rem" }}>Rafael Niño</p>
                <a href="#" className="btn btn-personaje px-4 py-1">Ver más</a>
              </div>
            </div>

            {/* Personaje 3 */}
            <div className="col-md-5 col-sm-6">
              <div className="personaje-card text-center p-4">
                <img
                  src="https://placehold.co/120x120/e8ddd0/7B4A2D?text=I.R"
                  alt="Israel Romero"
                  className="personaje-img mb-3"
                />
                <p className="fw-medium mb-3" style={{ fontSize: "0.9rem" }}>Israel Romero</p>
                <a href="#" className="btn btn-personaje px-4 py-1">Ver más</a>
              </div>
            </div>

            {/* Personaje 4 */}
            <div className="col-md-5 col-sm-6">
              <div className="personaje-card text-center p-4">
                <img
                  src="https://placehold.co/120x120/e8ddd0/7B4A2D?text=Pub"
                  alt="Público"
                  className="personaje-img mb-3"
                />
                <p className="fw-medium mb-3" style={{ fontSize: "0.9rem" }}>Público</p>
                <a href="#" className="btn btn-personaje px-4 py-1">Ver más</a>
              </div>
            </div>

            {/* Personaje 5 — centrado solo */}
            <div className="col-md-5 col-sm-6">
              <div className="personaje-card text-center p-4">
                <img
                  src="https://placehold.co/120x120/e8ddd0/7B4A2D?text=Vec"
                  alt="Vecinos"
                  className="personaje-img mb-3"
                />
                <p className="fw-medium mb-3" style={{ fontSize: "0.9rem" }}>Vecinos</p>
                <a href="#" className="btn btn-personaje px-4 py-1">Ver más</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
