import { ArrowRight, ArrowLeft } from "lucide-react";

const ChevronButton = ({ position }: { position: "left" | "right" }) => {
    return position === "left" ? (
        <button className="w-10 h-10 rounded-full bg-[#eee] cursor-pointer flex items-center justify-center hover:bg-[#ddd] duration-150">
            <ArrowLeft size={18} />
        </button>
    ) : (
        <button className="w-10 h-10 rounded-full bg-[#eee] cursor-pointer flex items-center justify-center hover:bg-[#ddd] duration-150">
            <ArrowRight size={18} />
        </button>
    );
};
export default ChevronButton;
