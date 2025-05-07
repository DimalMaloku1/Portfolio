import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MatrixRain from '../components/MatrixRain';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  category: string;
}

const blogPosts: Record<string, BlogPost> = {
  '1': {
    id: '1',
    title: 'The Future of Web Development: What to Expect in 2025',
    content: `
      <p>The web development landscape is constantly evolving, and 2025 promises to bring even more exciting changes. Here's what we can expect:</p>

      <h2>1. AI-Driven Development</h2>
      <p>Artificial Intelligence will play a crucial role in web development, from automated code generation to intelligent debugging and testing. Developers will leverage AI tools to increase productivity and create more sophisticated applications.</p>

      <h2>2. WebAssembly Revolution</h2>
      <p>WebAssembly will continue to gain traction, enabling high-performance web applications that rival native apps. This technology will open new possibilities for complex web applications, including games and professional tools.</p>

      <h2>3. Edge Computing Integration</h2>
      <p>Edge computing will become more prevalent in web development, offering improved performance and reduced latency. Developers will need to adapt their architectures to leverage edge computing capabilities effectively.</p>

      <h2>4. Enhanced Security Measures</h2>
      <p>With increasing cyber threats, security will become even more critical. New security protocols and tools will emerge to protect web applications and user data.</p>

      <h2>5. Sustainable Web Development</h2>
      <p>Environmental concerns will influence web development practices, with a focus on creating energy-efficient applications and reducing digital carbon footprints.</p>
    `,
    date: 'March 15, 2024',
    readTime: '5 min read',
    author: 'Dimal Maloku',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development'
  },
  '2': {
    id: '2',
    title: 'Building Scalable Applications with Microservices',
    content: `
      <p>Microservices architecture has revolutionized how we build scalable applications. Let's explore the key concepts and best practices.</p>

      <h2>1. Understanding Microservices</h2>
      <p>Microservices are an architectural style that structures an application as a collection of small, independent services. Each service focuses on a specific business capability and communicates through well-defined APIs.</p>

      <h2>2. Benefits of Microservices</h2>
      <p>- Improved scalability and flexibility
      - Better fault isolation
      - Independent deployment
      - Technology diversity
      - Easier maintenance</p>

      <h2>3. Implementation Challenges</h2>
      <p>While microservices offer many advantages, they also come with challenges:
      - Distributed system complexity
      - Data consistency
      - Service discovery
      - Monitoring and debugging</p>

      <h2>4. Best Practices</h2>
      <p>- Design services around business capabilities
      - Implement proper service boundaries
      - Use containerization
      - Implement robust monitoring
      - Plan for failure</p>
    `,
    date: 'March 12, 2024',
    readTime: '7 min read',
    author: 'Dimal Maloku',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    category: 'Architecture'
  },
  '3': {
    id: '3',
    title: 'The Impact of AI on Modern Software Development',
    content: `
      <p>Artificial Intelligence is transforming software development in unprecedented ways. Here's how AI is shaping the future of development.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Modern IDEs and development tools now incorporate AI to provide better code suggestions, identify bugs, and automate routine tasks.</p>

      <h2>2. Automated Testing</h2>
      <p>AI is revolutionizing testing by automatically generating test cases, identifying potential issues, and maintaining test suites.</p>

      <h2>3. Code Generation</h2>
      <p>AI can now generate boilerplate code, suggest optimizations, and even create entire functions based on natural language descriptions.</p>

      <h2>4. Future Implications</h2>
      <p>As AI continues to evolve, we can expect:
      - More sophisticated code generation
      - Better bug prediction
      - Automated optimization
      - Enhanced development workflows</p>
    `,
    date: 'March 10, 2024',
    readTime: '6 min read',
    author: 'Dimal Maloku',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    category: 'Artificial Intelligence'
  },
  '4': {
    id: '4',
    title: 'Optimizing React Applications for Performance',
    content: `
      <p>Performance optimization is crucial for creating smooth, responsive React applications. Let's explore key optimization techniques.</p>

      <h2>1. Code Splitting</h2>
      <p>Implement code splitting to load only the necessary code for each route or component, reducing initial bundle size.</p>

      <h2>2. Memoization</h2>
      <p>Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders and optimize performance.</p>

      <h2>3. Virtual DOM Optimization</h2>
      <p>Understand and optimize React's virtual DOM reconciliation process to minimize unnecessary updates.</p>

      <h2>4. State Management</h2>
      <p>Choose appropriate state management solutions and implement efficient state updates to maintain performance.</p>
    `,
    date: 'March 8, 2024',
    readTime: '8 min read',
    author: 'Dimal Maloku',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    category: 'React'
  },
  '5': {
    id: '5',
    title: 'Securing Your Web Applications: Best Practices',
    content: `
      <p>Security is paramount in modern web applications. Here are essential practices to protect your applications.</p>

      <h2>1. Authentication & Authorization</h2>
      <p>Implement robust authentication systems and proper authorization checks to protect user data and resources.</p>

      <h2>2. Data Protection</h2>
      <p>Use encryption for sensitive data, implement secure sessions, and protect against common vulnerabilities.</p>

      <h2>3. Input Validation</h2>
      <p>Validate and sanitize all user inputs to prevent injection attacks and other security vulnerabilities.</p>

      <h2>4. Security Headers</h2>
      <p>Implement security headers like CSP, HSTS, and X-Frame-Options to enhance application security.</p>
    `,
    date: 'March 5, 2024',
    readTime: '10 min read',
    author: 'Dimal Maloku',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000',
    category: 'Security'
  }
};

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-black/50 text-green-400 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-green-400 hover:text-green-300">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/70 text-green-400">
      
      <MatrixRain />
       
      <div className="container mx-auto px-6 py-20">
        {/* Back Button */}
        <Link 
          to="/blog"
          className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>

        {/* Hero Section */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-green-400/70">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-invert prose-green max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
    
  );
};

export default BlogPostPage;