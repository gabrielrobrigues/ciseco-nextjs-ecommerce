import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/hero-right.png";
import imageRightPng2 from "@/images/hero-right-2.png";
import imageRightPng3 from "@/images/hero-right-3.png";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    image: `https://static.wikia.nocookie.net/pixar/images/a/ad/Cars_Lighting_Mcqueen.png/revision/latest?cb=20191025194603&path-prefix=pt-br`,
    heading: "das nossas vidas 🎀",
    subHeading: "Se prepare para a primeira viagem",
    btnText: "Explorar",
    btnLink: "/",
  },
  {
    image: `https://i.pinimg.com/originals/83/a4/e0/83a4e0d8189258e54afe1e58db3764b0.png`,
    heading: "final de semana incrível! ε(´｡•᎑•`)っ 💕",
    subHeading: "Escolha as atrações do nosso",
    btnText: "Explorar",
    btnLink: "/",
  },
  // {
  //   image: imageRightPng,
  //   heading: "Exclusive collection for everyone",
  //   subHeading: "In this season, find the best 🔥",
  //   btnText: "Explore now",
  //   btnLink: "/",
  // },
];
