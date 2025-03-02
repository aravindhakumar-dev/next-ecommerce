import Link from "next/link";

export default function Menu() {
  return (
    <ul className="main-menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about.html">About Us</Link>
      </li>
      <li>
        <Link href="/custom-neon.html">Custom Neon</Link>
      </li>
      <li>
        <Link href="/upload-design.html">Upload Your Design</Link>
      </li>
      <li>
        <Link href="/products.html">Products</Link>
      </li>
      <li>
        <Link href="/contact.html">Contact Us</Link>
      </li>
    </ul>
  );
}
