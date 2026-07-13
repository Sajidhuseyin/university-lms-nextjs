 import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="container">

      <div className="contact-header">
        <h1>Contact Us</h1>

        <p>
          Have questions about our courses or admissions?
          We'd love to hear from you.
        </p>
      </div>

      <ContactForm />

    </div>
  );
}