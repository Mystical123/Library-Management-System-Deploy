// frontend/src/app/about/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>Meet the Team — Project Delta</h1>

        {/* copy more team-member cards here */}
        <section className="team">
          <article className="card">
            <h2>Iesha Khabra</h2>
            <ul>
              <li><strong>Education:</strong> B.S. Computer Science, Sacramento State</li>
              <li><strong>Skills:</strong> TypeScript, React, Node.js</li>
              <li><strong>Experience:</strong> Tech Fellow — CodePath</li>
            </ul>
          </article>

          {/* copy more team-member cards here */}
        </section>
      </main>
      <Footer />
    </>
  );
}
