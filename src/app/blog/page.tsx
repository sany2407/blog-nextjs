import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { blogPosts } from "@/config/blog-posts";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <MaxWidthWrapper>
      <div className="space-y-8 py-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Blog Posts</h1>
          <p className="text-muted-foreground">
            Explore our latest thoughts, ideas, and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              href={`/blogpost/${post.slug}`}
              key={post.id}
              className="group rounded-lg border border-border p-4 transition-colors hover:bg-accent"
            >
              <div className="aspect-video relative overflow-hidden rounded-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Blog;