import { Link, NavLink, } from "react-router-dom";
import logo from '../../../../public/img/Untitled-1.gif'
import useAuth from "../../../Hooks/useAuth";
import { GoChevronDown } from "react-icons/go";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { FiShoppingCart } from "react-icons/fi";
import useAdmin from "../../../Hooks/useAdmin";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart()
    const [isAdmin] = useAdmin();
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
            {/* <li><NavLink to='/contact'>যোগাযোগ</NavLink></li> */}

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
                            user && isAdmin && <div className=" flex gap-1">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-2">
                                    <Link to='/profile/my-cart'>
                                        <div className="indicator ">
                                            <IoMdNotificationsOutline className="text-2xl " />
                                            <span className="badge badge-sm indicator-item p-2  bg-red-500 text-white">{cart.length}</span>
                                        </div></Link>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost border-2 border-gray-300  flex flex-col md:flex-row ">
                                        <img className="w-10 h-10 hidden md:block rounded-full" src={user.photoURL} alt="" />
                                        <h1>{user.displayName}</h1>
                                        <p><GoChevronDown className="text-xl" /></p>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to='/profile/adminHome'>
                                               Profile 
                                            </Link>
                                        </li>
                                        <li><Link>Settings</Link></li>
                                        <li><button onClick={handleLogOut}>Log Out</button></li>
                                    </ul>
                                </div>
                            </div>
                        }

                        {
                            user && !isAdmin && <div className=" flex gap-1">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-2">
                                    <Link to='/profile/my-cart'>
                                        <div className="indicator ">
                                            <FiShoppingCart className="text-xl mr-2" />
                                            <span className="badge badge-sm indicator-item p-2 -mt-[2px] bg-red-500 text-white">{cart.length}</span>
                                        </div></Link>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost border-2 border-gray-300  flex flex-col md:flex-row ">
                                        <img className="w-10 h-10 hidden md:block rounded-full" src={user?.photoURL} alt="" />
                                        <h1>{user?.displayName}</h1>
                                        <p><GoChevronDown className="text-xl" /></p>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to='/profile/userHome'>
                                                Profile
                                            </Link>
                                        </li>
                                        <li><Link>Setting</Link></li>
                                        <li><button onClick={handleLogOut}>Log Out</button></li>
                                    </ul>
                                </div>
                            </div>
                        }
                        {
                            !user && !isAdmin && <div className="text-[17px]">
                                <Link to='/login' className='border-r-2 border-[#FDC449] mr-3  pr-3'>Login</Link>
                                <Link to='/signup' className=''>Register</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
