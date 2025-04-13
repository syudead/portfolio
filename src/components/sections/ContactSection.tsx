import * as React from 'react';

const ContactSection: React.FC = () => {
  return (
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
  );
};

export default ContactSection; 