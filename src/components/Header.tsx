import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Conny
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#signup"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Join Waitlist
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
