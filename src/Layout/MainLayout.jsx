import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "./Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-full">
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;