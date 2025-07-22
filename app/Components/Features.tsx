export const Features = () => {
    return (
        <div className="w-full h-[1014px] flex flex-col items-center bg-gradient-to-b from-[#000D1C] to-[#17213D]">
            <div className="w-[555px] h-[86px]  gap-[8px] flex flex-col items-center mb-4 -mt-8">
                <div className="h-[21px] mt-[6px] flex items-center gap-3">
                    <img src="./Features_Icon.webp" alt="features" draggable="false" />
                    <span className="text-[#34C4FF] font-medium text-[18px] leading-[30px]">key Features</span>
                </div>

                <div className="w-[555px] h-[48px] font-semibold text-[48px] leading-[48px] flex">
                    <p className="text-[#FFFFFF]">What Makes Us&nbsp;</p>
                    <p className="bg-gradient-to-r from-[#1664D8] via-[#8CD7F7] to-[#1664D8] text-transparent bg-clip-text">Special</p>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="w-full rounded-[15px] flex gap-3 justify-center">
                    <First />
                    <Second />
                    <Third />
                    <Fourth />
                </div>

                <div className="w-full rounded-[15px] flex gap-3 justify-center">
                    <Fifth />
                    <Sixth />
                    <Seventh />
                    <Eighth />
                </div>

                <div className="w-full rounded-[15px] flex gap-3 justify-center">
                    <Ninth />
                    <Tenth />
                    <Eleventh />
                    <Twelveth />
                </div>

                <div className="w-full rounded-[15px] flex gap-3 justify-center">
                    <Thirteenth />
                    <Fourteenth />
                    <Fifteenth />
                    <Sixteen />
                </div>
            </div>
        </div>
    )
}

const First = () => {
    return (
        <div
            className="w-[352px] h-[167px] rounded-[15px]"
            style={{
                background: `linear-gradient(315deg, rgba(0, 52, 82, 0.4) 4.57%, rgba(0, 16, 52, 0.2) 30.65%, rgba(0, 0, 0, 0.32) 52%), #0D0C17`,
            }}
        />
    );
};

const Second = () => {
    return (
        <div className="w-[352px] h-[167px] rounded-[15px]" >
            <img src="./Features_Grid_Second.webp" alt="Features_Grid_Second" draggable="false" />
        </div>
    );
}

const Third = () => {
    return (
        <div className="w-[352px] h-[167px] rounded-[15px]" >
            <img src="./Features_Grid_Third.webp" alt="Features_Grid_Third" draggable="false" />
        </div>
    );
}


const Fourth = () => {
    return (
        <div
            className="w-[352px] h-[167px] rounded-[15px]"
            style={{
                background: `linear-gradient(15.6deg, rgba(0, 52, 82, 0.4) 4.57%, rgba(0, 16, 52, 0.2) 30.65%, rgba(0, 0, 0, 0.32) 52%), #0D0C17`,
            }}
        />
    );
};

const Fifth = () => {
    return (
        <div className="w-[352px] h-full rounded-[15px] overflow-hidden">
            <img
                src="./Features_Grid_Eighth.webp"
                alt="Features_Grid_Second"
                draggable="false"
                className="w-full h-full object-cover scale-x-[-1]"
            />
        </div>
    );
};

const Fourteenth = () => {
    return (
        <div className="w-[352px] h-[167px] rounded-[15px] overflow-hidden" >
            <img src="./Features_Grid_Second.webp" alt="Features_Grid_Second" draggable="false" className="scale-y-[-1]" />
        </div>
    );
}

const Fifteenth = () => {
    return (
        <div className="w-[352px] h-[167px] rounded-[15px] overflow-hidden" >
            <img src="./Features_Grid_Second.webp" alt="Features_Grid_Second" draggable="false" className="scale-y-[-1]" />
        </div>
    );
}


const Sixth = () => {
    return (
        <div className="w-[352px] h-[259px] rounded-[15px] border-[0.75px] border-[#FFFFFF26]">
            <div className="m-7">
                <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center"
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.15) 100%)",
                        boxShadow: "0px 0px 0px 0.75px #FFFFFF1A inset",
                    }}>
                    <div className="w-[18px] h-[18px]">
                        <img src="./Features_Grid_icon_One.webp" alt="Chemical Vector" draggable="false" className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="mt-4">
                    <div className="w-[202px] text-[15px] font-semibold bg-gradient-to-r from-[#D1D0D3] to-[#FFFFFF] text-transparent bg-clip-text">
                        <span>Virtual Labs & In-app Coding</span>
                    </div>

                    <div className="w-[216px] h-[48px] mt-2 font-medium text-[11px] leading-[16px] text-[#FFFFFF99]">
                        <span>
                            Our Cloud-based Virtual Labs let you code and experiment in advanced  lab simulations on any device -- Phone or Computer
                        </span>
                    </div>

                    <div className="flex w-[174px] h-[11px] justify-center items-center py-[40px] font-bold text-[14px] leading-[15px] text-[#51A2D2]">
                        <span className="w-full">Experience Virtual Labs</span>
                        <img src="./Features_Grid_Arrow.webp" className="w-[9px] h-[9px]" />
                    </div>
                </div>

            </div>
        </div>
    )
}

