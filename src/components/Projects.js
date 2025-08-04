import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: 'Aplikasi E-commerce',
    description: 'Platform belanja online modern dengan fitur keranjang, pembayaran, dan manajemen produk.',
    imageUrl: 'https://placehold.co/600x400/16213e/e0e0e0?text=Proyek+1',
    link: '#',
  },
  {
    title: 'Visualisasi Data',
    description: 'Dashboard interaktif untuk memvisualisasikan data penjualan perusahaan secara real-time.',
    imageUrl: 'https://placehold.co/600x400/16213e/e0e0e0?text=Proyek+2',
    link: '#',
  },
  {
    title: 'Website Portofolio',
    description: 'Portofolio pribadi yang menampilkan proyek-proyek dan keahlian dengan desain yang menarik.',
    imageUrl: 'https://placehold.co/600x400/16213e/e0e0e0?text=Proyek+3',
    link: '#',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Proyek Saya</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;