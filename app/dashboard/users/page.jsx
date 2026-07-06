"use client";
import { useState } from "react";
import { mockUsers } from "@/app/lib/dummydata";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;

  // Simple filter logic — name ya email match karo
  const filtered = mockUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-400">Users &gt; List</p>
      <h1 className="text-2xl font-bold text-gray-800">Users</h1>

      <Card className="bg-white text-black">
        {/* Search bar */}
        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1); // search karte hi page 1 pe reset
            }}
            className="border border-gray-200 rounded-md px-3 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Table — mobile pe horizontal scroll */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left min-w-160">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="py-2 px-2">Name</th>
                <th className="py-2 px-2">Email</th>
                <th className="py-2 px-2">Role</th>
                <th className="py-2 px-2">Created at</th>
                <th className="py-2 px-2">Updated at</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-2">{user.name}</td>
                  <td className="py-2 px-2 text-gray-600">{user.email}</td>
                  <td className="py-2 px-2">
                    <Badge
                      label={user.role}
                      className={user.role === "Admin" ? "bg-blue-600" : "bg-gray-400"}
                    />
                  </td>
                  <td className="py-2 px-2 text-gray-500">{user.createdAt}</td>
                  <td className="py-2 px-2 text-gray-500">{user.updatedAt}</td>
                </tr>
              ))}
              {paginated.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-400">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4 text-sm text-gray-500">
          <span>
            Showing {(page - 1) * perPage + 1} to{" "}
            {Math.min(page * perPage, filtered.length)} of {filtered.length} results
          </span>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 rounded-md border ${
                  p === page ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}