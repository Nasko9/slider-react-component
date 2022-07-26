// Component
import { useEffect } from "react";
import Slide, { ISlide } from "./Slide";

// Hook
import useSlider from "./useSlider";

interface ISlider {
  data: Array<ISlide>;
  layout: string;
  autoplay: boolean;
}

export default function Slider({ data, layout, autoplay }: ISlider) {
  const {
    onTouchStart,
    containerRef,
    isSwiping,
    offsetX,
    currentIndex,
    indicatorOnCLick,
  } = useSlider(data, autoplay);

  return (
    <div className="flex w-full justify-center">
      <div
        className="swiper-container w-[46.875rem] max-w-full touch-pan-y overflow-hidden"
        onMouseDown={onTouchStart}
      >
        <ul
          ref={containerRef}
          className={`swiper-list m-0 flex max-w-full list-none p-0 transition-transform duration-300 ease-out ${
            isSwiping ? "transition-none" : ""
          }`}
          style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
        >
          {data.map((_data: any, index) => (
            <Slide key={index} {..._data} />
          ))}
        </ul>
        <ul className="swiper-indicator mt-5 flex list-none justify-center gap-14 p-0">
          {data.map((_data, index) => (
            <li
              key={index}
              className={`${
                "swiper-indicator-item" + index
              } mx-1 h-2 w-2 rounded-full bg-[#6772e5] bg-opacity-50 ${
                index === currentIndex ? "active bg-opacity-100" : ""
              }`}
              onClick={() => indicatorOnCLick(index)}
            />
          ))}
        </ul>
      </div>
      <div
        className={`absolute mt-20 w-[14.375rem] bg-[#6772e5] ${
          layout === "left" ? "ml-[47rem]" : "mr-[47rem]"
        }`}
      >
        <p className="text-center font-bold text-white">proba</p>
      </div>
      <div
        className={`absolute mt-56 rotate-[-90deg] ${
          layout === "left" ? "ml-[49rem]" : "mr-[49rem]"
        }`}
      >
        01/04
      </div>
    </div>
  );
}
