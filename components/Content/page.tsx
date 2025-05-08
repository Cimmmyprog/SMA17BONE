import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function ContactCompact() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Info Kontak + Google Maps */}
        <div className="space-y-8">
          <div>
            <h3 className="text-4xl font-extrabold text-gray-800 mb-2">SMAN 17 BONE</h3>
            <p className="text-gray-600 text-sm">Sekolah Menengah Atas Negeri di Bone, Sulawesi Selatan</p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d819.4736941512704!2d119.97374903480092!3d-4.599063224773174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1746165081543!5m2!1sid!2sid"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              style={{ border: 0 }}
            ></iframe>
          </div>

          <div className="space-y-3 text-gray-700 text-base">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              Jl. Pendidikan No.123, Bone, Sulawesi Selatan
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              (0481) 123456
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              info@sman17bone.sch.id
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-transform hover:scale-105">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-transform hover:scale-105">
              <FaInstagram />
            </a>
            <a href="#" className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full transition-transform hover:scale-105">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Form Kontak */}
        <form className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 space-y-6">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Nama</label>
            <input
              type="text"
              placeholder="Nama lengkap"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Alamat email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Pesan</label>
            <textarea
              rows={5}
              placeholder="Tulis pesan Anda di sini..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-6 py-3 rounded-lg transition-all"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}
