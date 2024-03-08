import Envios from "../home/Envios"
import Historia from "../home/Historia"
import MainBanner from "../home/MainBanner"
import Nosotros from "../home/Nosotros"
import Noticias from "../home/Noticias"

function Inicio() {
  return (
    <>
        <MainBanner />
        <Nosotros />
        <Noticias />
        <Historia />   
        <Envios />
    </>
      )
}

export default Inicio
