import { useEffect, useRef } from "react";

export default function useSlider() {
  const ref = useRef<any>();
  const innerRef = useRef<any>();

  useEffect(() => {
    let startX: any;
    let scrollLeft: any;
    let isDown: boolean;

    ref?.current.addEventListener("mousedown", (e: MouseEvent) =>
      mouseIsDown(e)
    );
    ref?.current.addEventListener("mouseup", (e: MouseEvent) => mouseUp(e));
    ref?.current.addEventListener("mouseleave", (e: MouseEvent) =>
      mouseLeave(e)
    );
    ref?.current.addEventListener("mousemove", (e: MouseEvent) => mouseMove(e));

    function mouseIsDown(e: MouseEvent) {
      e.preventDefault();
      isDown = true;
      startX = e.pageX - ref?.current.offsetWidth;
      scrollLeft = ref?.current.scrollLeft;
      ref.current.style.scrollSnapType = "none";
    }

    function mouseUp(e: MouseEvent) {
      isDown = false;
      ref.current.style.scrollSnapType = "x mandatory";
    }

    function mouseLeave(e: MouseEvent) {
      isDown = false;
    }

    function mouseMove(e: MouseEvent) {
      if (isDown) {
        e.preventDefault();

        const x = e.pageX - ref?.current.offsetWidth;
        const walkX = (x - startX) * 1.5;
        ref.current.scrollLeft = scrollLeft - walkX;
      }
    }
  }, []);

  return { ref, innerRef };
}
