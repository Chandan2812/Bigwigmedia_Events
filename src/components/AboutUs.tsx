
const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-16 px-8 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            At Unify, we are passionate about providing innovative solutions that simplify your day-to-day tasks. 
            Our team is committed to delivering high-quality tools and experiences that empower businesses and individuals to achieve their goals efficiently.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            With years of expertise in technology and customer-centric design, we strive to make a meaningful impact on the world through our products and services.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg" // Replace this URL with your actual image source
            alt="About Us"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
