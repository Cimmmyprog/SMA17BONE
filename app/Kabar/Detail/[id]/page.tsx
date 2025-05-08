// app/Kabar/Detail/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'], display: 'swap' });

interface iiBerita {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default async function Page({ params }: { params : Promise<{id: string}>}){
  const {id} = await params;
  
    const res = await fetch(`/api/detail?id=${id}`, {
      cache: 'no-store',
      method: 'GET',
    });

    if (!res.ok) return notFound();

    const data = await res.json();
    const beritaList = data.data;

    if (!beritaList || beritaList.length === 0) return notFound();

    return (
      <div className={`${inter.className} bg-white`}>
        {beritaList.map((berita: iiBerita) => (
          <article
            key={berita.id || ''}
            className="max-w-5xl mx-auto p-6 sm:p-10 lg:p-16 mt-10 bg-white shadow-lg rounded-xl"
          >
            <h1 className="text-2xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
              {berita.title}
            </h1>
            <p className="text-sm text-gray-500 mb-6">01 Januari 2024</p>
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden shadow-md">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${berita.image}`}
                alt={berita.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none text-gray-800">
              <p>{berita.description}</p>
              <p>ID: {id}</p>
            </div>
          </article>
        ))}
      </div>
    );
}