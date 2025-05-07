'use client'

import { Inter } from 'next/font/google'
import Link from 'next/link'
import {
  FaSchool,
  FaChalkboardTeacher,
  FaBookOpen
} from 'react-icons/fa'
import { useEffect, useState } from 'react'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

export default function AlternativeHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Background images for slider
  const bgImages = [
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
  ]

  return (
    <section className="relative h-1/2 overflow-hidden">
      {/* Fixed height to ensure Swiper works properly */}
      <div className="absolute inset-0 h-full w-full">
        {mounted ? (
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active bg-indigo-600'
            }}
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false 
            }}
            loop={true}
            className="h-full w-full"
            slidesPerView={1}
          >
            {bgImages.map((img, index) => (
              <SwiperSlide key={index} className="h-full w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${img})` }}
                >
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/img/4.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>
        )}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-16 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="md:py-5 space-y-8 z-10">
            <span className="inline-block rounded-full bg-indigo-200 px-4 py-1 text-sm font-medium text-indigo-900 shadow">
              Open House 2025
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Bergabunglah dengan{' '}
              <span className="text-indigo-400">SMA Harapan Bangsa</span>
            </h1>

            <p className={`text-lg text-gray-300 max-w-xl ${inter.className}`}>
              Kami menyediakan kurikulum inovatif, fasilitas modern, dan lingkungan inspiratif untuk mengembangkan potensi siswa.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#registrasi"
                className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white text-base font-medium hover:bg-indigo-700 transition duration-300 shadow"
              >
                Registrasi Sekarang
              </a>
              <Link
                href="/Profil"
                className="inline-block rounded-lg border border-indigo-400 px-6 py-3 text-indigo-100 text-base font-medium hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition duration-300"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <feature.icon className="h-6 w-6 text-indigo-400 mt-1" />
                  <div>
                    <h4 className="text-md font-semibold text-gray-100">{feature.title}</h4>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: FaSchool,
    title: 'Fasilitas Lengkap',
    description: 'Laboratorium, perpustakaan, dan ruang multimedia.'
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Tenaga Pengajar Profesional',
    description: 'Guru berkualitas dengan pengalaman internasional.'
  },
  {
    icon: FaBookOpen,
    title: 'Kurikulum Digital',
    description: 'Pembelajaran blended learning berbasis teknologi.'
  },
  {
    icon: FaSchool,
    title: 'Ekstrakurikuler',
    description: 'Beragam kegiatan untuk minat dan bakat siswa.'
  }
]