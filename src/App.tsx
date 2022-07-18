// Component
import Slider from "./components/Slider";

function App() {
  return (
    <div className="container mx-auto flex flex-col gap-20 py-28">
      <Slider headerPosition={"top"} />
      <Slider headerPosition={"bottom"} />
      <Slider headerPosition={"left"} />
      <Slider headerPosition={"right"} />
    </div>
  );
}

export default App;
