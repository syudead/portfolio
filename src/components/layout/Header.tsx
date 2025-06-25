import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold font-mono">Noriyuki Tanabe</h1>
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
  );
};

export default Header;  