import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import teachers from "../../data/teachers";

export default function TeacherProfile() {

  const router = useRouter();
  const { id } = router.query;

  const teacher = teachers.find(
    (t) => t.id === Number(id)
  );

  if (!teacher) {
    return <h2 className="container">Teacher not found</h2>;
  }

  return (

    <div className="container">

      <div className="teacher-profile">

        <Image
          src={teacher.image}
          width={220}
          height={220}
          alt={teacher.name}
          style={{
            borderRadius: "50%",
            objectFit: "cover"
          }}
        />

        <h1>{teacher.name}</h1>

        <h3>{teacher.subject}</h3>

        <p>
          <strong>Qualification:</strong> {teacher.qualification}
        </p>

        <p>
          <strong>Experience:</strong> {teacher.experience}
        </p>

        <p>
          <strong>Email:</strong> {teacher.email}
        </p>

        <p>
          <strong>Office:</strong> {teacher.office}
        </p>

        <h2>About</h2>

        <p>{teacher.about}</p>

        <h2>Specialization</h2>

        <ul>
          {teacher.specialization.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Courses</h2>

        <ul>
          {teacher.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>

        <br />

        <Link href="/teachers">
          <button className="btn">
            ← Back to Teachers
          </button>
        </Link>

      </div>

    </div>

  );
}