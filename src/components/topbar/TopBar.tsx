import { ChevronDown } from "lucide-react";

const TopBar = () => {
    return (
        <div className='w-full h-12 bg-[var(--background-dark)]'>
            <div className='container text-[var(--foreground-white)] flex items-center justify-between w-full h-full'>
                <div></div>
                <div className='text-[14px] flex items-center gap-3 h-full'>
                    <p className='font-light'>
                        Summer Sale For All Swim Suits And Free Express Delivery
                        - OFF 50%!
                    </p>
                    <button className='hover:text-[var(--primary-white)] font-semibold cursor-pointer underline'>
                        ShopNow
                    </button>
                </div>
                <div>
                    <button className='flex items-center gap-2 cursor-pointer'>
                        <p>English</p>
                        <ChevronDown />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default TopBar;
