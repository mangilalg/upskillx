import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const API_URI = import.meta.env.VITE_API_URI;

export default function EnrollCourses() {
    let { cid } = useParams()
    const [enrollcourses, setEnrollcourses] = useState([])

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (!token) {
            return;
        }

        async function getdata() {
            let Res = await axios.get(`${API_URI}/course/${cid}`, {
                headers: { 'Authorization': token }
            })
            // console.log(Res.data)
            setEnrollcourses(Res.data)
        }
        getdata()
    }, [])
    
    //new banaya
    const EnrollCourse = (courseId) => {
        let token = localStorage.getItem('token')
        if (!token) {
            return;
        }

        async function setdata() {
            let Res = await axios.post(`${API_URI}/Enroll/createEnrolled`, {
                "courseId": courseId
            }, {
                headers: { 'Authorization': token }
            })
            // console.log(Res.data)
            setEnrollcourses(Res.data)
        }
        setdata()
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Course Details
                    </span>
                </h1>
                
                {!enrollcourses._id ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-pulse text-gray-500">Loading course details...</div>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-2/5">
                                <div className="h-64 md:h-full overflow-hidden">
                                    <img 
                                        src={enrollcourses.poster} 
                                        alt={enrollcourses.name} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="md:w-3/5 p-8">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{enrollcourses.name}</h2>
                                    <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                                        {enrollcourses.duration}
                                    </span>
                                </div>
                                
                                <div className="mb-6">
                                    <span className="text-2xl font-bold text-blue-600">${enrollcourses.price}</span>
                                    {enrollcourses.originalPrice && (
                                        <span className="ml-2 text-lg text-gray-400 line-through">
                                            ${enrollcourses.originalPrice}
                                        </span>
                                    )}
                                </div>
                                
                                <div className="space-y-4 mb-8">
                                    <p className="text-gray-700 leading-relaxed">{enrollcourses.description}</p>

                                </div>
                                
                                <button 
                                    onClick={() => {EnrollCourse(enrollcourses._id)}}
                                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}