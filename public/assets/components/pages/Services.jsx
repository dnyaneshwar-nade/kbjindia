import React from "react";

const services = [
  {
    title: "Payroll Outsourcing",
    description:
      "Outsourcing payroll process is a becoming an industry trend today. An act of delegating payroll administration to a third-party having expertise in the payroll process. Our Payroll outsourcing service gives you peace of mind that you are in expert hands. Manage diverse functions such as calculation of wages and salary, leaves management, and direct deposit of net pay into the bank accounts of employees. We take care of Payroll compliance obligations such as Provident Fund (PF), Employee State Insurance (ESIC), Professional Tax (PT), Labour Welfare Fund (LWF), and Income Tax calculation.",
    image: "/assets/services/payroll_outsourcing.jpg",
  },
  {
    title: "Temporary Labor",
    description:
      "Temporary employees are hired to assist employers to meet business demands. Project basis/Part-time basis/Contractual basis. We offer different types of Labours as per industry requirements. We provide skilled and experienced manpower to help you with your work. Before providing our services, we carefully understand the client's needs to offer the best suitable solution.",
    image: "/assets/temporary_labor.jpg",
  },
  {
    title: "HR & Payroll Outsourcing",
    description:
      "Our innovative Staffing and HR Resource solutions are tailored to enable organizations to meet the challenges of today’s fast-changing business environment. We help clients by sourcing staff, solving co-employment issues, and providing administrative management of our temporary employees, including HR management, payroll & benefits administration.",
    image: "/assets/hr_payroll.jpg",
  },
  {
    title: "Payroll Management Service",
    description:
      "We offer effective and reliable payroll management services to take your HR management to the top tier by ensuring secure round-the-clock service. The payroll management process is the administration of an employee's financial statements, which include compensation, benefits, bonuses, deductions, and net pay.",
    image: "/assets/payroll_manage.jpg",
  },
  {
    title: "Manpower Supply",
    description:
      "We provide total recruitment arrangements, sourcing, and supply of highly qualified professional staff and skilled manpower for all industries. We provide highly trained and reliable manpower resources from a variety of industries for different programs.",
    image: "/assets/manpower_supply.jpg",
  },
  {
    title: "Facility Management",
    description:
      "We offer comprehensive integrated facility management solutions to streamline operations and optimize performance for businesses of all sizes.",
    image: "/assets/facility_management.jpg",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Services Banner */}
      <div className="w-full h-64">
        <img
          src="/assets/services_banner.jpg"
          alt="Our Services"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Services List */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:px-8 mt-6 md:mt-0">
              <h3 className="text-3xl font-bold text-blue-800">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
