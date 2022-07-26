export interface ISlide {
  imgUrl: string;
  imgAlt: string;
  description: string;
}

export default function Slide({ imgUrl, imgAlt }: ISlide) {
  return (
    <li className="swiper-item w-full shrink-0">
      <img
        src={imgUrl}
        alt={imgAlt}
        className="swiper-img h-[26.25rem] w-[46.875rem] select-none"
        draggable={false}
      />
    </li>
  );
}
