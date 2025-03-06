'use client'
import Image from "next/image";
import MainImg from "../../img/ImageMain.png";
import { icons } from "./icon"; 

export default function MainPage() {
    return(
  <div className="flex flex-col">
    <div className="flex justify-center mt-10 p-4">
      <div className="flex flex-col w-1/2 ml-5">
        <h1 className="font-spaceGrotesk text-6xl mb-9 leading-tight w-[500px]">
          Navigating the digital landscape for success
        </h1>
        <p className="font-spaceGrotesk text-xl mb-9 w-[500px]">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button className="w-64 h-16 bg-black text-white font-spaceGrotesk rounded-xl">
          Book a consultation
        </button>
      </div>
      <Image src={MainImg} alt="MainImg" className="w-1/2" />
    </div>
    <div className="flex w-full justify-around">
      {icons.map(({ src, alt }, index) => (
        <Image key={index} src={src} alt={alt} />
      ))}
    </div>
  </div>
);
      }

