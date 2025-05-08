'use client';

import { useState, useEffect } from "react";
import ContactCompact from "@/components/Content/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";

interface Fasilitas {
  id: number;
  title: string;
  img: string;
}

export default function FasilitasSekolah() {
  const [fasilitas, setFasilitas] = useState<Fasilitas[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFasilitas = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const res = await fetch('/api/img', {
          method: 'GET',
          cache: 'no-store'
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch facilities data: ${res.status}`);
        }
        
        const json = await res.json();
        
        if (json && json.data) {
          setFasilitas(json.data);
        } else {
          throw new Error('Invalid data format received');
        }
      } catch (err) {
        console.error('Error fetching facilities:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFasilitas();
  }, []);

  return (
    <section>
      <div className="px-6 py-20 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-12">Fasilitas Sekolah</h2>
        
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="rounded-2xl overflow-hidden shadow animate-pulse">
                <div className="w-full h-56 bg-gray-300" />
                <div className="p-4 bg-white">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-10">
            <p className="text-red-500">Failed to load facilities data: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try Again
            </button>
          </div>
        )}

        {!isLoading && !error && fasilitas.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No facilities data available at the moment.</p>
          </div>
        )}

        {!isLoading && !error && fasilitas.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {fasilitas.map((item, index) => (
              <div
                key={item.id || index}
                className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={`/img/fasilitas/${item.img}`}
                    alt={item.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-lg font-medium text-center">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <ContactCompact />
      <Footer />
    </section>
  );
}