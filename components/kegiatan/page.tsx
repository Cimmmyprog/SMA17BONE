'use client';

import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Import font Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function Kegiatan() {
  return (
    <section className={`bg-white py-14 px-6 md:px-20 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start text-center md:text-left md:pl-28"
          >
            <Image
              src="/img/12.jpg"
              alt="Kepala Sekolah"
              className="rounded-2xl shadow-xl w-64 h-auto object-cover mb-4"
              width={300}
              height={300}
            />
            <h4 className="text-xl font-semibold text-gray-800">Drs. H. Mastan, M.Pd</h4>
            <p className="text-sm text-gray-500">Kepala Sekolah</p>
          </motion.div>

          {/* TEKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Assalamu’alaikum Wr. Wb.
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-5">
              <p>
                Puji syukur kami panjatkan ke hadirat Allah SWT atas limpahan rahmat dan hidayah-Nya, sehingga dengan
                kerjasama yang baik antara sekolah dan para alumni, Website <strong>SMAN 17 BONE</strong> kini telah
                dapat dibangun dan dikembangkan.
              </p>
              <p>
                Kami menyadari bahwa kemajuan sebuah lembaga pendidikan sangat bergantung pada kemampuannya dalam
                memanfaatkan Teknologi Informasi. Oleh karena itu, SMAN 17 BONE terus berupaya untuk menjadi sekolah
                yang adaptif dan inovatif terhadap perkembangan teknologi digital.
              </p>
              <p>
                Dengan visi <strong>“Menjadi sekolah unggul yang melahirkan generasi berkarakter, berprestasi, dan berwawasan global”</strong>,
                kami berkomitmen untuk terus meningkatkan kualitas pendidikan dengan dukungan perangkat IT serta
                berbagai sistem informasi yang menunjang kegiatan belajar-mengajar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
