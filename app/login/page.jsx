"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [remember, setRemember] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend — sirf dashboard pe redirect kar do
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f4fb] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#f4f4fb] rounded-lg p-6 sm:p-10 space-y-5"
      >
        <Input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="bg-gray-100"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="bg-gray-100"
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-500">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="accent-emerald-500"
            />
            Remember me
          </label>
          <span className="italic text-gray-400 cursor-pointer hover:underline">
            Forgot Password?
          </span>
        </div>

        <Button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 tracking-widest font-semibold"
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
}