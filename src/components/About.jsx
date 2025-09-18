import { MapPin, Mail, Circle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Empowering businesses with strategic and systematic solutions that endure.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Our Story
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Our Team has over 16 years of experience creating secure, scalable, and high-performing web applications for startups, enterprises, and government projects. 
              We specialize in frontend (React.js, Next.js, Tailwind CSS, Material UI, Bootstrap) and backend (Node.js, Express, NestJS, MongoDB, PostgreSQL), 
              with a strong focus on delivering user-friendly, modern digital experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              At Spineor Webservices, we are passionate about building innovative digital solutions that empower businesses to grow, scale, and thrive in the modern world. 
              Since our inception, we've partnered with startups, SMEs, and enterprises across the globe to deliver tailored software development, web and mobile applications, 
              cloud solutions, and DevOps services.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              What sets us apart is our commitment to quality, transparency, and long-term partnerships. 
              We believe in collaborating closely with our clients, understanding their vision, and transforming it into impactful digital products.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              At Spineor Webservices, technology is not just about code—it’s about crafting experiences, driving innovation, and helping businesses achieve their goals faster and smarter.
            </p>

            {/* Core Values */}
            <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Our Core Values
            </h4>
            <ul className="space-y-3 mb-6">
              {[
                "Innovation – Building solutions that adapt to the ever-changing tech landscape.",
                "Excellence – Delivering projects with precision, performance, and quality.",
                "Integrity – Being transparent and accountable in everything we do.",
                "Collaboration – Working as partners, not just service providers.",
              ].map((value, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full text-blue-600 mr-3">
                    <Circle size={14} />
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{value}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether you’re looking to launch a new product, optimize your operations, 
              or scale your digital presence, Spineor Webservices is your trusted technology partner.
            </p>
          </div>

          {/* Right Column */}
          <div className="relative">
            <img
              src="/Images/story.png"
              alt="Coding"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">15+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
  