"use client"
import React from "react";
import { FollowerPointerCard } from "@/components/ui/following-pointer"; 

const Featured: React.FC = () => {
  return (
    <section className="py-20 bg-background border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <FollowerPointerCard
              key={index}
              title="Click here"
              className="cursor-none"
            >
              <div className="bg-background rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 border-b border-foreground/10">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#6C5CE7] text-sm rounded-full mb-4">
                    Category
                  </span>
                  <h3 className="text-xl font-bold mb-3">Article Title</h3>
                  <p className="text-foreground mb-4">
                    Short description of the article content.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">5 min read</span>
                    <a
                      href="#"
                      className="text-[#6C5CE7] hover:text-[#00B894] transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;