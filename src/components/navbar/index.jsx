'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function NavbarPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl">پورتفولیو</span>

        {/* دکمه منو برای موبایل */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* desktop menu*/}
        <div className="hidden md:flex space-x-4 rtl:space-x-reverse text-sm text-gray-700">
          <Link className="p-2 font-bold text-lg" href="/">خانه</Link>
          <Link className="p-2 font-bold text-lg" href="/about">درباره من</Link>
          <Link className="p-2 font-bold text-lg" href="/skills">توانمندی‌ها </Link>
          <Link className="p-2 font-bold text-lg" href="/projects">پروژه‌ها</Link>
          <Link className="p-2 font-bold text-lg" href="/contact">تماس</Link>
        </div>
      </div>

      {/* mobile menu*/}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-gray-700">
          <Link className="font-bold text-lg" href="/" onClick={() => setMenuOpen(false)}>خانه</Link>
          <Link className="font-bold text-lg" href="/about" onClick={() => setMenuOpen(false)}> درباره من </Link>
          <Link className="font-bold text-lg" href="/skills" onClick={() => setMenuOpen(false)}> توانمندی‌ها </Link>
          <Link className="font-bold text-lg" href="/projects" onClick={() => setMenuOpen(false)}>پروژه‌ها</Link>
          <Link className="font-bold text-lg" href="/contact" onClick={() => setMenuOpen(false)}>تماس</Link>
        </div>
      )}
    </nav>
  );
}
