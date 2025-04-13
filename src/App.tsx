import * as React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './components/ProjectCard';

const App: React.FC = () => {
  const projects = [
    {
      title: "TODO",
      description: "オンラインマークダウンメモ帳",
      technologies: "spa / grpahql / graphcool / vue.js / vuex / vue-router / vue-apollo / vuetify / netlify",
      imageUrl: "/images/sc3.png",
      demoUrl: "https://hardcore-roentgen-cfb40d.netlify.com/"
    },
    {
      title: "Digital Asset Management",
      description: "オンライン上でファイルを管理するWebアプリケーション。",
      technologies: "spa / grpahql / phoenixframework / elixir / react.js / react-router v4",
      imageUrl: "/images/sc1.png",
      demoUrl: "https://each-mediumspringgreen-condor.gigalixirapp.com",
      demoCredentials: "デモサイトBasic認証: guest / guest"
    },
    {
      title: "portfolio",
      description: "このサイト。作品集。",
      technologies: "spa / github pages / webpack / react.js / react-router v4 / material-ui",
      imageUrl: "/images/sc2.png",
      demoUrl: "https://portfolio.rainyflow.net/",
      sourceUrl: "https://github.com/syudead/portfolio"
    }
  ];

  const techStack = [
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "GraphQL", color: "bg-pink-500" },
    { name: "Elixir", color: "bg-purple-500" },
    { name: "Vue.js", color: "bg-emerald-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold font-mono">syude.dev</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex space-x-6"
            >
              <a href="#about" className="hover:text-primary transition-colors font-mono">About</a>
              <a href="#projects" className="hover:text-primary transition-colors font-mono">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors font-mono">Contact</a>
            </motion.div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <motion.h2 
              className="text-6xl font-bold mb-4 font-mono"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-primary">const</span> developer = {"{"}
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              name: "syude",
            </motion.p>
            <motion.p 
              className="text-xl text-muted-foreground font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              role: "Full Stack Developer"
            </motion.p>
            <motion.h2 
              className="text-6xl font-bold mb-4 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {"}"}
            </motion.h2>
          </motion.div>
        </section>

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

        <section id="projects" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-mono">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-mono">Contact</h2>
            <div className="max-w-md mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                お問い合わせやコラボレーションのご提案など、お気軽にご連絡ください。
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="block text-primary hover:text-primary/80 transition-colors font-mono"
                >
                  <span className="text-muted-foreground">email:</span> your.email@example.com
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:text-primary/80 transition-colors font-mono"
                >
                  <span className="text-muted-foreground">github:</span> github.com/yourusername
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-muted border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-mono">© 2024 syude.dev</p>
        </div>
      </footer>
    </div>
  );
};

export default App; 