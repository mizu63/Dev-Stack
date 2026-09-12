
import Heroimage from "../assets/Heroimage.png"

const Hero = () => {
    return (
        <section className="pt-20 pb-20">
            {/* <div className="container mx-auto grid grid-cols-12 gap-4 py-8 items-start"> */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 py-8 items-center px-5 md:px-0">
                {/* <div className="col-span-7"> */}
                <div className="col-span-1 md:col-span-7">
                    {/* <h1 className="text-[40px] font-bold text-[#0F172A] leading-none"> */}
                    <h1 className="text-[32px] md:text-[40px] font-bold text-[#0F172A] leading-tight mx-auto md:mx-0  text-center md:text-left">
                        Build Your Ideal <br />
                        <span className="bg-gradient-to-r from-[#FF5722] via-[#DB2777] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>
                    <p className="text-[#475569] text-[18px] leading-[29px] max-w-[537px] pt-6 mx-auto md:mx-0  text-center md:text-left">Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                    <div className="flex gap-2 pt-10">
                        <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-[#FFFFFF] px-1 py-1 md:px-3 md:py-2.5 rounded-[8px] text-[10px] md:text-[16px]">Explore Technologies</button>
                        <button className="text-[10px] md:text-[16px] font-normal leading-4 px-5 md:px-11 text-[#475569] py-1 md:py-3 rounded-[8px] border border-[#E5E7EB]">Learn More</button>
                    </div>
                </div>

                
                {/* <div className="col-span-5 flex justify-center items-center"> */}
                <div className="col-span-1 md:col-span-5 flex justify-center items-center">
                    <img
                        src={Heroimage}
                        // className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl object-cover border-1 border-cyan-500 shadow-[0_2px_6px_rgba(6,182,212,0.5)]"
                        className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl object-cover border border-cyan-500 shadow-[0_2px_6px_rgba(6,182,212,0.5)]"
                        alt=""
                    />
                </div>
            </div>
        </section>

    );
};

export default Hero;