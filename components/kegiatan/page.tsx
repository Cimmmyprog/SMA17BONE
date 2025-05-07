'use client'

import { Inter } from 'next/font/google'
import Image from 'next/image'

// Mengimpor font Inter
const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

export default function Kegiatan() {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/img/12.jpg"
              alt="Kepala Sekolah"
              className="rounded-2xl shadow-lg w-64 h-auto object-cover mb-4"
              width={200}
              height={200}
            />
            <h4 className={`text-lg font-semibold text-gray-800 ${inter.className}`}>
              Drs. Budi Santosa
            </h4>
            <p className={`text-sm text-gray-500 ${inter.className}`}>Kepala Sekolah</p>
          </div>

          <div>
            <h3 className={`text-xl font-semibold text-gray-800 mb-4 ${inter.className}`}>Assalamu{''}alaikum Wr. Wb.</h3>
            <p className={`text-gray-600 ${inter.className}`}>
              Puji syukur kami panjatkan ke hadirat Allah SWT atas limpahan rahmat dan hidayah-Nya, sehingga dengan
              kerjasama yang baik antara sekolah dan para alumni, Website <strong>SMAN 17 BONE</strong> kini telah dapat
              dibangun dan dikembangkan.
              <br /><br />
              Kami menyadari bahwa kemajuan sebuah lembaga pendidikan, baik saat ini maupun di masa yang akan datang,
              sangat bergantung pada kemampuannya dalam memanfaatkan Teknologi Informasi. Oleh karena itu, SMAN 17 BONE
              terus berupaya untuk menjadi sekolah yang adaptif dan inovatif terhadap perkembangan teknologi digital.
              <br /><br />
              Dengan visi{""}Menjadi sekolah unggul yang melahirkan generasi berkarakter, berprestasi, dan berwawasan
              global, kami berkomitmen untuk terus meningkatkan kualitas pendidikan dengan dukungan perangkat IT serta
              berbagai sistem informasi yang menunjang kegiatan belajar-mengajar.
              <br /><br />
              Website ini kami hadirkan sebagai sarana informasi, komunikasi, dan kolaborasi antara sekolah dengan siswa,
              orang tua, alumni, serta masyarakat luas. Harapan kami, website ini dapat menjadi jembatan yang
              memperkuat transparansi dan keterbukaan informasi pendidikan di SMAN 17 BONE.
              <br /><br />
              Demikian yang dapat kami sampaikan. Semoga kehadiran website ini dapat memberikan manfaat yang
              sebesar-besarnya bagi seluruh pengguna dan mendukung kemajuan pendidikan di sekolah kita tercinta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
