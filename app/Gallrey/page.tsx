"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ContactCompact from "@/components/Content/page";
import Footer from "@/components/Footer/page";

export default function Gallery() {
  const [fasilitas, setFasilitas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("/api/gallery", {
          method: "GET",
          cache: "no-store",
        });
        const data = await res.json();
        setFasilitas(data.data);
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);
  return (
    <section className="bg-white mt-5">
      <div className="py-16 px-5">
        <h2 className="text-3xl font-bold text-center mb-1">Gallery</h2>
        <h3 className="text-2xl font-bold text-center mb-3">kegiatan di SMAN 17 BONE</h3>
        
        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading...</div>
        ) : fasilitas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fasilitas.map((item: any) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={`/img/gallery/${item.url}`}
                  alt={`Gallery Image ${item.id}`}
                  className="w-full h-56 object-cover"
                  width={400}
                  height={300}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No gallery images found.
          </div>
        )}
      </div>
      <ContactCompact />
      <Footer />
    </section>
  );
}
