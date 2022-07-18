// const firstSliderData = [
//   {
//     image:
//       "https://framed.shindiristudio.com/wp-content/uploads/2016/04/Accordion-4.jpg",
//     description: "Open spaces and long corridors all throught",
//   },
//   {
//     image:
//       "https://framed.shindiristudio.com/wp-content/uploads/2016/04/Accordion-3.jpg",
//     description: "Spacious and clean working enviroment",
//   },
//   {
//     image:
//       "https://framed.shindiristudio.com/wp-content/uploads/2016/04/Accordion-2.jpg",
//     description: "Relaxin chill zone",
//   },
//   {
//     image:
//       "https://framed.shindiristudio.com/wp-content/uploads/2016/04/Accordion-5.jpg",
//     description: "Fully stocked company library",
//   },
// ];

// Components
import Header from "./Header";
import Slide from "./Slide";

export default function Slider({ headerPosition, tag, title, subTitle }: any) {
  return (
    <>
      {headerPosition === "top" && (
        <div className="flex flex-col">
          <Header
            headerPosition="col"
            tag={tag}
            title={title}
            subTitle={subTitle}
          />
          <Slide bodyPosition="" />
        </div>
      )}

      {headerPosition === "bottom" && (
        <div className="flex flex-col-reverse gap-y-10">
          <Header
            headerPosition="col"
            tag={tag}
            title={title}
            subTitle={subTitle}
          />
          <Slide bodyPosition="" />
        </div>
      )}

      {headerPosition === "left" && (
        <div className="flex">
          <div className="h-1 w-[220px] self-center bg-[#6772e5]"></div>
          <Header
            headerPosition=""
            tag={tag}
            title={title}
            subTitle={subTitle}
          />
          <Slide bodyPosition="left" />
        </div>
      )}

      {headerPosition === "right" && (
        <div className="flex">
          <Slide bodyPosition="" />
          <Header
            headerPosition=""
            tag={tag}
            title={title}
            subTitle={subTitle}
          />
          <div className="h-1 w-[220px] self-center bg-[#6772e5]"></div>
        </div>
      )}
    </>
  );
}
