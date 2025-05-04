import ContactCompact from '@/components/Content/page';
import Footer from '@/components/Footer/page';
import { BookOpen, HeartPulse, Mountain, ShieldCheck, Laptop, Flag } from 'lucide-react'; // lucide-react icons
import Link from 'next/link';

export default function EkstrakurikulerSection() {
  const ekstrakurikulerList = [
    {
      title: "Pramuka",
      icon: <Mountain className="w-10 h-10 text-yellow-600" />,
      description: "Melatih kemandirian dan kepemimpinan melalui kegiatan alam terbuka.",
      href: 'https://www.instagram.com/pramuka.smantub?igsh=MW9rdTd3ZDRtZzJ0Mg=='
    },
    {
      title: "PMR",
      icon: <HeartPulse className="w-10 h-10 text-red-500" />,
      description: "Belajar pertolongan pertama dan ikut serta dalam kegiatan kemanusiaan.",
      href: 'https://www.instagram.com/volnamsmantub?igsh=NW1yYW5yenhrcTN5'
    },
    {
      title: "Rohis",
      icon: <BookOpen className="w-10 h-10 text-green-600" />,
      description: "Kembangkan akhlak dan keilmuan Islam melalui kegiatan rohani.",
      href:'https://www.instagram.com/rohissmanegri17bone?igsh=MXN2Y3o3bGd1bTNqOA=='
    },
    {
      title: "PKS",
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      description: "Membentuk kedisiplinan dan tanggung jawab siswa dalam menjaga ketertiban sekolah.",
      href : 'https://www.instagram.com/pkssman.17bone?igsh=MjRkYmZpNzN5Zngw'
    },
    {
      title: "Pandu Digital",
      icon: <Laptop className="w-10 h-10 text-purple-600" />,
      description: "Belajar dan berbagi tentang teknologi serta literasi digital masa kini.",
      href : 'https://www.instagram.com/pandigsmantub?igsh=c2o3Y3JkYXZ2ZnM2'
    },
    {
      title: "Pasikibra",
      icon: <Flag className="w-10 h-10 text-rose-600" />,
      description: "Melatih disiplin, kekompakan, dan jiwa nasionalisme melalui kegiatan baris-berbaris.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ekstrakurikuler</h2>
        <p className="text-gray-600 mb-12">
          ---- SMAN 17 BONE ----
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-7">
          {ekstrakurikulerList.map((ekstra, index) => {
            const Wrapper = ekstra.href ? Link : 'div';
            const wrapperProps = ekstra.href
              ? { href: ekstra.href, target: "_blank" }
              : {};

            return (
              <Wrapper 
                key={index}
                {...wrapperProps}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300 "
              >
                <div className="flex items-center justify-center mb-4">
                  {ekstra.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{ekstra.title}</h3>
                <p className="text-gray-600 text-sm">{ekstra.description}</p>
              </Wrapper>
            );
          })}
        </div>
      </div>
      <ContactCompact/>
      <Footer/>
    </section>
  );
}
