// import {useState} from 'react';
import { FaDollarSign,FaBookReader } from "react-icons/fa";


const Course = ({course}) => {
    const {cover,details,title,credit,price} = course
    return (
        <div className="bg-white rounded-lg p-4  text-center">
            <img className=" rounded-xl mb-4 " src={cover} alt="" />
            <h3 className="text-2xl font-bold">{title}</h3>
            <p>{details}</p>
            <div className="flex gap-1 items-center mt-5 ">
                <FaDollarSign />
                <h3>Price : {price} </h3>
                <FaBookReader />
                <h4>Credits : {credit}hr </h4>
            </div>
            <button className="bg-blue-700 text-white w-32 rounded-2xl mt-5 py-3">Select</button>
        </div>
    );
};

export default Course;