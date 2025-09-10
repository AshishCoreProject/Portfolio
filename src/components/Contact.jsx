import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    console.log(formData, "formData");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact is required";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if(!formData.contact.trim()) newErrors.contact = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log(formData,"formData") 
    setErrors({});
    setSuccess("⏳ Sending...");

    try {
      await emailjs.send(
        "service_fqo6kgj",     // ⚡ replace with your Service ID
        "template_7yyksr6",    // ⚡ replace with your Template ID
        formData,
        "BGJ7I-7f3D6T8B-sn"    // ⚡ replace with your Public Key
      );

      setSuccess("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "", contact: "" });
    } catch (error) {
      console.error(error);
      setSuccess("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="mr-4">📧</span>
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4">📍</span>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Contact</label>
              <input
                type="number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
              />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>

            {success && <p className="text-green-500 mt-4">{success}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
