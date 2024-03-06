import "./App.css";
import MainFooter from "./common/MainFooter";
import MainHeader from "./common/MainHeader";
import Historia from "./home/Historia";
import MainBanner from "./home/MainBanner";
import Nosotros from "./home/Nosotros";
import Noticias from "./home/Noticias";

function App() {
  return (
    <>
      <MainHeader />
      <MainBanner />
      <Nosotros />
      <Noticias />
      <Historia />
      <MainFooter />
    </>
  );
}

export default App;
