const Hero: React.FC = () => {
  return (
    <section className="bg-background border-b border-foreground/10 min-h-screen pt-16 flex items-center ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold  mb-6">
          Where Opinions Shape Tomorrow
        </h1>
        <p className="text-xl md:text-2xl  mb-8 max-w-3xl mx-auto">
          Dive into thought-provoking discussions on technology, culture, and
          innovation.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/categories"
            className="bg-[#6C5CE7]  px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
          >
            Explore Categories
          </a>
          <a
            href="/blog"
            className="border-2 border-[#6C5CE7]  px-8 py-3 rounded-lg font-medium hover:bg-[#6C5CE7] transition-all"
          >
            Read Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export {  Hero };