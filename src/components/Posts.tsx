import React from "react";
import { FileText } from "lucide-react";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "The Rise of AI in Content Creation",
      date: "March 15, 2024",
      category: "Technology",
      author: "John Doe",
    },
    {
      title: "Future of Web Development: 2024 Trends",
      date: "March 14, 2024",
      category: "Innovation",
      author: "Jane Smith",
    },
    {
      title: "Top 10 Tech Books You Must Read",
      date: "March 13, 2024",
      category: "Books",
      author: "Mike Johnson",
    },
  ];

  return (
    <section className="py-20 bg-background border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold  text-center mb-16">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-background border border-foreground/30 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 "
            >
              <div className="h-48 bg-gradient-to-r from-[#6C5CE7] to-[#00B894] flex items-center justify-center">
                <FileText className="w-12 h-12 " />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#6C5CE7]  text-sm rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold  mb-3 hover:text-[#00B894] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">By {post.author}</p>
                <a
                  href="#"
                  className="text-[#00B894] hover:text-[#6C5CE7] transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;