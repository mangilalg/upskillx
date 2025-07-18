// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import usePageTitle from '../hooks/use_page_title'
// import useAuthStore from "../store/authStore";
// const API_URI = import.meta.env.VITE_API_URI;

// //Google login
// import jwtDecode from 'jwt-decode'

// export default function Login() {
//   let navigate = useNavigate();
  
//   usePageTitle({title: 'Login'});
//   const login = useAuthStore((state) => state.login);
  
//   let [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });


// //Check for Google oauth20 
// useEffect(()=>{
//   if(token){
//     try {
//       const decodeUser = jwtDecode(token);

//       localStorage.setItem('token', token)
//       localStorage.setItem('user', JSON.stringify(decodeUser));

//       window.history.replaceState({}, document.title, window.location.pathname);

//       navigate('/');
//     } catch (error) {
//       seterror('Invalid authentication token');
//     }
//   }
// })


//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       let Res = await axios.post(`${API_URI}/user/login`, formData);
//       console.log(Res.data);
 
//       if (Res.data.token) {
//         localStorage.setItem('token', Res.data.token);
//         localStorage.setItem('user', JSON.stringify(Res.data.user));
//         // login()
//         navigate("/");
//       } else {
//         alert(Res.data.message);
//       }

//     } catch (error) {
//       console.error("Login failed:", error);
//       // alert(error.response.data.message);
//     }
//   }

//   function handleChange(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
//         <div className="text-center">
//           <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Log In As a User</h2>
//           <p className="mt-2 text-sm text-gray-600">Access your account</p>
//         </div>
        
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="email" className="sr-only">Email</label>
//               <input 
//                 type="text" 
//                 name="email" 
//                 id="email"
//                 placeholder="Enter your email..." 
//                 value={formData.email} 
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
//               />
//             </div>
            
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input 
//                 type="password" 
//                 name="password" 
//                 id="password"
//                 placeholder="Enter your password..." 
//                 value={formData.password} 
//                 onChange={handleChange} 
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               />
//             </div>
//           </div>
          
//           <div>
//             <button 
//               type="submit"
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
//             >
//               Log In 
//             </button>
//           </div>
//         </form>
        
//         <button>Google</button>

//         <div className="flex items-center justify-between">
//           <div className="text-sm">
//             <Link to="/admin/login" className="font-medium text-indigo-600 hover:text-indigo-500">
//               login as a admin
//             </Link>
//           </div>
//           <div className="text-sm">
//             <Link to='/signup' className="font-medium text-indigo-600 hover:text-indigo-500">
//               Create account
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import usePageTitle from '../hooks/use_page_title';
import useAuthStore from "../store/authStore";
import {jwtDecode} from 'jwt-decode';

const API_URI = import.meta.env.VITE_API_URI;

export default function Login() {
  let navigate = useNavigate();
  usePageTitle({ title: 'Login' });
  const login = useAuthStore((state) => state.login);

  let [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  let [error, setError] = useState('');

  // Check for Google OAuth token in URL and login the user
  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
  
    if (token) {
      try {
        console.log("Received Token:", token);
        const decodedUser = jwtDecode(token);
  
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(decodedUser));
  
        window.history.replaceState({}, document.title, window.location.pathname);
        navigate("/");
      } catch (err) {
        console.error("Token Decoding Error:", err);
        setError("Invalid authentication token");
      }
    }
  }, []);
  

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let Res = await axios.post(`${API_URI}/user/login`, formData);
      console.log(Res.data);

      if (Res.data.token) {
        localStorage.setItem('token', Res.data.token);
        localStorage.setItem('user', JSON.stringify(Res.data.user));
        login();
        navigate("/");
      } else {
        setError(Res.data.message);
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.response?.data?.message || "An error occurred");
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleGoogleLogin() {
    window.location.href = `${API_URI}/user/auth/google`;  // ✅ Corrected API route
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Log In As a User</h2>
          <p className="mt-2 text-sm text-gray-600">Access your account</p>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email..."
                value={formData.email}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
                value={formData.password}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
            >
              Log In
            </button>
          </div>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
        >
          Login with Google
        </button>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link to="/admin/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Login as an admin
            </Link>
          </div>
          <div className="text-sm">
            <Link to='/signup' className="font-medium text-indigo-600 hover:text-indigo-500">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
