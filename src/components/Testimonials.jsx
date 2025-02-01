import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCard = ({ name, position, quote, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-4">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600">{position}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, Tech Corp',
      quote: 'Working with this company has been a game-changer for our business. Their expertise and dedication are unmatched.',
      image: 'https://placehold.co/100x100.png?text=John+Doe',
    },
    {
      name: 'Jane Smith',
      position: 'CFO, Finance Inc',
      quote: 'The level of professionalism and attention to detail is impressive. I highly recommend their services.',
      image: 'https://placehold.co/100x100.png?text=Jane+Smith',
    },
    {
      name: 'Mike Johnson',
      position: 'CTO, Innovate LLC',
      quote: 'Their innovative solutions have helped us stay ahead of the competition. A truly valuable partner.',
      image: 'https://placehold.co/100x100.png?text=Mike+Johnson',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
