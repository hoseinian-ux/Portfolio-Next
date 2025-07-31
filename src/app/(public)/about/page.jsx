export default function About() {
  const education = [
    {
      title: "کارشناسی مهندسی سخت افزار کامپیوتر",
      place: "دانشگاه صنعتی جندی شاپور",
      year: "1386-1390",
      description: "مطالعه مباحث پایه در علوم کامپیوتر و توسعه نرم‌افزار."
    },
    {
      title: "کارشناسی ارشد معماری سیستم های کامپیوتری",
      place: "دانشگاه نجف آباد",
      year: "1391-1393",
      description: "تمرکز روی توسعه وب و معماری نرم‌افزارهای مقیاس‌پذیر."
    }
  ];
function toPersianNumber(n) {
  const persianNumbers = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  return n.replace(/\d/g, d => persianNumbers[d]);
}

  const experience = [
     {
      position: "مدیر، طراح و بهینه کردن سیو وبسایت ",
      company: "شرکت مظفر صنعت صبا ",
      year: "۱۳۹7 - ۱399",
      description: " مدیر، طراح و بهینه کردن سیو وبسایت به منظور به روزرسانی صفحات طراحی عکس محصولات با فتوشاپ و اعمال سیو محتوا و داخلی در سایت"
    },
     {
      position: "طراح فرم  SQL ",
      company: "شرکت ورجاوند ",
      year: "۱۳۹9 - ۱۴۰۰",
      description: "طراحی و پیاده سازی فرم برای نرم افزار حسابداری دبیر به زبان TSQL "
    },
    {
      position: "توسعه‌دهنده فرانت‌اند",
      company: "شرکت بهین نیوساد ارتباط ",
      year: "1402 - 1403",
      description: "ساخت و بهینه‌سازی رابط‌های کاربری با Tailwind, bootstrap, MUI, Html , CSS"
    },
    {
      position: "توسعه‌دهنده فرانت‌اند و بک‌اند",
      company: "آوان داده پرداز",
      year: "1403-1404",
      description: "توسعه اپلیکیشن‌های وب به صورت web form و همکاری در تیم محصول."
    }
  ];
 const certification = [
    {
      title: "ReactJS",
      place: "مجتمع فنی تهران",
      year: "1403",
      description: "	آشنایی به زبان React و آشنا به مفاهیم مدیریت هوک‌ها، مدیریت دیتا UseContext،ReactQuery, axious, Redux. "
    },
    {
      title: "NextJS",
      place: "دوره آنلاین مرن فا",
      year: "1404",
      description: "آشنایی به زبان NextJs و مفاهیم آن. آشنایی با ساختار پوشه بندی، صفحات داینامیک، تگ Image و بهینه کردن عکس،آشنایی با صفحات ssr-ssg-isr-csr , تگ های سیویی"
    }
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">درباره من</h1>

      {/* 1 */}
      <section>
        <div className="flex items-center mb-6 pb-2 gap-2 ">
    <h2 className="text-2xl font-semibold whitespace-nowrap"> تحصیلات </h2>
    <div className="flex-grow h-0.5 bg-gradient-to-l from-zinc-300 via-sky-400 to-zinc-300 rounded-full ml-4"></div>
  </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
              <p className=" text-gray-600">{edu.place} |{toPersianNumber(edu.year)}</p>
              <p className="mt-3 text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2*/}
      <section>
        <div className="flex items-center mb-6 pb-2 gap-2 ">
    <h2 className="text-2xl font-semibold whitespace-nowrap">سابقه کاری</h2>
    <div className="flex-grow h-0.5 bg-gradient-to-l from-zinc-300 via-sky-400 to-zinc-300 rounded-full ml-4"></div>
  </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
              <p className=" text-gray-600">{exp.company} | {toPersianNumber(exp.year)}</p>
              <p className="mt-3 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* 3 */}
      <section>
       
        <div className="flex items-center mb-6 pb-2 gap-2">
    <h2 className="text-2xl font-semibold whitespace-nowrap">دوره‌های گذرانده </h2>
    <div className="flex-grow h-0.5 bg-gradient-to-l from-zinc-300 via-sky-400 to-zinc-300 rounded-full ml-4"></div>
  </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {certification.map((cer, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{cer.title}</h3>
              <p className=" text-gray-600">{cer.place} |{toPersianNumber(cer.year)}</p>
              <p className="mt-3 text-gray-700">{cer.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
