import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactSection from '../ContactSection';

describe('ContactSection', () => {
  it('renders the contact section', () => {
    render(<ContactSection />);
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();
  });
}); 