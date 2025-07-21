import { Navbar } from "./Navbar";

export const Hero = () => {
    return (
        <div className="bg-[#1C242E] w-full h-[860px] -mt-6 relative overflow-hidden">

            <div className="pt-[22px] ml-[55px]">
                <Navbar />
            </div>


            <div className="flex justify-center mt-[9px] items-center text-center">
                <div className="w-[882px] h-[208px]">
                    <div className="font-bold text-[#E0E0E0]">
                        <h1 className="text-[60px]">REDEFINE EDUCATION</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <h3 className="text-[#667FB6CC] font-bold text-[48px] mr-4">With</h3>
                        <img
                            src="./Main_Logo.png"
                            alt="Main Logo"
                            className="object-contain w-[363px] h-[119px]"
                        />
                    </div>
                </div>
            </div>


            <div className="flex items-center justify-center mt-8 relative w-[848px] h-[474px] mx-auto">

  <div
    className="absolute w-[676px] h-[400px] top-[24px] left-[86px] rounded-md z-10"
    style={{
      boxShadow: "0 0 120px 60px rgba(28, 64, 142, 0.4)",
      borderRadius: "8px"
    }}
  />

  <div className="absolute bg-[#1C408EB2] w-[676px] h-[400px] top-[24px] left-[86px] rounded-md z-20" />
  <img
    src="./Laptop_Clip_Art.png"
    alt="Laptop Clip Art"
    className="object-cover w-full h-full relative z-30"
  />
</div>




            <div
                className="absolute bg-[#1C408E] opacity-30 blur-[80px] rounded-full z-0"
                style={{
                    width: "361px",
                    height: "282px",
                    top: "363px",
                    left: "-162px",
                    transform: "rotate(-37deg)",
                }}
            >
                <div className="absolute opacity-20 bg-[#1C408E] blur-[100px] rounded-full" style={{
                    width: "141px",
                    height: "216px",
                    top: "631px",
                    left: "-16px",
                    transform: "rotate(-179deg)"
                }} />

                <div className="absolute bg-[#1DDDDF] rounded-full" style={{
                    width: "134px",
                    height: "213px",
                    top: "318px",
                    left: "233px",
                    transform: "rotate(-74deg)"
                }} />

                <div className="absolute bg-[#369FFF] rounded-full blur-[80px]" style={{
                    width: "247px",
                    height: "188px",
                    top: "265px",
                    left: "80px",
                    transform: "rotate(-37deg)"
                }} />
            </div>
        </div>
    );
};
