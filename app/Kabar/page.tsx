'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, Eye, Clock } from 'lucide-react';
import ContactCompact from '@/components/Content/page';
import Footer from '@/components/Footer/page';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

interface Berita {
  id: number;
  title: string;
  description: string;
  image: string;
  date?: string; // Optional date field
  views?: number; // Optional views counter
}

const BeritaSection = () => {
  const [beritaList, setBeritaList] = useState<Berita[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts`, {
          cache: 'no-store',
          method: 'GET',
        });
        const isi = await res.json();
        
        const data = isi.data;

        const enhancedData = data.map((item : any) => ({
          ...item,
          date: new Date().toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
          views: Math.floor(Math.random() * 1000) + 100,
        }));
        
        setBeritaList(enhancedData);
      } catch (err) {
        console.error("Gagal mengambil berita:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <section className="py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2 bg-blue-50 px-3 py-1 rounded-full">
            <h3 className="text-blue-600 font-medium text-sm tracking-wider">SMAN 17 BONE</h3>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent ${inter.variable} mb-4`}>
            KABAR TERKINI
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Temukan berita dan informasi terbaru seputar kegiatan dan prestasi di SMAN 17 Bone
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : beritaList.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <Swiper
              ref={swiperRef}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 250,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ 
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="mySwiper w-full"
            >
              {beritaList.map((berita) => (
                <SwiperSlide key={berita.id} className="w-full md:w-3/4 lg:w-2/3">
                  <Link href={`/Kabar/Detail/${berita.id}`} className="block">
                    <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 mx-4 my-8">
                      <div className="relative w-full h-56 md:h-80 overflow-hidden bg-top">
                        <Image
                          src={`/assets/${berita.image}`}
                          alt={berita.title}
                          fill
                          className="object-cover bg-top transition-transform duration-700 hover:scale-110 "
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        
                        <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            <span className="text-xs">{berita.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Eye size={16} className="mr-1" />
                            <span className="text-xs">{berita.views}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className={`text-xl md:text-2xl font-bold text-gray-800 mb-3 line-clamp-2 ${inter.variable}`}>
                          {berita.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {berita.description}
                        </p>
                        <div className="flex items-center text-blue-600 font-medium group">
                          <span>Baca Selengkapnya</span>
                          <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="mt-12 flex justify-center">
              <Link href="/Kabar/gambar" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-blue-200">
                <span>Lihat Semua Berita</span>
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <p className="text-gray-500">Tidak ada berita yang tersedia saat ini.</p>
          </div>
        )}
      </section>
      <ContactCompact />
      <Footer />
    </div>
  );
};

export default BeritaSection;