import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Latest Fashion Trends',
      excerpt: 'Discover the hottest fashion trends for this season.',
      date: 'May 15, 2023',
      category: 'Fashion'
    },
    {
      id: 2,
      title: 'Home Decor Ideas',
      excerpt: 'Transform your living space with these creative ideas.',
      date: 'April 28, 2023',
      category: 'Home'
    },
    {
      id: 3,
      title: 'Tech Gadgets Review',
      excerpt: 'Our honest review of the latest tech gadgets in market.',
      date: 'April 10, 2023',
      category: 'Technology'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the latest trends, tips and insights from our experts.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-600 bg-emerald-100 rounded-full mb-2">
                {post.category}
              </span>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
          View All Articles
        </button>
      </div>
    </div>
  );
}