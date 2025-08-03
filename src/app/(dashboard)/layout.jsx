// app/dashboard/layout.jsx
"use client";
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Footer from "@/components/footer";
import ReactQueryProvider from '@/components/ReactQueryProvider'
import Sidebar from "@/components/sidebare";

import "@/styles/globals.css";

export default function DashboardLayout({ children }) {
     const [queryClient] = useState(() => new QueryClient())
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <ReactQueryProvider>
        <main className=" min-h-screen flex ">
          <Sidebar />
          {children}
        </main>
        </ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
