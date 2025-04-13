import * as React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const techStack = [
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "GraphQL", color: "bg-pink-500" },
    { name: "Elixir", color: "bg-purple-500" },
    { name: "Vue.js", color: "bg-emerald-500" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 font-mono">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              フルスタック開発者として、美しく機能的なWebアプリケーションの作成に情熱を注いでいます。
              モダンなWeb技術を駆使して、優れたユーザー体験の提供を目指しています。
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold font-mono">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${tech.color} text-white px-3 py-1 rounded-full text-sm font-mono`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 font-mono">Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-mono mb-2">Frontend</h4>
                <div className="h-2 bg-border rounded-full">
                  <div className="h-full bg-primary rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <h4 className="font-mono mb-2">Backend</h4>
                <div className="h-2 bg-border rounded-full">
                  <div className="h-full bg-primary rounded-full w-2/3"></div>
                </div>
              </div>
              <div>
                <h4 className="font-mono mb-2">DevOps</h4>
                <div className="h-2 bg-border rounded-full">
                  <div className="h-full bg-primary rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 