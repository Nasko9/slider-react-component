interface IHeader {
  tag: string;
  title: string;
  description: string;
  layout: string;
}

export default function Header({ tag, title, description, layout }: IHeader) {
  return (
    <div
      className={`flex w-[46.875rem] flex-col gap-2 ${
        layout === "top" && "bottom" ? "text-center" : ""
      }`}
    >
      <p className="text-xs font-bold text-[#6772e5]">{tag}</p>
      <h1
        className={`text-4xl font-bold text-[#111] ${
          layout === "top" && "bottom" ? "px-10" : ""
        }`}
      >
        {title}
      </h1>
      <p className="text-sm italic text-[#444]">{description}</p>
    </div>
  );
}
