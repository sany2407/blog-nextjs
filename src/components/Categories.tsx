import React from "react";
import {
  Laptop,
  BookOpen,
  Lightbulb,
  Globe,
  Brain,
  TrendingUp,
} from "lucide-react";

const Categories: React.FC = () => {
  const categories = [
    {
      name: "Technology",
      articles: 24,
      icon: (
        <Laptop className="w-10 h-10 text-[#00B894] group-hover:text-white" />
      ),
    },
    {
      name: "Book Reviews",
      articles: 18,
      icon: (
        <BookOpen className="w-10 h-10 text-[#00B894] group-hover:text-white" />
      ),
    },
    {
      name: "Innovation",
      articles: 15,
      icon: (
        <Lightbulb className="w-10 h-10 text-[#00B894] group-hover:text-white" />
      ),
    },
    {
      name: "Digital Culture",
      articles: 20,
      icon: (
        <Globe className="w-10 h-10 text-[#00B894] group-hover:text-white" />
      ),
    },
    {
      name: "AI & Machine Learning",
      articles: 16,
      icon: (
        <Brain className="w-10 h-10 text-[#00B894] group-hover:text-white" />
      ),
    },
    {
      name: "Future Trends",
      articles: 12,
      icon: (
        <TrendingUp className="w-10 h-10 text-[#00B894] group-hover:text-white" />
      ),
    },
  ];

  return (
    <section className="py-20 bg-background border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-background border border-foreground/30 rounded-xl p-8 hover:bg-[#6C5CE7] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                {category.icon}
                <span className=" group-hover:text-white">
                  {category.articles} articles
                </span>
              </div>
              <h3 className="text-xl font-bold  mb-2">{category.name}</h3>
              <p className="text-gray-400 group-hover:text-white">
                Latest updates and insights on {category.name}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;