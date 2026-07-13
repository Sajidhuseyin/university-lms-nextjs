import Image from "next/image";
import Link from "next/link";
import teachers from "../../data/teachers"; // If this file is pages/teachers/index.js

export default function Teachers() {
  return (
    <div className="container">

      <h1>Our Teachers</h1>

      <div className="grid">

        {teachers.map((teacher) => (

          <div className="card" key={teacher.id}>

            <Image
              src={teacher.image}
              width={150}
              height={150}
              alt={teacher.name}
              style={{
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />

            <h3>{teacher.name}</h3>

            <p>{teacher.subject}</p>

            <Link href={`/teachers/${teacher.id}`}>
              <button className="btn">
                View Profile
              </button>
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}