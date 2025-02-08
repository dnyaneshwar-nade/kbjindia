import React from 'react';
import { FaChartLine, FaUsers, FaLaptopCode, FaHandshake } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, learnMore }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6 pb-16 transition duration-300 hover:shadow-2xl">
      <div className="text-blue-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>

      {/* Floating Button */}
      <a 
        href={learnMore} 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 text-white font-semibold rounded-full transition duration-300 
        bg-gradient-to-r from-blue-800 to-blue-500 shadow-lg hover:scale-110 hover:shadow-2xl hover:from-purple-600 hover:to-blue-500"
      >
        Learn More →
      </a>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FaChartLine />,
      title: 'Payroll Outsourcing',
      description:
        'Delegate payroll administration to experts, ensuring compliance and efficiency in wage calculation, leave management, and tax deductions.',
      learnMore: '#payroll-outsourcing'
    },
    {
      icon: <FaUsers />,
      title: 'Temporary Labor',
      description:
        'Hire temporary employees for short-term business demands, project-based roles, and contractual positions with skilled manpower solutions.',
      learnMore: '#temporary-labor'
    },
    {
      icon: <FaLaptopCode />,
      title: 'HR & Payroll Outsourcing',
      description:
        'Comprehensive HR and payroll solutions, including staffing, compliance management, payroll processing, and employee benefits handling.',
      learnMore: '#hr-payroll-outsourcing'
    },
    {
      icon: <FaHandshake />,
      title: 'Manpower Supply',
      description:
        'Providing skilled professionals and labor tailored to industry needs, ensuring reliability and quality workforce deployment.',
      learnMore: '#manpower-supply'
    },
    {
      icon: <FaUsers />,
      title: 'Payroll Management Service',
      description:
        'Secure and efficient payroll management, covering financial statements, benefits, bonuses, deductions, and net pay calculations.',
      learnMore: '#payroll-management'
    },
    {
      icon: <FaChartLine />,
      title: 'Facility Management',
      description:
        'Integrated facility management solutions to optimize operations and ensure seamless business performance.',
      learnMore: '#facility-management'
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
