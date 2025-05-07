'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        cache: 'no-store',
      });
      const data = await res.json();
      setBeritaList(data.data);
    };
    fetchData();
  }, []);

  return (
    <section className="px-4 py-12 md:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Berita Terbaru</h2>
        <p className="text-gray-600 text-lg">Ikuti kabar dan update terbaru dari kami</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {beritaList.map((berita) => (
          <div
            key={berita.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-60 rounded-t-2xl overflow-hidden">
              <Image
                src={`http://localhost:3000/assets/${berita.image}`}
                alt={berita.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{berita.title}</h3>
              <p className="text-gray-600 text-sm">{berita.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeritaSection;
