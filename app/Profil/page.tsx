import ContactCompact from "@/components/Content/page";
import Footer from "@/components/Footer/page";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const ProfilSekolah = () => {
  const data = [
    ["Nama Sekolah", "SMAN 17 BONE"],
    ["Alamat Sekolah", "Jl. poros soppeng makssar"],
    ["Kelurahan", "lalebata"],
    ["Kecamatan", "LAMURU"],
    ["Kabupaten / Kota", "BONE"],
    ["Propinsi", "sulawesi selatan"],
    ["Kode Pos", "12520"],
    ["Telepon / Fax", "---"],
    ["Email", "info@sman17bone.sch.id"],
    ["NDS", "A.04044002"],
    ["IOS", "Kep. 81/I01.G4/1988"],
    ["NSS", "302016304007"],
    ["NPWP", "13941570017"],
    ["Akreditasi", 'Peringkat "B" dengan nilai 97 (Unggul)'],
    ["NPSN / NIS", "20107331 / 30014 / 302007"],
    ["Website", "----"],
    ["Didirikan Tahun", "1 Januari 1976"],
    ["Nomor Rekening Yayasan", "0005314003 A.N Holtikultura"],
    ["Bank", "BNI Cabang Fatmawati"],
    [
      "Pemegang Rekening",
      `1) Kepala Sekolah: HJ., S.E\n2) Bendahara: `,
    ],
  ];

  const visi = "Menjadi sekolah unggul dalam pengembangan akademik dan karakter siswa, yang berorientasi pada pembentukan generasi yang berwawasan global, berakhlak mulia, dan siap menghadapi tantangan zaman.";

  const misi = [
    "Menyediakan pendidikan berkualitas yang dapat mengembangkan potensi akademik, sosial, dan emosional siswa.",
    "Meningkatkan kompetensi guru melalui pelatihan dan pengembangan yang berkelanjutan.",
    "Membangun lingkungan sekolah yang aman, nyaman, dan mendukung pertumbuhan karakter siswa.",
    "Menjalin kerjasama dengan orang tua dan masyarakat dalam rangka menciptakan pendidikan yang holistik.",
  ];

  return (
    <div>
      <section className="max-w-5xl mx-auto mt-10 p-4 bg-white rounded-xl shadow-md text-sm">
        <h2 className="text-xl font-bold text-center  my-7">Profil Sekolah</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo Sekolah */}
          <div className="flex justify-center items-center">
            <Image
              src="/img/1.png"
              alt="Logo SMA Suluh"
              className="w-40 h-40 object-contain"
              width={200}
              height={200}
            />
          </div>

          {/* Informasi Profil Sekolah */}
          <div className="md:col-span-2 flex justify-center items-center">
            <table className="w-full table-auto">
              <tbody>
                {data.map(([label, value], index) => (
                  <tr key={index} className="border-b last:border-none">
                    <td className="py-1 pr-3 font-medium text-gray-700 w-1/3">
                      {label}
                    </td>
                    <td className="py-1 text-gray-800">
                      {label === "Website" && value !== "----" ? (
                        <a
                          href={`http://${value}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        value.split("\n").map((line, i) => <p key={i}>{line}</p>)
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Visi dan Misi Sekolah */}
        
      </section>
      <div className={`mt-8  mx-auto max-w-5xl py-8 ${inter.className}`}>
        <div>
          <h1 className="text-center font-semibold text-3xl mb-2">VISI MISI</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 px-3">
          <div>
          <h3 className="text-lg font-bold mb-4">Visi Sekolah</h3>
          <p className="text-gray-800">{visi}</p>
        </div>
          
      <div>
        <h3 className="text-lg font-bold mt-6 mb-4">Misi Sekolah</h3>
                <ul className="list-disc pl-6 text-gray-800">
                  {misi.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
      </div>
        </div>
 
          
        </div>
      <ContactCompact />
      <Footer/>
    </div>
  );
};

export default ProfilSekolah;
