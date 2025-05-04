'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})


interface Berita {
  id: number;
  title: string;
  description: string;
  image: string;
}

const BeritaSection = () => {
  const [beritaList, setBeritaList] = useState<Berita[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/posts', {
          cache: 'no-store',
        });
        const data = await res.json();
        setBeritaList(data.data);
      } catch (err) {
        console.error("Gagal mengambil berita:", err);
      } 
    };
    fetchData();
  }, []);

  return (
    <section className="bg-[#fdfdff] px-4 py-16 md:px-24 ">
      <div className="block items-center justify-center mb-10">
        <h3>--- SMAN 17 BONE ----</h3>
        <div >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          NEWS SEKOLAH
        </h2>
        </div>
        
      </div>

      {beritaList.length > 0 && (
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {beritaList.map((berita) => (
            <SwiperSlide key={berita.id}>
              <Link
                href={`/Detail/${berita.id}`}
                className="block bg-white shadow-md overflow-hidden  group"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={`/assets/${berita.image}`}
                    alt={berita.title}
                    fill
                    className="object-cover transition-transform "
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-semibold text-gray-800 mb-2 line-clamp-2 ${inter.variable}`}>
                    {berita.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {berita.description}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default BeritaSection;
