import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-800 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We'd love to hear from you! Reach out with any questions or feedback.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-yellow-100">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-6">
            Get in Touch
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-yellow-100 rounded-full text-yellow-700">
                +91 8250676762
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>support@kansapratha.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-yellow-100 rounded-full text-yellow-700">
                📞
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-yellow-100 rounded-full text-yellow-700">
                📍
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>
                  S.I.T Campus, Salbari, P.O. Sukna, Dt. Darjeeling,
                  <br />
                  West Bengal - 734009, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md border border-yellow-100">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
