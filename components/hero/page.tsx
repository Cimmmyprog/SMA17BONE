'use client'

import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FaSchool,
  FaChalkboardTeacher,
  FaBookOpen,
  FaPrayingHands,
} from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export default function EnhancedHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const bgImages = [
    '/img/hero/1.jpeg',
    '/img/hero/2.jpeg',
    '/img/hero/3.jpeg',
    '/img/hero/4.jpeg',
  ]

  return (
    <section className="relative h-screen overflow-hidden py-6 mt-[70px]">
      {/* Background Slider */}
      <div className="absolute inset-0 h-full w-full">
        {mounted ? (
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active bg-indigo-600',
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full w-full"
            slidesPerView={1}
          >
            {bgImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/hero/1.jpeg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-white text-5xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Masa Depan Cerah
              <span className="block text-indigo-400">Dimulai dari Sini</span>
            </h1>

            <p className={`text-base sm:text-lg text-gray-300 max-w-2xl ${inter.className}`}>
              Bergabunglah dengan <strong className="text-indigo-300">SMAN 17 BONE</strong> — sekolah inovatif yang menghadirkan kurikulum digital, pengajar profesional, dan lingkungan belajar modern untuk generasi emas Indonesia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://spmb.sulselprov.go.id/"
                target="_blank"
                className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg"
              >
                Registrasi Sekarang
              </Link>
              <Link
                href="/Profil"
                className="inline-block rounded-lg border border-indigo-300 px-6 py-3 text-indigo-100 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition duration-300"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 hover:bg-white/10 p-4 rounded-lg transition duration-300"
                >
                  <div className="bg-indigo-600/20 p-2 rounded-lg">
                    <feature.icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side content */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl max-w-xl">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-indigo-600 rounded-full flex items-center justify-center">
                    <FaSchool className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">SMAN 17 BONE</h4>
                    <p className="text-xs text-indigo-200">Pendidikan Berkualitas</p>
                  </div>
                </div>
                <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                  Pendaftaran Dibuka
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Keunggulan Kami:</h3>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-indigo-400 rounded-full"></div>
                      <span>Nilai sempurna</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-indigo-400 rounded-full"></div>
                      <span>Pendidikan berkualitas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-indigo-400 rounded-full"></div>
                      <span>Mengikuti ajaran agama</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-indigo-400 rounded-full"></div>
                      <span>Pembelajaran interaktif</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-600/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-200">
                    SMAN 17 BONE mengubah cara belajar menjadi lebih menyenangkan dan relevan dengan dunia kerja.
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-8 w-8 bg-indigo-600 rounded-full" />
                    <div>
                      <p className="text-white text-xs font-semibold">Drs. H. Mastan, M.Pd</p>
                      <p className="text-xs text-gray-400">Kepala Sekolah</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: FaSchool,
    title: 'Fasilitas Lengkap',
    description: 'Laboratorium modern dan perpustakaan digital.',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Pengajar Profesional',
    description: 'Guru berpengalaman dan berkualifikasi tinggi.',
  },
  {
    icon: FaBookOpen,
    title: 'Kurikulum Digital',
    description: 'Pembelajaran dengan teknologi terkini.',
  },
  {
    icon: FaPrayingHands,
    title: 'Pendidikan Agama',
    description: 'Pembinaan karakter dan akhlak berbasis agama.',
  },
]
