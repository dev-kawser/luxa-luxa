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

        <li className="hover:scale-110 transition animate__animated animate__backInRight lg:flex hidden"><NavLink style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "",
                borderBottom: isActive ? '5px solid red' : 'none'
            };
        }} to="/login">Login</NavLink></li>

        <li className="hover:scale-110 transition animate__animated animate__backInRight"><NavLink style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "",
                borderBottom: isActive ? '5px solid red' : 'none'
            };
        }} to="/update-profile">Update Profile</NavLink></li>

    </>


    return (
        <div className="navbar bg-base-100 mt-2 lg:mt-5 container mx-2 md:mx-5 lg:mx-auto">
            <div className="flex-1 hidden lg:flex ">
                <Link to="/" className="text-4xl animate__animated animate__backInLeft text-blue-500 font-bold"><span className="text-red-500">Luxuria</span>Luxe</Link>
            </div>
            <div className="flex-1 lg:hidden">
                <Link to="/" className="text-2xl text-blue-500 font-bold"><span className="text-red-500">L</span>L</Link>
            </div>
            <div className="flex-none gap-2 lg:gap-10">
                <div>
                    <ul className="flex gap-3 lg:gap-5 text-lg lg:text-2xl font-semibold">
                        {
                            links
                        }
                    </ul>
                </div>
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="not found" src={user ? user.photoURL : "https://i.ibb.co/vj2yqYj/pp.jpg"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className="text-xl font-semibold"><a>User name: {user?.displayName || "Name not found"}</a></li>
                            <li className="font-semibold text-xl" onClick={() => LogOut()}><a>Logout</a></li>
                        </ul>
                    </div> : ""
                }
            </div>
        </div>
    );
};

export default Navbar;