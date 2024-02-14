import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "./Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="max-w-full">
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;