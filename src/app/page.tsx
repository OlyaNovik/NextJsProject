import Link from "next/link";
import Logo from "../img/Icon.png";
import Image from "next/image";
import "../styles/globals.css"
import MenuComp from "./components/burger";
import MainPage from "./components/MainPageComp";
import { FC } from "react";
const Home: FC = () => {
  return (
    <div className="">
      <div className=" h-9 mt-5 ml-10 mr-10 flex justify-between">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Burger"
            width={35}
            height={35}

          />
          <p className="font-medium font-spaceGrotesk lg:text-4xl text-2xl">Positivus</p>
        </div>
        <div className="hidden lg:flex items-center justify-between lg:w-[600px] ">
          <Link href="/about">About us</Link>
          <Link href="/services">Services</Link>
          <Link href="/cases">Use Cases</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/request"><button className="w-52 h-16 border-[1px] border-black border-solid rounded-xl">Request a quote</button></Link>

        </div>
        <MenuComp />
      </div>
      <MainPage />
    </div>
  );
};

export default Home;
