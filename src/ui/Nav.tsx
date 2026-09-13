
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png"
import { useState } from "react";
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <section className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
            <div className='container mx-auto flex justify-between items-center pt-3 pb-2 px-3 md:px-0'>
                <div className="flex items-center gap-0.5">
                    <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <img src={Logo} alt="Logo" />
                    <h2 className=" text-[14px] md:text-[20px] font-bold leading-7">Dev<span className="text-[#DB2777]">Stack</span></h2>
                </div>
                <ul
                    className={`${menuOpen ? "flex" : "hidden"} md:flex gap-2 md:gap-7 text-[14px] text-[#475569] font-medium leading-5
                     absolute top-full left-0 w-full bg-white flex-col p-5 md:static md:w-auto md:bg-transparent md:flex-row md:p-0`}>
                    <li className=" hover:text-[#DB2777]"><a href="">Home</a></li>
                    <li className=" hover:text-[#DB2777]"><a href="">Technologies</a></li>
                    <li className=" hover:text-[#DB2777]"><a href="">Projects</a></li>
                    <li className=" hover:text-[#DB2777]"><a href="">About</a></li>
                    <li className=" hover:text-[#DB2777]"><a href="">Contact</a></li>
                </ul>
                <div className="flex">
                    <button className="text-[10px] md:text-[14px] text-[#334155] px-2 md:px-5 py-1 md:py-2.5 font-medium md:leading-5">Sign In</button>
                    <button className="text-[10px] md:text-[14px] text-[#FFFFFF] bg-[#D91B7E] px-2 py-1 md:px-5 md:py-2.5 font-medium md:leading-5 rounded-full">Sign Up</button>
                </div>
            </div>
        </section>
    );
};

export default Nav;