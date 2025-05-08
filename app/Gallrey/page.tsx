"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ContactCompact from "@/components/Content/page";
import Footer from "@/components/Footer/page";

interface GalleryItem {
  id: number;
  url: string;
}

export default function Gallery() {
  const [fasilitas, setFasilitas] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("/api/gallery", {
          method: "GET",
          cache: "no-store",
        });
        const data = await res.json();
        setFasilitas(data.data || []);
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <section className="bg-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Galeri
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Kegiatan di SMAN 17 BONE
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse text-gray-400 text-lg">Loading...</div>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {fasilitas.length > 0 ? (
                fasilitas.map((item) => (
                  <motion.div
                    key={item.id}
                    className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Image
                      src={`public/gallery/${item.url}`}
                      alt={`Gallery Image ${item.id}`}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="col-span-full text-center py-10 text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  No gallery images found.
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <ContactCompact />
      <Footer />
    </section>
  );
}
