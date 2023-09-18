import React from 'react';
import { mobileDev, webDev } from '../assets';
import styles from '../style';
import { layout } from '../style';

const projects = [
    {
        title: 'Pet Care Platform - Poochiee',
        description: 'Poochiee is a comprehensive platform for pet enthusiasts, offering resources, expert advice, grooming tips, adoption support, and a thriving community. We enhance the lives of pets and their owners.',
        imageUrl: webDev, // Replace with your image URL
        source_code_link: 'https://poochiee.in/',
    },
    {
        title: 'Social Platform - Sankatha',
        description: 'Sankatha is a dynamic social media platform akin to Twitter but dedicated to giving voice to the underrepresented. It thrives on discussions encompassing spirituality, science, culture, and technology.',
        imageUrl: mobileDev, // Replace with your image URL
        source_code_link: 'https://sankatha-web.vercel.app/',
    },
];

const ProjectCard = ({ title, description, imageUrl, sourceCodeLink }) => (
    <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
        <div className="bg-gradient-to-br from-[#00040F] via-gray-800 to-gray-700 text-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl m-4">
            <div className="project-image-container mb-4 text-center">
                <img src={imageUrl} alt={title} className="project-image w-[500px] h-[200px] mx-auto mb-4 cover" />
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            </div>
            <div>
                <p className="text-gray-200">{description}</p>
            </div>
        </div>
    </a>
);

const ProjectGallery = () => (
    <>
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Our Works
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    At Trigertron Technologies, we believe in demonstrating our prowess through tangible, real-world examples of our work. Each project in our portfolio serves as a testament to our skills, showcasing our ability to tackle intricate challenges, harness a wide array of technologies, and manage projects with utmost efficiency.
                </p>
            </div>
        </section>

        <div className="project-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    sourceCodeLink={project.source_code_link}
                />
            ))}
        </div>
    </>
);

export default ProjectGallery;
