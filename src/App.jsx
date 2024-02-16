import { useState , } from 'react'

import './App.css'
import Courses from './components/Courses/Courses'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [markRead, setMarkRead] = useState([]);
  const [cre, setCre] = useState(0);
  const [prices, setPrice] = useState(0);

  const handleBookMraks = (bookmark,credit,price) => {
  const markReads = [...markRead,bookmark]
  setMarkRead(markReads)

   const newCredit = cre + credit;
  setCre(newCredit)

  // const newPrice = prices + price;
  // console.log(newPrice.toFixed());
  
  // setPrice(newPrice.toFixed(5))


  //
 }
  
  

  return (
    <>
      
      <div className="bg-gray-200 p-5">
      <h1 className='text-4xl text-purple-600 font-bold text-center  mt-5'>Course Regestration</h1>
      <div className='lg:flex justify-center gap-6 items-start p-4 mx-auto mt-3'>
        <Courses handleBookMraks={handleBookMraks} ></Courses>
        <Bookmarks cre={cre} markRead={markRead} prices={prices}></Bookmarks>
      </div>
      </div>
      
    </>
  )
}

export default App
