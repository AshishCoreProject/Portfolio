import { useState } from "react";

const projects = [
  {
    title: "E-commerce Platform",
    description:"APS is an E-commerce website part of EBC Technologies (USA). The Autoparts shop has been fulfilling the car parts and accessories requirements of driving enthusiasts across the globe. This project consists of around 18 micro web services, and each one has specific functionality.",
    image: "/Images/ecommerce.png",
    tech: ["React", "Node.js", "Next.js"],
    demo: "#",
    code: "#",
  },
  {
    title: "Self-Scheduling and Patient Flow Solution",
    description:"InQuicker is a healthcare technology platform designed to simplify how patients schedule appointments and how care providers manage patient flow. It offers online / self-scheduling tools, discharge scheduling, and integrations with existing clinical workflows. The goal is to improve patient acquisition, retention, satisfaction, and operational efficiency.",
    image: "/Images/finance.png",
    tech: ["React", "Firebase", "Tailwind"],
    demo: "#",
    code: "#",
  },
  {
    title: "Online Foods Cube",
    description:
      "The world's newest smartphone app for food delivery is called onlinefoodscube.With the help of the web application onlinefoodscube, you can order meals from your preferred restaurants and have it delivered right to your door.",
    image:
      "https://www.spineor.com/images/eatfood_m.png",
    tech: ["JavaScript", "API", "CSS3"],
    demo: "#",
    code: "#",
  },
  {
    title: "Fleet Farm",
    description:
      "Fleet farm has become a popular name among mobile users. This mobile application aims to enrich the shopping experience of users worldwide. The biggest advantage of using the app is it is lightweight and has effortless installation. Type the product name in the search box & apply filters to find what you're looking for. It comes with multiple payment gateways and updates you about the order status from time to time. Don't forget to check new offers, discounts, and gift cards on our app. Don't wait to make Fleet Farm your one-stop shopping destination and have an exhilarating shopping experience! ",
    image: "/Images/FleetFarm.png",
    tech: ["React Native", "Java", "MongoDB"],
    demo: "#",
    code: "#",
  },
  {
    title: "Apex Auto Parts",
    description:
      "Apex Auto Parts is an e-commerce platform under EBC Technologies (USA), providing high-quality auto parts and accessories to car enthusiasts worldwide. Built with 18 microservices, each handling specific functions like product search, order management, and secure payments, the platform ensures a smooth and efficient shopping experience for customers around the globe.",
    image: "https://spineor.com/images/work/Apex/apexautoparts.jpg",
    tech: ["Next.js", "Node.js", "MongoDB"],
    demo: "#",
    code: "#",
  },
  {
    title: "Ai Privacy",
    description:"Ensure the Safety of Your Personal Data with AiPrivacy: As the use of AI language models like ChatGPT becomes increasingly prevalent, it's crucial to adhere to organizational policies prohibiting the sharing of personally identifiable information (PII). AI companies themselves actively discourage the sharing of PII to uphold user privacy. With AiPrivacy, you can keep your sensitive information private and secure while harnessing the advantages of AI language models.",
    image: "https://spineor.com/images/work/AiPrivacy/Ai-Privacy.jpg",
    tech: ["React", "Python", " PostGreSQL"],
    demo: "#",
    code: "#",
  },

];

const Project = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Recent projects that reflect our passion and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                {/* Description with toggle */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {expanded === index
                    ? project.description
                    : project.description.length > 80
                    ? project.description.slice(0, 80) + "..."
                    : project.description}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline mb-4"
                >
                  {expanded === index ? "Read Less" : "Read More"}
                </button>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
