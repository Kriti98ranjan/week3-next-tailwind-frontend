"use client";
import Link from "next/link";
import { mockProfile } from "@/app/lib/dummydata";
import Card from "@/app/components/ui/Card";

export default function ProfilePage() {
  const user = mockProfile;

  return (
    <div>
      <Link href="/dashboard" className="text-blue-600 text-sm hover:underline">
        ← Go back
      </Link>

      <Card className="bg-white text-black">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Avatar */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full max-w-55 h-55 object-cover rounded-md"
            />
          </div>

          {/* Basic info */}
          <div>
            <div>
              <p className="text-xs text-gray-400">Name</p>
              <p className="font-semibold">{user.name}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Job Title</p>
              <p className="font-semibold">{user.jobTitle}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="text-blue-600">{user.email}</p>
            </div>
          </div>

          {/* Social links */}
          <div>
            <div>
              <p className="text-xs text-gray-400">LinkedIn</p>
              <p className="text-blue-600">{user.linkedin}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Twitter</p>
              <p className="text-blue-600">{user.twitter}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Facebook</p>
              <p className="text-blue-600">{user.facebook}</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6 pt-4 border-t">
          <p className="text-xs text-gray-400 mb-2">Bio</p>
          <p className="text-gray-700 text-sm leading-relaxed">{user.bio}</p>
        </div>

        <Link
          href="#"
          className="inline-block mt-4 text-blue-600 text-sm hover:underline"
        >
          Edit Profile
        </Link>
      </Card>
    </div>
  );
}