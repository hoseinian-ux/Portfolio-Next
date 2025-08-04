'use client'

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react" // یا آیکن دلخواه شما

const features = [
  "صفحات SSR، SSG، ISR، CSR",
  "لایه‌بندی و گروه‌بندی صفحات و کامپوننت‌ها",
  "استفاده از هوک‌ها در صفحات Client-side",
  "استفاده از API برای تعامل با بک‌اند",
  "سئو (SEO) بهینه‌شده",
  "با تگ Image استفاده از تصاویر بهینه‌شده",
  "طراحی واکنش‌گرا",
  "مدیریت فرم پیشرفته",
  "TanStack Query و ساختار هایدریشن",
  "API Routes برای احراز هویت",
  "امنیت و مدیریت کوکی / توکن (JWT)",
  "Route Protection",
]

export default function Feachers() {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const visibleFeatures = isMobile && !showAll ? features.slice(0, 4) : features

  return (
    <section className="mt-24 mb-24 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">ویژگی‌های اصلی پروژه</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleFeatures.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition overflow-hidden min-h-36"
          >
            <span className="absolute top-2 right-3 text-[6rem] font-bold text-gray-400 opacity-20 select-none z-0">
              {index + 1}
            </span>
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full">
              <p className="text-lg font-bold text-gray-700">{item}</p>
            </div>
          </div>
        ))}
      </div>

      {/* دکمه آکاردیون فقط در موبایل */}
      {isMobile && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center text-blue-600 font-semibold hover:underline"
          >
            {showAll ? "بستن موارد بیشتر" : "نمایش همه ویژگی‌ها"}
            {showAll ? <ChevronUp className="mr-2 w-5 h-5" /> : <ChevronDown className="mr-2 w-5 h-5" />}
          </button>
        </div>
      )}
    </section>
  )
}
