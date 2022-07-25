import React, { RefObject, useRef, useState } from "react";

// Funkija koja uzima current ref i dodeljuje se tip
export function getRefValue<T>(ref: RefObject<T>) {
  return ref.current as T;
}

// Funkija koja zima vrednost tog current refa i skladišti u state
export function useStateRef<S>(
  defaultValue: S
): [S, (value: S) => void, RefObject<S>] {
  const ref = useRef(defaultValue);
  const [state, _setState] = useState(defaultValue);
  const setState = (value: S) => {
    _setState(value);
    ref.current = value;
  };

  return [state, setState, ref];
}

export function getTouchEventData(
  e:
    | TouchEvent
    | MouseEvent
    | React.TouchEvent<HTMLDivElement>
    | React.MouseEvent<HTMLDivElement>
) {
  return "changedTouches" in e ? e.changedTouches[0] : e;
}

const MAX_SWIPE_REUIRED = 40;

export default function useSlider() {
  const containerRef = useRef<HTMLUListElement>(null);
  const containerWidthRef = useRef(0);
  const minOffsetXRef = useRef(0);
  const currentOffsetXRef = useRef(0);
  const startxRef = useRef(0);

  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startxRef) - currentX;
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) {
      newOffsetX = 0;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(newOffsetX);
  };

  const onTouchEnd = () => {
    const containerWidth = getRefValue(containerWidthRef);
    const currentOffsetX = getRefValue(currentOffsetXRef);
    let newOfssetX = getRefValue(offsetXRef);
    const diff = currentOffsetX - newOfssetX;

    if (Math.abs(diff) > MAX_SWIPE_REUIRED) {
      if (diff > 0) {
        newOfssetX = Math.floor(newOfssetX / containerWidth) * containerWidth;
      } else {
        newOfssetX = Math.ceil(newOfssetX / containerWidth) * containerWidth;
      }
    } else {
      newOfssetX = Math.round(newOfssetX / containerWidth) * containerWidth;
    }

    setIsSwiping(false);
    setOffsetX(newOfssetX);
    setCurrentIndex(Math.abs(newOfssetX / containerWidth));

    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("mousemove", onTouchMove);
    window.removeEventListener("mouseup", onTouchEnd);
  };

  const onTouchStart = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    setIsSwiping(true);
    currentOffsetXRef.current = getRefValue(offsetXRef);
    startxRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    containerWidthRef.current = containerWidth;
    minOffsetXRef.current = containerEl.offsetWidth - containerEl.scrollWidth;

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("mousemove", onTouchMove);
    window.addEventListener("mouseup", onTouchEnd);
  };

  const indicatorOnCLick = (index: number) => {
    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    setCurrentIndex(index);
    setOffsetX(-(containerWidth * index));
  };

  return {
    onTouchStart,
    containerRef,
    isSwiping,
    offsetX,
    currentIndex,
    indicatorOnCLick,
  };
}
