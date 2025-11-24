export default async function CatalogPage() {
  // Fetch books from backend API (backend must be running)
  let books = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`, {
      cache: "no-store",
    });
    books = await res.json();
  } catch (e) {
    console.error("Failed to fetch books:", e);
  }

  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="page-title mb-2">Catalog</h1>
      <p className="page-intro mb-10">
        Browse the full library collection, view availability, and learn more about
        each book in our system.
      </p>

      {books.length === 0 && (
        <p className="text-muted">No books found. Try again later.</p>
      )}

      <div className="catalog-grid">
        {books.map((book: any) => (
          <div key={book.id} className="catalog-card">
            <h3 className="card-title">{book.title}</h3>
            <p className="card-body">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="card-body">
              <strong>Year:</strong> {book.year}
            </p>
            <p className="card-body">
              <strong>Genre:</strong> {book.genre}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
