import { IoIosArrowForward } from "react-icons/io";

export default function Index() {

    return (
        <section className="w-full h-screen">
            <div className="w-full h-screen -mt-16 flex flex-col justify-center items-center text-center">
                <h1 className="text-[84px] font-serif bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    {"Dream Big".split('').map((letter, index) => (
                        <span
                            key={index}
                            className="inline-block transition-all duration-300 hover:text-[60px] hover:leading-[80px] hover:text-black group"
                        >
                            {letter}
                        </span>
                    ))}
                </h1>

                <div className="h-[3px] w-[225px] bg-[#000] rounded-full"></div>
                <h2 className="text-[54px] font-thin">
                    start small, let persistence lead the way.
                </h2>

                {/* Centered Paragraph */}
                <div className="w-full flex justify-center items-center px-4">
                    <p className="text-[16px] tracking-[1px] max-w-4xl">
                        Dream big with our{" "}
                        <span className="text-[#0000006a] underline decoration-dotted">
                            core product development
                        </span>{" "}
                        and{" "}
                        <span className="text-[#0000006a] underline decoration-dotted">
                            innovative software solutions
                        </span>
                        . Start small by taking manageable steps towards{" "}
                        <span className="text-[#0000006a] underline decoration-dotted">
                            end-to-end privacy
                        </span>{" "}
                        and leveraging <span>cutting-edge technology</span>. Let persistence guide your path to secure, reliable products tailored to your needs.
                    </p>
                </div>

                {/* Button */}
                <button className="px-[20px] py-[10px] text-[18px] text-[#fff] bg-red-500 mt-10 flex flex-row justify-center items-center gap-2 hover:bg-red-600 group">
                    Our product
                    <IoIosArrowForward className="transition-all duration-300 transform group-hover:translate-x-2 group-hover:scale-110 group-hover:rotate-3" />
                </button>
            </div>
        </section >
    );
}