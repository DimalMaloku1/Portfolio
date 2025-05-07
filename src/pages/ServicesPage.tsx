import React from 'react';
import { Code2, Laptop, Smartphone, Database, Cloud, Lock } from 'lucide-react';
import IconWrapper from '../components/IconWrapper';
import MatrixRain from '../components/MatrixRain';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  details: string[];
}

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Code2 className="w-16 h-16" />,
      title: "Custom Web Development",
      description: "End-to-end web applications built with modern technologies",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "SEO Optimization",
        "Performance Tuning"
      ],
     
      details: [
        "Full-stack web application development using React, Angular, or Vue.js",
        "Custom backend development with .NET Core or Node.js",
        "Database design and implementation",
        "API development and integration",
        "Performance optimization and caching strategies",
        "Comprehensive testing and quality assurance"
      ]
    },
    {
      icon: <Smartphone className="w-16 h-16" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS & Android Apps",
        "React Native Development",
        "App Store Deployment",
        "Mobile UI/UX Design"
      ],
     
      details: [
        "Native iOS development using Swift",
        "Native Android development using Kotlin",
        "Cross-platform development with React Native",
        "Mobile app UI/UX design",
        "Push notification integration",
        "App store submission and optimization"
      ]
    },
    {
      icon: <Database className="w-16 h-16" />,
      title: "Database Solutions",
      description: "Robust database design and optimization",
      features: [
        "Database Architecture",
        "Performance Optimization",
        "Data Migration",
        "Backup Solutions"
      ],
   
      details: [
        "Database design and modeling",
        "Performance optimization and tuning",
        "Data migration and integration",
        "Backup and recovery solutions",
        "Database security implementation",
        "Monitoring and maintenance"
      ]
    },
    {
      icon: <Cloud className="w-16 h-16" />,
      title: "Cloud Services",
      description: "Cloud infrastructure setup and management",
      features: [
        "AWS/Azure Setup",
        "Cloud Migration",
        "Scalability Planning",
        "Cost Optimization"
      ],
      
      details: [
        "Cloud infrastructure setup on AWS or Azure",
        "Cloud migration strategy and implementation",
        "Scalability and high availability design",
        "Cost optimization and management",
        "Cloud security implementation",
        "Monitoring and alerting setup"
      ]
    },
    {
      icon: <Lock className="w-16 h-16" />,
      title: "Security Solutions",
      description: "Application security and penetration testing",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Security Best Practices",
        "Compliance Implementation"
      ],
    
      details: [
        "Security vulnerability assessment",
        "Penetration testing and security audits",
        "Security best practices implementation",
        "Compliance (GDPR, HIPAA) implementation",
        "Security monitoring and incident response",
        "Security training and documentation"
      ]
    },
    {
      icon: <Laptop className="w-16 h-16" />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance and technical support",
      features: [
        "24/7 Support",
        "Regular Updates",
        "Performance Monitoring",
        "Bug Fixes"
      ],
    
      details: [
        "24/7 technical support",
        "Regular updates and maintenance",
        "Performance monitoring and optimization",
        "Bug fixing and issue resolution",
        "Feature enhancements and updates",
        "Documentation and knowledge transfer"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black/50 text-green-400">
      <MatrixRain />
      
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-4 text-glow">Our Services</h1>
        <p className="text-xl text-center text-green-400/70 mb-16 max-w-3xl mx-auto">
          Comprehensive software development solutions tailored to your needs. From web applications to mobile apps,
          we deliver high-quality solutions that drive your business forward.
        </p>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/90 border border-green-500/30 rounded-lg p-8 hover:border-green-500 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="mb-6">
                    <IconWrapper>
                      {service.icon}
                    </IconWrapper>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-green-400">{service.title}</h2>
                  <p className="text-green-400/70 mb-6">{service.description}</p>
                  <div className="text-2xl font-semibold text-green-400">{service.price}</div>
                </div>
                
                <div className="md:w-2/3 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-400">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-green-400/70">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-400">What's Included</h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-green-400/70">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;