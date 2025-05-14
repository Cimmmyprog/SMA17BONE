'use client';

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter
} from "react-icons/fa";

export default function ModernContactInfo() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  const contactInfo = [
    {
      title: "Alamat",
      content: "jl.poros maros - soppeng, lalebata , kec.lamuru, kab.bone sulawesi selatan",
      icon: <FaMapMarkerAlt size={18} />,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Telepon",
      content: "(0481) 123456",
      icon: <FaPhoneAlt size={18} />,
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Email",
      content: "info@sman17bone.sch.id",
      icon: <FaEnvelope size={18} />,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  const socialMedia = [
    {
      icon: <FaFacebookF size={16} />,
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      link: "#"
    },
    {
      icon: <FaInstagram size={16} />,
      bgColor: "bg-gradient-to-br from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700",
      link: "#"
    },
    {
      icon: <FaTwitter size={16} />,
      bgColor: "bg-sky-500",
      hoverColor: "hover:bg-sky-600",
      link: "#"
    }
  ];

  const operatingHours = [
    { days: "Senin - Kamis", hours: "07:00 - 15:00" },
    { days: "Jumat", hours: "07:00 - 11:50" }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 right-1/4 w-64 h-64 rounded-full bg-blue-200/50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-56 h-56 rounded-full bg-purple-200/50 blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/3 w-72 h-72 rounded-full bg-indigo-200/50 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            Hubungi Kami
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-lg mx-auto">
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin informasi lebih lanjut
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* School Info */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent inline-block mb-2">
              SMAN 17 BONE
            </h3>
            <p className="text-sm text-gray-600">Sekolah Menengah Atas Negeri di Bone, Sulawesi Selatan</p>
          </motion.div>

          {/* Maps - Enhanced */}
          <motion.div 
            variants={itemVariants}
            className="overflow-hidden rounded-xl shadow-lg border border-gray-200 relative group transition-all duration-300"
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none z-10"></div>
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
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
                className="flex items-start p-5 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <div className={`${item.bgColor} p-3 rounded-full ${item.iconColor} mr-4 shadow-sm`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Operating Hours - Enhanced */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md border border-blue-100"
          >
            <h4 className="text-base font-semibold text-gray-800 mb-4 text-center flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Jam Operasional
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {operatingHours.map((item, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm text-center">
                  <p className="font-medium text-gray-700 mb-1">{item.days}</p>
                  <p className="text-blue-600">{item.hours}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Media - Enhanced */}
          <motion.div 
            variants={itemVariants}
            className="mt-8"
          >
            <h4 className="text-base font-semibold text-gray-800 mb-4 text-center">Ikuti Kami</h4>
            <div className="flex justify-center gap-4">
              {socialMedia.map((item, index) => (
                <motion.a 
                  key={index}
                  variants={socialVariants}
                  whileHover={{ y: -3, scale: 1.1 }}
                  href={item.link} 
                  className={`${item.bgColor} ${item.hoverColor} text-white p-3 rounded-lg shadow-md transition-all duration-300`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}