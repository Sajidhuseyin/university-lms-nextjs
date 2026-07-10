import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero">

      <div>
        <h1>University LMS</h1>

        <h2>Learn Anywhere Anytime</h2>

        <p>
          Online learning platform for university students
        </p>

         <Link href="/courses">
  <button className="btn">
    Explore Courses
  </button>
</Link>
      </div>

      <div>
        <Image
          src="/nstudent.png"
          alt="Hero Image"
          width={500}
          height={350}
          priority
        />
      </div>

    </div>
  );
}