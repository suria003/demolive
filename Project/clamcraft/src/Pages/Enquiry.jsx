export default function Enquiry() {

    return (
        <section className="relative w-full h-screen bg-red-500">
            {/* Title */}
            <div className="absolute right-[20%] w-auto h-fit bg-transparent flex items-center justify-center">
                <h1 className="text-white text-[140px]">Contact</h1>
            </div>

            {/* Form */}
            <form className="relative top-[25%] left-[45%] w-[40%] flex flex-col justify-center items-center gap-6">

                <div className="w-full h-auto flex flex-row justify-center items-center gap-10">
                    <div className="relative w-full flex flex-col justify-center items-start gap-0">
                        {/* Label */}
                        <label htmlFor="" className="text-22px font-semibold text-[#000]">Name</label>
                        {/* Input */}
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-transparent pt-2 pb-2 border-b-2 border-[#000] text-white outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="relative w-full flex flex-col justify-center items-start gap-0">
                        {/* Label */}
                        <label htmlFor="" className="text-22px font-semibold text-[#000]">Company</label>
                        {/* Input */}
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-transparent pt-2 pb-2 border-b-2 border-[#000] text-white outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="w-full h-auto flex flex-row justify-center items-center gap-10">
                    <div className="relative w-full flex flex-col justify-center items-start gap-0">
                        {/* Label */}
                        <label htmlFor="" className="text-22px font-semibold text-[#000]">Email</label>
                        {/* Input */}
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-transparent pt-2 pb-2 border-b-2 border-[#000] text-white outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="relative w-full flex flex-col justify-center items-start gap-0">
                        {/* Label */}
                        <label htmlFor="" className="text-22px font-semibold text-[#000]">Phone</label>
                        {/* Input */}
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-transparent pt-2 pb-2 border-b-2 border-[#000] text-white outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="w-full h-auto flex flex-col justify-center items-start">
                    {/* Label */}
                    <label htmlFor="" className="text-22px font-semibold text-[#000]">What to know more? Drop us a line!</label>

                    <div className="relative w-full">
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            class="w-full bg-transparent text-white border-b-2 border-[#000] py-2 px-2 outline-none resize-none focus:border-blue-500"
                        ></textarea>
                    </div>
                </div>


                <div className="h-auto w-full">
                    <button class="flex items-center bg-[#000] gap-1 px-8 py-4 cursor-pointer text-white font-semibold tracking-widest hover:bg-red-400 duration-300 hover:gap-2 hover:translate-x-3" >
                        Send
                        <svg
                            class="w-5 h-5"
                            stroke="currentColor"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </button>
                </div>

            </form>
        </section>
    );
}