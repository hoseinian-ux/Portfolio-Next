import ProjectCard from "@/components/projectcard";


export default function Projects() {
  const projects = [
    {
      icon: "/icons/b.svg",
      title: "فروشگاه بازار پارچه کاریزما",

      description: " طراحی بخش فرانت وبسایت با تکنولوژی Bootstrap",
      href: "https://bazareparcheh.com/",
    },
    {
      icon: "/icons/b.svg",
      title: "سایت ایران چت",
      description: "طراحی بخش فرانت وبسایت با تکنولوژی Bootstrap",
      href: "https://iranchat.online/",
    },
    
       {
      icon: "/icons/r.png",
      title: "وبسایت فروشگاهی",
      description: "طراحی وبسایت با تکنولوژی React ",
      href: "https://hoseinian-ux.github.io/",
    },
    {
      icon: "/icons/n.svg",
      title: "پورتفولیو شخصی",
      description: "طراحی وبسایت با تکنولوژی NextJs , Tailwind",
      href: "portfolio-next-5mju.vercel.app",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
      {projects.map((p, idx) => (
        <ProjectCard
          key={idx}
          icon={p.icon}
          title={p.title}
          description={p.description}
          href={p.href}
        />
      ))}
    </div>
  );
}
