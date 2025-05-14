'use client';

import { useState, useEffect, useRef } from "react";
import ContactCompact from "@/components/Content/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import { FaSearch, FaSchool, FaStar } from "react-icons/fa";

interface Fasilitas {
  id: number;
  title: string;
  img: string;
}

export default function FasilitasSekolah() {
  const [fasilitas, setFasilitas] = useState<Fasilitas[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFacility, setSelectedFacility] = useState<Fasilitas | null>(null);
  
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchFasilitas = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const res = await fetch('/api/img', {
          method: 'GET',
          cache: 'no-store'
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch facilities data: ${res.status}`);
        }
        
        const json = await res.json();
        
        if (json && json.data) {
          setFasilitas(json.data);
        } else {
          throw new Error('Invalid data format received');
        }
      } catch (err) {
        console.error('Error fetching facilities:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFasilitas();
  }, []);

  const categories = {
    all: "Semua Fasilitas",
    academic: "Akademik",
    sports: "Olahraga",
    religious: "Keagamaan",
    arts: "Seni & Budaya"
  };
  const filteredFacilities = fasilitas.filter(facility => {
    const matchesSearch = facility.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === "all") return matchesSearch;
    const matchesCategory = 
      (activeTab === "academic" && facility.title.match(/lab|kelas|perpustakaan|study/i)) ||
      (activeTab === "sports" && facility.title.match(/lapangan|gym|olahraga|sport/i)) ||
      (activeTab === "religious" && facility.title.match(/Masjid|mushola|ibadah|prayer/i)) ||
      (activeTab === "arts" && facility.title.match(/aula|teater|seni|art|musik|music/i));
    
    return matchesSearch && matchesCategory;
  });

  const openFacilityDetail = (facility: Fasilitas) => {
    setSelectedFacility(facility);
    // This would typically open a modal or navigate to a detail page
  };

  const closeFacilityDetail = () => {
    setSelectedFacility(null);
  };

  const skeletonItems = [1, 2, 3, 4, 5, 6];

  // Function to randomly choose one of five colors for accent elements
  const getRandomAccentColor = (id: number) => {
    const colors = [
      "from-blue-500 to-indigo-600", 
      "from-emerald-500 to-green-600", 
      "from-orange-500 to-amber-600",
      "from-rose-500 to-pink-600",
      "from-indigo-500 to-purple-600"
    ];
    return colors[id % colors.length];
  };

  return (
    <section ref={sectionRef}>
      <div className="relative px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-50 to-transparent opacity-70"></div>
        <div className="absolute -top-10 right-10 w-64 h-64 rounded-full bg-indigo-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">
              Explore Our Campus
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Fasilitas <span className="text-indigo-600">Unggulan</span> Sekolah
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nikmati berbagai fasilitas modern dan lengkap yang mendukung kegiatan belajar mengajar dan pengembangan bakat siswa di sekolah kami.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === key
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Cari fasilitas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skeletonItems.map((item) => (
                <div key={item} className="rounded-xl overflow-hidden shadow-md animate-pulse bg-white">
                  <div className="w-full h-64 bg-gray-300" />
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-3" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16 bg-red-50 rounded-xl">
              <FaSchool className="mx-auto text-red-400 text-5xl mb-4" />
              <p className="text-red-600 font-medium mb-4">Failed to load facilities data: {error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && filteredFacilities.length === 0 && (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <FaSearch className="mx-auto text-gray-400 text-5xl mb-4" />
              <p className="text-gray-500 mb-2">Tidak ada fasilitas yang ditemukan</p>
              {searchQuery && (
                <p className="text-gray-400">
                  Tidak ada hasil untuk {searchQuery}. Coba kata kunci lain atau kategori berbeda.
                </p>
              )}
              {activeTab !== "all" && (
                <button
                  onClick={() => setActiveTab("all")}
                  className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                >
                  Lihat Semua Fasilitas
                </button>
              )}
            </div>
          )}

          {/* Main Content */}
          {!isLoading && !error && filteredFacilities.length > 0 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFacilities.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white transform hover:-translate-y-1 cursor-pointer"
                    onClick={() => openFacilityDetail(item)}
                  >
                    <div className="relative w-full h-64 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-tr ${getRandomAccentColor(item.id)} opacity-0 group-hover:opacity-30 transition-opacity z-10`}></div>
                      <Image
                        src={`/img/faselitas/${item.img}`}
                        alt={item.title}
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        <span className="text-white font-medium">Lihat Detail</span>
                        <FaStar className="text-yellow-400" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h3>
                      <div className="w-16 h-1 bg-indigo-600 rounded group-hover:w-full transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Facility Detail Modal */}
              {selectedFacility && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 mt-12">
                  <div className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] shadow-2xl">
                    <div className="relative h-72 sm:h-96">
                      <Image
                        src={`/img/faselitas/${selectedFacility.img}`}
                        alt={selectedFacility.title}
                        className="object-cover"
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 800px) 90vw, 500px"
                      />
                      <button 
                        onClick={closeFacilityDetail}
                        className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedFacility.title}</h3>
                      <p className="text-gray-600 mb-4">
                        {/* This would display the facility description if available in your API */}
                        Fasilitas ini dirancang untuk mendukung kegiatan belajar mengajar dengan standardisasi yang tinggi. 
                        Dilengkapi dengan peralatan modern dan lingkungan yang nyaman untuk memaksimalkan potensi siswa.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-700 mb-2">Fitur Unggulan</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Desain modern dan ergonomis</li>
                            <li>• Kapasitas optimal untuk pembelajaran</li>
                            <li>• Pencahayaan dan sirkulasi udara yang baik</li>
                            <li>• Dilengkapi peralatan teknologi terkini</li>
                          </ul>
                        </div>
                        
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          onClick={closeFacilityDetail}
                          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                        >
                          Tutup
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
              )}
=======
                <div className="flex justify-center">
                  <button
                    onClick={closeFacilityDetail}
                    className="px-5 py-2 rounded-full bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

>>>>>>> 0e11239 (Perbaiki tampilan modal fasilitas agar lebih modern dan responsif)
            </>
          )}
        </div>
      </div>
      
      <ContactCompact />
      <Footer />
    </section>
  );
}