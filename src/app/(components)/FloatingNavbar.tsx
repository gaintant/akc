// components/FloatingNavbar.tsx
import Link from "next/link";

const FloatingNavbar = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 w-10/12 max-w-2xl -translate-x-1/2 transform rounded-full bg-white px-4 py-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_8px_24px_-4px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-center">
        <ul className="flex w-full max-w-xl items-center justify-between text-xs sm:text-sm md:text-base">
          <li>
            <Link
              href="/"
              className="px-2 py-1 transition-colors hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/how-it-works"
              className="px-2 py-1 transition-colors hover:text-blue-500"
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              href="/competition"
              className="px-2 py-1 transition-colors hover:text-blue-500"
            >
              The Competition
            </Link>
          </li>
          <li>
            <Link
              href="/pre-registration"
              className="px-2 py-1 transition-colors hover:text-blue-500"
            >
              Pre-registration
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-2 py-1 transition-colors hover:text-blue-500"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
