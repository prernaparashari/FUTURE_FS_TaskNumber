import React from "react";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-wide">Prerna</h1>

        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="text-center py-24 px-6">

        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-blue-400">Prerna Parashari</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Full Stack Developer passionate about building scalable web
          applications, backend systems and real world solutions using
          modern technologies.
        </p>

        <div className="mt-8 space-x-4">

          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg"
          >
            Contact
          </a>

        </div>
      </section>


      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">

        <h3 className="text-3xl font-bold mb-6">About Me</h3>

        <p className="text-gray-400 leading-relaxed">
          I'm a Computer Science student focused on backend development
          and scalable system design. I enjoy building APIs and solving
          real-world problems using Node.js, Express, MongoDB and PostgreSQL.
        </p>

      </section>


      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16">

        <h3 className="text-3xl font-bold mb-10">Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "JavaScript",
            "Python",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "REST APIs",
            "Git & GitHub"
          ].map(skill => (

            <div
              key={skill}
              className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition"
            >
              {skill}
            </div>

          ))}

        </div>

      </section>


      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-16">

        <h3 className="text-3xl font-bold mb-10">Projects</h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
            <h4 className="text-xl font-bold mb-2">HealthNear</h4>
            <p className="text-gray-400">
              Full stack healthcare platform with authentication,
              REST APIs and MongoDB integration.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
            <h4 className="text-xl font-bold mb-2">Flight Reservation</h4>
            <p className="text-gray-400">
              Flight booking system using Node.js, Express
              and PostgreSQL database.
            </p>
          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="text-center py-20 border-t border-gray-800">

        <h3 className="text-3xl font-bold mb-6">Contact</h3>

        <p className="text-gray-400 mb-6">
          Feel free to reach out for collaboration or opportunities.
        </p>

        <div className="space-x-6">

          <a
            href="https://github.com"
            className="text-blue-400 hover:text-blue-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            className="text-blue-400 hover:text-blue-300"
          >
            LinkedIn
          </a>

        </div>

      </section>


    </div>
  );
}

export default App;


