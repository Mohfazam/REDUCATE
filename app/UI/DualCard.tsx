import { MoveButton } from "./MoveButton";

export const DualCard = () => {
    return (
        <div className="w-[877px] h-[659px] rounded-md flex flex-col items-center bg-gradient-to-b from-[#17213D] to-[#000D1C] m-4 py-2">
            <div>
                <div className="flex m-4 py-2 rounded-[20px] gap-6 justify-center mt-12">
                    <div className="w-[350px] h-[288px] overflow-hidden">
                        <img src="./Dual1.webp" alt="Dual1" draggable="false" className="w-full h-full object-cover rounded-[20px]" />
                    </div>

                    <div className="w-[350px] h-[288px] overflow-hidden">
                        <img src="./Dual2.webp" alt="Dual1" draggable="false" className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                </div>
            </div>

            <div className="w-[728px] flex justify-between items-center h-[263px] rounded-[24px] bg-gradient-to-b from-[#1e2948] to-[#000D1C00]">
                <Side1 />
                <div
                    className="h-[197px] w-[0px] border-l-[1px]"
                    style={{
                        borderImageSource: 'linear-gradient(to top, rgba(102, 102, 102, 0.75), rgba(204, 204, 204, 0.75))',
                        borderImageSlice: 1,
                    }}
                ></div>

                <Side2 />
            </div>

        </div>
    )
}

const Side1 = () => {
    return (
        <div className="w-[364px] flex flex-col justify-center px-4 items-center gap-3 mt-4">
            <h2 className="w-[190px] h-[27px] font-normal text-[22px] bg-gradient-to-r from-[#FFFFFF] to-[#9BBBFFCC] bg-clip-text text-transparent">
                Techno University
            </h2>

            <div className="w-[306px] h-[100px] text-[#D6D6D6] text-center mb-4">
                <span className="font-normal text-[16px] leading-[20px]">
                    End-to-end tech solutions for colleges empowering students, supporting faculty, and preparing campuses for real-world success and industry readiness for tomorrow&#39;s industry
                </span>
            </div>

            <div className="mt-4">
                <Button />
            </div>
        </div>
    );
};

const Side2 = () => {
    return (
        <div className="w-[364px] flex flex-col justify-center px-4 items-center gap-3 mt-2">
            <h2 className="w-[190px] h-[27px] font-normal text-[22px] bg-gradient-to-r from-[#FFFFFF] to-[#9BBBFFCC] bg-clip-text text-transparent">
                Techno School
            </h2>

            <div className="w-[306px] h-[100px] text-[#D6D6D6] text-center mb-4">
                <span className="font-normal text-[16px] leading-[20px]">
                    Comprehensive solutions for schools to enhance learning, support educators, and nurture cognitive growth and real-world readiness for holistic student advancement with world-class facilities.
                </span>
            </div>

            <div className="mt-4">
                <Button />
            </div>
        </div>
    );
};


const Button = () => {
    return (
        <div className="relative w-[177px] h-[36px]">

            <div
                className="flex items-center justify-center w-full h-full rounded-[6px] relative z-10 gap-2"
                style={{
                    background: 'linear-gradient(180deg, rgba(54, 159, 255, 0.14), rgba(81, 162, 210, 0.14))',
                }}
            >

                <span className="text-[#62B4FF] font-normal text-[16px] leading-none">
                    Learn More
                </span>



                <MoveButton direction="right"/>
            </div>

            <div
                className="absolute inset-0 rounded-[6px] pointer-events-none"
                style={{
                    padding: '1px',
                    background: 'linear-gradient(268.68deg, rgba(10, 122, 191, 0.28), rgba(255, 103, 6, 0))',
                    WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    boxSizing: 'border-box',
                }}
            />
        </div>
    );
};


