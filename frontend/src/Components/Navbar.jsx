import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import useAuthStore from "../store/authStore";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  // const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  // const userData = useAuthStore((state) => state.userData);
  // const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {  
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setIsLoggedIn(true);
        setUserData(storedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);

        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserData(null);
    // logout()
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
          <h1 className="text-white text-3xl font-bold tracking-wide">
            UpSkillX
          </h1>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <Link
            to="/"
            className="text-white hover:text-blue-200 font-medium transition duration-300 px-2"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-white hover:text-blue-200 font-medium transition duration-300 px-2"
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-200 font-medium transition duration-300 px-2 mr-2"
          >
            Contact
          </Link>

          {isLoggedIn && userData ? (
            <div className="relative group">
              <div className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-indigo-600 transition duration-300">
                  <img 
                    src={userData.profilePicture} 
                    alt={userData.name} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />
                <span className="text-white font-medium">{userData.name}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-white" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Simple Hoverable Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100">
                
                <div className="py-1">
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    Profile
                  </Link>
                  <Link to="/my-courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    My Courses
                  </Link>
                  <Link 
                    to="/settings" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    Settings
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <button className="bg-white text-indigo-700 hover:bg-blue-100 px-4 py-2 rounded-md font-medium transition duration-300 shadow-md">
                <Link to="/login" className="text-current">
                  Login
                </Link>
              </button>

              <button className="bg-indigo-900 text-white hover:bg-indigo-800 px-4 py-2 rounded-md font-medium transition duration-300 shadow-md border border-white">
                <Link to="/signup" className="text-current">
                  Signup
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}


