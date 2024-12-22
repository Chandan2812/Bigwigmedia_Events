import about from "../assets/ABOUT.png"
const AboutUs = () => {
  return (
    <section id="about" className=" py-16 px-8 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            About Us
          </h2>
          <p className="text-md text-gray-600 mt-4 text-justify">
          Ever wondered what you'd get if you crossed a digital advertising agency with Artificial Intelligence & Machine learning technology? Well, stop racking your brain cells! The answer is BIGWIG MEDIA, an AI & ML infused, pow-bam-slammingly amazing digital advertising agency that's breaking the internet!
          </p>
          <p className="text-md text-gray-600 mt-4 text-justify">
          With AI and ML as our trusty sidekicks, we're transforming the online ad world, offering ground-breaking services that help businesses master the digital arena. Our special blend for success includes our very own AI tech, marketing prowess, dynamite creative skills, top-notch tech solutions, streamlined processes, and our Sherlock-Holmes-like understanding of analytics. We don't just partner with our clients to reach their goals. We're like the suave secret agent, always aiming to outperform and exceed expectations!
          </p>
          <p className="text-md text-gray-600 mt-4 text-justify">
          At Bigwig Media, we don't just click buttons and pull levers behind the screen! We're the mad scientists, the innovators, the trailblazers at the frontier of the digital marketing universe!  
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
            src={about} // Replace this URL with your actual image source
            alt="About Us"
            className="w-full max-w-sm md:max-w-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
