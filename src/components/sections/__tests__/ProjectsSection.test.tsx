import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsSection from '../ProjectsSection';

describe('ProjectsSection', () => {
  it('renders the section title', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders all project titles', () => {
    render(<ProjectsSection />);
    const projectTitles = ['TODO', 'Digital Asset Management', 'portfolio'];
    projectTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('renders project descriptions', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('オンラインマークダウンメモ帳')).toBeInTheDocument();
    expect(screen.getByText('オンライン上でファイルを管理するWebアプリケーション。')).toBeInTheDocument();
    expect(screen.getByText('このサイト。作品集。')).toBeInTheDocument();
  });
}); 