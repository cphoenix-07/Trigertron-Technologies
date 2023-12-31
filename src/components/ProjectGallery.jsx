import React from 'react';
import { poochiee, sankatha, masionrevere, neoreality, vrindaStore, hranalytics } from '../assets';
import styles from '../style';
import { layout } from '../style';

const projects = [
    {
        title: 'Pet Care Platform - Poochiee',
        description: 'Poochiee is a comprehensive platform for pet enthusiasts, offering resources, expert advice, grooming tips, adoption support, and a thriving community. We enhance the lives of pets and their owners.',
        imageUrl: poochiee, // Replace with your image URL
        source_code_link: 'https://poochiee.in/',
    },
    {
        title: 'Social Platform - Sankatha',
        description: 'Sankatha is a dynamic social media platform akin to Twitter but dedicated to giving voice to the underrepresented. It thrives on discussions encompassing spirituality, science, culture, and technology.',
        imageUrl: sankatha, // Replace with your image URL
        source_code_link: 'https://sankatha-web.vercel.app/',
    },
    {
        title: 'Home Decor Web Design',
        description: `Explore our home decor website design for a curated selection of stylish and functional products. Transform your living spaces with ease, discovering inspiration and quality items that elevate your home's aesthetic.`,
        imageUrl: masionrevere, // Replace with your image URL
        source_code_link: 'https://maison-revere.vercel.app/',
    },
    {
        title: 'NeoReality',
        description: `Where imagination meets reality. Explore an immersive metaverse platform, seamlessly blending digital and physical worlds. Experience boundless creativity, social connections, and limitless possibilities in a new era of reality.`,
        imageUrl: neoreality, // Replace with your image URL
        source_code_link: 'https://neo-reality.vercel.app/',
    },
    {
        title: 'Vrinda Store Annual',
        description: `Welcome to the Vrinda Store Annual Report Data Analysis GitHub repository! Here, you'll find comprehensive Excel spreadsheets and analytical tools to dissect and gain valuable insights from Vrinda Store's annual financial reports.`,
        imageUrl: vrindaStore, // Replace with your image URL
        source_code_link: 'https://github.com/cphoenix-07/Vrinda-Store-Annual-Report/',
    },
    {
        title: 'HR Attrition Analytics',
        description: `Uncovering Attrition Trends: Role, Dept, Age, Education. Valuable insights for HR & management to address employee turnover effectively.`,
        imageUrl: hranalytics, // Replace with your image URL
        source_code_link: 'https://github.com/cphoenix-07/HR-Attrition-Analysis',
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
