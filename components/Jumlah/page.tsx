'use client';

import { useState, useEffect } from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaBuilding, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import Link from "next/link";

export default function ModernStatSection() {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    const section = document.getElementById("stats-section");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.disconnect();  // Fixed: Changed unobserve to disconnect
    };
  }, []);

  const stats = [
    {
      label: "Siswa",
      count: 780,
      icon: FaUserGraduate,  // Fixed: Changed to component reference instead of JSX element
      color: "bg-gradient-to-br from-indigo-500/90 to-purple-600/90",
      textColor: "text-indigo-50",
      shadowColor: "shadow-indigo-500/20",
    },
    {
      label: "Guru",
      count: 45,
      icon: FaChalkboardTeacher,  // Fixed: Changed to component reference
      color: "bg-gradient-to-br from-green-500/90 to-emerald-600/90",
      textColor: "text-green-50",
      shadowColor: "shadow-green-500/20",
    },
    {
      label: "Ruang Kelas",
      count: 35,
      icon: FaBuilding,  // Fixed: Changed to component reference
      color: "bg-gradient-to-br from-blue-500/90 to-cyan-600/90",
      textColor: "text-blue-50",
      shadowColor: "shadow-blue-500/20",
    },
    {
      label: "Alumni Negara",
      count: 12,
      icon: FaGlobe,  // Fixed: Changed to component reference
      color: "bg-gradient-to-br from-amber-500/90 to-orange-600/90",
      textColor: "text-amber-50",
      shadowColor: "shadow-amber-500/20",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="stats-section" className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 relative overflow-hidden">
      {/* Enhanced Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-blue-200/50 blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-56 h-56 rounded-full bg-green-200/50 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-purple-200/50 blur-3xl"></div>
        <div className="absolute top-2/3 right-1/4 w-40 h-40 rounded-full bg-amber-200/50 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            SMAN 17 BONE
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Pencapaian kami dalam memberikan pendidikan berkualitas selama bertahun-tahun
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;  // Fixed: Using the component reference correctly
            
            return (
              <motion.div
                key={index}
                variants={item}
                className={`${stat.color} ${stat.textColor} rounded-2xl p-6 ${stat.shadowColor} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white/25 p-4 rounded-full backdrop-blur-sm">
                    <IconComponent className={`text-2xl ${stat.textColor}`} />
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold mb-1">
                  {isInView && <CountUp end={stat.count} duration={2.5} />}
                  {!isInView && '0'}
                </h3>
                <p className="text-sm font-medium mt-1 opacity-90 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Improved CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Link 
            href={`/Kabar`} 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all group"
          >
            <span>Berita Smantup</span>
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}