import { Link } from 'react-router-dom';
import { FaPhoneVolume } from "react-icons/fa6";


const Header = () => {
    return (
        <div className='border-b-2 bg-[#211B52] text-white'>
            <div className='flex items-center justify-between  w-10/12 mx-auto'>
                <div>
                    <div className="flex items-center gap-4 px-2 py-0 my-2  rounded-md ">
                        <span className="text-[#FDC449]">< FaPhoneVolume /></span>
                        <h2 className='text-[#FDC449]'>+8801730481212 </h2>
                    </div>
                </div>
                <div className='flex'>
                    <div className="md:mr-12  ">
                        <label className="flex  cursor-pointer gap-2 items-center ">
                            <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <input type="checkbox" value="synthwave" className="toggle theme-controller w-12 h-[22px]" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                    {/* <div className="">
                        <Link to='/login' className='border-r-2 border-[#FDC449] mr-2  pr-2'>Login</Link>
                        <Link to='/signup' className=''>Register</Link>


                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Header;