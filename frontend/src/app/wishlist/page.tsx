export default async function WishlistPage() {
  let wishlist = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/wishlist`, {
      cache: "no-store",
    });
    wishlist = await res.json();
  } catch (e) {
    console.error("Failed to load wishlist:", e);
  }

  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="page-title mb-3">Wishlist</h1>
      <p className="page-intro mb-10">
        Books you’re interested in and want to keep track of.
      </p>

      {wishlist.length === 0 && (
        <p className="text-muted">Your wishlist is currently empty.</p>
      )}

      <ul className="wishlist-list">
        {wishlist.map((item: any) => (
          <li key={item.id} className="wishlist-card">
            <p className="wishlist-title">{item.title}</p>
            <p className="wishlist-meta">Author: {item.author}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
