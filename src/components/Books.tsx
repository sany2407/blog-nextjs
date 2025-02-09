import React from "react";
import { Book } from "lucide-react";

const Books: React.FC = () => {
  const bookRecommendations = [
    { title: "The Future of AI", author: "John Smith", rating: "4.8/5" },
    { title: "Digital Minimalism", author: "Cal Newport", rating: "4.5/5" },
    { title: "Tech Trends 2024", author: "Sarah Johnson", rating: "4.9/5" },
  ];

  return (
    <section className="py-20 bg-background border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold  text-center mb-16">
          Book Recommendations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookRecommendations.map((book, index) => (
            <div
              key={index}
              className="bg-background border border-foreground/40 rounded-xl p-6 h-full transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-br from-[#6C5CE7] to-[#00B894] h-48 rounded-lg mb-4 flex items-center justify-center">
                <Book className="w-12 h-12 " />
              </div>
              <h3 className="text-xl font-bold  mb-2">
                {book.title}
              </h3>
              <p className="text-gray-400 mb-3">By {book.author}</p>
              <div className="text-gray-400 mb-4">Rating: {book.rating}</div>
              <a
                href="#"
                className="text-[#00B894] hover:text-[#6C5CE7] transition-colors"
              >
                Read Review →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;