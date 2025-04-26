export default function Kegiatan() {
  return (
   <section className="bg-white py-12 px-4 md:px-16">
  <div className="max-w-7xl mx-auto">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Visi & Misi Sekolah</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Menjadi institusi pendidikan yang unggul dalam prestasi dan berakhlak mulia.
      </p>
    </div>

    
    <div className="grid md:grid-cols-2 gap-10 items-center">
      
    <div className="flex flex-col items-center text-center">
        <img
          src="https://via.placeholder.com/250"
          alt="Kepala Sekolah"
          className="rounded-2xl shadow-lg w-64 h-auto object-cover mb-4"
        />
        <h4 className="text-lg font-semibold text-gray-800">Drs. Budi Santosa</h4>
        <p className="text-sm text-gray-500">Kepala Sekolah</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Visi</h3>
        <p className="text-gray-600 mb-6">
          Mewujudkan generasi cerdas, mandiri, dan berkarakter yang siap menghadapi tantangan global.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">Misi</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Meningkatkan mutu pembelajaran yang aktif, kreatif, dan inovatif.</li>
          <li>Menanamkan nilai-nilai moral dan spiritual dalam kehidupan sehari-hari.</li>
          <li>Mengembangkan potensi peserta didik secara optimal sesuai bakat dan minat.</li>
          <li>Menumbuhkan semangat kompetitif dan cinta tanah air.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}