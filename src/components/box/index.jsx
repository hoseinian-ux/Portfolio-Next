import Image from "next/image";
import Link from "next/link";

const BoxProducts = ({ item_data }) => {
  console.log(item_data);
  return (
    <div
      className="rounded-lg  flex-col gap-4 border-sky-700 bg-white h-[25rem] w-[15rem] p-4  border-2 m-4 group transition-all duration-500">
        <Image src={item_data.poster} alt={item_data.title} width={220} height={300} className="rounded"/>
      <Link href={`/movies/${item_data.id}`} className="line-clamp-1 group-hover:text-sky-800 transition-all duration-500"> {item_data.title}</Link>
      <div className="flex justify-between items-center m-3">
        <span className=" bg-gray-200 px-3 py-1 rounded-xl text-xs"> {item_data.imdb_rating}</span>
        <span className=" bg-gray-200 px-3 py-1 rounded-xl text-xs"> {item_data.year}</span>  
      </div>

    </div>
  );
};

export default BoxProducts;
