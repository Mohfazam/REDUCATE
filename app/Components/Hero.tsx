import { Navbar } from "./Navbar";

export const Hero = () => {
    return (
        <div
            className="w-full h-[600px] sm:h-[720px] lg:h-[860px] relative overflow-hidden"
            style={{
                background: `linear-gradient(0deg, rgba(2, 15, 57, 0.75), rgba(2, 15, 57, 0.75)),
                             radial-gradient(46.06% 43.64% at 30.61% 46.61%, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.08) 100%),
                             radial-gradient(47.18% 43.62% at 29.49% 46.59%, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.2) 100%)`,
                backgroundColor: "#1C242E",
            }}
        >
            <div className="w-full flex justify-center">
                <div className="w-[1200px] mt-[22px]">
                    <Navbar />
                </div>
            </div>
            <div className="flex justify-center mt-[6px] sm:mt-[8px] lg:mt-[9px] items-center text-center">
                <div className="w-full max-w-[600px] sm:max-w-[720px] lg:w-[882px] h-auto lg:h-[208px] px-4 sm:px-6 lg:px-0">
                    <div className="font-bold text-[#E0E0E0]">
                        <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-tight">REDEFINE EDUCATION</h1>
                    </div>
                    <div className="flex justify-center items-center flex-col sm:flex-row">
                        <h3 className="text-[#667FB6CC] font-bold text-[28px] sm:text-[36px] lg:text-[48px] mr-0 sm:mr-4 mt-4 sm:mb-0">With</h3>
                        <img
                            src="./Main_Logo.png"
                            alt="Main Logo"
                            className="object-contain w-[240px] sm:w-[300px] lg:w-[363px] h-[78px] sm:h-[98px] lg:h-[119px] -mt-2"
                            draggable="false"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mt-4 sm:mt-5 lg:mt-6 relative w-[350px] sm:w-[640px] lg:w-[848px] h-[260px] sm:h-[380px] lg:h-[474px] mx-auto">
                <div
                    className="absolute w-[280px] sm:w-[512px] lg:w-[676px] h-[175px] sm:h-[320px] lg:h-[400px] top-[40px] sm:top-[19px] lg:top-[24px] left-[35px] sm:left-[64px] lg:left-[86px] rounded-md z-10"
                    style={{
                        boxShadow: "0 0 60px 30px rgba(28, 64, 142, 0.4), 0 0 120px 60px rgba(28, 64, 142, 0.4)",
                        borderRadius: "8px",
                    }}
                />

                <div className="absolute bg-[#1C408EB2] w-[280px] sm:w-[512px] lg:w-[676px] h-[175px] sm:h-[320px] lg:h-[400px] top-[40px] sm:top-[19px] lg:top-[24px] left-[35px] sm:left-[64px] lg:left-[86px] rounded-md z-40" />

                <img
                    src="./Laptop_Clip_Art.png"
                    alt="Laptop Clip Art"
                    className="object-contain w-full h-full relative z-30"
                    draggable="false"
                />
            </div>

            <div
                className="absolute bg-[#1C408E] opacity-30 blur-[40px] sm:blur-[60px] lg:blur-[80px] rounded-full z-0"
                style={{
                    width: "180px",
                    height: "141px",
                    top: "200px",
                    left: "-80px",
                    transform: "rotate(-37deg)",
                }}
            >
                <div
                    className="absolute opacity-20 bg-[#1C408E] blur-[50px] sm:blur-[75px] lg:blur-[100px] rounded-full"
                    style={{
                        width: "70px",
                        height: "108px",
                        top: "315px",
                        left: "-8px",
                        transform: "rotate(-179deg)",
                    }}
                />
                <div
                    className="absolute bg-[#1DDDDF] rounded-full"
                    style={{
                        width: "67px",
                        height: "106px",
                        top: "159px",
                        left: "116px",
                        transform: "rotate(-74deg)",
                    }}
                />
                <div
                    className="absolute bg-[#369FFF] rounded-full blur-[40px] sm:blur-[60px] lg:blur-[80px]"
                    style={{
                        width: "123px",
                        height: "94px",
                        top: "132px",
                        left: "40px",
                        transform: "rotate(-37deg)",
                    }}
                />
                <div
                    className="absolute bg-[#369FFF] rounded-full blur-[50px] sm:blur-[75px] lg:blur-[100px]"
                    style={{
                        width: "122px",
                        height: "94px",
                        top: "311px",
                        left: "600px",
                    }}
                />
            </div>

            {/* Background decorative elements - scaled for mobile */}
            <div
                className="absolute bg-[#1C408E] opacity-30 blur-[40px] sm:blur-[60px] lg:blur-[80px] rounded-full z-0"
                style={{
                    width: "180px",
                    height: "141px",
                    top: "200px",
                    left: "-80px",
                    transform: "rotate(-37deg)",
                }}
            />
            
            {/* Additional elements for sm and up */}
            <div
                className="hidden sm:block absolute bg-[#1C408E] opacity-30 blur-[60px] lg:blur-[80px] rounded-full z-0"
                style={{
                    width: "270px",
                    height: "211px",
                    top: "280px",
                    left: "-120px",
                    transform: "rotate(-37deg)",
                }}
            />

            {/* Original large decorative elements for lg screens */}
            <div
                className="hidden lg:block absolute bg-[#1C408E] opacity-30 blur-[80px] rounded-full z-0"
                style={{
                    width: "361px",
                    height: "282px",
                    top: "363px",
                    left: "-162px",
                    transform: "rotate(-37deg)",
                }}
            >
                <div
                    className="absolute opacity-20 bg-[#1C408E] blur-[100px] rounded-full"
                    style={{
                        width: "141px",
                        height: "216px",
                        top: "631px",
                        left: "-16px",
                        transform: "rotate(-179deg)",
                    }}
                />
                <div
                    className="absolute bg-[#1DDDDF] rounded-full"
                    style={{
                        width: "134px",
                        height: "213px",
                        top: "318px",
                        left: "233px",
                        transform: "rotate(-74deg)",
                    }}
                />
                <div
                    className="absolute bg-[#369FFF] rounded-full blur-[80px]"
                    style={{
                        width: "247px",
                        height: "188px",
                        top: "265px",
                        left: "80px",
                        transform: "rotate(-37deg)",
                    }}
                />
                <div
                    className="absolute bg-[#369FFF] rounded-full blur-[100px]"
                    style={{
                        width: "245px",
                        height: "189px",
                        top: "623px",
                        left: "1200px",
                    }}
                />
            </div>

            <div className="absolute w-full h-[32px] sm:h-[44px] lg:h-[56px] bottom-0">
                <img src="./Arch.webp" alt="Hero Bottom Arch" draggable="false" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};