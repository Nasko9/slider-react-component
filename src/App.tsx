// Component
import Slider from "./components/Slider";

const dummyData = [
  {
    headerPosition: "top",
    tag: "Features",
    title: "Take a closer look at our brand new head office",
    subTitle: "Designed to make you sleep better",
  },
  {
    headerPosition: "bottom",
    tag: "Features",
    title: "Take a closer look at our brand new head office",
    subTitle: "Designed to make you sleep better",
  },
  {
    headerPosition: "left",
    tag: "Features",
    title: "Take a closer look at our brand new head office",
    subTitle: "Designed to make you sleep better",
  },
  {
    headerPosition: "right",
    tag: "Features",
    title: "Take a closer look at our brand new head office",
    subTitle: "Designed to make you sleep better",
  },
];

function App() {
  return (
    <div className="container mx-auto flex flex-col gap-20 py-28">
      <>
        {dummyData.map((data) => (
          <Slider
            headerPosition={data.headerPosition}
            tag={data.tag}
            title={data.title}
            subTitle={data.subTitle}
          />
        ))}
      </>
    </div>
  );
}

export default App;
