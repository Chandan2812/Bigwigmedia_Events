import admission from '../assets/features/admission5.webp';
import application from "../assets/features/paidApplication.webp";
import lead from "../assets/features/lead-management.webp";
import conselor from "../assets/features/counselor.webp";
import student from "../assets/features/student panel.webp";
import admin from "../assets/features/admin panel.webp";
import vendor from "../assets/features/vendor.webp";
import document from "../assets/features/document (1).webp";
import communication from '../assets/features/communication.webp';

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
      imageUrl: admission,
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
      imageUrl: application,
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
      imageUrl: lead,
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
      imageUrl: conselor,
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
      imageUrl: student,
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
      imageUrl: admin,
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
      imageUrl: vendor,
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
      imageUrl: document,
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
      imageUrl: communication,
    },
  ];

  return (
    <div id="features" className="py-16 px-8 sm:px-12">
      {featureData.map((feature, index) => (
        <div
          key={index}
          className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-8 mt-${index === 0 ? 0 : 16} mt-10`}
        >
          {/* Feature */}
          <div className={index % 2 === 0 ? "" : "order-1 md:order-2"}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight transition-colors duration-300">
              {feature.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">{feature.description}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
              {feature.listItems.map((item, i) => (
                <ul key={i} className=" transition-colors duration-300">
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
              className="w-96 max-w-md md:max-w-lg transition-transform duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
