import Image from "next/image";

const ProjectCard = ({ icon, title, description, href }) => {
  return (
    <div className="relative bg-gray-100 rounded-xl p-6 pt-16 text-center shadow hover:shadow-xl transition-all duration-300 flex flex-col gap-4">
      {/* آیکون در دایره روی کارت */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-18 h-18 bg-white rounded-full shadow flex items-center justify-center">
           <Image
              src={icon}
              alt={title}
              width={32}
              height={32}
              className="object-contain flex items-center "
            />
          </div>

      {/* محتوای کارت */}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-lg text-gray-600 mt-2">{description}</p>
      <a
        href={href} target="_blank"
        className="text-lg inline-flex items-center justify-center mt-4 text-blue-600 hover:underline "
      >
        بیشتر <i className="fas fa-chevron-left mr-2"></i>
      </a>
    
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" >
    </div>
    </div>
  );
};

export default ProjectCard;
