import Link from "next/link";

export const metadata = {
  title: "Home",
  description:
    "Welcome to Dashboard App — built with Next.js and Tailwind CSS.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-300">
      {/*navbar */}

      <nav className="bg-purple-50 border-b px-4 sm:px-8 py-4 flex justify-between items-center">
        <span className="font-bold text-gray-800 text-sm sm:text-base">
          Dashboard App
        </span>
        <div className="flex gap-2 sm:gap-4">
          <Link
            href="/dashboard"
            className="text-xs sm:text-sm bg-blue-600 text-white px-3 sm:px-4 py-1.5 rounded hover:bg-blue-700"
          >
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero */}

      <div className="flex flex-col items-center justify-center py-16 sm:py-32 text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Welcome to the Dashboard App
        </h1>
        <p className="text-fuchsia-500 mb-8 max-w-md text-base sm:text-lg md:text-xl font-bold">
          TailwindCSS + UI System Basics
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            href="/dashboard"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-center"
          >
            Open Dashboard
          </Link>
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-amber-300 text-center"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
