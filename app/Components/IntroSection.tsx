import { CardV1 } from "../UI/CardV1"
import { DualCard } from "../UI/DualCard"

export const IntroSection = () => {
    return(
        <div className="flex justify-center w-full h-[780px] bg-[#000E1C] ">
            <CardV1 />
            <DualCard />
        </div>
    )
}