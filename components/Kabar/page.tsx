'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

const newsItems = [
  {
    title: "Lomba Sains Nasional 2025",
    desc: "Siswa SMAN 1 berhasil meraih juara 1 dalam ajang Lomba Sains tingkat nasional.",
    image: "https://via.placeholder.com/600x300",
  },
  {
    title: "Upacara Hari Pendidikan",
    desc: "Kegiatan upacara bendera memperingati Hari Pendidikan Nasional diikuti oleh seluruh siswa dan guru.",
    image: "https://via.placeholder.com/600x300",
  },
  {
    title: "Kunjungan Industri",
    desc: "Siswa kelas 11 mengunjungi perusahaan teknologi sebagai bagian dari program pengenalan dunia kerja.",
    image: "https://via.placeholder.com/600x300",
  },
  {
    title: "Kunjungan Industri",
    desc: "Siswa kelas 11 mengunjungi perusahaan teknologi sebagai bagian dari program pengenalan dunia kerja.",
    image: "https://via.placeholder.com/600x300",
  },

];

export default function NewsSection() {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Berita Sekolah</h2>
          <p className="text-gray-600 mt-2">Informasi terbaru seputar kegiatan dan prestasi sekolah.</p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {newsItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl shadow p-4">
                <img src={item.image} alt={item.title} className="rounded-md mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
