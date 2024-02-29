import { Link } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";


const CoursePageCard = ({ course }) => {
    const { courseId, courseName, categoryName, totalClasses, trainerImageUrl, trainerName, price, thumbnail_url } = course;


    return (
        <div className=" mx-auto ">
            <div className="card card-compact  bg-base-100 shadow-xl">

                <figure><img src={thumbnail_url} alt="coursec" /></figure>
                <div className="card-body">
                    <button className="btn w-40 text-[#3a67ae]  btn-sm"><Link>{categoryName}</Link></button>

                    <h2 className="card-title  text-3xl">{courseName}</h2>
                    <div className="flex  items-center gap-2  bg-slate-100 p-1 mt-2 rounded-md">
                        <div className="p1 border-r-2 border-gray-400 pr-4 ">
                            <img className="w-6 " src={trainerImageUrl} alt="" />
                        </div>
                        <Link>  <p className="text-[#3a67ae]   font-semibold text-[16px]">{trainerName}</p></Link>
                    </div>
                    <div className="flex justify-between pl-4 pr-4 my-1">
                        <div className="flex gap-2 items-center">
                            <span className="text-xl mt-1"><IoBookOutline /></span>
                            <p className="text-[15px] font-semibold  text-zinc-400"> ক্লাস সংখ্যা {totalClasses}</p>
                        </div>
                        <div className="flex gap-2 items-center">

                            <p className="flex justify-end text-[15px] font-semibold text-red-400">$ কোর্স ফি {price}</p>
                        </div>


                    </div>

                    <Link to={`${courseId}`}>      <button className="btn text-white bg-gradient-to-r w-full font-semibold text-[16px] from-cyan-500 to-blue-500">
                        <samp className='text-xl'><BiCategoryAlt /></samp> Vew Course Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CoursePageCard;