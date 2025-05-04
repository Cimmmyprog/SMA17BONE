import ContactCompact from "@/components/Content/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
interface Faselitas {
  id: number;
  title: string;
  img : string;
}
export default async function FasilitasSekolah() {
  const res = await fetch("http://localhost:3000/api/img", {
    cache: "no-store",
  });
  const json = await res.json();
  const fasilitas = json.data;

  return (
    <section>
      <div className="px-6 py-20 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-12">Fasilitas Sekolah</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {fasilitas.map((item: Faselitas, index: number) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={`http://localhost:3000/img/faselitas/${item.img}`}
                alt={item.title}
                className="w-full h-56 object-cover"
                width={400}
                height={300}
              />
              <div className="p-4 bg-white">
                <p className="text-lg font-medium text-center">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactCompact />
      <Footer />
    </section>
  );
}