const Seventh = () => {
    return (
        <div className="w-[352px] h-[259px] rounded-[15px] border-[0.75px] border-[#FFFFFF26]">
            <div className="m-7">
                <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center"
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.15) 100%)",
                        boxShadow: "0px 0px 0px 0.75px #FFFFFF1A inset",
                    }}>
                    <div className="w-[18px] h-[18px]">
                        <img src="./Features_Grid_Icon_Two.webp" alt="Chemical Vector" draggable="false" className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="mt-4">
                    <div className="w-[202px] text-[15px] font-semibold bg-gradient-to-r from-[#D1D0D3] to-[#FFFFFF] text-transparent bg-clip-text">
                        <span>360 degree Learning Ecosystem</span>
                    </div>

                    <div className="w-[216px] h-[48px] mt-2 font-medium text-[11px] leading-[16px] text-[#FFFFFF99]">
                        <span>
                            Continue learning from anywhere with our user-friendly app and web platform.
                        </span>
                    </div>

                    <div className="flex w-[174px] h-[11px] gap-2 justify-center flex-col py-[32px] font-bold text-[14px] leading-[15px] text-[#51A2D2]">
                        <div className="flex items-center">
                            <span className="w-fit">Go to Web Platform</span>
                            <img src="./Features_Grid_Arrow.webp" className="w-[9px] h-[9px] ml-3" />
                        </div>

                        <div className="flex items-center">
                            <span className="w-fit">Install App</span>
                            <img src="./Features_Grid_Arrow.webp" className="w-[9px] h-[9px] ml-3" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const Eighth = () => {
    return (
        <div className="w-[352px] h-[167px] rounded-[15px]" >
            <img src="./Features_Grid_Eighth.webp" alt="Features_Grid_Second" draggable="false" />
        </div>
    );
}


const Ninth = () => {
    return (
        <div className="w-[352px] h-full rounded-[15px] overflow-hidden">
            <img
                src="./Features_Grid_Ninth.webp"
                alt="Features_Grid_Second"
                draggable="false"
                className="w-full h-full object-cover"
            />
        </div>
    );
};


const Twelveth = () => {
    return (
        <div className="w-[352px] h-full rounded-[15px] overflow-hidden">
            <img
                src="./Features_Grid_Ninth.webp"
                alt="Features_Grid_Second"
                draggable="false"
                className="w-full h-full object-cover scale-x-[-1]"
            />
        </div>
    );
};

const Tenth = () => {
    return (
        <div className="w-[352px] h-[259px] rounded-[15px] border-[0.75px] border-[#FFFFFF26]">
            <div className="m-7">
                <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center"
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.15) 100%)",
                        boxShadow: "0px 0px 0px 0.75px #FFFFFF1A inset",
                    }}>
                    <div className="w-[18px] h-[18px]">
                        <img src="./Features_Grid_Icon_Three.webp" alt="Chemical Vector" draggable="false" className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="mt-4">
                    <div className="w-[202px] text-[15px] font-semibold bg-gradient-to-r from-[#D1D0D3] to-[#FFFFFF] text-transparent bg-clip-text">
                        <span>Industry-relevant Curriculum & Immersive Study Material</span>
                    </div>

                    <div className="w-[216px] h-[48px] mt-2 font-medium text-[11px] leading-[16px] text-[#FFFFFF99]">
                        <span>
                            Forget obsolete, boring study material! Learn and practice only what matters in the industry with interactive content.
                        </span>
                    </div>

                    <div className="flex w-[174px] h-[11px] justify-center items-center py-[40px] font-bold text-[14px] leading-[15px] text-[#51A2D2]">
                        <span className="w-fit">View Content Library</span>
                        <img src="./Features_Grid_Arrow.webp" className="w-[9px] h-[9px] ml-3" />
                    </div>
                </div>

            </div>
        </div>
    )
}

const Eleventh = () => {
    return (
        <div className="w-[352px] h-[259px] rounded-[15px] border-[0.75px] border-[#FFFFFF26]">
            <div className="m-7">
                <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center"
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.15) 100%)",
                        boxShadow: "0px 0px 0px 0.75px #FFFFFF1A inset",
                    }}>
                    <div className="w-[18px] h-[18px]">
                        <img src="./Features_Grid_Icon_Four.webp" alt="Chemical Vector" draggable="false" className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="mt-4">
                    <div className="w-[202px] text-[15px] font-semibold bg-gradient-to-r from-[#D1D0D3] to-[#FFFFFF] text-transparent bg-clip-text">
                        <span>AI-enabled Learning and Placement Training</span>
                    </div>

                    <div className="w-[216px] h-[48px] mt-2 font-medium text-[11px] leading-[16px] text-[#FFFFFF99]">
                        <span>
                            Accelerate your learning and get career training with our advanced AI features.
                        </span>
                    </div>

                    <div className="flex w-[174px] h-[11px] justify-center items-center py-[40px] font-bold text-[14px] leading-[15px] text-[#51A2D2]">
                        <span className="w-fit">Try out AI Assitants</span>
                        <img src="./Features_Grid_Arrow.webp" className="w-[9px] h-[9px] ml-3" />
                    </div>
                </div>

            </div>
        </div>
    )
}



const Thirteenth = () => {
    return (
        <div
            className="w-[352px] h-[167px] rounded-[15px]"
            style={{
                background: `linear-gradient(225deg, rgba(0, 52, 82, 0.4) 4.57%, rgba(0, 16, 52, 0.2) 30.65%, rgba(0, 0, 0, 0.32) 52%), #0D0C17`,
            }}
        />
    );
};


const Sixteen = () => {
    return (
        <div
            className="w-[352px] h-[167px] rounded-[15px]"
            style={{
                background: `linear-gradient(120.6deg, rgba(0, 52, 82, 0.4) 4.57%, rgba(0, 16, 52, 0.2) 30.65%, rgba(0, 0, 0, 0.32) 52%), #0D0C17`,
            }}
        />
    )
}
