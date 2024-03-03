import ButtonGradient from "../src/assets/svg/ButtonGradient";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5rem] overflow-hidden">
        <Header></Header>
        <Hero></Hero>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
