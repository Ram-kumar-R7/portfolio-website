const About = () => {
  const education = [
    {
      degree: "MCA (Pursuing)",
      institution: "SRM Institution Of Science And Technology, Ramapuram",
      cgpa: "9.64",
      year: "Expected Graduation: 2026",
    },
    {
      degree: "Bachelor of Computer Science (B.Sc)",
      institution: "Thiruthangal Nadar College, Chennai",
      cgpa: "7.25",
      year: "Apr 2022",
    },
  ];

  const certifications = [
    {
      title: "MERN Full Stack Development",
      issuer: "SLA Institute, Chennai",
      year: "2025",
    },
    {
      title: "JavaScript Certification",
      issuer: "IBM",
      year: "2025",
    },
  ];

  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* LinkedIn Section */}
          {/* <div className="card">
            <h3 className="mb-4 text-2xl font-bold text-primary">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/ram-kumar-r-02a7562b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 break-all hover:underline"
            >
              linkedin.com/in/ram-kumar-r-02a7562b3
            </a>
          </div> */}

          <div className="card">
            <p className="text-lg leading-relaxed text-gray-300">
              Entry-level MERN Stack Developer transitioning from a background
              in architecture to a career in tech. Completed a comprehensive
              full stack development course with expertise in front-end
              technologies including React.js, HTML5, CSS3, and JavaScript,
              along with hands-on experience using Node.js, Express.js, and
              MongoDB for backend development.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Motivated to keep learning, eager to contribute to team goals, and
              focused on building strong skills as a web developer.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold text-primary">Education</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {education.map((edu, index) => (
                <div key={index} className="card">
                  <h4 className="mb-2 text-xl font-semibold">{edu.degree}</h4>
                  <p className="mb-2 text-gray-400">{edu.institution}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-primary">
                      CGPA: {edu.cgpa}
                    </span>
                    <span className="text-gray-500">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold text-primary">
              Certifications
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <div key={index} className="card">
                  <h4 className="mb-2 text-xl font-semibold">{cert.title}</h4>
                  <p className="mb-1 text-gray-400">{cert.issuer}</p>
                  <span className="text-sm text-gray-500">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border card bg-gradient-to-r from-primary/10 to-sky-500/10 border-primary/20">
            <h3 className="mb-4 text-2xl font-bold text-primary">
              Internship Experience
            </h3>
            <h4 className="mb-2 text-xl font-semibold">
              Inspire Softech Solutions
            </h4>
            <p className="mb-4 text-gray-400">
              Remote/Chennai | May 2025 – Jun 2025
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-primary">▹</span>
                <span>
                  Worked on building responsive and dynamic web interfaces using
                  React and Tailwind CSS
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">▹</span>
                <span>
                  Designed and developed reusable components, integrated REST
                  APIs
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">▹</span>
                <span>
                  Optimized user experience for performance and accessibility
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">▹</span>
                <span>
                  Collaborated in Agile sprints and used Git for version control
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
