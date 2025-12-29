export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Contact Card */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-100">
          {/* Seeking Banner */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 mb-8 border-l-4 border-purple-400">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span>🎯</span> Currently Seeking Summer 2026 Internships
            </h3>
            <p className="text-gray-700 text-lg">
              in <span className="font-semibold text-gray-900">Software Engineering</span>,{' '}
              <span className="font-semibold text-gray-900">Data Analytics</span>, and{' '}
              <span className="font-semibold text-gray-900">Machine Learning</span> roles
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 mb-8">
            <p className="text-gray-600 text-lg text-center">
              I'm always open to discussing new opportunities, collaborations, and exciting projects!
            </p>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Email */}
              <a
                href="mailto:lakhlani.k@northeastern.edu"
                className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 border border-purple-100 hover:scale-105 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-sm text-gray-600">lakhlani.k@northeastern.edu</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/khushilakhlani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 border border-blue-100 hover:scale-105 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">LinkedIn</p>
                  <p className="text-sm text-gray-600">Connect with me</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/KhushiLakhlani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300 border border-purple-100 hover:scale-105 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">GitHub</p>
                  <p className="text-sm text-gray-600">View my projects</p>
                </div>
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div className="text-center pt-6 border-t border-purple-100">
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <span>📍</span>
              <span>Based in Boston, MA • Open to relocation</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          © 2024 Khushi Lakhlani. Built with Next.js & Tailwind CSS ✨
        </p>
      </footer>
    </section>
  )
}