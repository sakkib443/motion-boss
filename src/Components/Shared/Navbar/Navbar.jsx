
import { Link, NavLink } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { CiVideoOn } from "react-icons/ci";
import { IoCodeSlashSharp } from "react-icons/io5";
import { GoCodespaces } from "react-icons/go";
import logo from '../../../../public/img/Untitled-1.gif'

const Navbar = () => {

    const navlinks = <>
    <div className="flex text-[16px]">
        <li><NavLink to='/'>হোম </NavLink></li>
        <li><NavLink to='/course'>কোর্স সমূহ</NavLink></li>
        <li><NavLink to='/about'>আমাদের সম্পর্কে</NavLink></li>
        <li><NavLink to='/contact'>যোগাযোগ</NavLink></li>
        <li><NavLink to='/login'>লগইন</NavLink></li>
    </div>

</>

    return (
        <div className="shadow-md sticky bg-gradient-to-r from-cyan-100 to-blue-100  hover:bg-gradient-to-l top-0 z-50">
            <div className="navbar w-8/12 mx-auto bg-gradient-to-r from-cyan-100 to-blue-100  hover:bg-gradient-to-l">
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
                                <Link to='/'><img className='w-36' src={logo} alt="" /></Link>

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
                        <div className="dropdown dropdown-hover lg:-mr-4  z-50">
                            <div tabIndex={0} role="button" className="btn m-1 text-white bg-gradient-to-r font-semibold text-[16px] from-cyan-500 to-blue-500">
                                <samp className='text-xl hidden md:block  '><BiCategoryAlt /></samp> Vew Course</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-5 shadow bg-base-100 rounded-box w-64 text-[15px]">
                                <li className='  font-semibold'><a><span className="text-2xl"><GoCodespaces /></span>Advance Motion Graphics</a></li>
                                <li className='  font-semibold'><a ><span className="text-2xl"><CiVideoOn /></span>Advance Video Editing</a></li>
                                <li className='  font-semibold'><a href=""><span className="text-2xl"><IoCodeSlashSharp /></span>Professonal Web Development</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;