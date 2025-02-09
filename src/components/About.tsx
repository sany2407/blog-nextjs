import React from "react";
import { Lightbulb, BookOpen, Users } from "lucide-react";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-background border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              About Opinion Matters
            </h2>
            <p className="text-lg  mb-4">
              We are a community of thought leaders, innovators, and curious
              minds dedicated to exploring the intersection of technology,
              culture, and ideas.
            </p>
            <p className="text-lg mb-6">
              Founded in 2024, our mission is to provide insightful perspectives
              on the rapidly evolving digital landscape while fostering
              meaningful discussions about the future.
            </p>
            {/* Portfolio Button Section */}
            <div className="flex justify-center">
              <a
                href="https://your-portfolio-link.com" // Replace with your actual portfolio link
                className="bg-[#6C5CE7]  font-bold py-2 px-4 rounded-lg transition duration-300 hover:bg-[#5A4BC7]"
              >
                Click to Know More About Me
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-background border border-foreground/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Our Values</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#6C5CE7]  rounded-lg">
                  <Lightbulb />
                </div>
                <div>
                  <h4 className="font-bold">Innovation First</h4>
                  <p className="text-gray-400">
                    Staying ahead of technological trends and bringing fresh
                    perspectives.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#00B894]  rounded-lg">
                  <BookOpen />
                </div>
                <div>
                  <h4 className="font-bold">Quality Content</h4>
                  <p className="text-gray-400">
                    Delivering well-researched and thought-provoking articles.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#6C5CE7]  rounded-lg">
                  <Users />
                </div>
                <div>
                  <h4 className="font-bold">Community Driven</h4>
                  <p className="text-gray-400">
                    Building a space for meaningful discussions and connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
