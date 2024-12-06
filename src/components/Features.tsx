
function Features() {
  return (
    <div className="py-16 px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div>
          <p className="text-sm text-gray-500 mb-2">CRM for Higher Education &raquo; Lead Centralisation</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Ensure Zero Lead Leakage
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Centralise, manage, and distribute your incoming enquiries across different channels &ndash; online, offline, walk-ins, digital agencies, social media on a unified platform. Eliminate lead duplication completely through primary, secondary and tertiary source attribution and empower your teams to easily monitor the lead source performances, optimise lead nurturing workflows and enrol more students, without having to rely on traditional sales CRMs or third party point solutions.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            <ul>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✔</span> No manual data exchanges
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✔</span> Complete Visibility and Control
              </li>
            </ul>
            <ul>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✔</span> Real Time Source Tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">✔</span> Quality Lead Flow Algorithms
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="text-blue-600 mt-6 inline-block hover:underline"
          >
            Learn more about Lead Management System for Universities &rarr;
          </a>
        </div>

        {/* Right Content (Illustration) */}
        <div className="flex justify-center">
          <img
            src="https://t3softwares.com/wp-content/uploads/2023/09/5-1.png" // Replace this with the actual path to your image
            alt="Centralised Lead Management"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
