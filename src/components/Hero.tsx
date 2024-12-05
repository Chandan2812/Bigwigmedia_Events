import React from 'react';

function Hero() {
  return (
    <div className="bg-blue-50 py-16 px-12 mt-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-5 items-center gap-8">
        {/* Left Content */}
        <div className="md:col-span-3">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Higher Education CRM: <br />
            One Platform to Scale your Admissions
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Transform the way you Attract, Engage, and Enrol students with India's
            largest Enrolment Automation Platform for Higher Education.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            <ul>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✔</span> Enquiry to Enrolment Funnelling
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✔</span> 360° Communication Suite
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✔</span> Advance Reports & Analytics Engine
              </li>
            </ul>
            <ul>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✔</span> Automate & Track Student Journey
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✔</span> Marketing ROI Optimisation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✔</span> Inbuilt Payment & Financing Platform
              </li>
            </ul>
          </div>
        </div>

        {/* Right Content (Form) */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-lg px-6 py-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            See our Education CRM in Action
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name *"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
            />
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="text"
                placeholder="Mobile Number *"
                className="flex-1 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              />
            </div>
            <input
              type="text"
              placeholder="Organization Website *"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Request a Demo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
