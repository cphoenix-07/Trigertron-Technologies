import React from 'react';
import ServiceCard from './ServiceCard'; // Adjust the import path
import styles from '../style';
import { layout } from '../style';
import {
    webDev,
    mobileDev,
    systemDev,
    consultancy,
    fundraising,
    marketing,
    startup,
    leadership,
    product,
} from '../assets'


const services = [
    {
        title: "Web Design & Development",
        icon: webDev,
        description: "Crafting user-friendly websites customized to your brand. Focus on intuitive navigation, high conversion rates, and scalability with cutting-edge technologies."
    },
    {
        title: "System Development",
        icon: systemDev,
        description: "Designing systems that streamline operations, reduce costs, and ensure data integration. Build scalable, reliable systems with robust security measures."
    },
    {
        title: "Mobile Development",
        icon: mobileDev,
        description: "Specializing in iOS and Android apps for wider reach. Prioritize user experience, speed, and ongoing support for competitive apps."
    },
    {
        title: "Business Consultancy",
        icon: consultancy,
        description: "Navigate business complexities with tailored strategies and market insights. Optimize processes, allocate resources efficiently, and lead with effectiveness."
    },
    {
        title: "Fundraising Services",
        icon: fundraising,
        description: "Specialize in tailored fundraising strategies, connecting with investors, and securing capital. Offer financial modeling and compelling presentations."
    },
    {
        title: "Branding & Marketing Strategies",
        icon: marketing,
        description: "Build a strong brand identity, execute comprehensive digital marketing campaigns, and create engaging content for better results."
    },
    {
        title: "Startup Consultancy",
        icon: startup,
        description: "Expert guidance from inception to success. Assist in planning, market entry, and efficient resource allocation for startups."
    },
    {
        title: "Strategic Planning",
        icon: leadership,
        description: "Trigertron strategizes for business success, mapping clear objectives, resource optimization, and innovation pathways. Your trusted partner for strategic planning and sustainable growth."
    },
    {
        title: "Product Management",
        icon: product,
        description: "Align product development with goals and user needs. Prioritize features, oversee every aspect, and execute successful product launches."
    }
];


const Services = () => {
    return (
        <>
            <section id="features" className={layout.section}>
                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>
                        Our Services
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        Our services are not just about technology; they're about transforming your dreams into reality. At Trigertron Technologies, we believe in the power of innovation to shape your success story. Let's embark on this journey together and turn your aspirations into achievements.
                    </p>
                </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </>
    );
};

export default Services;
