import { useEffect, useState } from 'react';

const CourseDetails = () => {
    console.log('ddddddddddddddd')
    const [course, setCourse] =useState({})
    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>console.log( 'sssssssssssssssss',data))
    },[])
    return (
        <div>
          
        </div>
    );
};

export default CourseDetails;