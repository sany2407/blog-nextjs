import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { blogPosts } from "@/config/blog-posts";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <MaxWidthWrapper className="max-w-3xl">
      <article className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center justify-between text-muted-foreground">
            <span>{post.author}</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          {post.content}
        </div>
      </article>
    </MaxWidthWrapper>
  );
};

export default BlogPostPage;