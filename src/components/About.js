export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mt-2 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100">
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            
            {/* Opening Statement */}
            <p className="text-xl">
              I have always been curious about the <span className="font-semibold text-gray-900">'why' behind the technology</span> — 
              not just how it works, but how it helps organizations make strategic decisions that drive real impact. I enjoy working 
              at the intersection of <span className="font-semibold text-gray-900">technology, data, and strategy</span>, solving 
              real-world problems that matter.
            </p>
            
            {/* Global Journey with Flag Boxes */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Global Journey</h3>
              <p className="mb-6">
                This curiosity has taken me across three continents — from earning a First-Class (Honours) degree in Computer Science 
                and working for Intel Corporation in the UK, to driving manufacturing analytics at EY-Parthenon in India, to pursuing my Master of Science in Information Systems 
                at Northeastern University in Boston.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                  <div className="text-4xl mb-3">🇬🇧</div>
                  <h4 className="font-bold text-gray-900 mb-2">United Kingdom</h4>
                  <p className="text-sm text-gray-600">
                    First-Class Honours in Computer Science • Intel Corporation Technical Sales • Vice President, Women in Engineering Society
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
                  <div className="text-4xl mb-3">🇮🇳</div>
                  <h4 className="font-bold text-gray-900 mb-2">India</h4>
                  <p className="text-sm text-gray-600">
                    Data Analyst at EY-Parthenon • Engineered pipelines processing 44K+ rows • 28% forecast accuracy improvement
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-blue-200">
                  <div className="text-4xl mb-3">🇺🇸</div>
                  <h4 className="font-bold text-gray-900 mb-2">United States</h4>
                  <p className="text-sm text-gray-600">
                    MS in Information Systems • Instructional Assistant
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Impact */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Impact</h3>
              <div className="space-y-4">
                <p>
                  At <span className="text-gray-900">Intel</span>, I supported the deployment of{' '}
                  <span className="text-gray-900">1,200+ VDI cloud instances</span> ($3.2M value) and led automation 
                  initiatives that generated <span className="text-gray-900">$6.8M in additional value</span> while 
                  reducing manual workload by <span className="text-gray-900">70%</span> across four regional teams.
                </p>
                
                <p>
                  At <span className="text-gray-900">EY-Parthenon</span>, I engineered Python pipelines that eliminated{' '}
                  <span className="text-gray-900">10 hours of weekly manual analysis</span>, reduced data errors by{' '}
                  <span className="text-gray-900">35%</span>, and improved forecast accuracy by{' '}
                  <span className="text-gray-900">28%</span>. These weren't just technical wins — they were solutions 
                  that enabled faster, data-driven decision-making.
                </p>
              </div>
            </div>

            {/* Leadership & Inclusivity */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-400">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>👥</span> Leadership & Inclusivity
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Beyond technical work, I'm deeply committed to making technology accessible and inclusive. At{' '}
                  <span className="text-gray-900">Intel</span>, I actively participated in{' '}
                  <span className="text-gray-900">Intel One Volunteering initiatives</span>, where I raised funds 
                  for cancer awareness, led STEM informational sessions at local schools, and promoted Intel internships at 
                  universities — working to open doors for the next generation of technologists.
                </p>
                
                <p>
                  This commitment continued when I served as <span className="font-semibold text-gray-900">Vice President of the 
                  Women in Engineering Society at Coventry University</span>, where I co-led a university-funded society to empower students through 
                  mentorship guidance, events, alumni sessions, and create an inclusive community. I built strategic 
                  partnerships between academia and industry and worked to ensure that technology careers were accessible to
                  everyone.
                </p>
                
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border-l-4 border-pink-400">
              <p className="text-gray-700">
                I'm seeking opportunities where I can leverage my international perspective and technical skills to tackle complex 
                data challenges — whether that's engineering scalable pipelines, building analytics platforms, or turning raw data 
                into strategic insights that drive business decisions.
              </p>
              <p className="text-gray-600 mt-3">
                Focus areas: <span className="font-medium text-gray-900">Data Engineering</span>,{' '}
                <span className="font-medium text-gray-900">Software Engineering</span>, and{' '}
                <span className="font-medium text-gray-900">Machine Learning</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}