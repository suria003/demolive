import company from "../Assets/company.png";
import { LiaSquarespace } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";

export default function TPS() {
    return (
        <section className="w-full h-auto bg-yellow-300 py-[50px]">
            <div>
                <div>
                    <LiaSquarespace />
                    <div>
                        <h2>clamcraft for</h2>
                        <h1>Creations</h1>
                    </div>
                    <div>
                        <p>Streamline your business with Clamcraft, a tech-driven product development and security company. Our unified cloud solutions are crafted to connect departments, foster seamless collaboration, and enhance efficiency—all while delivering top-notch security and data protection.</p>
                    </div>
                    <button className="px-[20px] py-[10px] text-[18px] text-[#fff] bg-red-500 mt-10 flex flex-row justify-center items-center gap-2 hover:bg-red-600 group">
                        Explore
                        <IoIosArrowForward className="transition-all duration-300 transform group-hover:translate-x-2 group-hover:scale-110 group-hover:rotate-3" />
                    </button>
                </div>
                <div>
                    <img src={company} alt="" />
                </div>
            </div>
        </section>
    );
}
