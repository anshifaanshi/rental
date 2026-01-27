"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("rentallogicskeralacom@gmail.com"); // default admin email
  const [password, setPassword] = useState(""); // admin password to type
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) return alert("Please enter password");

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        return alert(data.message || "Login failed");
      }

      // save admin token in localStorage
      localStorage.setItem("adminToken", data.token);

      setLoading(false);
      alert("Login successful! Redirecting to admin dashboard...");
      router.push("/admin-dashboard"); // redirect to admin dashboard page
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#152e3e]">
      <div className="bg-[#1a3a4a] p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-[#FFD700] text-center">Admin Login</h2>

        <label className="block mb-2 text-gray-300 text-sm">Email</label>
        <input
          type="email"
          value={email}
          disabled
          className="w-full p-2 mb-4 rounded border border-gray-600 bg-gray-800 text-gray-200"
        />

        <label className="block mb-2 text-gray-300 text-sm">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-gray-600 bg-gray-800 text-gray-200"
          placeholder="Enter password"
        />

        <button
          onClick={handleLogin}
          className="w-full py-2 bg-[#FFD700] text-[#1a3a4a] font-bold rounded hover:bg-yellow-500 transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login as Admin"}
        </button>
      </div>
    </div>
  );
}
