import React from 'react';
import { FaAward, FaUserTie, FaHandsHelping, FaShieldAlt } from 'react-icons/fa';

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
    >
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 rounded-full mb-4 shadow-lg">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-start text-gray-700">{description}</p>
    </div>
  );
};


const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaAward className="w-8 h-8" />,
      title: 'Complete HR Solutions',
      description: 'From recruitment to benefits administration, we provide comprehensive HR services that streamline your workforce management.',
    },
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: 'Leading Recruitment Experts',
      description: 'Our team specializes in finding the right talent for your business needs, ensuring growth and success.',
    },
    {
      icon: <FaHandsHelping className="w-8 h-8" />,
      title: 'Consulting Services',
      description: 'We offer expert HR consulting, tailored strategies, and innovative solutions that empower your business to thrive.',
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Employee Benefits Management',
      description: 'We ensure that your employee benefits are managed efficiently and cost-effectively, reducing overheads while increasing satisfaction.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
