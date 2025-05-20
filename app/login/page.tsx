'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push('/Inp');
    } else {
      alert("Login gagal, coba cek email dan password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col w-full max-w-sm p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <label htmlFor="username" className="mb-1 font-medium text-gray-700">Email</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          required
          className="mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="login admin dulu bos"
        />

        <label htmlFor="password" className="mb-1 font-medium text-gray-700">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="********"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}