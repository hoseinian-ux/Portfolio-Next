import AsideComponent from "@/components/aside";
import Image from "next/image";
const getDate = async (slug) => {
  const data = await fetch(`https://moviesapi.ir/api/v1/movies/${slug}`, {
    catch: "no-store",
  });
  return data.json();
};

{/* seo */}
export async function generateMetadata({params}){
  const items_param= await params;
  const data = await getDate(items_param.slug);
  return{
    title:data.title,
    description: data.plot,
  }
}
const SingleMoviePage = async ({ params }) => {
  const item_params = await params;
  const data = await getDate(item_params.slug);
  console.log(data);
  return (
   <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-6 py-12">
  {/* 1*/}
  <div className="flex-1 bg-gray-100 rounded-3xl p-8 space-y-6">
    <h1 className="text-2xl font-bold">{data.title}</h1>
    <Image
      src={data.poster}
      alt={data.title}
      width={300}
      height={200}
      className="rounded-2xl"
    />
    <div>کارگردان: {data.director}</div>
    <div>نویسنده: {data.writer}</div>
    <div className="flex gap-3 items-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
      <p className="text-gray-700">{data.plot}</p>
    </div>

    <div>
      <h2 className="font-semibold">ژانرها</h2>
      <div className="flex flex-wrap gap-3 mt-2">
        {data.genres.map((item, index) => (
          <span
            key={index}
            className="bg-gray-400 text-white text-sm px-3 py-1 rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    <div>
      <h2 className="font-semibold">تصاویر دیگر</h2>
      <div className="flex flex-wrap gap-4 mt-2">
        {data.images.map((item, index) => (
          <Image
            src={item}
            alt={data.title}
            width={200}
            height={120}
            className="rounded-xl"
            key={index}
          />
        ))}
      </div>
    </div>
  </div>

  {/* 2*/}
  <aside className="w-full lg:w-96">
    <AsideComponent />
  </aside>
</div>

  );
};

export default SingleMoviePage;
