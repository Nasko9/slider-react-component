// Components
import SliderSection from "./components/SliderSection";

// Data
import { sliderSectionData } from "./data/sliderSectionData";

function App() {
  return (
    <div className="container flex flex-col gap-20 py-20">
      {sliderSectionData.map((data, index) => (
        <SliderSection key={index} {...data} />
      ))}
    </div>
  );
}

export default App;
