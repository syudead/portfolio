import * as React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/NoriyukiTanabe',
      icon: <FaGithub className="w-6 h-6" />,
      color: 'hover:bg-gray-800 hover:text-white'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/NoriyukiTanabe',
      icon: <FaTwitter className="w-6 h-6" />,
      color: 'hover:bg-blue-400 hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/NoriyukiTanabe',
      icon: <FaLinkedin className="w-6 h-6" />,
      color: 'hover:bg-blue-600 hover:text-white'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 font-mono text-center">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center p-6 rounded-xl bg-background border border-border transition-all duration-300 ${link.color}`}
              >
                <div className="text-primary mb-3">{link.icon}</div>
                <span className="font-mono text-sm">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 