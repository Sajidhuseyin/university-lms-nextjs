 import {
  FaChalkboardTeacher,
  FaCertificate,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

export default function WhyChoose() {
  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Teachers",
      desc: "Learn from experienced instructors.",
    },
    {
      icon: <FaCertificate />,
      title: "Certified Courses",
      desc: "Industry-recognized certificates.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Online Learning",
      desc: "Study anytime from anywhere.",
    },
    {
      icon: <FaBriefcase />,
      title: "Career Support",
      desc: "Projects and interview preparation.",
    },
  ];

  return (
    <div className="why">

      <h1>Why Choose University LMS?</h1>

      <div className="grid">

        {features.map((item, index) => (

          <div className="card" key={index}>

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </div>
  );
}