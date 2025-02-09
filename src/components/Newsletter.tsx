import React from "react";
import { Mail } from "lucide-react";

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-background border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-background rounded-2xl border border-foreground/40 p-8 md:p-12 overflow-hidden text-center">
          <Mail className="w-12 h-12 text-[#6C5CE7] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold  mb-6">
            Join Our Newsletter
          </h2>
          <p className=" text-lg mb-8">
            Get exclusive access to our latest articles, book recommendations,
            and tech insights delivered straight to your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-foreground  border border-neutral-700 focus:outline-none focus:border-[#6C5CE7] transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-[#6C5CE7]  px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;