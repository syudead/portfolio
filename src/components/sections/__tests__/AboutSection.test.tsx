import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';

describe('AboutSection', () => {
  it('renders the about section', () => {
    render(<AboutSection />);
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
  });
}); 