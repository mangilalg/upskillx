import React, { useState } from 'react'
import axios from 'axios'
const API_URI = import.meta.env.VITE_API_URI;

export default function courses() {
  let [adminformData, setadminformData] = useState({
    name: '',
    poster: '',
    duration: '',
    price: '',
    description: ''
  })

  async function handelSubmit(e) {
    e.preventDefault();
    
    let Data = {
      name: adminformData.name,
      poster: adminformData.poster,
      duration: adminformData.duration,
      price: adminformData.price,
      description: adminformData.description
    }
   
    const token = localStorage.getItem("token"); // Get auth token

    if (!token) {
      alert("You must be logged in to create a course.");
      return;
    }

    let Res = await axios.post(`${API_URI}/course/create`, Data,{
      headers: {'Authorization':token} 
    })
    console.log(Res.data);  
  }

  
  function handelChange(e) {
    setadminformData({...adminformData, [e.target.name]: e.target.value})
  }
  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create New Course</h2>
      <form onSubmit={handelSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
          <input 
            id="name"
            name="name" 
            value={adminformData.name} 
            type="text" 
            placeholder="Enter course name" 
            onChange={handelChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="poster" className="block text-sm font-medium text-gray-700 mb-1">Poster URL</label>
          <input 
            id="poster"
            name="poster" 
            value={adminformData.poster} 
            type="url" 
            placeholder="Enter poster URL" 
            onChange={handelChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration (hours)</label>
          <input 
            id="duration"
            name="duration" 
            value={adminformData.duration} 
            type="Number" 
            placeholder="Enter duration" 
            onChange={handelChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price</label>
          <input 
            id="price"
            name="price" 
            value={adminformData.price} 
            type="Number" 
            placeholder="Enter price" 
            onChange={handelChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea 
            id="description"
            name="description" 
            value={adminformData.description} 
            placeholder="Enter description" 
            onChange={handelChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
        >
          Create Course
        </button>
      </form>
    </div>
  )
}