import ButtonGradient from "../public/assets/svg/ButtonGradient.jsx";
import Benefits from "./components/Benefits.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5rem] overflow-hidden">
        <Header></Header>
        <Hero></Hero>
        <Benefits></Benefits>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
