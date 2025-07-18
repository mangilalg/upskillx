import React from 'react'

import Navbar from './Components/Navbar'
import Home from './Pages/Home.jsx'
import Courses from './Pages/Courses.jsx'
import EnrollCourses from './Pages/EnrollCourses.jsx'
import Contact from './Pages/Contact.jsx'
import MyCourses from './Pages/MyCourses.jsx'
import AdminDashboard from './Pages/admin/Dashboard.jsx'
import AdminCourses from './Pages/admin/courses.jsx'

import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
         <Navbar/>
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/courses'  element={<Courses/>}/>
            <Route path='/courses/enroll/:cid' element={<EnrollCourses/>}/>
            <Route path='/contact'  element={<Contact/>}/>
            <Route path='/my-courses'  element={<MyCourses/>}/>

            <Route path='/login'  element={<Login/>}/>
            <Route path='/signup'  element={<Signup/>}/>
            <Route path='/admin/Dashboard' element={<AdminDashboard/>}/>
            <Route path='/admin/courses' element={<AdminCourses/>}/>
          </Routes>
         </div>
      </BrowserRouter>
    </div>
  )
}