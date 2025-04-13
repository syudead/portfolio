import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  it('renders the developer text', () => {
    render(<HeroSection />);
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings[0]).toHaveTextContent(/const.*developer.*=/);
    expect(headings[1]).toHaveTextContent(/}/);
  });

  it('renders the name', () => {
    render(<HeroSection />);
    expect(screen.getByText('name: "Noriyuki Tanabe",')).toBeInTheDocument();
  });

  it('renders the role', () => {
    render(<HeroSection />);
    expect(screen.getByText('role: "Full Stack Developer"')).toBeInTheDocument();
  });
}); 