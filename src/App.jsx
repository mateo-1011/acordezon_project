import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import "./App.css"
import { About } from "./pages/About"
import { Contacto } from "./pages/Contacto"
import { Equipo } from "./pages/Equipo"
import { Personajes } from "./pages/Personajes"

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <About />
      <Contacto />
      <Equipo />
      <Personajes />
     </>
  )
}
