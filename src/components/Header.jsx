import "../stylesheets/styleheader.css"

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="../public/images/logo.svg" alt="EasyBank Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="#">Carrers</a>
              </li>
            </ul>
            <button className="btn-primary-gradient" type="submit">Request Invite</button>
          </div>
        </div>
      </nav>

  </>

  )
}
