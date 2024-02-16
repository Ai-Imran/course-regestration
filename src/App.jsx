import { useState , useEffect} from 'react'

import './App.css'
import Courses from './components/Courses/Courses'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('course.json')
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);

  return (
    <>
      
      <h1 className='text-4xl text-purple-600 font-bold text-center mt-5'>Course Regestration</h1>
      <div className='lg:flex justify-between p-4 mx-auto mt-3'>
        <Courses></Courses>
        <Bookmarks></Bookmarks>
      </div>
      
    </>
  )
}

export default App
