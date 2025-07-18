import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // Featured courses data
  const featuredCourses = [
    { id: 1, title: "Web Development Fundamentals", category: "Development", image: "https://alberta.college/wp-content/uploads/2023/03/Web-Development-Fundamentals-1024x615.png", rating: 4.8, students: 3240 },
    { id: 2, title: "Machine Learning Essentials", category: "Data Science", image: "https://www.chatgptbotsai.com/wp-content/uploads/2023/05/16268343_rm373batch5-blogbanner-02-scaled.jpg", rating: 4.9, students: 2876 },
    { id: 3, title: "UX/UI Design Principles", category: "Design", image: "https://blog.cubos.academy/content/images/2023/02/UI-Ux-Designer.jpg", rating: 4.7, students: 1985 },
  ];

  // Testimonials data
  const testimonials = [
    { id: 1, name: "Sarah Johnson", role: "Frontend Developer", image: "https://thumbs.dreamstime.com/z/portrait-smiling-male-college-student-holding-books-white-background-67527198.jpg", text: "The web development course was exactly what I needed to land my dream job. The instructors were knowledgeable and the projects were challenging yet achievable." },
    { id: 2, name: "Michael Chen", role: "Data Scientist", image: "https://www.westend61.de/images/0001411499pw/portrait-of-smiling-male-student-in-corridor-of-university-MASF19099.jpg", text: "UpSkillX transformed my career. I went from knowing basic statistics to implementing complex machine learning models in just 3 months." },
  ];

  return (
    <div className=" w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Elevate Your Skills with <span className="text-blue-200">UpSkillX</span>
              </h1>
              <p className="text-blue-100 text-xl mb-8">
                Learn in-demand skills from industry experts and transform your career path.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link to="/courses" className="bg-white text-indigo-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-lg text-center">
                  Explore Courses
                </Link>
                <Link to="/signup" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-indigo-700 px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-md text-center">
                  Join Free
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Learning illustration" 
                className="rounded-xl shadow-2xl max-w-full hover:shadow-blue-400/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-600 mb-2">10K+</p>
              <p className="text-gray-600 font-medium">Students</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-600 mb-2">200+</p>
              <p className="text-gray-600 font-medium">Courses</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-600 mb-2">50+</p>
              <p className="text-gray-600 font-medium">Instructors</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-600 mb-2">4.8</p>
              <p className="text-gray-600 font-medium">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Courses</h2>
              <p className="text-gray-600 max-w-2xl">Take your skills to the next level with our top-rated courses.</p>
            </div>
            <Link to="/courses" className="text-indigo-600 hover:text-indigo-800 font-medium hidden md:block">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-52 object-cover" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-indigo-600 transition duration-300">{course.title}</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1">{course.rating}</span>
                    </div>
                    <span className="text-gray-500 text-sm">({course.students.toLocaleString()} students)</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <Link to={`/courses/${course.id}`} className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                      View Course 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 md:hidden">
            <Link to="/courses" className="bg-indigo-700 text-white hover:bg-indigo-800 px-6 py-3 rounded-md font-medium transition duration-300 shadow-md inline-block">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Browse By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect course in your area of interest.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Development', 'Business', 'Data Science', 'Design', 'Marketing', 'IT & Software'].map((category, index) => (
              <Link key={index} to={`/category/${category.toLowerCase().replace(' & ', '-')}`} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300 hover:bg-indigo-50">
                <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-gray-800 font-medium">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from our community of learners.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-indigo-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-800 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Learning Journey Today</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-3xl mx-auto">
            Join thousands of students who have already advanced their careers with UpSkillX.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="bg-white text-indigo-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-lg text-lg">
              Sign Up For Free
            </Link>
            <Link to="/courses" className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-md text-lg">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
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
  );
}