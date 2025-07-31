

import BoxProducts from "@/components/box";
import ClientSide from "@/components/client-side";
import ServerSide from "@/components/server-side";
import '@/styles/globals.css'
import Link from "next/link";
import HomeSlider from "@/components/home-slider";
import Hero from "@/components/hero";
import Feachers from "@/components/feachers";

export const metadata = {
  title: 'پورتفولیو حسینیان',
  description: 'پورتفولیو, Next.js, حسینیان, برنامه‌نویسی, وب، نکست',
}

const getData = async () => {
  const data = await fetch('https://moviesapi.ir/api/v1/movies', {
    next: { revalidate: 3600 }
  });
  return data.json();
}

const HomePage = async () => {
  const data = await getData();
  return (
   
      <main>
   <Hero/>
      {/* بخش لیست فیلم‌ها 
      <section className="transition-all duration-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-zinc-100 rounded-xl px-4 py-8 max-w-7xl mx-auto mt-10">
        {data.data.map((item, index) => (
          
          <BoxProducts key={index} item_data={item} />
        ))}
      </section>*/}
      <Feachers/>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 max-w-7xl mx-auto text-center"> اتصال به api و رندر صفحات کلاینت و سرور </h2>
      <HomeSlider data={data} />
      </main>
    
  );
};

export default HomePage;
