

const Project  = ()=> {
    
    return (
    // <!-- Projects Section -->
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Some of my recent work that I'm proud of
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Project 1 --> */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img src={"/Images/ecommerce.png"} alt="Project 1" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">A modern e-commerce solution with React and Node.js</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">React</span>
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Next Js</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                                <i data-lucide="external-link" className="w-4 h-4 mr-1"></i>
                                Live Demo
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline flex items-center">
                                <i data-lucide="github" className="w-4 h-4 mr-1"></i>
                                Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* <!-- Project 2 --> */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img src="/Images/finance.png" alt="Project 2" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">Collaborative task management with real-time updates</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Vue.js</span>
                            <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">Firebase</span>
                            <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">Tailwind</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                                <i data-lucide="external-link" className="w-4 h-4 mr-1"></i>
                                Live Demo
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline flex items-center">
                                <i data-lucide="github" className="w-4 h-4 mr-1"></i>
                                Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* <!-- Project 3 --> */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=250&fit=crop" alt="Project 3" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Weather Dashboard</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">Beautiful weather app with location-based forecasts</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">JavaScript</span>
                            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">API</span>
                            <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm">CSS3</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                                <i data-lucide="external-link" className="w-4 h-4 mr-1"></i>
                                Live Demo
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline flex items-center">
                                <i data-lucide="github" className="w-4 h-4 mr-1"></i>
                                Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Project;