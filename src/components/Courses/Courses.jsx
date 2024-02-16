import { useEffect,useState } from "react";
import Course from "./Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('course.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, []);

  
    return (
        <div className="w-2/3 grid grid-cols-3 p-3 gap-3">
            {
                courses.map(course => <Course key={course.id} course ={course}></Course>)
            }
        </div>
    );
};

export default Courses;