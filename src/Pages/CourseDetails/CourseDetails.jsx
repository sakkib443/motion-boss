import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import LeftTile from '../../Components/CourseDetailsC/LeftTile';
import CourseTopic from '../../Components/CourseDetailsC/CourseTopic';
import TrainerSection from '../../Components/CourseDetailsC/TrainerSection';

const CourseDetails = () => {
    const { id } = useParams()
    const [course, setCourse] = useState({})
    const [loaing, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch('https://raw.githubusercontent.com/sakkib443/motion-boss/master/public/course.json')
            .then(res => res.json())
            .then(data => {
                const filterCourse = data.find(item => item.courseId === id)
                setCourse(filterCourse)
                setLoading(false)
            })
    }, [id])
    if (loaing) return <Loader></Loader>
    return (
        <div >
            <div className='bg-gradient-to-r from-cyan-50 to-blue-50 py-4'> 
                <div className='flex lg:flex-row flex-col items-center justify-between w-10/12 mx-auto my-12  '>
                    <LeftTile courseId={course.courseId} courseName={course.courseName}></LeftTile>
                    <div><img className='w-[620px] rounded-2xl' src={course.thumbnail_url} alt="" /></div>
                </div>
            </div>

            <div className='my-20 w-10/12 mx-auto flex justify-between items-center px-20  '>
                <CourseTopic></CourseTopic>
                <TrainerSection></TrainerSection>
            </div>
        </div>
    );
};

export default CourseDetails;