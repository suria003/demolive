import { IoIosArrowForward } from "react-icons/io";
export default function Story() {
    return (
        <section className="h-auto w-full bg-[#f5f5f5] py-[50px]">  
            <div>
                <div className="">
                    <h1>Trusted by Leading Brands</h1>
                    <div className="h-[1.5px] w-[100px] bg-red-500"></div>
                </div>
                <div>customer details</div>
                <button className="uppercase px-[20px] py-[10px] text-[18px] text-yellow-400 flex flex-row justify-center items-center gap-2 hover:text-red-600 group">stories<IoIosArrowForward className="transition-all duration-300 transform group-hover:translate-x-2 group-hover:scale-110 group-hover:rotate-3" /></button>
            </div>
        </section>
    );
}