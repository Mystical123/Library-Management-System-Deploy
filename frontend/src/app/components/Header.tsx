import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-left">
          <Link href="/"><a className="brand">Library Management System</a></Link>
        </div>

        <div className="nav-right">
          <Link href="/"><a>Home</a></Link>
          <Link href="/search"><a>Catalog</a></Link>
          <Link href="/membership"><a>Membership</a></Link>
          <Link href="/reservation"><a>Reservation</a></Link>
          <Link href="/wishlist"><a>Wishlist</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/credits"><a>Credits</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <button id="login-btn" className="ghost">Login</button>
          <button id="cart-btn" className="ghost">Cart <span id="cart-count">0</span></button>
        </div>
      </nav>
    </header>
  );
}
