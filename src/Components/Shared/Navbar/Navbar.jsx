import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";


const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext)
    console.log(user);
    const links = <>

        <li className="hover:scale-110 transition"><NavLink style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "",
                borderBottom: isActive ? '5px solid red' : 'none'
            };
        }} to="/">Home</NavLink></li>

        <li className="hover:scale-110 transition"><NavLink style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "",
                borderBottom: isActive ? '5px solid red' : 'none'
            };
        }} to="/about">About</NavLink></li>

        <li className="hover:scale-110 transition"><NavLink style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "",
                borderBottom: isActive ? '5px solid red' : 'none'
            };
        }} to="/login">Login</NavLink></li>

        <li className="hover:scale-110 transition"><NavLink style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "",
                borderBottom: isActive ? '5px solid red' : 'none'
            };
        }} to="/update-profile">Update Profile</NavLink></li>

    </>


    return (
        <div className="navbar bg-base-100 mt-2 lg:mt-5 container mx-2 lg:mx-auto">
            <div className="flex-1">
                <Link to="/" className="text-4xl text-blue-500 font-bold"><span className="text-red-500">Luxuria</span>Luxe</Link>
            </div>
            <div className="flex-none gap-10">
                <div>
                    <ul className="lg:flex hidden gap-5 text-2xl font-semibold">
                        {
                            links
                        }
                    </ul>
                </div>
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="user photo not found" src={user.photoURL || "https://i.ibb.co/vj2yqYj/pp.jpg"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className="text-xl"><a>User name: {user.displayName || "Name not found"}</a></li>
                            <li className="font-semibold text-xl" onClick={() => LogOut()}><a>Logout</a></li>
                        </ul>
                    </div> : ""
                }
            </div>
        </div>
    );
};

export default Navbar;