export const CardV1 = () => {
    return (
        <div className="bg-gradient-to-b from-[#17213D] to-[#000D1C] rounded-md w-[531px] m-4 py-2">
            <div className="flex justify-center">
                <div className="w-[407px] rounded-[20px] mt-12 overflow-hidden">
                    <img
                        src="IntroSection_AI_EcoSystem.webp"
                        alt="AI Ecosystem"
                        draggable="false"
                        className="w-full h-auto object-cover rounded-[20px]"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center text-[#C2C2C2] text-center mt-4 font-normal w-[407px] mx-auto py-2">
                <span className="text-[20px]">Building Blocks of our</span>
                <div className="font-medium text-wrap w-68 text-[28px] bg-gradient-to-r from-[#1664D8] via-[#8CD7F7] to-[#1664D8] bg-clip-text text-transparent">
                    AI enabled learning ecosystem
                </div>
            </div>

            <div>

            </div>
        </div>
    );
};
