import React, { RefObject, useEffect, useRef, useState } from "react";

// Funkija koja uzima current ref i dodeljuje se tip
export function getRefValue<T>(ref: RefObject<T>) {
  return ref.current as T;
}

// Funkija koja uzima vrednost tog current refa i skladišti u state
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

// Helper funkcija zbog tipova
export function getTouchEventData(
  e:
    | TouchEvent
    | MouseEvent
    | React.TouchEvent<HTMLDivElement>
    | React.MouseEvent<HTMLDivElement>
) {
  return "changedTouches" in e ? e.changedTouches[0] : e;
}

const MAX_SWIPE_REUIRED = 40; // mimimum piksela gde ga lomi za prelaz

export default function useSlider(data: any, autoplay: boolean) {
  // Set refs and initial values
  const containerRef = useRef<HTMLUListElement>(null);
  const containerWidthRef = useRef(0); // Širina contenjera
  const minOffsetXRef = useRef(0); //
  const currentOffsetXRef = useRef(0); // Dokle si prešo to prati
  const startxRef = useRef(0); // početna tačka

  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0); //State offset, setuj taj ofset i njegov ref
  const [isSwiping, setIsSwiping] = useState(false); // da li svajpuje ili ne
  const [currentIndex, setCurrentIndex] = useState(0); // setuje trenutni index

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX; //trenutni položaj za client x
    const diff = getRefValue(startxRef) - currentX; // razlika
    let newOffsetX = getRefValue(currentOffsetXRef) - diff; // vraća gde si stavlja novi

    // logika da se ne izleti
    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) {
      newOffsetX = 0;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    //setuje
    setOffsetX(newOffsetX);
  };

  const onTouchEnd = () => {
    const containerWidth = getRefValue(containerWidthRef);
    const currentOffsetX = getRefValue(currentOffsetXRef);
    let newOfssetX = getRefValue(offsetXRef); //
    const diff = currentOffsetX - newOfssetX;

    // logika da ga lomi kad malo pređe
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

    // kada se završi briše se event listener
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

    const containerEl = getRefValue(containerRef); //container element
    const containerWidth = containerEl.offsetWidth;

    containerWidthRef.current = containerWidth;
    minOffsetXRef.current = containerEl.offsetWidth - containerEl.scrollWidth;

    // Evoentovi za dodir i klik
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("mousemove", onTouchMove);
    window.addEventListener("mouseup", onTouchEnd);
  };

  // Pagination clicable dots
  const indicatorOnCLick = (index: number) => {
    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    setCurrentIndex(index);
    setOffsetX(-(containerWidth * index));
  };

  // Auto play
  useEffect(() => {
    if (autoplay === true) {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        if (counter > data.length - 1) {
          counter = 0;
        }
        indicatorOnCLick(counter);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  return {
    onTouchStart,
    containerRef,
    isSwiping,
    offsetX,
    currentIndex,
    indicatorOnCLick,
  };
}
