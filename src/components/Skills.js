export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "from-blue-400 to-cyan-400",
      skills: ["Python", "Java", "JavaScript", "C++", "SQL", "R", "HTML/CSS"]
    },
    {
      title: "AI/ML & Data Science",
      icon: "🤖",
      color: "from-purple-400 to-pink-400",
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "Deep Learning", "Neural Networks", "NLP", "Computer Vision"]
    },
    {
      title: "Web Development",
      icon: "🌐",
      color: "from-green-400 to-emerald-400",
      skills: ["React", "Spring Boot", "Node.js", "REST API", "JWT", "Express.js"]
    },
    {
      title: "Data Analysis & Visualization",
      icon: "📊",
      color: "from-orange-400 to-red-400",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Statistical Analysis", "Excel", "Pivot Tables", "VLOOKUP", "Power Query"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      color: "from-indigo-400 to-purple-400",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Frameworks",
      icon: "🛠️",
      color: "from-pink-400 to-rose-400",
      skills: ["Git/GitHub", "VS Code", "Jupyter Notebook", "Postman", "Jira", "MS Office Suite"]
    }
  ];

  const certifications = [
    "Intel Cloud Computing (Fundamentals & Technical Professional)",
    "Intel Solutions Pro - AI Fundamentals",
    "McKinsey Forward Program"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:scale-105"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl shadow-md`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-pink-50 to-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200 hover:from-pink-100 hover:to-purple-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center text-2xl shadow-md">
              🎓
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100"
              >
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl mt-1">✓</span>
                  <p className="text-gray-700 text-sm font-medium">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}