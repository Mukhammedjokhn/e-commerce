import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    SendHorizonal,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 w-full h-[440px] flex flex-col justify-between pt-20">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-xl font-semibold mb-6">
                            Exclusive
                        </h2>
                        <div className="mb-4">
                            <p className="mb-2">Subscribe</p>
                            <p className="mb-4">Get 10% off your first order</p>
                            <div className="flex items-center justify-between border border-white h-12 rounded-sm px-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="outline-none h-full text-base"
                                />
                                <button className="cursor-pointer">
                                    <SendHorizonal size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <h2 className="text-xl font-semibold mb-6">Support</h2>
                        <address className="not-italic mb-2">
                            111 Bijoy sarani, Dhaka,
                            <br />
                            DH 1515, Bangladesh.
                        </address>
                        <p className="mb-2">exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>

                    <div className="md:col-span-1">
                        <h2 className="text-xl font-semibold mb-6">Account</h2>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    My Account
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Login / Register
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Cart
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Wishlist
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Shop
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h2 className="text-xl font-semibold mb-6">
                            Quick Link
                        </h2>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Terms Of Use
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h2 className="text-xl font-semibold mb-6">
                            Download App
                        </h2>
                        <p className="text-sm mb-2">
                            Save $3 with App New User Only
                        </p>

                        <div className="flex mb-4">
                            <div className="mr-4">
                                <img
                                    src="/qr-code-placeholder.png"
                                    alt="QR Code"
                                    className="w-24 h-24"
                                />
                            </div>
                            <div className="flex flex-col justify-center space-y-2">
                                <a href="#" className="block">
                                    <img
                                        src="/google-play.png"
                                        alt="Google Play"
                                        className="h-8"
                                    />
                                </a>
                                <a href="#" className="block">
                                    <img
                                        src="/app-store.png"
                                        alt="App Store"
                                        className="h-8"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-4">
                            <a
                                href="#"
                                className="hover:text-gray-400 transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-gray-400 transition-colors"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-gray-400 transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-gray-400 transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#222] pt-8 text-center text-[#333]">
                <p>© Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
