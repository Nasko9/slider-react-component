// Components
import Header from "./Header";
import Slider from "./Slider";

// Type
import { ISlide } from "./Slider/Slide";

interface ISliderSection {
  tag: string;
  title: string;
  description: string;
  sliderData: Array<ISlide>;
  layout: string;
  autoplay: boolean;
}

export default function SliderSection({
  tag,
  title,
  description,
  sliderData,
  layout,
  autoplay,
}: ISliderSection) {
  return (
    <>
      {layout === "top" && (
        <div className="flex flex-col items-center gap-8">
          <Header
            tag={tag}
            title={title}
            description={description}
            layout={layout}
          />
          <Slider data={sliderData} layout={layout} autoplay={autoplay} />
        </div>
      )}

      {layout === "bottom" && (
        <div className="flex flex-col items-center gap-8">
          <Slider data={sliderData} layout={"bottom"} autoplay={autoplay} />
          <Header
            tag={tag}
            title={title}
            description={description}
            layout={layout}
          />
        </div>
      )}

      {layout === "left" && (
        <div className="flex items-center gap-8">
          <Header
            tag={tag}
            title={title}
            description={description}
            layout={layout}
          />
          <Slider data={sliderData} layout={layout} autoplay={autoplay} />
        </div>
      )}

      {layout === "right" && (
        <div className="flex items-center gap-8">
          <Slider data={sliderData} layout={layout} autoplay={autoplay} />
          <Header
            tag={tag}
            title={title}
            description={description}
            layout={layout}
          />
        </div>
      )}
    </>
  );
}
