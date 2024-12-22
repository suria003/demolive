import React, { useState, useEffect } from "react";
import Logo from "../Child/Logo";
import LogoMain from "../Response/LogoMain";
import { CgMoreO } from "react-icons/cg";
import { MdExpandMore } from "react-icons/md";

export default function Nav() {
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleProductMenu = () => {
        setIsProductMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`h-[70px] w-full flex flex-row justify-between items-center bg-transprent shadow-md transition-all duration-300 ${
                isScrolled ? "fixed top-0 z-5000 bg-[#fff]" : ""
            }`}
        >
            <div className="flex flex-row justify-center items-center gap-2  px-6 cursor-pointer" onClick={ () => window.location.href = "/"}>
                <Logo />
                <LogoMain />
            </div>

            <div className="h-full w-auto flex flex-row justify-center items-center gap-6">
                <button
                    className="px-4 py-2 flex flex-row justify-center items-center gap-1 text-xl hover:text-red-600 focus:text-red-600"
                    aria-label="Product Menu"
                    onClick={toggleProductMenu}
                >
                    Product
                    <MdExpandMore
                        className={`h-6 w-auto transition-transform duration-300 ${
                            isProductMenuOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                </button>

                <button
                    className="px-4 py-2 flex flex-row justify-center items-center gap-1 text-xl hover:text-red-600 focus:text-red-600"
                >
                    Customer
                </button>
                <button
                    className="px-4 py-2 flex flex-row justify-center items-center gap-1 text-xl hover:text-red-600 focus:text-red-600"
                >
                    Pricing
                </button>
                <button
                    className="h-5 w-auto font-bold hover:text-red-600 focus:text-red-600"
                    aria-label="More Options"
                >
                    <CgMoreO className="h-full w-auto" />
                </button>
            </div>

            <div className="h-full w-auto flex justify-center items-center">
                <button
                    className="uppercase h-full w-auto flex justify-center items-center px-6 py-3 text-md font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                >
                    Start Now
                </button>
            </div>
        </nav>
    );
}
