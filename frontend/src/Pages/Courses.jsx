import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, Link} from 'react-router-dom'
const API_URI = import.meta.env.VITE_API_URI;

export default function Courses() {
  let navigate = useNavigate();
  let [card, setcard] = useState([])


  useEffect(()=>{
    let token = localStorage.getItem('token')
    if(!token){
      return;
    }
    
       async function getdata() {
            let Res = await axios.get(`http://localhost:5500/api/course`,{
                headers: {'Authorization':token}
            })
            setcard(Res.data)
       }
       getdata()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        { 
          card.map((c) => (
            <div 
              key={c._id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <img 
                src={c.poster} 
                alt={c.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-green-600 font-bold">{c.duration}</span>
                  <span className="text-blue-600 font-bold text-lg">${c.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{c.description}</p>
                <button onClick={()=>{
                  navigate(`/Courses/enroll/${c._id}`)
                }} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Enroll Now
                </button>
                
                {/* <select name="" id="">
                  <option onClick={} value="">hii</option>
                  <option value="">hii</option>
                  <option value="">hii</option>
                  <option value="">hii</option>
                  <option value="">hii</option>
                </select> */}

              </div>
            </div>
          ))
        }
      </div>

<br/>
<br/>

{/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">UpSkillX</h3>
              <p className="text-gray-400 mb-6">Empowering individuals to master new skills and advance their careers through quality online education.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
                <li><Link to="/courses" className="text-gray-400 hover:text-white transition duration-300">Courses</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition duration-300">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Categories</h4>
              <ul className="space-y-3">
                <li><Link to="/category/development" className="text-gray-400 hover:text-white transition duration-300">Development</Link></li>
                <li><Link to="/category/business" className="text-gray-400 hover:text-white transition duration-300">Business</Link></li>
                <li><Link to="/category/data-science" className="text-gray-400 hover:text-white transition duration-300">Data Science</Link></li>
                <li><Link to="/category/design" className="text-gray-400 hover:text-white transition duration-300">Design</Link></li>
                <li><Link to="/category/marketing" className="text-gray-400 hover:text-white transition duration-300">Marketing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
              <form className="space-y-3">
                <div>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2025 UpSkillX. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition duration-300">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition duration-300">Terms of Service</Link>
                <Link to="/faq" className="text-gray-400 hover:text-white text-sm transition duration-300">FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}