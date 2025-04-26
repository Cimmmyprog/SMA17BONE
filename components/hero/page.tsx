'use client'
import { FaSchool, FaChalkboardTeacher, FaBookOpen } from 'react-icons/fa'
export default function AlternativeHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('/img/4.jpg')] bg-cover bg-center"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-800">
              Open House 2025
            </span>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Bergabunglah dengan <span className="text-indigo-600">SMA Harapan Bangsa</span>
            </h1>
            <p className="text-lg text-gray-600">
              Kami menyediakan kurikulum inovatif, fasilitas modern, dan lingkungan inspiratif untuk mengembangkan potensi siswa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#registrasi"
                className="inline-block rounded-md bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 transition"
              >
                Registrasi Sekarang
              </a>
              <a
                href="#visi"
                className="inline-block rounded-md border border-indigo-600 px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 transition"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
            {/* Fitur Singkat */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <FaSchool className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h4 className="text-md font-semibold text-gray-900">Fasilitas Lengkap</h4>
                  <p className="text-sm text-gray-600">Laboratorium, perpustakaan, dan ruang multimedia.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaChalkboardTeacher className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h4 className="text-md font-semibold text-gray-900">Tenaga Pengajar Profesional</h4>
                  <p className="text-sm text-gray-600">Guru berkualitas dengan pengalaman internasional.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaBookOpen className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h4 className="text-md font-semibold text-gray-900">Kurikulum Digital</h4>
                  <p className="text-sm text-gray-600">Pembelajaran blended learning berbasis teknologi.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaSchool className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h4 className="text-md font-semibold text-gray-900">Ekstrakurikuler</h4>
                  <p className="text-sm text-gray-600">Beragam kegiatan untuk minat dan bakat siswa.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Ilustrasi / kosong for visual */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
