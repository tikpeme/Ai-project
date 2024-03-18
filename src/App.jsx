import ButtonGradient from "../public/assets/svg/ButtonGradient.jsx";
import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Pricing from "./components/Pricing.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Services from "./components/Services.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5rem] overflow-hidden">
        <Header></Header>
        <Hero></Hero>
        <Benefits></Benefits>
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
