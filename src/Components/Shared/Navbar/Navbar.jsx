import { Link, NavLink } from "react-router-dom";
import logo from '../../../../public/img/Untitled-1.gif'
import useAuth from "../../../Hooks/useAuth";
import { GoChevronDown } from "react-icons/go";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Loout successfully",
                    text: "See You Again",
                    icon: "success"
                })
            })
            .catch(error => console.log(error))
    }

    const navlinks = <>
        <div className="flex text-[16px]">
            <li><NavLink to='/'>হোম </NavLink></li>
            <li><NavLink to='/course'>কোর্স সমূহ</NavLink></li>
            <li><NavLink to='/about'>আমাদের সম্পর্কে</NavLink></li>
            <li><NavLink to='/contact'>যোগাযোগ</NavLink></li>

        </div>
    </>

    return (
        <div className="shadow-md sticky bg-gradient-to-r from-cyan-100 to-blue-100  hover:bg-gradient-to-l top-0 z-50">
            <div className="navbar w-10/12 mx-auto bg-gradient-to-r from-cyan-100 to-blue-100  hover:bg-gradient-to-l">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>

                    <div>
                        <div>
                            <div className=" flex-1 block ">
                                <Link to='/'><img className='w-32' src={logo} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end z-50">
                    <div>


                        {
                            user ? <div className=" flex gap-1">

                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">0</span>
                                    </div>
                                </div>

                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost border-2 border-gray-300  flex flex-col md:flex-row ">
                                        <img className="w-10 hidden md:block rounded-full" src={user.photoURL} alt="" />
                                        <h1>{user.displayName}</h1>
                                        <p><GoChevronDown className="text-xl" /></p>

                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><button onClick={handleLogOut}>Log Out</button></li>
                                    </ul>
                                </div>
                            </div>
                                :
                                <> <div className="text-[17px]">
                                    <Link to='/login' className='border-r-2 border-[#FDC449] mr-3  pr-3'>Login</Link>
                                    <Link to='/signup' className=''>Register</Link>
                                </div></>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
