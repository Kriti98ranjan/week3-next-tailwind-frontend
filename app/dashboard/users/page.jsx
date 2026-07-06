"use client";

import { useState } from "react";
import { dummy } from "@/app/lib/dummydata";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 10;

  const searchText = search.toLowerCase();

  const filteredUsers = dummy.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText)
    );
  });

  // calculate total page
  const totalPages = Math.ceil(filteredUsers.length / perPage);

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const currentUsers = filteredUsers.slice(start, end);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-400">Users &gt; List</p>

      <h1 className="text-2xl font-bold text-gray-800">
        Users
      </h1>

      <Card className="bg-white text-black">

        {/* Search */}

        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            className="border border-gray-200 rounded-md px-3 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left min-w-160">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="py-2 px-2">Name</th>
                <th className="py-2 px-2">Email</th>
                <th className="py-2 px-2">Role</th>
                <th className="py-2 px-2">Created At</th>
                <th className="py-2 px-2">Updated At</th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user) => {
                const badgeColor =
                  user.role === "Admin"
                    ? "bg-blue-600"
                    : "bg-gray-400";

                return (
                  <tr
                    key={user.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-2 px-2">
                      {user.name}
                    </td>

                    <td className="py-2 px-2 text-gray-600">
                      {user.email}
                    </td>

                    <td className="py-2 px-2">
                      <Badge
                        label={user.role}
                        className={badgeColor}
                      />
                    </td>

                    <td className="py-2 px-2 text-gray-500">
                      {user.createdAt}
                    </td>

                    <td className="py-2 px-2 text-gray-500">
                      {user.updatedAt}
                    </td>
                  </tr>
                );
              })}

              {currentUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-6 text-gray-400"
                  >
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
            Showing {filteredUsers.length === 0 ? 0 : start + 1} to{" "}
            {Math.min(end, filteredUsers.length)} of{" "}
            {filteredUsers.length} results
          </span>

          <div className="flex gap-2">
            {pages.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`w-8 h-8 rounded-md border ${
                  pageNumber === page
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}