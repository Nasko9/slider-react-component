// Components
import SliderSection from "./components/SliderSection";

// Data
import { sliderData } from "./data/sldierData";

function App() {
  return (
    <div className="container py-20">
      <SliderSection data={sliderData} layout={"right"} />
    </div>
  );
}

export default App;
