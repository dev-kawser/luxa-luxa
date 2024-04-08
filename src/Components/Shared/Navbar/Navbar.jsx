import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";


const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext)
    const links = <>

        <li className="hover:scale-110 transition animate__animated animate__backInRight"><NavLink style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "",
                borderBottom: isActive ? '5px solid red' : 'none'
            };
        }} to="/">Home</NavLink></li>

        <li className="hover:scale-110 transition animate__animated animate__backInRight"><NavLink style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "",
                borderBottom: isActive ? '5px solid red' : 'none'
            };
        }} to="/about">About</NavLink></li>


        <li className="hover:scale-110 lg:flex hidden transition animate__animated animate__backInRight"><NavLink style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "",
                borderBottom: isActive ? '5px solid red' : 'none'
            };
        }} to="/update-profile">Update Profile</NavLink></li>

    </>


    return (
        <div className="navbar pl-5 bg-base-100 mt-2 lg:mt-5 container mx-2 md:mx-5 lg:mx-auto">
            <div className="flex-1 ml-4 hidden lg:flex ">
                <Link to="/" className="text-4xl animate__animated animate__jackInTheBox text-blue-500 font-bold"><span className="text-red-500">Luxuria</span>Luxe</Link>
            </div>
            <div className="flex-1 ml-4 lg:hidden">
                <Link to="/" className="text-2xl animate__animated animate__jackInTheBox text-blue-500 font-bold"><span className="text-red-500">L</span>L</Link>
            </div>
            <div className="flex-none gap-2 lg:gap-10">
                <div>
                    <ul className="flex gap-3 lg:gap-5 text-base lg:text-2xl font-semibold">
                        {
                            links
                        }
                    </ul>
                </div>
                {
                    user ? <div className="flex items-center gap-2">
                        <div data-tip={user.displayName} className="tooltip tooltip-bottom hover:scale-110 border-2 lg:p-1 border-black">
                            <img className="w-10" alt="not found" src={user ? user.photoURL : "https://i.ibb.co/vj2yqYj/pp.jpg"} />
                        </div>
                        <div>
                            <button className="lg:btn btn-sm bg-blue-500 text-white lg:font-bold" onClick={() => LogOut()}>Log Out</button>
                        </div>
                    </div> : <div>
                        <Link to="/login"><button className="btn btn-link lg:btn-outline font-bold">Login</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;