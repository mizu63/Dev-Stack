import React from 'react';
import Heroimage from "../assets/Heroimage.png"

const Hero = () => {
    return (
        <section>
           <div className="container mx-auto grid grid-cols-12 gap-4 py-7 items-center">
                <div className="col-span-7">
                    <h1 className="text-[40px] font-bold text-[#0F172A] ">
                        Build Your Ideal <br/>
                        <span className="bg-gradient-to-r from-[#FF5722] via-[#DB2777] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>
                   <p className="text-[#475569] text-[18px] leading-[29px] max-w-[537px]">Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                        <div className="flex gap-2 mt-8">
                            <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-[#FFFFFF] px-3 py-2.5 rounded-[8px]">Explore Technologies</button>
                            <button className=" text-[16px] font-normal leading-4 px-11 text-[#475569] py-3 rounded-[8px] border border-[#E5E7EB]">Learn More</button>
                        </div>
                </div>

                <div className="col-span-5">
                    <img src={Heroimage}  className="w-full max-w-[500px]" alt="" />
                </div>

            </div>
        </section>
    );
};

export default Hero;