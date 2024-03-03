import ButtonGradient from "../src/assets/svg/ButtonGradient";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5rem] overflow-hidden">
        <Header></Header>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
