export default function HomePage() {
  return (
    <div className="home-page">
      {/* HERO PANEL */}
      <section className="home-hero">
        <div className="home-hero-panel">
          <h1 className="page-title">Welcome to the Project Delta Library System</h1>
          <p className="page-intro">
            Explore our digital catalog, manage reservations, track borrowed books, and
            navigate the library system with ease. Designed for CSC 131 – Software Engineering,
            this interface brings clarity and structure to our system&apos;s core features.
          </p>

          <div className="home-hero-actions">
            <a href="/catalog" className="primary-link">
              Browse Catalog
            </a>
            <a href="/about" className="secondary-link">
              About the System
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="home-features">
        <h2 className="section-heading">Key Features</h2>

        <div className="card-grid">
          <article className="card">
            <h3 className="card-title">Catalog</h3>
            <p className="card-body">
              Search through the library collection with detailed book information and
              availability across branches.
            </p>
          </article>

          <article className="card">
            <h3 className="card-title">Wishlist</h3>
            <p className="card-body">
              Save books you&apos;re interested in and keep track of titles you want to borrow later.
            </p>
          </article>

          <article className="card">
            <h3 className="card-title">Reservations</h3>
            <p className="card-body">
              View and manage reserved books with clear pickup expectations and queue positions.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
