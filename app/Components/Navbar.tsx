export const Navbar = () => {
    return (
        <div className="w-full flex justify-center bg-transparent">
            <div className="flex w-full h-[62px] gap-[32px] sm:justify-between ml-[42px] mr-[42px] lg:ml-0 lg:mr-0 lg:justify-center">
                <div className="w-[193px] h-[63px] ">
                    <img src="./Main_Logo.png" alt="Reducate Logo"  draggable="false"/>
                </div>

                <div className="block lg:hidden text-white text-[30px] mt-3">
                     ☰
                </div>

                <div className="hidden lg:flex w-full justify-center items-center gap-[39px] font-400 text-[#FFFFFF] text-[24px]">
                    <div className="w-fit [h-27px]">
                        For Schools
                    </div>

                    <div className="w-fit [h-27px]">
                        For Colleges
                    </div>

                    <div className="w-fit [h-27px]">
                        For Franchisees
                    </div>

                    <div className="w-fit [h-27px]">
                        For Corporate
                    </div>

                    <div className="w-fit [h-27px]">
                        Out Team
                    </div>

                    <div className="w-fit [h-27px]">
                        Contact Us
                    </div>
                </div>

                
            </div>
        </div>
    )
}