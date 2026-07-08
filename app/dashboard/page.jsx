"use client";
import { useState } from "react";
import AreaChart from "@/app/components/ui/AreaChart";
import BarChart from "@/app/components/ui/BarChart";
import Sidebar from "@/app/components/ui/Sidebar";
import Navbar from "@/app/components/ui/Navbar";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/ui/Modal";
import Input from "@/app/components/ui/Input";


export default function DashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);

 return (
  <div className="flex min-h-screen bg-gray-100">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Navbar />

      <main className="p-6 space-y-6 overflow-auto">
        {/* Page title */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Dashboard
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card title="Primary Card" className="bg-blue-600">
            <p>View Details -</p>
          </Card>

          <Card title="Warning Card" className="bg-yellow-500">
            <p>View Details -</p>
          </Card>

          <Card title="Success Card" className="bg-green-600">
            <p>View Details -</p>
          </Card>

          <Card title="Danger Card" className="bg-red-600">
            <p>View Details -</p>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            title="Area Chart Example"
            className="bg-white text-black order-2"
          >
            <AreaChart />
          </Card>

          <Card
            title="Bar Chart Example"
            className="bg-white text-black"
          >
            <BarChart />
          </Card>
        </div>

        {/* Badges + Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card header="Status Badges">
            <div className="flex flex-wrap gap-2">
              <Badge label="Active" className="bg-green-600" dot />
              <Badge label="Pending" className="bg-yellow-500" dot />
              <Badge label="Failed" className="bg-red-600" dot />
              <Badge label="Admin" className="bg-blue-600" />
            </div>
          </Card>

          <Card header="Actions">
            <div className="flex flex-wrap gap-2">
              <Button
                className="bg-blue-600"
                onClick={() => setModalOpen(true)}
              >
                Open Modal
              </Button>

              <Button className="bg-green-600">
                Approve
              </Button>

              <Button className="bg-red-600">
                Delete
              </Button>

              <Button className="bg-gray-500">
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
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </Button>

              <Button
                variant="primary"
                onClick={() => setModalOpen(false)}
              >
                Save
              </Button>
            </div>
          }
        >
          <Input
            label="Name"
            placeholder="Enter name..."
            className="mb-4 text-black"
          />

          <Input
            label="Email"
            type="email"
            placeholder="email@example.com"
            className="text-black"
          />
        </Modal>
      </main>
    </div>
  </div>
);
}