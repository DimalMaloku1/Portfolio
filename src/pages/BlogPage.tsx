import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MatrixRain from '../components/MatrixRain';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  category: string;
}

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Web Development: What to Expect in 2025',
      excerpt: 'Explore the upcoming trends in web development, from AI integration to new frameworks that will shape the future of the web.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      author: 'Dimal Maloku',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000',
      category: 'Web Development'
    },
    {
      id: '2',
      title: 'Building Scalable Applications with Microservices',
      excerpt: 'Learn how to design and implement microservices architecture for better scalability and maintainability.',
      date: 'March 12, 2024',
      readTime: '7 min read',
      author: 'Dimal Maloku',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
      category: 'Architecture'
    },
    {
      id: '3',
      title: 'The Impact of AI on Modern Software Development',
      excerpt: 'Discover how artificial intelligence is transforming the way we develop software and what it means for developers.',
      date: 'March 10, 2024',
      readTime: '6 min read',
      author: 'Dimal Maloku',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
      category: 'Artificial Intelligence'
    },
    {
      id: '4',
      title: 'Optimizing React Applications for Performance',
      excerpt: 'Learn advanced techniques for improving the performance of your React applications.',
      date: 'March 8, 2024',
      readTime: '8 min read',
      author: 'Dimal Maloku',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
      category: 'React'
    },
    {
      id: '5',
      title: 'Securing Your Web Applications: Best Practices',
      excerpt: 'Essential security practices every developer should know to protect their web applications from common threats.',
      date: 'March 5, 2024',
      readTime: '10 min read',
      author: 'Dimal Maloku',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000',
      category: 'Security'
    }
  ];

  return (
    <div className="min-h-screen bg-black/50 text-green-400">
      <MatrixRain />
      
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-4 text-glow">Tech Blog</h1>
        <p className="text-xl text-center text-green-400/70 mb-16 max-w-3xl mx-auto">
          Insights, tutorials, and thoughts on modern software development, web technologies, and industry trends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-black/90 border border-green-500/30 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 hover:text-green-300 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                
                <p className="text-green-400/70 mb-6 line-clamp-2">{post.excerpt}</p>
                
                <div className="flex items-center text-sm text-green-400/70 mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                >
                  Read More 
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;