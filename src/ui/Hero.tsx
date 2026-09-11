import React from 'react';
import Heroimage from "../assets/Heroimage.png"

const Hero = () => {
    return (
        <section className="pt-20">
            <div className="container mx-auto grid grid-cols-12 gap-4 py-8 items-start">
                <div className="col-span-7">
                    <h1 className="text-[40px] font-bold text-[#0F172A] leading-none">
                        Build Your Ideal <br />
                        <span className="bg-gradient-to-r from-[#FF5722] via-[#DB2777] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>
                    <p className="text-[#475569] text-[18px] leading-[29px] max-w-[537px] pt-6">Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                    <div className="flex gap-2 pt-10">
                        <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-[#FFFFFF] px-3 py-2.5 rounded-[8px]">Explore Technologies</button>
                        <button className=" text-[16px] font-normal leading-4 px-11 text-[#475569] py-3 rounded-[8px] border border-[#E5E7EB]">Learn More</button>
                    </div>
                </div>

                {/* <div className="col-span-5">
                    <img src={Heroimage} className="w-full w-72 h-72 mx-auto items-center justify-center sm:w-80 sm:h-80 rounded-2xl object-cover border-4 border-cyan-500 shadow-sm shadow-cyan-500/50" alt="" />
                </div> */}
                <div className="col-span-5 flex justify-center items-center">
                    <img
                        src={Heroimage}
                        className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl object-cover border-1 border-cyan-500 shadow-[0_2px_6px_rgba(6,182,212,0.5)]"
                        alt=""
                    />
                </div>
            </div>
        </section>
        //      <section className="container mx-auto px-4">
        //   <div className="flex flex-col lg:flex-row justify-between items-center gap-10"> 
        //     <div className="w-full lg:w-1/2">
        //       <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-[60px] leading-tight tracking-[1.5px] mt-8 lg:mt-11.5">
        //         Build Your Ideal <br /><span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
        //           Development Stack </span></h1>
        //       <p className="max-w-142.75 font-normal text-base sm:text-lg leading-7.5 text-[#475569] mt-6">Explore frontend, backend, database, and tooling options,
        //         compare them side by side, and put together the stack that fits
        //         your next project. </p>
        //       <div className="mt-8 flex flex-wrap gap-3">
        //         <button className="bg-gradient-to-r from-[#FF5722] to-[#D81B7E] font-semibold text-[14px] text-white rounded-full py-2.5 px-5"> Explore Technologies</button>
        //         <button className="font-semibold text-[14px] text-[#0F172A] border-2 border-[#0F172A] rounded-full py-2.5 px-5">Learn More </button>
        //       </div>
        //     </div>
        //     <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-24">
        //       <img src={Heroimage} alt="Development stack" className="w-full max-w-md lg:max-w-lg" />
        //     </div>
        //   </div>
        // </section>
    );
};

export default Hero;