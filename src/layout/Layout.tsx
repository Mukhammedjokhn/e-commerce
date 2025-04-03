import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import TopBar from "../components/topbar/TopBar";

const Layout = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <nav>
                <TopBar />
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};
export default Layout;
