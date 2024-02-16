import { useState , useEffect} from 'react'

import './App.css'
import Courses from './components/Courses/Courses'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  

  return (
    <>
      
      <div className="bg-gray-200 p-5">
      <h1 className='text-4xl text-purple-600 font-bold text-center  mt-5'>Course Regestration</h1>
      <div className='lg:flex justify-between p-4 mx-auto mt-3'>
        <Courses></Courses>
        <Bookmarks></Bookmarks>
      </div>
      </div>
      
    </>
  )
}

export default App
