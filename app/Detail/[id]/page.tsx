import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });



interface Berita {
  id: number;
  title: string;
  description: string;
  image: string;
}

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/detail?id=${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) notFound();

  const data = await res.json();
  const beritaList = data.data;

  if (!beritaList || beritaList.length === 0) notFound();

  return (
    <div className={`${inter.className} bg-white`}>
      {beritaList.map((berita: Berita) => (
        <article
          key={berita.id}
          className="max-w-5xl mx-auto p-6 sm:p-10 lg:p-16 mt-10 bg-white shadow-lg rounded-xl"
        >
          {/* Judul */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
            {berita.title}
          </h1>

          {/* Tanggal */}
          <p className="text-sm text-gray-500 mb-6">01 Januari 2024</p>

          {/* Gambar utama */}
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src={`/assets/${berita.image}`}
              alt={berita.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Deskripsi */}
          <div className="prose prose-lg max-w-none text-gray-800">
            <p>{berita.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default DetailPage;
