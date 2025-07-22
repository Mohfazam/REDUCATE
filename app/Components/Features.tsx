export const Features = () => {
    return(
        <div className="w-full h-[1014px] flex flex-col items-center bg-gradient-to-b from-[#000D1C] to-[#17213D]">
            <div className="w-[555px] h-[86px]  gap-[8px] flex flex-col items-center">
                <div className="h-[21px] mt-[6px] flex gap-3">
                    <img src="./Features_Icon.webp" alt="features" draggable="false" />
                    <span className="text-[#34C4FF] font-medium text-[18px] leading-[30px]">key Features</span>
                </div>

                <div className="w-[555px] h-[48px] font-semibold text-[48px] leading-[48px] flex">
                    <p className="text-[#FFFFFF]">What Makes Us &nbsp;</p>
                    <p className="bg-gradient-to-r from-[#1664D8] via-[#8CD7F7] to-[#1664D8] text-transparent bg-clip-text">Special</p>
                </div>
            </div>

            <div>
                Grid
            </div>
        </div>
    )
}