interface IHeader {
  headerWidth: string;
  tag: string;
  title: string;
  subTitle: string;
}

export default function Header({ headerWidth, tag, title, subTitle }: IHeader) {
  return (
    <div
      className={`${
        headerWidth === "wider" ? "w-[46.875rem]" : "w-[32.5rem]"
      } mb-8 flex flex-col gap-2 self-center text-center`}
    >
      <p className="text-xs font-bold text-[#6772e5]">{tag}</p>
      <h1 className="px-10 text-4xl font-bold text-[#111]">{title}</h1>
      <p className="text-sm italic text-[#444]">{subTitle}</p>
    </div>
  );
}
