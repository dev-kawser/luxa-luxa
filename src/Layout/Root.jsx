import Footer from "../Components/Shared/Footer/Footer"
import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Navbar/Nav";

const Root = () => {
    return (
        <div>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;