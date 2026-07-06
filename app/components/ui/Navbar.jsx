import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-blue-950 text-white px-4 sm:px-6 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <button className="px-4 py-2 bg-blue-800 rounded-lg hover:bg-amber-300 hover:text-black">
          &#9776;
        </button>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-64 px-3 py-2 rounded text-black bg-white"
          />

          <button className="w-full sm:w-auto px-4 py-2 bg-blue-800 rounded-lg hover:bg-amber-300 hover:text-black">
            Search
          </button>

          <Link href="/dashboard/profile">
            <button className="w-full sm:w-auto px-4 py-2 bg-blue-800 rounded-lg hover:bg-amber-300 hover:text-black">
              Profile
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}