import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Header from "../Components/Shared/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="font-sakib">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;