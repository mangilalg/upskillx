import React, { useState, useEffect, use } from 'react'
import axios from 'axios'
const API_URI = import.meta.env.VITE_API_URI;

 export default function MyCourses() {
  let [mycourses, setmyCourses] = useState([])

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (!token) {
      return;
    }
    
    async function getdata() {
      let Res = await axios.get(`${API_URI}/Enroll/getEnrolled`, 
        {
          headers: { 'Authorization': token }
        }
      )
      
      setmyCourses(Res.data)
      console.log(Res.data)
      // debugger;
    }
    getdata()
  }, [])
  
  
  useEffect(() => {
    console.log(mycourses)
  },[mycourses])
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">My Courses</h2>
      
      {mycourses.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">You haven't enrolled in any courses yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mycourses.map((e) => (
            <div key={e._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative pb-2/3">
                <img 
                  src={e.courseId?.poster} 
                  alt={e.courseId?.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{e.courseId?.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{e.courseId?.description}</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}