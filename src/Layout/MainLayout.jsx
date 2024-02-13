import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-full">
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default MainLayout;