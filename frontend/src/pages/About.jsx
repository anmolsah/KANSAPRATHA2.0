import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About KansaPratha</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted marketplace for quality products and exceptional service.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2020, KansaPratha began as a small local shop with a big vision - to bring quality products to customers at affordable prices.
          </p>
          <p className="text-gray-700">
            Today, we've grown into a thriving online marketplace serving thousands of satisfied customers nationwide.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To connect buyers with trusted sellers and provide an exceptional shopping experience.
          </p>
          <p className="text-gray-700">
            We're committed to quality, customer satisfaction, and supporting small businesses.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Quality', desc: 'We carefully vet all products to ensure they meet our high standards.' },
            { title: 'Integrity', desc: 'Honest business practices and transparent policies.' },
            { title: 'Innovation', desc: 'Continuously improving our platform and services.' }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-emerald-600">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}