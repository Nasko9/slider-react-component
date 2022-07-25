// Component
import Slide, { ISlide } from "./Slide";

// Hook
import useSlider from "./useSlider";

interface ISlider {
  data: Array<ISlide>;
}

export default function Slider({ data }: ISlider) {
  const {
    onTouchStart,
    containerRef,
    isSwiping,
    offsetX,
    currentIndex,
    indicatorOnCLick,
  } = useSlider();

  return (
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
            className={`swiper-indicator-item mx-1 h-2 w-2 rounded-full bg-[#6772e5] bg-opacity-50 ${
              index === currentIndex ? "active bg-opacity-100" : ""
            }`}
            onClick={() => indicatorOnCLick(index)}
          />
        ))}
      </ul>
    </div>
  );
}
