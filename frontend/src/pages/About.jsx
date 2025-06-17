import React from "react";
import img9 from "../assets/logo00.png";
import { Link } from "react-router-dom";
import img7 from "../assets/blog4.jpg";
import img11 from "../assets/photo2.jpg";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-start items-center mb-8">
        <Link
          to="/"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>
      </div>
      <div className="text-center mb-20">
        <div className="flex items-center justify-center mb-4 gap-x-4">
          <img src={img9} alt="Kansapratha Logo" className="h-20" />
        </div>

        <p className="text-xl font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent max-w-3xl mx-auto">
          Preserving tradition through exquisite brass craftsmanship since 2020
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
        <div className="order-2 md:order-1">
          <div className="bg-amber-100 p-1 w-16 mb-4 rounded-full"></div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Our Humble Beginnings
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Founded in the heart of India's brass craftsmanship tradition,
            KansaPratha began as a small family workshop with generations of
            metalworking expertise.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            What started as a passion project to preserve traditional
            brass-making techniques has blossomed into a thriving enterprise,
            bringing authentic brassware to homes worldwide.
          </p>
          <button className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors">
            Meet Our Artisans
          </button>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={img7}
            alt="Brass Crafting"
            className="w-[600px] h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20 items-center bg-amber-50 p-8 rounded-xl">
        <div>
          <img
            src={img11}
            alt="Brass Products"
            className="w-[600px] h-auto rounded-xl shadow-lg"
          />
        </div>
        <div>
          <div className="bg-amber-100 p-1 w-16 mb-4 rounded-full"></div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To bridge ancient craftsmanship with modern lifestyles by creating
            brass products that are both functional and artistic.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">✓</span>
              <span className="text-gray-700">
                Preserve traditional brass-making techniques
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">✓</span>
              <span className="text-gray-700">
                Support artisan communities across India
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">✓</span>
              <span className="text-gray-700">
                Promote sustainable, heirloom-quality products
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Authenticity",
              desc: "Every piece tells a story of traditional craftsmanship passed down through generations.",
              icon: "🔍",
            },
            {
              title: "Quality",
              desc: "We use only the finest materials and time-tested techniques to create products that last lifetimes.",
              icon: "✨",
            },
            {
              title: "Sustainability",
              desc: "Our brassware is 100% recyclable and made with eco-conscious processes.",
              icon: "🌱",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-amber-600">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 text-white rounded-xl p-12 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Handcrafted with Passion</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Each KansaPratha product represents hundreds of hours of skilled
            craftsmanship by our network of master artisans across India.
          </p>
          <button className="px-8 py-4 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors text-lg">
            Discover Our Craftsmanship Process
          </button>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "The brass water jug I purchased is not just a utensil but a work of art. It's become the centerpiece of my dining table!",
              author: "Priya Sharma, Delhi",
            },
            {
              quote:
                "KansaPratha's customer service is exceptional. They helped me select the perfect puja items for my home temple.",
              author: "Raj Patel, Mumbai",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-50"
            >
              <div className="text-amber-400 text-4xl mb-4">"</div>
              <p className="text-gray-700 text-lg italic mb-6">
                {testimonial.quote}
              </p>
              <p className="text-amber-600 font-medium">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
