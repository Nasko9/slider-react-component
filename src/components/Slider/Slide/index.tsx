export default function Slide({ bodyPosition }: any) {
  return (
    <div className="self-center">
      <img
        src="https://framed.shindiristudio.com/wp-content/uploads/2016/04/Accordion-4.jpg"
        alt="slide"
        className="h-[26.25rem] w-[46.875rem] self-center"
      />

      <div
        className={`${
          bodyPosition === "left" ? "ml-[40rem]" : "ml-[-8rem]"
        } absolute z-10 mt-[-24rem] w-[14.375rem] bg-[#6772e5]`}
      >
        <h4 className="p-6 text-lg font-bold text-white">
          Open spaces and long corridors all throughout
        </h4>
      </div>
      <div
        className={`${
          bodyPosition === "left" ? "ml-[46rem]" : "ml-[-3rem]"
        } absolute mt-[-13rem] rotate-[-90deg] text-xl italic tracking-widest text-[#444]`}
      >
        01/04
      </div>
      <div className="mt-5 flex w-[46.875rem] justify-center gap-12 self-center">
        <div className="h-2 w-2 rounded-full bg-[#6772e5]"></div>
        <div className="h-2 w-2 rounded-full bg-[#9299eb]"></div>
        <div className="h-2 w-2 rounded-full bg-[#9299eb]"></div>
        <div className="h-2 w-2 rounded-full bg-[#9299eb]"></div>
      </div>
    </div>
  );
}
