import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, description, icon }) => {
    return (
        <div className="bg-gradient-to-br from-[#00040F] via-gray-800 to-gray-700 text-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-center mb-4">
                <img
                    src={icon}
                    alt={title}
                    className="w-[500px] h-[200px] mx-auto mb-4 cover"
                />
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            </div>
            <p className="text-gray-200">{description}</p>
        </div>
    );
};

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default ServiceCard;
 