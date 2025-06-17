import React from "react";
import { Link } from "react-router-dom";
import img3 from "../assets/blog.jpg";
import img4 from "../assets/blog3.jpg";
import img5 from "../assets/blog1.jpg";
import img6 from "../assets/blog2.jpg";
import img7 from "../assets/blog4.jpg";
import img8 from "../assets/blog5.jpg";
export default function AllBlogPosts() {
  const allPosts = [
    {
      id: 1,
      title: "The Art of Brass Crafting",
      excerpt:
        "Discover the traditional techniques behind our beautiful brass utensils.",
      date: "May 15, 2023",
      category: "Craftsmanship",
      image: img3,
    },
    {
      id: 2,
      title: "Caring for Your Brass Utensils",
      excerpt:
        "Learn how to maintain your brassware to keep it shining for generations.",
      date: "April 28, 2023",
      category: "Maintenance",
      image: img4,
    },
    {
      id: 3,
      title: "Brass in Modern Home Decor",
      excerpt:
        "How to incorporate traditional brass utensils in contemporary home design.",
      date: "April 10, 2023",
      category: "Decor",
      image: img8,
    },

    {
      id: 4,
      title: "The Health Benefits of Brass Vessels",
      excerpt:
        "Learn why drinking water from brass vessels has been practiced for centuries.",
      date: "March 22, 2023",
      category: "Health",
      image: img6,
    },
    {
      id: 5,
      title: "Traditional Brass Utensils for Weddings",
      excerpt:
        "Explore how brass utensils play an important role in Indian wedding traditions.",
      date: "February 18, 2023",
      category: "Culture",
      image: img5,
    },
    {
      id: 6,
      title: "Brass vs. Copper: What's Better for Your Home?",
      excerpt:
        "A comparison of these two traditional metals for kitchenware and decor.",
      date: "January 5, 2023",
      category: "Guide",
      image: img7,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">All Articles</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our complete collection of articles about brass utensils and
          their heritage.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-contain"
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
          to="/blog"
          className="inline-block px-6 py-3 border border-yellow-600 text-yellow-600 font-medium rounded-lg hover:bg-yellow-50 transition-colors"
        >
          Back to Blog Home
        </Link>
      </div>
    </div>
  );
}
