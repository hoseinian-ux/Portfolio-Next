import '@/styles/globals.css';

import ReactQueryProvider from '@/components/ReactQueryProvider'
import Footer from '@/components/footer';
import NavbarPage from '@/components/navbar';

export default function RootLayout({ children }) {
  
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <NavbarPage />
        <ReactQueryProvider>
        <main className=" mx-auto min-h-screen">
         
             {children}
        
         
        
        </main>
        </ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
