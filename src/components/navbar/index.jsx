'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function NavbarPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl">پورتفولیو</span>

        {/* موبایل: دکمه ورود + آیکون همبرگری */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/dashboard"
            className="bg-blue-500 text-white px-3 py-1 rounded-xl text-sm hover:bg-blue-600 transition"
          >
            داشبورد
          </Link>
          <button
            className="text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* دسکتاپ */}
        <div className="hidden md:flex items-center gap-4 text-sm text-gray-700 rtl:flex-row-reverse w-full">
         
           <div className=" flex items-center gap-4">
            <Link className="p-2 font-bold text-lg" href="/">خانه</Link>
            <Link className="p-2 font-bold text-lg" href="/about">درباره من</Link>
            <Link className="p-2 font-bold text-lg" href="/skills">توانمندی‌ها</Link>
            <Link className="p-2 font-bold text-lg" href="/projects">پروژه‌ها</Link>
            <Link className="p-2 font-bold text-lg" href="/contact">تماس</Link>
          

<Link
            href="/login"
            className="bg-blue-500 flex rtl:ml-auto text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition "
          >
            ورود به داشبورد
          </Link>
         </div>
         
          
        </div>
      </div>

      {/* منوی موبایلی بازشونده */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-gray-700">
          <Link className="font-bold text-lg" href="/" onClick={() => setMenuOpen(false)}>خانه</Link>
          <Link className="font-bold text-lg" href="/about" onClick={() => setMenuOpen(false)}>درباره من</Link>
          <Link className="font-bold text-lg" href="/skills" onClick={() => setMenuOpen(false)}>توانمندی‌ها</Link>
          <Link className="font-bold text-lg" href="/projects" onClick={() => setMenuOpen(false)}>پروژه‌ها</Link>
          <Link className="font-bold text-lg" href="/contact" onClick={() => setMenuOpen(false)}>تماس</Link>
        </div>
      )}
    </nav>
  );
}
