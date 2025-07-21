import { Navbar } from "./Navbar";

export const Hero = () => {
    return (
        <div className="bg-[#1C242E] w-full h-[860px] -mt-6" >

            <div>
                <div className="pt-[22px] ml-[55px]">
                    <Navbar />
                </div>
            </div>

            <div className="flex justify-center mt-[9px] items-center text-center">
                <div className="w-[882px] h-[208px]">
                    <div className="w-[882px] h-[107px] font-bold text-[#E0E0E0]">
                        <h1 className="text-[70px]">REDEFINE EDUCATION</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <h3 className="text-[#667FB6CC] text-bold text-[48px]">With</h3>
                        <div>
                            <img src="./Main_Logo.png" className="object-contain w-[363px] h-[119px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
