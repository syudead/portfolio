import React from 'react';
import ProjectCard from '../ProjectCard';

const ProjectsSection: React.FC = () => {
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

  return (
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
  );
};

export default ProjectsSection;