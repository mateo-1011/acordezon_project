import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import "./App.css"
import { About } from "./pages/About"
import { Proyect } from "./pages/Proyect"
import { Equipo } from "./pages/Equipo"
import { Personajes } from "./pages/Personajes"
import { Contacto } from "./pages/Contacto"

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <About />
      <Proyect />
      <Equipo />
      <Personajes />
      <Contacto />
    </>

  )
}
