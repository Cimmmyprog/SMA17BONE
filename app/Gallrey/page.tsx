import Image from "next/image";
import ContactCompact from "@/components/Content/page";
import Footer from "@/components/Footer/page";

export default function Gallery() {
  return (
    <section className="bg-white mt-5">
      <div className="py-16 px-5">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="overflow-hidden rounded-xl shadow-md">
            <Image
              src="https://source.unsplash.com/random/400x300?cat1"
              alt="Gallery Image"
              width={400}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <Image
              src="https://source.unsplash.com/random/400x300?cat2"
              alt="Gallery Image"
              width={400}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <Image
              src="https://source.unsplash.com/random/400x300?cat3"
              alt="Gallery Image"
              width={400}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <Image
              src="https://source.unsplash.com/random/400x300?cat4"
              alt="Gallery Image"
              width={400}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <ContactCompact />
      <Footer />
    </section>
  );
}

  
  