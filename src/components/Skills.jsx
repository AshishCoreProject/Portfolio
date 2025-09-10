const Skills = ()=> {
    return(
    // <!-- Skills Section -->
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Technologies I work with to bring ideas to life
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <i data-lucide="code" className="w-12 h-12 text-blue-600 mx-auto mb-3"></i>
                    <h3 className="font-semibold mb-2">JavaScript</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">ES6+, TypeScript</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <i data-lucide="smartphone" className="w-12 h-12 text-blue-600 mx-auto mb-3"></i>
                    <h3 className="font-semibold mb-2">React</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Hooks, Redux, Next.js</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <i data-lucide="server" className="w-12 h-12 text-blue-600 mx-auto mb-3"></i>
                    <h3 className="font-semibold mb-2">Node.js</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Express, MongoDB</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <i data-lucide="palette" className="w-12 h-12 text-blue-600 mx-auto mb-3"></i>
                    <h3 className="font-semibold mb-2">Design</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Figma, Adobe XD</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <i data-lucide="database" className="w-12 h-12 text-blue-600 mx-auto mb-3"></i>
                    <h3 className="font-semibold mb-2">Database</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">PostgreSQL, MongoDB</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <i data-lucide="cloud" className="w-12 h-12 text-blue-600 mx-auto mb-3"></i>
                    <h3 className="font-semibold mb-2">Cloud</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AWS, Vercel, Docker</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <i data-lucide="git-branch" className="w-12 h-12 text-blue-600 mx-auto mb-3"></i>
                    <h3 className="font-semibold mb-2">Version Control</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Git, GitHub</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <i data-lucide="layout" className="w-12 h-12 text-blue-600 mx-auto mb-3"></i>
                    <h3 className="font-semibold mb-2">CSS</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tailwind, Sass</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Skills;
