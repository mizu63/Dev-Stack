import React from 'react';
import Logo from "../assets/Logo.png"
const Nav = () => {
    return (
       <section className="border-b border-gray-200">
       <div className='container mx-auto flex justify-between items-center pt-5 pb-5 '>
         <div className="flex items-center gap-0.5">
            <img src={Logo} alt="Logo" />
            <h2 className="text-[20px] font-bold leading-7">Dev<span className="text-[#DB2777]">Stack</span></h2>
        </div>
        <ul className="flex gap-7 text-[14px] text-[#475569] font-medium leading-5">
            <li><a href="">Home</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
             <li><a href="">Contact</a></li>
        </ul>
        <div className="flex">
            <button className=" text-[14px] text-[#334155] px-5 py-2.5 font-medium leading-5">Sign In</button>
            <button  className=" text-[14px] text-[#FFFFFF] bg-[#D91B7E] px-5 py-2.5 font-medium leading-5 rounded-full">Sign Up</button>
        </div>
       </div>
       </section>
    );
};

export default Nav;