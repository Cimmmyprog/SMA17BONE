import Image from "next/image";
import ContactCompact from "@/components/Content/page";
import Footer from "@/components/Footer/page";

export default async function Gallery() {
  const res = await fetch("http://localhost:3000/api/gallery", {
    cache: "no-store",
  });
  const data = await res.json();
  const fasilitas = data.data;
  return (
    <section className="bg-white mt-5">
      <div className="py-16 px-5">
        <h2 className="text-3xl font-bold text-center mb-1">Gallery</h2>
         <h3 className="text-2xl font-bold text-center mb-3">kegiatan di SMAN 17 BONE</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fasilitas && fasilitas.length > 0 ? (
            fasilitas.map((item : any) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={`/gallery/${item.url}`}
                  alt={`Gallery Image ${item.id}`}
                  className="w-full h-56 object-cover"
                  width={400}
                  height={300}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">No gallery images found</p>
            </div>
          )}
        </div>
      </div>
      <ContactCompact />
      <Footer />
    </section>
  );
}