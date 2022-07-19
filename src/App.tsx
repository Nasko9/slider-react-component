// Component
import Slider from "./components/Slider";

// Data
import { data } from "./data";

function App() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-20 py-28">
      <>
        {data.map((data) => (
          <Slider
            key={data.id}
            headerPosition={data.headerPosition}
            tag={data.tag}
            title={data.title}
            subTitle={data.subTitle}
            slider={data.sliderData}
          />
        ))}
      </>
    </div>
  );
}

export default App;
