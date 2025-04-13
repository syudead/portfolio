import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ContactSection from '../ContactSection';

describe('ContactSection', () => {
  it('renders the section title', () => {
    render(<ContactSection />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the contact description', () => {
    render(<ContactSection />);
    expect(screen.getByText('お問い合わせやコラボレーションのご提案など、お気軽にご連絡ください。')).toBeInTheDocument();
  });

  it('renders contact links', () => {
    render(<ContactSection />);
    expect(screen.getByText('email:')).toBeInTheDocument();
    expect(screen.getByText('github:')).toBeInTheDocument();
  });
}); 