// Components
import Header from "./Header";
import Slide from "./Slide";

export default function Slider({
  headerPosition,
  tag,
  title,
  subTitle,
  slider,
}: any) {
  return (
    <>
      {headerPosition === "top" && (
        <div className="flex flex-col">
          <Header
            headerPosition="col"
            tag={tag}
            title={title}
            subTitle={subTitle}
          />

          {slider.map((data: any) => (
            <div className="self-center" key={slider.key}>
              <Slide
                bodyPosition=""
                img={data.image}
                description={data.description}
              />
            </div>
          ))}
        </div>
      )}

      {/* {headerPosition === "bottom" && (
        <div className="flex flex-col-reverse gap-y-10">
          <Header
            headerPosition="col"
            tag={tag}
            title={title}
            subTitle={subTitle}
          />
          <Slide bodyPosition="" />
        </div>
      )}

      {headerPosition === "left" && (
        <div className="flex">
          <div className="h-1 w-[220px] self-center bg-[#6772e5]"></div>
          <Header
            headerPosition=""
            tag={tag}
            title={title}
            subTitle={subTitle}
          />
          <Slide bodyPosition="left" />
        </div>
      )}

      {headerPosition === "right" && (
        <div className="flex">
          <Slide bodyPosition="" />
          <Header
            headerPosition=""
            tag={tag}
            title={title}
            subTitle={subTitle}
          />
          <div className="h-1 w-[220px] self-center bg-[#6772e5]"></div>
        </div>
      )} */}
    </>
  );
}
