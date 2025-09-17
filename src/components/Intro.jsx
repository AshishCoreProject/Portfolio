const Intro = () => {
    return (
    // <!-- Hero Section -->
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
                {/* <img src={"/Images/spineor-logo.jpg"}/> */}
                {/* <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Profile" className="w-32 h-32 mx-auto mb-8 border-4 border-white shadow-lg"/> */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    <span className="font-extrabold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">Spineor Web Services</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-poppins font-semibold tracking-wide">
                WE PROVIDE
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto font-merriweather italic leading-relaxed">
                    Delivering strategic, structured, and scalable solutions that drive lasting success.
                </p>
                <div className="space-x-4">
                {/* Primary Button */}
                    <button
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors mb-3 "
                    >
                        View Our Work
                    </button>

                    {/* Secondary Button */}
                </div>
            </div>
        </div>
    </section>
    )
}
export default Intro;