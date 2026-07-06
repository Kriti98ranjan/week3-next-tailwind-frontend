"use client";
import { useState } from "react";
import Link from "next/link";
import AreaChart from "@/app/components/ui/AreaChart";
import BarChart from "@/app/components/ui/BarChart";
import Sidebar from "@/app/components/ui/Sidebar";
import Navbar from "@/app/components/ui/Navbar";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/ui/Modal";
import Input from "@/app/components/ui/Input";
import { process } from "node:process";


export default function DashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-4 sm:space-y-6 px-1 sm:px-0">
      {/* Page title */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Dashboard</h1>

      {/* Stat Cards — responsive: 1 col on mobile, 2 on sm, 4 on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-0 sm:px-2">
        <Card title="Primary Card" className="bg-blue-600">
          <p className="text-sm sm:text-base">View Details -</p>
        </Card>

        <Card title="Warning Card" className="bg-yellow-500">
          <p className="text-sm sm:text-base">View Details -</p>
        </Card>

        <Card title="Success Card" className="bg-green-600">
          <p className="text-sm sm:text-base ">View Details -</p>
        </Card>

        <Card title="Danger Card" className="bg-red-600">
          <p className="text-sm sm:text-base">View Details -</p>
        </Card>
      </div>

      {/* Charts — stack on mobile, side by side on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card title="Area Chart Example" className="bg-white text-black overflow-x-auto">
          <div className="min-w-70">
            <AreaChart />
          </div>
        </Card>

        <Card title="Bar Chart Example" className="bg-white text-black overflow-x-auto">
          <div className="min-w-70">
            <BarChart />
          </div>
        </Card>
      </div>

      {/* Badges + Buttons — stack on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Card header="Status Badges">
          <div className="flex flex-wrap gap-2">
            <Badge label="Active" className="bg-green-600" dot />
            <Badge label="Pending" className="bg-yellow-500" dot />
            <Badge label="Failed" className="bg-red-600" dot />
            <Badge label="Admin" className="bg-blue-600" />
          </div>
        </Card>

        <Card header="Actions">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Button
              className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
              onClick={() => setModalOpen(true)}
            >
              Open Modal
            </Button>

            <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
              Approve
            </Button>

            <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
              Delete
            </Button>

            <Button className="bg-gray-400 text-white hover:bg-gray-700 w-full sm:w-auto">
              Cancel
            </Button>
          </div>
        </Card>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New Item"
        footer={
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <Button variant="outline" onClick={() => setModalOpen(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setModalOpen(false)} className="w-full sm:w-auto">
              Save
            </Button>
          </div>
        }
      >
        <Input label="Name" placeholder="Enter name..." className="mb-4 text-black" />
        <Input label="Email" type="email" placeholder="email@example.com" className="text-black" />
      </Modal>
    </div>
  );
}