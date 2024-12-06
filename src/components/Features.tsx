
function Features() {
  const featureData = [
    {
      title: "Admission Management",
      description:
        "Streamline your entire admission process, from student application submission to final enrollment. Centralize student data and improve communication with real-time status updates and easy tracking.",
      listItems: [
        "Real-Time Updates",
        "Data Centralization",
        "Improved Tracking",
        "Seamless Workflow",
      ],
      imageUrl: "https://t3softwares.com/wp-content/uploads/2023/09/5-1.png",
    },
    {
      title: "Paid Application Management",
      description:
        "Manage applications with integrated payment systems. Allow students to apply and pay easily, ensuring a smooth and transparent payment process.",
      listItems: [
        "Integrated Payment",
        "Simple User Flow",
        "Payment Confirmation",
        "Transparency in Payment Process",
      ],
      imageUrl: "https://t3softwares.com/wp-content/uploads/2023/09/5-2.png",
    },
    {
      title: "Lead Management",
      description:
        "Centralize, manage, and distribute your leads effectively. Track lead performance, source, and scoring metrics to improve conversions.",
      listItems: [
        "Lead Source Tracking",
        "Lead Scoring",
        "Performance Monitoring",
        "Conversion Optimisation",
      ],
      imageUrl: "https://t3softwares.com/wp-content/uploads/2023/09/5-1.png",
    },
    {
      title: "Counselor Management",
      description:
        "Monitor and evaluate counselor performance, improve engagement, and streamline communication between students and counselors.",
      listItems: [
        "Counselor Performance Tracking",
        "Improved Engagement",
        "Centralised Communication",
        "Real-Time Insights",
      ],
      imageUrl: "https://t3softwares.com/wp-content/uploads/2023/09/5-1.png",
    },
    {
      title: "Student Panel",
      description:
        "Empower students with a centralized panel for communication, application scoring, fee management, and call history. A seamless way for students to manage all aspects of their application and communication with your institution.",
      listItems: [
        "Communication Hub",
        "Application Scoring",
        "Fee Management",
        "Call History",
      ],
      imageUrl: "https://t3softwares.com/wp-content/uploads/2023/09/5-1.png",
    },
    {
      title: "Admin Panel",
      description:
        "Manage and oversee the entire institution through a comprehensive admin panel. Control admissions, view reports, and monitor staff and performance from one central platform.",
      listItems: [
        "Institution-wide Control",
        "Reports and Analytics",
        "Staff Monitoring",
        "Real-Time Performance Tracking",
      ],
      imageUrl: "https://t3softwares.com/wp-content/uploads/2023/09/5-1.png",
    },
    {
      title: "Vendor Management Panel",
      description:
        "Streamline vendor relationships and track performance with a centralized vendor management system. Monitor metrics to optimize vendor performance and improve collaboration.",
      listItems: [
        "Vendor Performance Tracking",
        "Streamlined Relationships",
        "Centralized Communication",
        "Improved Collaboration",
      ],
      imageUrl: "https://t3softwares.com/wp-content/uploads/2023/09/5-1.png",
    },
    {
      title: "Document Verification",
      description:
        "Simplify document verification with an automated and secure system. Validate submitted documents for authenticity and ensure compliance effortlessly.",
      listItems: [
        "Automated Verification",
        "Secure Document Handling",
        "Compliance Monitoring",
        "Authenticity Checks",
      ],
      imageUrl: "https://t3softwares.com/wp-content/uploads/2023/09/5-1.png",
    },
    {
      title: "Communication Management",
      description:
        "Manage all forms of communication (emails, WhatsApp, SMS) from one platform. Streamline messaging, scheduling, and tracking to improve student interaction and follow-ups.",
      listItems: [
        "Centralized Communication",
        "Multi-Channel Support",
        "Scheduling & Automation",
        "Tracking and Reporting",
      ],
      imageUrl: "https://t3softwares.com/wp-content/uploads/2023/09/5-1.png",
    },
  ];

  return (
    <div id="features" className="py-16 px-8 sm:px-12">
      {featureData.map((feature, index) => (
        <div
          key={index}
          className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-8 mt-${index === 0 ? 0 : 16}`}
        >
          {/* Feature */}
          <div className={index % 2 === 0 ? "" : "order-1 md:order-2"}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight hover:text-blue-600 transition-colors duration-300">
              {feature.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">{feature.description}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
              {feature.listItems.map((item, i) => (
                <ul key={i} className="hover:text-blue-500 transition-colors duration-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500 text-xl">✔</span> {item}
                  </li>
                </ul>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center mb-10 md:mb-4 order-2 md:order-1">
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-full max-w-md md:max-w-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
