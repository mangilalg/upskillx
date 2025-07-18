import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import usePageTitle from '../hooks/use_page_title'
const API_URI = import.meta.env.VITE_API_URI;

export default function Signup() {
  let navigate = useNavigate()
  usePageTitle({title: 'Sign  up'});
  let [formData, setformData] = useState({
    name:'',
    email:'',
    password:'',
    profilePicture:'',
    age:''
  })


  async function handelsubmit(e) {
    e.preventDefault()

    let Data = {
      name:formData.name,
      email:formData.email,
      password:formData.password,
      profilePicture:formData.profilePicture,
      age:formData.age
    };

    let Res = await axios.post(`${API_URI}/user/signup`, Data )
    console.log(Res.data)
    navigate("/login");
  }


  function handelchange(e) {
    setformData({...formData , [e.target.name] : e.target.value})
    // console.log(e.target.name)
    // console.log(e.target.value)
  }



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create an account</h2>
          <p className="mt-2 text-sm text-gray-600">Join our learning platform</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handelsubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input 
                type='text' 
                name='name' 
                id="name"
                placeholder='Enter Name...' 
                value={formData.name} 
                onChange={handelchange}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type='email' 
                name='email' 
                id="email"
                placeholder='Enter Email...' 
                value={formData.email} 
                onChange={handelchange}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                type='text' 
                name='password' 
                id="password"
                placeholder='Enter Password...' 
                value={formData.password} 
                onChange={handelchange}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="profilePicture" className="sr-only">Profile Picture URL</label>
              <input 
                type='url' 
                name='profilePicture' 
                id="profilePicture"
                placeholder='Enter url...' 
                value={formData.profilePicture} 
                onChange={handelchange}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="age" className="sr-only">Age</label>
              <input 
                type='number' 
                name='age' 
                id="age"
                placeholder='Enter Age...' 
                value={formData.age} 
                onChange={handelchange}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button 
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
            >
              Sign up
            </button>
          </div>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account? 
            <Link to='/login' className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}