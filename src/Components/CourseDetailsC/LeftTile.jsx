import { IoBookOutline } from "react-icons/io5";
import prePrecordedLogo1 from '../../../public/img/Animation.gif'
import { Link } from "react-router-dom";

const LeftTile = ({ courseName, courseProject, courseClass, courseLength ,courseId}) => {
    return (
        <div>
            <div className='text-center lg:text-start '>
                <div className="flex justify-center lg:justify-normal items-center">
                    <span><img className="w-12 -mt-4" src={prePrecordedLogo1} alt="" /></span>
                    <h3 className='text-[17px] text-blue-500 font-semibold my-2'> দেশ সেরা কোর্স পাবেন এখানে</h3>
                </div>
                <div>
                    <span className="text-6xl font-bold  bg-gradient-to-r from-blue-500 to-cyan-500 
                         text-transparent bg-clip-text "> {courseName}</span>
                </div>
                <div className="flex gap-4 my-2">
                    <div className="border-2 py-2 w-44 text-center"><p>{courseLength} মাস মেয়াদি</p> </div>
                    <div className="border-2 py-2 w-44 text-center"><p>{courseClass} টি ক্লাস </p> </div>
                </div>
                <div className="flex gap-4">
                    <div className="border-2 py-2 w-44 text-center"><p>{courseProject} লাইভ প্রজেক্ট</p> </div>
                    <div className="border-2 py-2 w-72 text-center"><p>প্রতিদিন গুগল মিটের মাধ্যমে লাইভ সাপোর্ট</p> </div>
                </div>

                <div className='flex items-center justify-center lg:justify-start my-4'>
                    <div>
                        <Link to={`/${courseName}`}>
                            <button className="btn m-1 text-white bg-gradient-to-r font-semibold text-[16px] from-blue-500 to-cyan-500">
                                <span className="text-xl "><IoBookOutline /></span>
                                Start Your Course</button></Link>
                    </div>
                    <button className="btn btn-outline mx-4 btn-primary text-yellow-600">Contact us</button>
                </div>
            </div>
        </div>
    );
};

export default LeftTile;