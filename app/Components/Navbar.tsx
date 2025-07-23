"use client"

import { useState } from "react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full flex justify-center bg-transparent">
            <div className="flex w-full h-[62px] gap-[32px] justify-between ml-[32px] mr-[32px] lg:justify-center lg:mx-0">
                <div className="w-[193px] h-[63px]">
                    <img src="./Main_Logo.png" alt="Reducate Logo" draggable="false" />
                </div>

                <div
                    className="block lg:hidden text-white text-[30px] mt-3 cursor-pointer"
                    onClick={() => setMenuOpen(prev => !prev)}
                >
                    {menuOpen ? '✖' : '☰'}
                </div>

                
                <div className="hidden lg:flex w-full justify-center items-center gap-[39px] font-400 text-[#FFFFFF] text-[24px]">
                    <div className="w-fit [h-27px]">For Schools</div>
                    <div className="w-fit [h-27px]">For Colleges</div>
                    <div className="w-fit [h-27px]">For Franchisees</div>
                    <div className="w-fit [h-27px]">For Corporate</div>
                    <div className="w-fit [h-27px]">Our Team</div>
                    <div className="w-fit [h-27px]">Contact Us</div>
                </div>
            </div>

            {menuOpen && (
                <div className="absolute top-[72px] left-0 right-0 z-50 flex flex-col items-center gap-4 px-6 py-4 text-white bg-[#1C242E] text-[20px] w-[90%] max-w-[500px] lg:hidden"
            style={{
                background: `linear-gradient(0deg, rgba(2, 15, 57, 0.75), rgba(2, 15, 57, 0.75)),
                             radial-gradient(46.06% 43.64% at 30.61% 46.61%, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.08) 100%),
                             radial-gradient(47.18% 43.62% at 29.49% 46.59%, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.2) 100%)`,
                backgroundColor: "#1C242E",
            }}
                >
                    <div>For Schools</div>
                    <div>For Colleges</div>
                    <div>For Franchisees</div>
                    <div>For Corporate</div>
                    <div>Our Team</div>
                    <div>Contact Us</div>
                </div>
            )}
        </div>
    );
};
