import { Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 text-sm">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Info Sekolah */}
        <div>
          <h2 className="text-lg font-bold mb-1">SMAN 17 BONE</h2>
          <p className="text-gray-700 text-xs">
            Mencetak generasi unggul dan berkarakter.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-base font-semibold mb-2">Navigasi</h3>
          <ul className="space-y-1 text-gray-700">
            <li><Link href="/" className="hover:text-black">Beranda</Link></li>
            <li><Link href="/Profil" className="hover:text-black">Profil</Link></li>
            <li><Link href="/Ekstra" className="hover:text-black">Ekstrakurikuler</Link></li>
            <li><Link href="/kontak" className="hover:text-black">Kontak</Link></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-base font-semibold mb-2">Kontak</h3>
          <ul className="space-y-1 text-gray-700">
            <li className="flex items-center gap-2"><Phone size={14} /> (0481) 123456</li>
            <li className="flex items-center gap-2"><Mail size={14} /> sman17bone@email.sch.id</li>
            <li className="flex items-center gap-2">
              <Instagram size={14} />
              <a href="https://www.instagram.com/sman17bone" target="_blank" className="hover:text-black">
                @sman17bone
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bawah */}
      <div className="mt-8 text-center text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} SMAN 17 BONE. All rights reserved.
      </div>
    </footer>
  );
}
