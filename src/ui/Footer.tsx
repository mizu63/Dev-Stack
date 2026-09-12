
import Logor from "../assets/Logo.png"

const Footer = () => {
    return (
        <section className="container mx-auto">
        
            <div className="max-w-full flex flex-col md:flex-row justify-between pt-10 px-3 md:px-0">
                
                <div className="mx-auto flex w-full flex-col items-center text-center md:mx-0 md:w-2/5 md:items-start md:text-left">
                    <div className="flex items-center gap-0.5 pb-2">
                        <img  src={Logor} alt="Logo" />
                        <h2 className="text-[20px] font-bold leading-7">Dev<span className="text-[#DB2777]">Stack</span></h2>
                    </div>
                    <p className="text-[12px] font-normal leading-5 text-[#64748B]  pb-2">Curated tools, technologies, and resources for developers building <br />
                        modern software.</p>
                    <ul className=" flex gap-4 text-[12px] font-semibold leading-4 text-[#475569]">
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>



                <div className="hidden md:block w-1/5">
                    <h2 className="text-[12px] font-bold text-[#0F172A] leading-3 pb-4">PRODUCT</h2>
                    <ul className="text-[12px] font-normal text-[#64748B] leading-2.5 space-y-3">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>


                <div className="hidden md:block w-1/5">
                    <h2 className="text-[12px] font-bold text-[#0F172A] leading-3 pb-4">COMPANY</h2>
                    <ul className="text-[12px] font-normal text-[#64748B] leading-2.5 space-y-3">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>


               <div className="hidden md:block w-1/5">
                    <h2 className="text-[12px] font-bold text-[#0F172A] leading-3 pb-4">LEGAL</h2>
                    <ul className="text-[12px] font-normal text-[#64748B] leading-2.5 space-y-3">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>

                    </ul>
                </div>


            </div>
            <footer className=" container mx-auto border-t mt-10 pb-10 border-[#F1F5F9] bg-white px-3 md:px-0">
                <div className="container mx-auto flex h-[64px] items-center justify-between">
                    <p className="text-[12px] text-[#94A3B8] font-normal">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a href="#" className="text-[12px] text-[#94A3B8] font-normal">
                            Privacy
                        </a>

                        <a href="#" className="text-[12px] text-[#94A3B8] font-normal">
                            Terms
                        </a>
                    </div>
                </div>
            </footer>

        </section>

    );
};

export default Footer;