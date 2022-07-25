// Components
import Header from "./Header";
import Slider from "./Slider";

export default function SliderSection({ data, layout }: any) {
  return (
    <>
      {layout === "top" && (
        <div className="flex flex-col items-center gap-8">
          <Header />
          <Slider data={data} />
        </div>
      )}

      {layout === "bottom" && (
        <div className="flex flex-col items-center gap-8">
          <Slider data={data} />
          <Header />
        </div>
      )}

      {layout === "left" && (
        <div className="flex items-center gap-8">
          <Header />
          <Slider data={data} />
        </div>
      )}

      {layout === "right" && (
        <div className="flex items-center gap-8">
          <Slider data={data} />
          <Header />
        </div>
      )}
    </>
  );
}
