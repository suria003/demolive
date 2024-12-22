import React from "react";
import hallo from "../Assets/Image/holla.png";
import { IoIosArrowForward } from "react-icons/io";
import Newsletter from "../Pages/Newsletter";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center items-center bg-gray-100 px-8 py-12">
            {/* Main Content */}
            <Newsletter />
            <div className="w-[90%] flex flex-col md:flex-row justify-between items-start gap-10 py-10 border-b border-gray-300">
                {/* Logo Section */}
                <div className="flex flex-col items-start">
                    <img src={hallo} alt="Logo" className="w-92" />
                </div>

                {/* Usage Links */}
                <div>
                    <header className="text-lg font-semibold mb-4 text-gray-700">USAGE</header>
                    <ul className="space-y-2 text-gray-600">
                        <li className="cursor-pointer hover:text-[#000]" onClick={() => window.location.href = "/97111117116116"}>About Us</li>
                        <li className="cursor-pointer hover:text-[#000]" onClick={() => window.location.href = "/1121141051189719912112110810599121"}>Privacy Policy</li>
                        <li className="cursor-pointer hover:text-[#000]" onClick={() => window.location.href = "/99108105101116116"}>Story</li>
                        <li className="cursor-pointer hover:text-[#000]" onClick={() => window.location.href = "/99111110116101120116"}>Events</li>
                        <li className="cursor-pointer hover:text-[#000]" onClick={() => window.location.href = "/9910497111101"}>Career</li>
                    </ul>
                </div>

                <div>
                    <header className="text-lg font-semibold mb-4 text-gray-700">Product</header>
                    <ul className="space-y-2 text-gray-600">
                        <li className="cursor-pointer hover:text-[#000]" onClick={() => window.location.href = "/101110113117105114121"}>X-Autn</li>
                        <li className="cursor-pointer hover:text-[#000]" onClick={() => window.location.href = "/99111109109117116116121"}>celestron</li>
                        <li className="cursor-pointer hover:text-[#000]" onClick={() => window.location.href = "/99111109109117116116121"}>Elinash</li>
                        <li className="cursor-pointer hover:text-[#000]" onClick={() => window.location.href = "/99111109109117116116121"}>Invetory Management</li>
                    </ul>
                </div>

                {/* Reach Out Links */}
                <div>
                    <header className="text-lg font-semibold mb-4 text-gray-700">Learn</header>
                    <ul className="space-y-2 text-gray-600">
                        <li className="cursor-pointer hover:text-[#000]" onClick={() => window.location.href = "/101110113117105114121"}>Blog</li>
                        <li className="cursor-pointer hover:text-[#000]" onClick={() => window.location.href = "/99111109109117116116121"}>News Letter</li>
                        <li className="cursor-pointer hover:text-[#000]" onClick={() => window.location.href = "/10297113115"}>FAQs</li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="flex flex-col justify-center items-start gap-1">
                    <header className="text-lg font-semibold mb-4 text-gray-700">CONNECT</header>
                    <ul className="flex flex-col justify-center items-start gap-2 text-gray-600">
                        <header className="text-[#000] font-semibold">Phone</header>
                        <li className="underline hover:text-[#000] cursor-pointer">+91 7305363489</li>
                        <li className="underline hover:text-[#000] cursor-pointer">+91 8838060247</li>
                    </ul>
                    <ul className="text-gray-600">
                        <header className="text-[#000] font-semibold">Email</header>
                        <li className="underline hover:text-[#000] cursor-pointer">sales@clamcraft.co.in</li>
                    </ul>
                    <div className="h-[2px] w-full bg-[#0000007a] mt-3"></div>
                    <button className="px-[20px] py-[10px] text-[18px] text-[#fff] bg-red-500 mt-3 flex flex-row justify-center items-center gap-2 hover:bg-red-600 group">
                        contact
                        <IoIosArrowForward className="transition-all duration-300 transform group-hover:translate-x-2 group-hover:scale-110 group-hover:rotate-3" />
                    </button>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-sm mt-8 text-gray-500 flex flex-row justify-center items-center gap-1">
                &copy; 2024 <h2 className="font-bold text-red-500 cursor-pointer hover:text-red-400" onClick={() => window.location.href = "https://www.clamcraft.co.in"}>clamcraft.co.in</h2> . All rights reserved.
            </div>
        </footer>
    );
}