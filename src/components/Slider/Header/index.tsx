export default function Header({ headerPosition }: any) {
  return (
    <div
      className={`${
        headerPosition === "col" ? "w-[46.875rem]" : "w-[32.5rem]"
      } mb-8 flex flex-col gap-2 self-center text-center`}
    >
      <p className="text-xs font-bold text-[#6772e5]">Features</p>
      <h1 className="px-10 text-4xl font-bold text-[#111]">
        Take a closer look at our brand new head office
      </h1>
      <p className="text-sm italic text-[#444]">
        Designed to make you sleep better
      </p>
    </div>
  );
}
