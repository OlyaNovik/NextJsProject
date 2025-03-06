'use client'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Burger from "../../img/Burger.png";

export default function MenuComp() {
    const [isOpen, setIsOpen] = useState(false); // Стан для відкриття/закриття меню

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Перемикаємо стан меню
    };

    return (

        <div className="flex lg:hidden flex-col">
            <Image 
                src={Burger} 
                alt="Burger" 
                width={40} 
                height={40} 
                className="cursor-pointer"
                onClick={toggleMenu} 
            />
  <div 
                className={`fixed top-0 left-0 h-full w-64 bg-black transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out text-[#B9FF66] duration-300`}
            >
                <div className="p-4">
                    <Link href="/about">About us</Link>
                </div>
                <div className="p-4">
                    <Link href="/services">Services</Link>
                </div>
                <div className="p-4">
                    <Link href="/cases">Use Cases</Link>
                </div>
                <div className="p-4">
                    <Link href="/pricing">Pricing</Link>
                </div>
                <div className="p-4">
                    <Link href="/blog">Blog</Link>
                </div>
                <div className="p-4">
                    <Link href="/request">
                        <button className="w-52 h-16 border-[1px] border-[#B9FF66] border-solid rounded-xl">
                            Request a quote
                        </button>
                    </Link>
                </div>
            </div>
</div>


    )
}