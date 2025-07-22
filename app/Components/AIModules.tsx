import { MoveButton } from "../UI/MoveButton";

export const AIModules = () => {
    return (
        <div className="w-full bg-[#1C242E] flex flex-col py-8 items-center">
            <div className="w-[555px] h-[86px] gap-[8px] flex flex-col items-center mb-4">
                <div className="h-[21px] mt-[6px] flex items-center gap-3">
                    <img src="./Features_Icon.webp" alt="features" draggable="false" />
                    <span className="text-[#34C4FF] font-medium text-[18px] leading-[30px]">
                        AI Modules
                    </span>
                </div>

                <div className="w-[555px] h-[48px] font-semibold text-[48px] leading-[48px] flex">
                    <p className="text-[#FFFFFF]">Meet Your&nbsp;</p>
                    <p className="bg-gradient-to-r from-[#1664D8] via-[#8CD7F7] to-[#1664D8] text-transparent bg-clip-text">
                        A.I.Assistants
                    </p>
                </div>
            </div>

            <div className="w-[80%] px-4 flex justify-center">
                <img
                    src="./AIModules_Main_One.webp"
                    alt="AI Interviews"
                    draggable="false"
                    className="max-w-full h-auto object-contain"
                />

                {/* <div className="absolute w-">
                    <MoveButton direction="right" />
                </div> */}
            </div>
        </div>
    );
};
