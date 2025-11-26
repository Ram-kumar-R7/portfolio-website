const Skills = () => {
  const skillCategories = [
    {
      category: "Front-End",
      skills: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Bootstrap 5",
      ],
    },
    {
      category: "Back-End",
      skills: ["Node.js", "Express.js"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code", "ChatGPT", "Copilot"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-20 ">
      <div className="container mx-auto">
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="mb-6 text-2xl font-bold text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <div className="card bg-gradient-to-r from-slate-900 to-slate-800">
            <h3 className="mb-6 text-2xl font-bold text-center text-primary">
              Key Competencies
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-4 text-center rounded-lg bg-slate-900/50">
                <div className="mb-3 text-4xl">⚡</div>
                <h4 className="mb-2 font-semibold">Fast Learner</h4>
                <p className="text-sm text-gray-400">
                  Quick to adapt to new technologies and frameworks
                </p>
              </div>
              <div className="p-4 text-center rounded-lg bg-slate-900/50">
                <div className="mb-3 text-4xl">🎯</div>
                <h4 className="mb-2 font-semibold">Problem Solver</h4>
                <p className="text-sm text-gray-400">
                  Strong analytical and debugging skills
                </p>
              </div>
              <div className="p-4 text-center rounded-lg bg-slate-900/50">
                <div className="mb-3 text-4xl">🤝</div>
                <h4 className="mb-2 font-semibold">Team Player</h4>
                <p className="text-sm text-gray-400">
                  Collaborative mindset with Agile experience
                </p>
              </div>
            </div>
          </div>
          {/* Example button styled like in header */}
          <div className="flex justify-center mt-8">
            <a
              href="https://github.com/Ram-kumar-R7"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden btn-primary md:block"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
