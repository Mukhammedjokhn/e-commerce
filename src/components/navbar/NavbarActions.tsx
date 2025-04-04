import { Search, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const NavbarActions = () => {
    return (
        <div className="flex items-center gap-8">
            <div className="flex items-center justify-between bg-[var(--secondary-200)] p-1.5 px-3 gap-2 rounded-sm w-[245px] h-9 border border-transparent focus-within:border focus-within:border-[var(--primary-dark)] duration-150">
                <input
                    type="text"
                    placeholder="What are you looking for ?"
                    className="text-xs outline-none w-full h-full"
                />
                <Search className="text-[2px] cursor-pointer" />
            </div>

            <Link to={"/wishlist"}>
                <Heart />
            </Link>
            <Link to={"/cart"} className="relative">
                <ShoppingCart />
                <p className="w-4 h-4 bg-[var(--button)] absolute -top-1 -right-2 text-xs flex items-center justify-center text-[var(--foreground-white)] rounded-full">
                    2
                </p>
            </Link>
            <Profile />
        </div>
    );
};
export default NavbarActions;
