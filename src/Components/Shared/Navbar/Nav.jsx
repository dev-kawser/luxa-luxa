import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";


const Nav = () => {

    const { user, LogOut } = useContext(AuthContext)

    const links = <>

        <li className="transition animate__animated animate__backInDown"><NavLink to="/">Home</NavLink></li>

        <li className="transition animate__animated animate__backInDown"><NavLink to="/about">About</NavLink></li>

        <li className="transition animate__animated animate__backInDown"><NavLink to="/update-profile">Update Profile</NavLink></li>

    </>


    return (
        <div className="navbar bg-base-100 mt-2 lg:mt-5 container mx-2 md:mx-5 lg:mx-auto">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content -mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to="/" className="lg:text-4xl animate__animated animate__fadeInDown text-base text-blue-500 font-bold"><span className="text-red-500">Luxuria</span>Luxe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu flex gap-3 menu-horizontal px-1 lg:text-2xl font-semibold">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex items-center gap-2">
                        <div data-tip={user.displayName} className="tooltip tooltip-left lg:flex hidden hover:scale-110 border-2 lg:p-1 border-blue-300">
                            <img className="w-10" alt="not found" src={user?.photoURL || "https://i.ibb.co/vj2yqYj/pp.jpg"} />
                        </div>
                        <div>
                            <button className="lg:btn lg:btn-outline mr-5 btn-sm bg-blue-500 text-white lg:font-bold" onClick={() => LogOut()}>Log Out</button>
                        </div>
                    </div> : <div>
                        <Link to="/login"><button className="btn btn-link lg:btn-outline font-bold">Login</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Nav;