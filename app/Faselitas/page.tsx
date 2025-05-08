"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ContactCompact from "@/components/Content/page";
import Footer from "@/components/Footer/page";

interface Faselitas {
  id: number;
  title: string;
  img: string;
}

export default function FasilitasSekolah() {
  const [fasilitas, setFasilitas] = useState<Faselitas[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFasilitas = async () => {
      try {
        const res = await fetch("/api/img");
        const json = await res.json();
        setFasilitas(json.data);
      } catch (error) {
        console.error("Gagal mengambil data fasilitas:", error);
        setFasilitas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFasilitas();
  }, []);

  return (
    <section>
      <div className="px-6 py-20 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-12">Fasilitas Sekolah</h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading fasilitas...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {fasilitas.length > 0 ? (
              fasilitas.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  <Image
                    src={`/img/faselitas/${item.img}`}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                    width={400}
                    height={300}
                  />
                  <div className="p-4 bg-white">
                    <p className="text-lg font-medium text-center">{item.title}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">Tidak ada data fasilitas</p>
              </div>
            )}
          </div>
        )}
      </div>
      <ContactCompact />
      <Footer />
    </section>
  );
}
