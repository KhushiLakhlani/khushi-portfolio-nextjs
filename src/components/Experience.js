export default function Experience() {
  const experiences = [
    {
      company: "Northeastern University",
      role: "Instructional Assistant",
      period: "January 2026 - Present",
      location: "Boston, MA",
      description: [
        "Supporting course instruction and student learning in Information Systems program"
      ],
      logo: "🎓",
      color: "from-red-400 to-red-600"
    },
    {
      company: "Ernst and Young (EY - Parthenon)",
      role: "Data Analyst Intern",
      period: "January 2025 - April 2025",
      location: "Mumbai, India",
      description: [
        "Developed Python automation scripts to process 44,000+ rows of time-series manufacturing sensor data, eliminating 10 hours weekly in manual Excel-based analysis",
        "Engineered data validation and quality checks in Python, reducing data errors by 35%",
        "Designed scalable data processing pipelines using Pandas and NumPy, improving process efficiency by 18%",
        "Generated statistical forecasting models improving forecast accuracy by 28%"
      ],
      logo: "💼",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      company: "Coventry University",
      role: "Student Ambassador",
      period: "October 2023 - July 2024",
      location: "Coventry, UK",
      description: [
        "Represented the university at open days, campus tours, and recruitment events",
        "Provided prospective students with insights into student life, academics, and campus facilities",
        "Assisted with event coordination and student engagement activities"
      ],
      logo: "🎓",
      color: "from-blue-400 to-blue-600"
    },
    {
      company: "Women in Engineering Society",
      role: "Vice President",
      period: "September 2023 - September 2024",
      location: "Coventry, UK",
      description: [
        "Co-led a university-funded society to empower students through mentorship guidance, events, and alumni sessions",
        "Organized networking events, workshops, and mentorship programs for 100+ members",
        "Built strategic partnerships between academia and industry to create an inclusive community",
        "Managed society operations, budget planning, and event logistics"
      ],
      logo: "👥",
      color: "from-purple-400 to-purple-600"
    },
    {
      company: "Intel Corporation",
      role: "Technical Sales Specialist Intern",
      period: "July 2022 - September 2023",
      location: "Swindon, UK",
      description: [
        "Supported end-to-end sales cycle deploying 1,200+ VDI cloud instances (USD $3.2M value)",
        "Led automation initiative generating USD $2M in incremental impact and USD $6.8M in additional value",
        "Launched automation program across 4 UK regional teams, reducing manual workload by 70%",
        "Delivered technical demos of Intel vPro Technology to partner sales teams",
        "Participated in Intel One Volunteering: raised funds for cancer awareness and led STEM sessions at schools"
      ],
      logo: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "BCS, The Chartered Institute for IT",
      role: "Committee Member",
      period: "September 2021 - July 2022",
      location: "Coventry, UK",
      description: [
        "Served on committee through BCS Coventry University Student Chapter",
        "Developed platform for students to enhance IT knowledge through discussions and debates",
        "Facilitated networking opportunities with BCS members across university chapter network",
        "Organized events with professional guest speakers to provide industrial guidance"
      ],
      logo: "💼",
      color: "from-indigo-400 to-blue-600"
    },
    {
      company: "Coventry University Students' Union",
      role: "Course Representative",
      period: "September 2021 - June 2022",
      location: "Coventry, UK",
      description: [
        "Represented BSc Computer Science students and voiced opinions to university teaching staff",
        "Collaborated with other course representatives to create engaging educational experiences",
        "Organized student events and ran polls throughout the year to gather student feedback",
        "Advocated for curriculum improvements and student support initiatives"
      ],
      logo: "🎓",
      color: "from-teal-400 to-green-500"
    },
    {
      company: "Women in Engineering Society",
      role: "Member",
      period: "October 2021 - September 2023",
      location: "Coventry, UK",
      description: [
        "Actively participated in society events, workshops, and professional development sessions",
        "Contributed to initiatives promoting women's representation in engineering and technology",
        "Collaborated with peers on outreach programs for local schools"
      ],
      logo: "👥",
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-purple-400 rounded-full transform -translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-purple-100">
                    {/* Company Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                        {exp.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                        <p className="text-purple-600 font-medium">{exp.company}</p>
                        <div className="flex flex-wrap gap-2 mt-1 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            📅 {exp.period}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            📍 {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}