'use client';

import { FaUserGraduate, FaChalkboardTeacher, FaBuilding, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

export default function StatSection() {
  const stats = [
    {
      label: "Siswa",
      count: 780,
      icon: <FaUserGraduate className="text-xl text-indigo-600 group-hover:scale-110 transition-transform duration-300" />,
      color: "from-indigo-50 to-indigo-100",
    },
    {
      label: "Guru",
      count: 45,
      icon: <FaChalkboardTeacher className="text-xl text-green-600 group-hover:scale-110 transition-transform duration-300" />,
      color: "from-green-50 to-green-100",
    },
    {
      label: "Ruang Kelas",
      count: 35,
      icon: <FaBuilding className="text-xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
      color: "from-blue-50 to-blue-100",
    },
    {
      label: "Alumni Negara",
      count: 12,
      icon: <FaGlobe className="text-xl text-yellow-600 group-hover:scale-110 transition-transform duration-300" />,
      color: "from-yellow-50 to-yellow-100",
    },
  ];

  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Sekilas Statistik Kami
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-gradient-to-br ${item.color} p-4 shadow hover:shadow-md transition-all duration-300 flex flex-col items-center`}
            >
              <div className="mb-1">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">
                <CountUp end={item.count} duration={1.8} />
              </h3>
              <p className="text-xs font-medium text-gray-600 mt-1">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
