import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-gray-900">
        AISmartPitch
      </Link>
      <a
        href="https://aismartpitch.com"
        className="text-sm text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Site
      </a>
    </nav>
  );
}
