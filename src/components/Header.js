 import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>

      <Link
  href="/"
  className="logo-section"
  onClick={() => setMenuOpen(false)}
>
        <div
          style={{
            width: "120px",
            height: "78px",
            position: "relative"
          }}
        >
<Image
  src="/newlogo.png"
  fill
  sizes="120px"
  alt="University LMS Logo"
  style={{
    objectFit: "contain"
  }}
/>
        </div>

        <h2 className="logo-title">
          University LMS
        </h2>
      </Link>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${menuOpen ? "active-menu" : ""}`}>

        <Link
  href="/"
  className={router.pathname === "/" ? "active" : ""}
  onClick={() => setMenuOpen(false)}
>
  Home
</Link>

<Link
  href="/about"
  className={router.pathname === "/about" ? "active" : ""}
  onClick={() => setMenuOpen(false)}
>
  About
</Link>

<Link
  href="/courses"
  className={router.pathname === "/courses" ? "active" : ""}
  onClick={() => setMenuOpen(false)}
>
  Courses
</Link>

<Link
  href="/teachers"
  className={router.pathname === "/teachers" ? "active" : ""}
  onClick={() => setMenuOpen(false)}
>
  Teachers
</Link>

<Link
  href="/dashboard"
  className={router.pathname === "/dashboard" ? "active" : ""}
  onClick={() => setMenuOpen(false)}
>
  Dashboard
</Link>

<Link
  href="/contact"
  className={router.pathname === "/contact" ? "active" : ""}
  onClick={() => setMenuOpen(false)}
>
  Contact
</Link>    

      </div>

    </nav>
  );
}