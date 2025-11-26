const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A fully responsive and user-friendly e-commerce platform with dynamic product catalogue, shopping cart, and intuitive navigation.",
      technologies: ["React.js", "Bootstrap 5", "JavaScript"],
      features: [
        "Dynamic product catalogue with real-time rendering",
        "Integrated search filtering functionality",
        "Functional shopping cart with automatic total calculation",
        "Reusable components with React Hooks",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Expense Tracker App",
      description:
        "A comprehensive expense tracking application with authentication, interactive dashboards, and data export capabilities.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      features: [
        "Secure JWT authentication with protected routes",
        "Interactive dashboard with Bar, Pie, and Line charts",
        "Excel export functionality for income/expense reports",
        "Responsive UI with sidebar navigation",
      ],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="card group">
              <div className="mb-4">
                <h3 className="mb-3 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 font-semibold text-primary">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm text-gray-300"
                    >
                      <span className="mr-2 text-primary">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-primary"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-primary"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Ram-kumar-R7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary"
          >
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
