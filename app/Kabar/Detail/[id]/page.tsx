'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

interface iiBerita {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function Page() {
  const params = useParams();
  const id = params.id as string;

  const [beritaList, setBeritaList] = useState<iiBerita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const res = await fetch(`/api/detail?id=${id}`);
        if (!res.ok) {
          setError(true);
          return;
        }

        const data = await res.json();

        if (!data?.data || data.data.length === 0) {
          setError(true);
          return;
        }

        setBeritaList(data.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, [id]);

  if (error) return notFound();
  if (loading)
    return (
      <div className="text-center py-20 text-gray-400 text-lg animate-pulse">
        Memuat berita...
      </div>
    );

  return (
    <div className={`${inter.className} bg-gray-50  min-h-screen`}>
      {beritaList.map((berita) => (
        <motion.article
          key={berita.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto p-6 sm:p-10 lg:p-16 mt-10  shadow-2xl rounded-2xl"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 tracking-tight leading-snug">
            {berita.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6 italic">
            Dipublikasikan pada <time dateTime="2024-01-01">01 Januari 2024</time>
          </p>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden group bg-top-left">
            <Image
              src={`/assets/${berita.image}`}
              alt={berita.title}
              fill
              className=" object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-800 prose-p:leading-relaxed prose-p:mb-4">
            <p>{berita.description}</p>
            <p className="text-xs mt-8 text-gray-400">ID Berita: {id}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
