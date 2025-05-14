// app/not-found.tsx
'use client'
import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold animate-bounce mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! Halaman tidak ditemukan.</h2>
        <p className="text-gray-400 mb-6">
          Sepertinya halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}
