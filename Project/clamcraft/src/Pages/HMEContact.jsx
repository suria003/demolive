import { MdDoubleArrow } from "react-icons/md";

export default function HMEContact() {
    const sections = [
        { title: "Contact", id: 1, link: "/" },
        { title: "FAQ's",   id: 2, link: "/" },
        { title: "Join our Team?", id: 3, link: "/"},
    ];

    return (
        <section className="h-auto w-full flex justify-center items-center bg-gray-100">
            <div className="w-full h-auto flex flex-col justify-between items-center">
                {sections.map((section) => (
                    <div key={section.id} className="w-full">   
                        <div className="bg-black h-[2px] w-full"></div>

                        <div className="group px-[25px] py-[65px] w-full h-auto flex flex-row justify-between items-center" onClick={ () => window.location.href = section.link }>
                            <h1 className="font-bold text-[56px] text-[#0000007a] transition-transform duration-300 group-hover:translate-x-[25px]">
                                {section.title}
                            </h1>
                            <button className="h-[50px] w-[100px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <MdDoubleArrow className="h-full w-full object-cover text-red-500" />
                            </button>
                        </div>
                    </div>
                ))}

                {/* Bottom Divider */}
                {/* <div className="bg-black h-[2px] w-full"></div> */}
            </div>
        </section>
    );
}