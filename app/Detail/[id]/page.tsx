import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

interface DetailPageProps {
  params: {
    id: string;
  };
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/detail?id=${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const beritaList = data.data;

  if (!beritaList || beritaList.length === 0) {
    notFound();
  }

  return (

    <div>
        {beritaList.map((berita : any) => (
        <section key={berita.id} className="conntainer max-w-4xl  mx-auto p-6 py-12 shadow-md  mt-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">{berita.title}</h1>
      <div className="relative mb-6">
        <img
          className="w-full h-auto  shadow-lg"
          src={`http://localhost:3000/assets/${berita.image}`}
          alt={berita.judul}
        />
      </div>
      <div className='flex justify-end'>
        <p className="text-sm text-gray-600">{berita.createdAt}</p>
      </div>
      <div className="mt-6 text-lg text-gray-700 leading-relaxed">
        <p>{berita.description}</p>
      </div>
    </section>
      ))}
    </div>
    
    
  );
};

export default DetailPage;
