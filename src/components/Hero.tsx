import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative z-20 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold  tracking-tight">
          Where Opinions Shape Tomorrow
        </h2>
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] mt-4">
          <div className="relative bg-clip-text text-transparent font-bold bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2">
            <span className="text-7xl">Opinion Matters</span>
          </div>
        </div>
        <p className="text-lg md:text-xl lg:text-2xl mt-6">
          Dive into thought-provoking discussions on technology, culture, and
          innovation.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mt-4">
          Your perspective matters in shaping the future.
        </p>
        <div className="mt-8">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Explore Categories
          </button>
          <button className="ml-4 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
            Read Blog
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
