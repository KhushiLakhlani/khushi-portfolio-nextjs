export default function Testimonials() {
  const testimonials = [
    {
      name: "Georgios Kardaras",
      title: "EMEA Sales Director",
      company: "Intel Corporation",
      relationship: "Direct Manager",
      text: "Our team had the pleasure to collaborate with Khushi during her internship at Intel Corporation (August 2022 – September 2023). Throughout the entire period of our collaboration, Khushi demonstrated great professionalism and commitment. She had been always keen to learn, connect to colleagues and familiarize herself with the nature of Intel business. The tasks assigned to Khushi spanned across different areas and she always delivered high quality results. Above and beyond soft skills and technical qualifications, Khushi's character, energy and personality were very well received by our team members.",
      linkedin: "https://linkedin.com/in/georgios-kardaras",
      avatar: "GK"
    },
    {
      name: "Patricia Pozuelo",
      title: "EMEA Partners Technical Sales Director",
      company: "Intel Corporation",
      relationship: "Direct Manager",
      text: "Khushi was doing her internship in my team (EMEA Partner Sales Technical Team) at Intel. I would like to recognize her technical skills during this period of time highlighting: Knowledge on Cloud Computing Architectures (demonstrated through Intel courses completed and badges earned), Expertise in delivering Technical Presentations (simplifying dense technical information in a simple, concise way), Data analysis with strong expertise due to her background and studies, Project Management (demonstrated through the NEX Business Consumption Project completed), and Proficiency in programming – Python (used in NEX project). Khushi was organizing and leading efforts with our internal newsletter. Something that I also want to call out is her attitude, very open and adaptable, always willing to help and learn new things.",
      linkedin: "https://linkedin.com/in/patricia-pozuelo",
      avatar: "PP"
    },
    {
      name: "Karolina Olszewska",
      title: "Consultant",
      company: "Kearney | Imperial College London",
      relationship: "Senior Colleague",
      text: "I have had a pleasure to work with Khushi on multiple STEM related activities and have always found it very enjoyable and efficient. Khushi and I have co-led organisation of Brunel University of London's visit to Intel site. She has helped with coordination of the sessions, as well as setting up the room. She is always on time, helpful and brings great ideas to the table. Khushi works great in teams and adapts quickly to new environments. If you happen to work with her, you can expect great quality of execution.",
      linkedin: "https://linkedin.com/in/karolina-olszewska",
      avatar: "KO"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-white/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            What colleagues and mentors say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-purple-100 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="text-purple-300 text-6xl font-serif leading-none mb-4">"</div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow italic">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-purple-100">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {testimonial.avatar}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-gray-900 hover:text-purple-600 transition-colors block"
                  >
                    {testimonial.name}
                  </a>
                  <p className="text-xs text-gray-600 font-medium">{testimonial.title}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                  <p className="text-xs text-purple-600 mt-1">{testimonial.relationship}</p>
                </div>

                {/* LinkedIn Icon */}
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="text-center mt-12">
          <a
            href="https://linkedin.com/in/khushilakhlani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View More on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}