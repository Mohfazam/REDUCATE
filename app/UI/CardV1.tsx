export const CardV1 = () => {
    return (
        <div className="bg-gradient-to-b from-[#17213D] to-[#000D1C] rounded-md h-[660px] w-[531px] m-4 -mr-1 py-2">
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

            <div className="flex flex-col gap-[24px] justify-center">
                <div className="flex gap-2 items-center justify-center">
                    <SquareGrid type={"first"} />
                    <div className="w-[260px] text-[#F8F8F8] font-normal text-[14px]">
                        <span>AI-enabled, accessible and customized
                            education, practice and preparation</span>
                    </div>
                </div>


                <div className="flex gap-2 items-center justify-center">
                    <SquareGrid type={"second"} />
                    <div className="w-[260px] text-[#F8F8F8] font-normal text-[14px]">
                        <span>360 degree ecosystem encompassing
                            entire learning journey on web and app </span>
                    </div>
                </div>


                <div className="flex gap-2 items-center justify-center">
                    <SquareGrid type={"third"} />
                    <div className="w-[260px] text-[#F8F8F8] font-normal text-[14px]">
                        <span>Hands-on learning and Industry-driven
                            curriculum developed by IIT-IIM alumni</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


interface SquareGridProps {
    type: 'first' | 'second' | 'third';
}

const Square = () => {
    return (
        <div
            className="h-[14px] w-[14px] rounded-[2.8px]"
            style={{
                boxShadow: '0px 0px 0px 1.05px #FFFFFF1A inset',
                background: 'radial-gradient(circle, #FFFFFF00 30%, #FFFFFF26 60%)',
            }}
        />
    );
};

const SquareGrid = ({ type }: SquareGridProps) => {
    const getGridPattern = (): (0 | 1)[][] => {
        switch (type) {
            case 'first':
                return [
                    [0, 1, 1],
                    [1, 1, 1],
                ];
            case 'second':
                return [
                    [1, 0, 0],
                    [1, 1, 1],
                    [1, 1, 1],
                ];
            case 'third':
                return [
                    [1, 1, 1],
                    [1, 1, 1],
                    [1, 1, 1],
                ];
            default:
                return [];
        }
    };

    const grid = getGridPattern();

    return (
        <div className="flex flex-col gap-[2px]">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-[2px]">
                    {row.map((cell, colIndex) =>
                        cell === 1 ? (
                            <Square key={colIndex} />
                        ) : (
                            <div key={colIndex} className="h-[14px] w-[14px]" />
                        )
                    )}
                </div>
            ))}
        </div>
    );
};


