import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/; // Indian 10-digit phone numbers starting with 6-9

    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim() || !emailPattern.test(formData.email))
      errors.email = "Enter a valid email.";
    if (!formData.phone.trim() || !phonePattern.test(formData.phone))
      errors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Add your submission logic here
    }
  };

  return (
    <div className="pt-28 pb-20 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full bg-gray shadow-2xl rounded-lg p-8 md:p-12">
        {/* Header Section */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500 text-center">
          Get In Touch Today
        </h2>
        <p className="text-gray-700 text-center mt-2">
          Let us know how we can help you. Fill out the form below.
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name*
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Business Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Business Email*
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
              Mobile Number*
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              value={formData.phone}
              onChange={handleChange}
              pattern="[6-9]{1}[0-9]{9}"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Organisation Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="organization">
              Organisation Name
            </label>
            <input
              type="text"
              name="organization"
              placeholder="Enter your organisation name"
              value={formData.organization}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Subject */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
              Subject*
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Enter the subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>

          {/* Comments */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="comments">
              Comments
            </label>
            <textarea
              name="comments"
              placeholder="Enter your comments"
              rows="4"
              value={formData.comments}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:col-span-2 bg-gradient-to-r from-blue-800 to-blue-500 text-white p-3 rounded-lg hover:bg-gradient-to-r from-blue-800 to-blue-500 transition duration-300"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
