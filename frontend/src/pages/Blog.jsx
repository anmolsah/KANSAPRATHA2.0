import React from "react";
import { Link } from "react-router-dom";
import { allPosts } from "../components/AllBlogPosts";
export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Brass Crafting",
      excerpt:
        "Discover the traditional techniques behind our beautiful brass utensils.",
      date: "May 15, 2023",
      category: "Craftsmanship",
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 2,
      title: "Caring for Your Brass Utensils",
      excerpt:
        "Learn how to maintain your brassware to keep it shining for generations.",
      date: "April 28, 2023",
      category: "Maintenance",
      image:
        "https://images.unsplash.com/photo-1584735422182-1e42f4b93aee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Brass in Modern Home Decor",
      excerpt:
        "How to incorporate traditional brass utensils in contemporary home design.",
      date: "April 10, 2023",
      category: "Decor",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Kansa Pratha Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the heritage, care, and beauty of traditional brass utensils.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-600 bg-yellow-100 rounded-full mb-2">
                {post.category}
              </span>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-yellow-600 font-medium hover:text-yellow-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/blog/all"
          className="inline-block px-6 py-3 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors"
        >
          View All Articles
        </Link>
      </div>
    </div>
  );
}
