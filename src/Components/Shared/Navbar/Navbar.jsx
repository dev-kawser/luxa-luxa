import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink>Update Profile</NavLink></li>
        <li><NavLink>User Profile</NavLink></li>

    </>


    return (
        <div className="navbar bg-base-100 mt-2 lg:mt-5 container mx-2 lg:mx-auto">
            <div className="flex-1">
                <Link to="/" className="text-4xl text-blue-500 font-bold"><span className="text-red-500">Luxuria</span>Luxe</Link>
            </div>
            <div className="flex-none gap-10">
                <div>
                    <ul className="lg:flex hidden gap-5 text-xl font-semibold">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="user" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>User name:</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;