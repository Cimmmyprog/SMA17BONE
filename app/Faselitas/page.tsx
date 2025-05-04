import ContactCompact from "@/components/Content/page";
import Footer from "@/components/Footer/page";

export default function FasilitasSekolah() {
    const fasilitas = [
      {
        title: "Perpustakaan",
        img: "/img/faselitas/9.jpeg",
      },
      {
        title: "Laboratorium",
        img: "/img/faselitas/3.jpg",
      },
      {
        title: "Lapangan Olahraga",
        img: "/img/faselitas/1.jpg",
      },
      {
        title: "Ruang Komputer",
        img: "/img/faselitas/5.jpeg",
      },
      {
        title: "Ruang aula",
        img: "/img/faselitas/8.jpeg",
      },
      {
        title: "Mesjid",
        img: "/img/faselitas/7.jpeg",
      },
    ];
  
    return (
      <section>
      <div className="px-6 py-20 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-12">Fasilitas Sekolah</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {fasilitas.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-lg font-medium text-center">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactCompact />
      <Footer/>

      </section>
    );
  }
  