import { MapPin, Mail } from "lucide-react";

const About = () => {
    return(
    // <!-- About Section -->
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Full Stack Developer | 16+ Years of Experience in Building Scalable & User-Centric Web Solution               
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">My Story</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 tracking-[.8px]">
                        I'm a Full Stack Developer with over 16 years of experience creating secure, scalable, and high-performing web applications for startups, enterprises, and government projects. My expertise spans frontend (React.js, Next.js, Tailwind CSS, Material UI, Bootstrap) and backend (Node.js, Express, NestJS, MongoDB, PostgreSQL), with a strong focus on delivering user-friendly, modern digital experiences.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 tracking-[.8px]">
                        I have hands-on experience with cloud platforms (AWS, Azure), DevOps practices (Docker, Jenkins, CI/CD), and designing modular architectures that are maintainable, secure, and future-ready. Beyond coding, I enjoy leading teams, mentoring developers, and collaborating with product and UX teams to ensure every solution is not only technically sound but also user-focused.
                        <br/> Driven by continuous learning and innovation, I specialize in transforming ideas into digital solutions that make a real impact.    
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center">
                            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                            <span>Edmonton, AB, Canada </span>
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-5 h-5 text-blue-600 mr-2" />
                            <span>john@example.com</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="/Images/story.png"    
                    alt="Coding" className="rounded-lg shadow-lg"/>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">15+</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default About;