import * as React from 'react';
import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';

describe('AboutSection', () => {
  it('renders the section title', () => {
    render(<AboutSection />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders the tech stack title', () => {
    render(<AboutSection />);
    expect(screen.getByText('Tech Stack')).toBeInTheDocument();
  });

  it('renders all tech stack items', () => {
    render(<AboutSection />);
    const techStack = ['TypeScript', 'React', 'Node.js', 'GraphQL', 'Elixir', 'Vue.js'];
    techStack.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders the skills section', () => {
    render(<AboutSection />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('DevOps')).toBeInTheDocument();
  });
}); 