export const Navbar = () => {
    return (
        <div className="w-full flex justify-center bg-transparent">
            <div className="flex gap w-full h-[62px] gap-[32px]">
                <div className="w-[193px] h-[63px] ">
                    <img src="./Main_Logo.png" alt="Reducate Logo"  draggable="false"/>
                </div>

                <div className="flex w-full justify-center items-center gap-[39px] font-400 text-[#FFFFFF] text-[24px]">
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