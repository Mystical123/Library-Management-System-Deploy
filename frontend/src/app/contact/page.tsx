
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <section className="contact-form-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions, feedback, or issues, send us a message and our team will respond as soon as possible.
          </p>

          <form id="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={5} required></textarea>

            <button type="submit">Send Message</button>
          </form>

          <p id="form-status" className="muted"></p>
        </section>
      </main>

      <Footer />
    </>
  );
}
