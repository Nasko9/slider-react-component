import { v4 as uuidv4 } from "uuid";

import { sliderData } from "./sliderData";

export const data = [
  {
    id: uuidv4(),
    headerPosition: "top",
    tag: "Features",
    title: "Take a closer look at our brand new head office",
    subTitle: "Designed to make you sleep better",
    sliderData: sliderData,
  },
];
