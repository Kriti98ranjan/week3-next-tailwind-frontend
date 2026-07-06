export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 bg-[#1e2a38] text-white flex-col min-h-screen">
      <div className="px-6 py-5 text-lg font-bold border-b border-white/10">
        Start Bootstrap
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <p className="text-xs text-gray-400 uppercase px-2 mb-2">Core</p>

        <a href="#" className="block px-3 py-2 rounded bg-white/10">
          Dashboard
        </a>

        <p className="text-xs text-gray-400 uppercase px-2 mt-4 mb-2">
          Interface
        </p>

        <a
          href="#"
          className="block px-3 py-2 rounded hover:bg-white/10 text-gray-300"
        >
          Layouts
        </a>

        <a
          href="#"
          className="block px-3 py-2 rounded hover:bg-white/10 text-gray-300"
        >
          Pages
        </a>

        <p className="text-xs text-gray-400 uppercase px-2 mt-4 mb-2">
          Addons
        </p>

        <a
          href="#"
          className="block px-3 py-2 rounded hover:bg-white/10 text-gray-300"
        >
          Charts
        </a>

        <a
          href="#"
          className="block px-3 py-2 rounded hover:bg-white/10 text-gray-300"
        >
          Tables
        </a>
      </nav>
    </aside>
  );
}