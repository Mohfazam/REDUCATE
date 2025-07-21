export const DualCard = () => {
    return (
        <div className="w-[877px] h-[659px] rounded-md bg-gradient-to-b from-[#17213D] to-[#000D1C] m-4 py-2">
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

            <div className="w-[728px] flex justify-center h-[263px] rounded-[24px] bg-gradient-to-b from-[#1e2948] to-[#000D1C00]">
                <div>
                    <Side />
                </div>
            </div>
        </div>
    )
}

const Side = () => {
    return (
        <div className="flex flex-col justify-center px-4 items-center gap-3 mt-4">
            <div>
                <h2 className="w-[190px] h-[27px] font-normal text-[22px] bg-gradient-to-r from-[#FFFFFF] to-[#9BBBFFCC] bg-clip-text text-transparent">
                    Techno University
                </h2>
            </div>

            <div className="w-[306px] h-[100px] text-[#D6D6D6]">
                <span className="font-normal text-[16px] leading-[20px]">
                    End-to-end tech solutions for colleges empowering students, supporting faculty, and preparing campuses for real-world success and industry readiness for tomorrow’s industry
                </span>
            </div>

            <div>
                <Button />
            </div>
        </div>
    )
}

const Button = () => {
    return(
        <div>
            
        </div>
    )
}