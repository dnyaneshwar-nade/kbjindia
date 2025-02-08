import React from "react";

const Career = () => {
  return (
    <section className="bg-white py-20 px-0">
      {/* Career Image Section */}
        <div className="mx-auto w-full h-auto bg-blue-50 py-12 px-4">
            <img
                src="/assets/career.png" // Change this to your actual image path
                alt="Join Our Team"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <h2 className="text-4xl font-extrabold text-blue-800 mt-6 text-center">
                Join Our Team
            </h2>
            <p className="text-gray-700 mt-4 text-center max-w-2xl mx-auto leading-relaxed">
                See what it’s like to be a part of <b>KBJ India Pvt Ltd®</b>, a team built on creating and delivering  
                innovative solutions and services for businesses.
            </p>
        </div>
      {/* Career Form Section */}
      <div className="max-w-3xl mx-auto bg-gray-100 p-8 shadow-lg rounded-lg mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Apply Now
        </h3>
        <form action="#" method="POST" encType="multipart/form-data" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
                <label className="block text-gray-700 font-medium">Full Name*</label>
                <input type="text" placeholder="Your Full Name" className="w-full p-3 border rounded" required />
            </div>
            <div className="md:col-span-1">
                <label className="block text-gray-700 font-medium">Email*</label>
                <input type="email" placeholder="Your Email ID" className="w-full p-3 border rounded" required />
            </div>
            <div className="md:col-span-1">
                <label className="block text-gray-700 font-medium">Phone*</label>
                <input type="tel" placeholder="Your Phone Number" className="w-full p-3 border rounded" required />
            </div>
            <div className="md:col-span-1">
                <label className="block text-gray-700 font-medium">Job Location*</label>
                <input type="text" placeholder="Your Job Location" className="w-full p-3 border rounded" required />
            </div>
            <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium">Job Title*</label>
                <select className="w-full p-3 border rounded" required>
                <option value="">Select Job Title</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="HR Executive">HR Executive</option>
                <option value="Marketing Specialist">Marketing Specialist</option>
                <option value="Sales Manager">Sales Manager</option>
                </select>
            </div>
            <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium">Upload Your CV / Resume*</label>
                <input type="file" className="w-full p-3 border rounded" required />
            </div>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-blue-800 to-blue-500  text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Submit Application
            </button>
        </form>
        </div>

    </section>
  );
};

export default Career;
