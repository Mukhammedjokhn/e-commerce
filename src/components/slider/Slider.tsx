import { ArrowRight } from "lucide-react";
import appleLogo from "../../assets/apple-logo.png";
import iphoneImage from "../../assets/iphone-14-pro.png";
import { useState } from "react";

const Slider = () => {
    const [isSelected, setIsSelected] = useState(0);

    const pagination = ["", "", "", "", ""];
    return (
        <div className="w-full h-[350px] bg-black flex items-center relative">
            <div className="w-full h-full px-16 pt-12 text-[var(--foreground-white)]">
                <div className="flex items-center gap-5">
                    <img src={appleLogo} alt="" />
                    <p>iPhone 14 Series</p>
                </div>
                <h1 className="text-5xl font-semibold mt-5 leading-16">
                    Up to 10% <br /> off Voucher
                </h1>
                <button className="text-base flex items-center gap-2 mt-5 cursor-pointer">
                    <div>
                        Shop Now
                        <p className="w-full h-[1px] bg-[var(--foreground-white)] mt-[2px]"></p>
                    </div>
                    <ArrowRight />
                </button>
            </div>
            <div className="h-full w-full pt-5">
                <img src={iphoneImage} alt="" />
            </div>

            <div className="flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2">
                {pagination.map((_item, index) => (
                    <button
                        key={index}
                        className={`border-2  ${
                            index === isSelected
                                ? "border-[var(--foreground-white)] bg-[var(--button)]"
                                : "border-transparent bg-[var(--foreground-grey)]"
                        } w-3 h-3 rounded-full cursor-pointer transition-all duration-150`}
                        onClick={() => setIsSelected(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};
export default Slider;
