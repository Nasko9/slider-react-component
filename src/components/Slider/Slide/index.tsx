// Type
interface ISlide {
  bodyPosition: string;
  img: string;
  description: string;
}

export default function Slide({ bodyPosition, img, description }: ISlide) {
  return (
    <div className="w-[900px] shrink-0 snap-center self-center">
      <img
        src={img}
        alt="slide"
        className="h-[26.25rem] w-[46.875rem] self-center"
      />

      <div
        className={`${
          bodyPosition === "left" ? "ml-[40rem]" : "ml-[-8rem]"
        } absolute z-10 mt-[-24rem] w-[14.375rem] bg-[#6772e5]`}
      >
        <h4 className="p-6 text-lg font-bold text-white">{description}</h4>
      </div>
      <div
        className={`${
          bodyPosition === "left" ? "ml-[46rem]" : "ml-[-3rem]"
        } absolute mt-[-13rem] rotate-[-90deg] text-xl italic tracking-widest text-[#444]`}
      >
        01/04
      </div>
    </div>
  );
}
