import React, { useState, useEffect } from 'react';
import { Code2, Database, Globe, Layout, Server, Terminal, Github, Linkedin, Mail, FolderGit2, FileDown } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';
import IconWrapper from '../components/IconWrapper';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import ServicesSection from '../components/ServicesSection';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const socialIcons = [
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/DimalMaloku1", delay: 200 },
    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/dimal-maloku-188b9a31b", delay: 200 },
    { icon: <Mail className="w-6 h-6" />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=dimalmaloku@gmail.com", delay: 400 }
  ];

  const skills = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend',
      desc: 'Expert in building scalable APIs with .NET MVC and Web API, Express.js, C# and Laravel',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Management',
      desc: 'Proficient in MSSQL, MongoDB, MySQL and PostgreSQL',
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Frontend Development',
      desc: 'Creating responsive UIs with React.js, Next.js, TypeScript etc',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Full Stack',
      desc: 'End-to-end application development with modern tech stack',
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'Backend Architecture',
      desc: 'Designing robust and scalable backend systems',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'API Development',
      desc: 'RESTful API design and implementation',
    },
  ];

  const projects = [
    {
      title: "Electronic-App",
      description: "Full-stack application with .NET Core backend and React frontend, featuring real-time inventory management and secure payment processing.",
      tech: [".NET Core", "React", "SQL Server", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      category: "fullstack",
      githubUrl: "https://github.com/DimalMaloku1/Electronic-App",
      liveUrl: "#"
    },
    {
      title: "Hotel Management System",
      description: " Hotel Management System is an advanced software designed to manage hotel operations such as reservations, billing, and payments. Users can book rooms for specific dates, and administrators have full control over the application.",
      tech: [".NET Core", "MVC", "SQL Server", "JQuery", "Bootstrap", "AWS RDS", "Paypal & Stripe" ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      category: "fullstack",
      githubUrl: "https://github.com/DimalMaloku1/StarLABS-.net",
      liveUrl: "#"
    },
    {
      title: "E-Commerce-Etickets",
      description: " E-Commerce-Etickets is a web application built with ASP.NET MVC and MSSQL technologies, along with the frontend framework Bootstrap. The project aims to provide a seamless and user-friendly platform for customers to purchase and manage e-tickets for various events and entertainment activities.",
      tech: [".NET Core", "MVC", "SQL Server", "JQuery", "Bootstrap" ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      category: "fullstack",
      githubUrl: "https://github.com/DimalMaloku1/E-Commerce-Etickets",
      liveUrl: "#"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'ai', name: 'AI/ML' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black/50 text-green-400">
      <MatrixRain />
      
      {/* Hero Section */}
      <div id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className={`mb-8 flex justify-center animate-scale delay-200 initial-opacity-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="profile-border">
              <div className="relative">
                <img 
                  src="https://i.imgur.com/y6Ff45N.png" 
                  className="w-64 h-64 rounded-full"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
          <div className="glitch-wrapper">
            <h1 
              className={`text-6xl font-bold mb-4 glitch animate-slide-up delay-300 initial-opacity-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              data-text="Dimal Maloku"
            >
              Dimal Maloku
            </h1>
          </div>
          <p className={`text-2xl text-green-400 mb-8 animate-slide-up delay-400 initial-opacity-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Software Developer / Engineering
          </p>
          <div className={`text-lg text-green-300/80 max-w-2xl mx-auto leading-relaxed mb-12 animate-slide-up delay-500 initial-opacity-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Specialized in building robust web applications with .NET, React, and modern cloud technologies.
          </div>
          <div className={`flex justify-center space-x-5 animate-slide-up delay-600 initial-opacity-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {socialIcons.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="p-2 rounded-md border-green-500/30 hover:border-green-500 transition-colors"
              >
                <IconWrapper delay={social.delay}>
                  {social.icon}
                </IconWrapper>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/80 border-t border-green-500/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-glow animate-slide-up delay-100 initial-opacity-0">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg bg-black/90 border border-green-500/30 hover:border-green-500 transition-all duration-300 animate-scale delay-100 initial-opacity-0`}
              >
                <div className="mb-4">
                  <IconWrapper delay={index * 100}>
                    {skill.icon}
                  </IconWrapper>
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-green-400/70">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/80 border-t border-green-500/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold text-glow animate-slide-up delay-100 initial-opacity-0">
              Project Archive
            </h2>
            <a 
              href="https://github.com/DimalMaloku1?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 hover:border-green-500 transition-all duration-300"
            >
              <FolderGit2 className="w-5 h-5" />
              <span>View All</span>
            </a>
          </div>

          {/* Project Categories */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full border ${
                  selectedCategory === category.id
                    ? 'bg-green-500/20 border-green-500 text-green-400'
                    : 'border-green-500/30 hover:border-green-500 text-green-400/70'
                } transition-all duration-300`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 bg-black/80 border-t border-green-500/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-glow animate-slide-up delay-100 initial-opacity-0">
            Curriculum Vitae
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/90 border border-green-500/30 rounded-lg p-8 animate-scale delay-200 initial-opacity-0">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Experience</h3>
                <div className="space-y-6">
                  <div className="animate-slide-up delay-300 initial-opacity-0">
                    <h4 className="text-xl font-semibold">Star Labs L.L.C.</h4>
                    <p className="text-green-400/70">.Net Developer • 01/2024 - 04/2024</p>
                    <ul className="list-disc list-inside mt-2 text-green-400/70">
                      <li>Developed and maintained web applications using .NET Core and React</li>
                      <li>Implemented RESTful APIs and integrated third-party services</li>
                      <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                      <li>Familiar with Razor syntax and ASP.NET MVC routing</li>
                      <li>Enhanced UI responsiveness through AJAX integration</li>
                      <li>Directed the integration process of databases with AWS RDS via MSSQL</li>
                      <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                    </ul>
                  </div>
                  <div className="animate-slide-up delay-400 initial-opacity-0">
                    <h4 className="text-xl font-semibold">TEB Bank SH.A</h4>
                    <p className="text-green-400/70">Windows Systems Administrator • 01/2023 - 07/2023</p>
                    <ul className="list-disc list-inside mt-2 text-green-400/70">
                      <li>Managed updates/upgrades on Windows OS PCs</li>
                      <li>Oversaw security patches and addressed vulnerabilities</li>
                      <li>Managed Active Directory Users and Computers (DNS Manager) and Microsoft (SCCM)</li>
                      <li>Maintained Exchange Server 2016 and McAfee Antivirus System</li>
                      <li>Provided support for Office applications and resolved Outlook issues</li>
                      <li>Used PowerShell for Automation and Collaboration with the IT Team for complex issues.</li>
                      <li>Oversaw security patches and addressed vulnerabilities</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-8 animate-slide-up delay-500 initial-opacity-0">
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <div>
                  <h4 className="text-xl font-semibold">Bachelor's Degree in Computer Science and Engineering</h4>
                </div>
              </div>
              <div className="flex justify-center animate-slide-up delay-600 initial-opacity-0">
                <a 
                  href="/Dimalmaloku CV.pdf" 
                  download="Dimalmaloku CV.pdf"
                  className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300"
                >
                  <IconWrapper>
                    <FileDown className="w-5 h-5" />
                  </IconWrapper>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-green-500/50 bg-black/80 border-t border-green-500/20 animate-fade-in delay-100 initial-opacity-0">
        <div className="container mx-auto px-6">
          <p>© 2025 Dimal Maloku. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;