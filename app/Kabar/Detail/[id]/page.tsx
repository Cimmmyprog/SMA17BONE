'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { Inter } from 'next/font/google';

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
  if (loading) return <p className="text-center py-20 text-gray-400">Loading berita...</p>;

  return (
    <div className={`${inter.className} bg-white`}>
      {beritaList.map((berita) => (
        <article
          key={berita.id}
          className="max-w-5xl mx-auto p-6 sm:p-10 lg:p-16 mt-10 bg-white shadow-lg rounded-xl"
        >
          <h1 className="text-2xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
            {berita.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">01 Januari 2024</p>
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src={`/assets/${berita.image}`}
              alt={berita.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p>{berita.description}</p>
            <p className="text-xs mt-4 text-gray-400">ID: {id}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
