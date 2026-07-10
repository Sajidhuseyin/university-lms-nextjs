 import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div>
          <h2>University LMS</h2>
          <p>
            Empowering students through quality online education and practical learning.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <p><Link href="/">Home</Link></p>
          <p><Link href="/about">About</Link></p>
          <p><Link href="/courses">Courses</Link></p>
          <p><Link href="/contact">Contact</Link></p>

        </div>

        <div>

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://github.com/sajidhuseyin" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sajidhuseyin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 University LMS | Developed by Sajid Hussain
      </p>

    </footer>
  );
}