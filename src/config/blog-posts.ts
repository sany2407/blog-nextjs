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
  {
    id: "3",
    title: "The Impact of Blockchain on Web Development",
    description:
      "Exploring the potential of blockchain technology in revolutionizing web development.",
    content: "Lorem ipsum dolor sit amet...", // Add more content here
    slug: "impact-of-blockchain-on-web-development",
    date: "2024-03-15",
    author: "Mike Johnson",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    tags: ["Blockchain", "Web Development", "Technology"],
  },
  {
    id: "4",
    title: "The Evolution of Web Accessibility",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content: "Lorem ipsum dolor sit amet...", // Add more content here
    slug: "evolution-of-web-accessibility",
    date: "2024-03-12",
    author: "Sarah Wilson",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    tags: ["Web Development", "Accessibility", "User Experience"],
  },
];