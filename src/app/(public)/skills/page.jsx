const Skills = () => {
    return (
        <section className="max-w-3xl mx-auto py-12 px-4">
  <h2 className="text-3xl font-bold mb-8 text-center">توانمندی‌ها</h2>
  <ul className="space-y-6">
    {[
     { skill: "JQuery", level: 80 },
      { skill: "Bootstrap", level: 80 },
      { skill: "Tailwind", level: 75 },
      { skill: "React", level: 75 },
      { skill: "Next.js", level: 65 },
      { skill: "SQL", level: 70 },
      { skill: "Figma", level: 80 },
      { skill: "Responsive Design", level: 90 },
      { skill: "SEO", level: 65 },
    ].map(({ skill, level }, idx) => (
      <li key={idx} className="mb-10">
        <div className="flex justify-between mb-1">
          <span className="font-medium text-gray-700">{skill}</span>
          <span className="text-sm text-gray-600">{level}%</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="bg-sky-600 h-4 rounded-full transition-width duration-500"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </li>
    ))}
  </ul>
</section>

    );
}

export default Skills;