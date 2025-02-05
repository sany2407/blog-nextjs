interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development",
    description:
      "Exploring upcoming trends in web development and what they mean for developers.",
    content: "Lorem ipsum dolor sit amet...", // Add more content here
    slug: "future-of-web-development",
    date: "2024-03-20",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Web Development", "Technology", "Future"],
  },
  {
    id: "2",
    title: "Understanding React Server Components",
    description: "A deep dive into React Server Components and their benefits.",
    content: "Lorem ipsum dolor sit amet...", // Add more content here
    slug: "understanding-react-server-components",
    date: "2024-03-18",
    author: "Jane Smith",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    tags: ["React", "Server Components", "Web Development"],
  },
  // Add more sample posts as needed
];
