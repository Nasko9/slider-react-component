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
import Body from "./Body";
import Header from "./Header";

export default function Slider({ headerPosition }: any) {
  return (
    <>
      {headerPosition === "top" && (
        <div className="flex flex-col">
          <Header headerPosition="col" />
          <Body bodyPosition="" />
        </div>
      )}

      {headerPosition === "bottom" && (
        <div className="flex flex-col-reverse gap-y-10">
          <Header headerPosition="col" />
          <Body bodyPosition="" />
        </div>
      )}

      {headerPosition === "left" && (
        <div className="flex gap-x-20">
          <Header headerPosition="notCol" />
          <Body bodyPosition="left" />
        </div>
      )}

      {headerPosition === "right" && (
        <div className="flex flex-row-reverse gap-x-20">
          <Header headerPosition="notCol" />
          <Body bodyPosition="" />
        </div>
      )}
    </>
  );
}
