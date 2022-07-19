// Components
import Header from "./Header";
import Slide from "./Slide";

// Hook
import useSlider from "./useSlider";

// Type
interface ISlider {
  headerPosition: string;
  tag: string;
  title: string;
  subTitle: string;
  slider: Object[];
}

export default function Slider({
  headerPosition,
  tag,
  title,
  subTitle,
  slider,
}: ISlider) {
  const { ref, innerRef } = useSlider();

  return (
    <>
      {headerPosition === "top" && (
        <div className="flex flex-col">
          <Header
            headerWidth="wider"
            tag={tag}
            title={title}
            subTitle={subTitle}
          />

          <div
            className="hide-scrollbar relative w-[900px] max-w-full touch-pan-y overflow-auto"
            ref={ref}
          >
            <div
              className="swiper-list pointer-events-none relative top-0 left-0 flex min-w-full flex-row"
              ref={innerRef}
            >
              {slider.map((data: any) => (
                <Slide
                  key={data.id}
                  bodyPosition=""
                  img={data.image}
                  description={data.description}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
