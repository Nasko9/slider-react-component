// Component
import Slider from "./components/Slider";

const sliderData = [
  {
    image:
      "https://framed.shindiristudio.com/wp-content/uploads/2016/04/Accordion-4.jpg",
    description: "Open spaces and long corridors all throught",
    key: 1,
  },
  {
    image:
      "https://framed.shindiristudio.com/wp-content/uploads/2016/04/Accordion-3.jpg",
    description: "Spacious and clean working enviroment",
    key: 2,
  },
  {
    image:
      "https://framed.shindiristudio.com/wp-content/uploads/2016/04/Accordion-2.jpg",
    description: "Relaxin chill zone",
    key: 3,
  },
  {
    image:
      "https://framed.shindiristudio.com/wp-content/uploads/2016/04/Accordion-5.jpg",
    description: "Fully stocked company library",
    key: 4,
  },
];

const dummyData = [
  {
    headerPosition: "top",
    tag: "Features",
    title: "Take a closer look at our brand new head office",
    subTitle: "Designed to make you sleep better",
    sliderData: sliderData,
    key: 1,
  },
  // {
  //   headerPosition: "bottom",
  //   tag: "Features",
  //   title: "Take a closer look at our brand new head office",
  //   subTitle: "Designed to make you sleep better",
  // },
  // {
  //   headerPosition: "left",
  //   tag: "Features",
  //   title: "Take a closer look at our brand new head office",
  //   subTitle: "Designed to make you sleep better",
  // },
  // {
  //   headerPosition: "right",
  //   tag: "Features",
  //   title: "Take a closer look at our brand new head office",
  //   subTitle: "Designed to make you sleep better",
  // },
];

function App() {
  console.log(dummyData);
  return (
    <div className="container mx-auto flex flex-col gap-20 py-28">
      <>
        {dummyData.map((data) => (
          <Slider
            key={data.key}
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
