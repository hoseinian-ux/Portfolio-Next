
'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
   <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100">
  
  <Image
    src="/icons/subtle-prism.svg"
    alt="hero background"
    fill
    className="object-cover opacity-20 pointer-events-none select-none"
    priority
  />


  <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
    <motion.h1 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900"
    >
      سلام، این وبسایت به عنوان نمونه کار بنده در زمینه برنامه نویسی React و Nextjs هست.
    </motion.h1>
    <motion.h2 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 p-10"
    >
      امیدوارم مورد نظر شما کارفرمای محترم قرار بگیرد و بتونم در کنار شما پیشرفت کنم و مفید فایده باشم.
    </motion.h2>






    <motion.a 
      href="#projects" 
      className="mt-8 inline-block bg-zinc-600 hover:bg-zinc-700 text-white px-7 py-3 rounded-lg shadow-lg transition"
      whileHover={{ scale: 1.05 }}
    >
      مشاهده پروژه‌ها
    </motion.a>
  </div>
</section>


  );
}
