import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the site title', () => {
    render(<Header />);
    expect(screen.getByText('Noriyuki Tanabe')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('has correct navigation links', () => {
    render(<Header />);
    const aboutLink = screen.getByText('About');
    const projectsLink = screen.getByText('Projects');
    const contactLink = screen.getByText('Contact');

    expect(aboutLink).toHaveAttribute('href', '#about');
    expect(projectsLink).toHaveAttribute('href', '#projects');
    expect(contactLink).toHaveAttribute('href', '#contact');
  });
}); 