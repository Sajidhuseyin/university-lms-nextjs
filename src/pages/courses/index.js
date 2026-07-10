

import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

const universityCourses = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    description:
      "Learn programming fundamentals, algorithms, and problem-solving techniques.",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Build responsive websites using HTML, CSS, JavaScript, React, and Next.js.",
  },
  {
    id: 3,
    title: "Database Management Systems",
    description:
      "Learn SQL, MySQL, normalization, ER diagrams, and database design.",
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    description:
      "Explore machine learning, neural networks, and intelligent systems.",
  },
  {
    id: 5,
    title: "Data Structures & Algorithms",
    description:
      "Master arrays, linked lists, stacks, queues, trees, graphs, and algorithms.",
  },
  {
    id: 6,
    title: "Software Engineering",
    description:
      "Understand SDLC, Agile methodology, Scrum, software testing, and project management.",
  },
  {
    id: 7,
    title: "Cyber Security",
    description:
      "Learn ethical hacking, encryption, network security, and cyber defense techniques.",
  },
  {
    id: 8,
    title: "Mobile App Development",
    description:
      "Develop Android and iOS applications using React Native and modern tools.",
  },
  {
    id: 9,
    title: "Cloud Computing",
    description:
      "Understand AWS, Azure, cloud storage, virtualization, and cloud deployment.",
  },
  {
    id: 10,
    title: "Computer Networks",
    description:
      "Study TCP/IP, routing, switching, wireless communication, and networking protocols.",
  },
  {
    id: 11,
    title: "Operating Systems",
    description:
      "Learn process management, memory management, scheduling, and file systems.",
  },
  {
    id: 12,
    title: "Object-Oriented Programming",
    description:
      "Master classes, objects, inheritance, polymorphism, abstraction, and encapsulation.",
  },
];

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(() => {
        setCourses(universityCourses);
        setFilteredCourses(universityCourses);
      })
      .catch(() => {
        setError("Failed to load courses.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCourses(filtered);
  };

  if (loading) {
    return <h2 className="container">Loading courses...</h2>;
  }

  if (error) {
    return <h2 className="container">{error}</h2>;
  }

  return (
    <div className="container">

      <h1>Our Courses</h1>

      <div className="search-container">

  <span className="search-icon">🔍</span>

  <div className="search-container">

  <span className="search-icon">
    <FaSearch />
  </span>

  <input
    type="text"
    placeholder="Search courses by title..."
    value={search}
    onChange={handleSearch}
    className="search"
  />

</div>

</div>

      <div className="grid">

        {filteredCourses.map((course) => (

          <div className="card" key={course.id}>

            <h3>{course.title}</h3>

            <p>{course.description}</p>

            <Link href={`/courses/${course.id}`}>

              <button className="btn">
                View Details
              </button>

            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}