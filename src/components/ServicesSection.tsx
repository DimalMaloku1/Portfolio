import React from 'react';
import { Code2, Laptop, Smartphone, Database, Cloud, Lock } from 'lucide-react';
import IconWrapper from './IconWrapper';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Custom Web Development",
      description: "End-to-end web applications built with modern technologies",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "SEO Optimization",
        "Performance Tuning"
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS & Android Apps",
        "React Native Development",
        "App Store Deployment",
        "Mobile UI/UX Design"
      ],
     
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Database Solutions",
      description: "Robust database design and optimization",
      features: [
        "Database Architecture",
        "Performance Optimization",
        "Data Migration",
        "Backup Solutions"
      ],
    
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Services",
      description: "Cloud infrastructure setup and management",
      features: [
        "AWS/Azure Setup",
        "Cloud Migration",
        "Scalability Planning",
        "Cost Optimization"
      ],
      
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Security Solutions",
      description: "Application security and penetration testing",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Security Best Practices",
        "Compliance Implementation"
      ],
    
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance and technical support",
      features: [
        "24/7 Support",
        "Regular Updates",
        "Performance Monitoring",
        "Bug Fixes"
      ],
    
    }
  ];

  return (
    <section id="services" className="py-20 bg-black/80 border-t border-green-500/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-glow animate-slide-up">
          Services Offered
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black/90 border border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-all duration-300 animate-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <IconWrapper>
                  {service.icon}
                </IconWrapper>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3 text-green-400">
                {service.title}
              </h3>
              
              <p className="text-green-400/70 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-green-400/70">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;