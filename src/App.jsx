import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import "./App.css"
import { About } from "./pages/About"

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <About />
    </>
  )
}
