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

  // Category icons (larger, decorative)
  const getCategoryIcon = (category) => {
    const commonProps = { className: "w-6 h-6", "aria-hidden": "true" };
    switch (category) {
      case "Front-End":
        return (
          <svg {...commonProps} viewBox="0 0 24 24" fill="none">
            <path
              d="M3 5h18v10H3z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 20h8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="12" cy="10" r="1.5" fill="currentColor" />
          </svg>
        );
      case "Back-End":
        return (
          <svg {...commonProps} viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="4"
              width="18"
              height="6"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect
              x="3"
              y="14"
              width="18"
              height="6"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        );
      case "Database":
        return (
          <svg {...commonProps} viewBox="0 0 24 24" fill="none">
            <ellipse
              cx="12"
              cy="6"
              rx="8"
              ry="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "Tools":
        return (
          <svg {...commonProps} viewBox="0 0 24 24" fill="none">
            <path
              d="M21 7l-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 7l6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="7"
              cy="17"
              r="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  // Small skill icons (inline, subtle, colored via tailwind text-primary or specific color)
  const getSkillIcon = (skill) => {
    const common = { className: "w-4 h-4", "aria-hidden": "true" };
    switch (skill) {
      case "React.js":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="none">
            <g
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <ellipse
                cx="12"
                cy="12"
                rx="6.5"
                ry="2.5"
                transform="rotate(60 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="6.5"
                ry="2.5"
                transform="rotate(-60 12 12)"
              />
              <circle cx="12" cy="12" r="1.4" fill="currentColor" />
            </g>
          </svg>
        );
      case "HTML5":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3l1.5 17 7.5 2 7.5-2L21 3H3zM12 8h4l-.5 5-3.5 1.5-3.5-1.5L8 8h4z" />
          </svg>
        );
      case "CSS3":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18l-1.6 18L12 22 4.6 21 3 3zM8 9h8l-.4 4L12 15l-3.6-2 .4-4z" />
          </svg>
        );
      case "JavaScript (ES6+)":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 3h20v18H2z" />
            <text x="6" y="17" fontSize="9" fill="#111">
              JS
            </text>
          </svg>
        );
      case "Tailwind CSS":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="none">
            <path
              d="M4 15c6.5-6 10-6 16 0"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 11c4.5-4 7-4 13 0"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "Bootstrap 5":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 3h14v18H5zM9 8h6a2 2 0 010 4H9zM9 13h6a2 2 0 010 4H9z" />
          </svg>
        );
      case "Node.js":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2l7 4v8l-7 4-7-4V6l7-4z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        );
      case "Express.js":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 7h16v2H4zM4 11h10v2H4zM4 15h8v2H4z" />
          </svg>
        );
      case "MongoDB":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2s4 2 4 6-4 8-4 8-4-4-4-8 4-6 4-6z" />
          </svg>
        );
      case "MySQL":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2s6 2 6 6-6 10-6 10S6 10 6 8s6-6 6-6z" />
          </svg>
        );
      case "Git":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2v4M16 6l4 4-8 8-4-4 8-8zM5 19a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        );
      case "GitHub":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.66 3.02 8.61 7.21 10.01.53.1.72-.23.72-.51 0-.25-.01-.91-.01-1.79-2.94.64-3.56-1.42-3.56-1.42-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.65.07-.65 1.06.08 1.62 1.08 1.62 1.08.95 1.62 2.49 1.15 3.1.88.1-.69.37-1.15.67-1.41-2.35-.27-4.82-1.18-4.82-5.25 0-1.16.41-2.11 1.08-2.85-.11-.27-.47-1.36.1-2.83 0 0 .88-.28 2.88 1.08a9.8 9.8 0 012.62-.35c.89 0 1.78.12 2.62.35 2-.36 2.88-1.08 2.88-1.08.57 1.47.21 2.56.1 2.83.67.74 1.08 1.69 1.08 2.85 0 4.08-2.47 4.97-4.82 5.23.38.33.71.99.71 2 0 1.44-.01 2.6-.01 2.95 0 .28.19.61.73.51 4.2-1.4 7.21-5.35 7.21-10.01C23.02 5.25 18.27.5 12 .5z" />
          </svg>
        );
      case "Postman":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4l16 8-8 8L4 12z" />
          </svg>
        );
      case "VS Code":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3l18 9-18 9V3z" />
          </svg>
        );
      case "ChatGPT":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M8 12c1.5-2 4.5-2 6 0"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "Copilot":
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l6 20-6-3-6 3L12 2z" />
          </svg>
        );
      default:
        // generic dot for unknown skill
        return (
          <svg {...common} viewBox="0 0 8 8" fill="currentColor">
            <circle cx="4" cy="4" r="3" />
          </svg>
        );
    }
  };

  return (
    <section id="skills" className="min-h-screen px-6 py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 card">
              <div className="flex items-center mb-6">
                <span
                  className="flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-tr from-primary to-purple-600 hover:scale-105"
                  aria-hidden="true"
                >
                  {getCategoryIcon(category.category)}
                </span>
                <h3 className="text-2xl font-bold text-primary">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full
                               bg-slate-800/60 text-gray-100 hover:bg-gradient-to-r hover:from-primary/80 hover:to-purple-600/80
                               transition transform hover:-translate-y-0.5 shadow-sm"
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 text-primary">
                      {getSkillIcon(skill)}
                    </span>
                    <span className="whitespace-nowrap">{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <div className="p-6 card bg-gradient-to-r from-slate-900 to-slate-800">
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
