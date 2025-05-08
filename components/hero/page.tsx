'use client'

import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { 
  FaSchool, 
  FaChalkboardTeacher, 
  FaBookOpen,
  FaPrayingHands 
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
    '/img/4.jpg', 
    '/img/5.jpg', 
    '/img/6.jpg'
  ]

  return (
    <section className="relative h-screen overflow-hidden pt-6 sm:mt-[70px] mt-[70px]">
      {/* Background slider */}
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
              delay: 5000,
              disableOnInteraction: false
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
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/4.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight">
              Masa Depan Cerah 
              <span className="block text-indigo-400">Dimulai dari Sini</span>
            </h1>

            <p className={`text-lg text-gray-300 max-w-2xl ${inter.className}`}>
              Bergabunglah dengan <strong className="text-indigo-300">SMA Harapan Bangsa</strong> — 
              sekolah inovatif yang menghadirkan kurikulum digital, pengajar profesional, dan 
              lingkungan belajar modern untuk generasi emas Indonesia.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#registrasi"
                className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg"
              >
                Registrasi Sekarang
              </a>
              <Link
                href="/Profil"
                className="inline-block rounded-lg border border-indigo-300 px-6 py-3 text-indigo-100 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 hover:bg-white/10 p-4 rounded-lg transition-all duration-300"
                >
                  <div className="bg-indigo-600/20 p-2 rounded-lg">
                    <feature.icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side content */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
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
                      <span>nilai sempurna</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-indigo-400 rounded-full"></div>
                      <span>pendidikan berkualitas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-indigo-400 rounded-full"></div>
                      <span>mengikuti ajaran agama </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-indigo-400 rounded-full"></div>
                      <span>Pembelajaran interaktif</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-indigo-600/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-200">
                    SMA Harapan Bangsa mengubah cara belajar menjadi lebih menyenangkan dan relevan dengan dunia kerja.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-8 w-8 bg-indigo-600 rounded-full"></div>
                    <div>
                      <p className="text-white text-xs font-semibold">Drs.H.MASTAN.M.pd</p>
                      <p className="text-xs text-gray-400">Alumni 2023</p>
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
    description: 'Laboratorium modern dan perpustakaan digital.'
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Pengajar Profesional',
    description: 'Guru berpengalaman dan berkualifikasi tinggi.'
  },
  {
    icon: FaBookOpen,
    title: 'Kurikulum Digital',
    description: 'Pembelajaran dengan teknologi terkini.'
  },
  {
    icon: FaPrayingHands,
    title: 'Pendidikan Agama',
    description: 'Pembinaan karakter dan akhlak berbasis agama.'
  }
]