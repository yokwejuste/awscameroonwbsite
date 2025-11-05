import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  const handleExploreCommunities = () => {
    const communitiesSection = document.getElementById('communities-section')
    if (communitiesSection) {
      communitiesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about-section')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full h-screen bg-aws-blue flex items-center justify-center overflow-hidden">
      <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full px-4 lg:px-10 gap-8 lg:gap-16 z-10">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl text-white animate-[slideInLeft_1s_ease-out] text-center lg:text-left">
          {/* Branding */}
          <div className="mb-6 lg:mb-8 pb-4 lg:pb-6 border-b-4 border-aws-orange animate-[slideInLeft_1.2s_ease-out]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-aws-orange mb-1 lg:mb-2 drop-shadow-lg tracking-wide">
              AWS Cameroon
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-100 font-medium">
              Community of Cloud Innovators
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight drop-shadow-lg">
            Connect. Learn. Grow.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-2xl mb-6 lg:mb-10 leading-relaxed text-gray-100">
            Join AWS Cameroon's vibrant community of cloud enthusiasts, developers, and tech leaders.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <button
              onClick={handleExploreCommunities}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-aws-orange text-aws-blue font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:translate-y-[-3px] shadow-lg text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <i className="fas fa-compass"></i>
              Explore Communities
            </button>
            <button
              onClick={handleLearnMore}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 hover:translate-y-[-3px] shadow-lg text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <i className="fas fa-book"></i>
              Learn More
            </button>
          </div>
        </div>

        {/* SVG Illustrations - Hidden on mobile */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-5 animate-[slideInRight_1s_ease-out] h-96">
          {/* Person 1 */}
          <svg className="w-44 h-60 drop-shadow-xl animate-[float_3s_ease-in-out_infinite]" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="skin1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#f4a460', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#d4825f', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="100" cy="50" r="30" fill="url(#skin1)" />
            <path d="M 70 40 Q 70 20 100 20 Q 130 20 130 40" fill="#3d2817" />
            <circle cx="90" cy="45" r="3" fill="#000" />
            <circle cx="110" cy="45" r="3" fill="#000" />
            <path d="M 90 55 Q 100 60 110 55" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
            <rect x="75" y="85" width="50" height="60" rx="5" fill="#FF9900" />
            <rect x="50" y="95" width="25" height="15" rx="7" fill="url(#skin1)" transform="rotate(-30 62 102)" />
            <rect x="125" y="95" width="25" height="15" rx="7" fill="url(#skin1)" transform="rotate(30 138 102)" />
            <rect x="82" y="145" width="12" height="40" rx="6" fill="#333" />
            <rect x="106" y="145" width="12" height="40" rx="6" fill="#333" />
            <ellipse cx="88" cy="185" rx="8" ry="6" fill="#000" />
            <ellipse cx="112" cy="185" rx="8" ry="6" fill="#000" />
            <rect x="20" y="10" width="60" height="35" rx="8" fill="#e8f4f8" stroke="#FF9900" strokeWidth="2" />
            <polygon points="50,45 60,50 45,48" fill="#e8f4f8" />
            <text x="28" y="30" fontSize="8" fill="#232F3E" fontWeight="bold">Let's talk cloud!</text>
          </svg>

          {/* Person 2 */}
          <svg className="w-44 h-60 drop-shadow-xl animate-[float_3.5s_ease-in-out_infinite] -translate-y-5" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" style={{ animationDelay: '0.3s' }}>
            <defs>
              <linearGradient id="skin2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#fdbcb4', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#e8a491', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="100" cy="50" r="30" fill="url(#skin2)" />
            <path d="M 70 35 Q 70 20 100 20 Q 130 20 130 35" fill="#8b4513" />
            <path d="M 70 35 Q 80 65 100 70 Q 120 65 130 35" fill="#8b4513" opacity="0.6" />
            <circle cx="90" cy="45" r="3" fill="#000" />
            <circle cx="110" cy="45" r="3" fill="#000" />
            <path d="M 90 55 Q 100 62 110 55" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
            <rect x="75" y="85" width="50" height="60" rx="5" fill="#37475a" />
            <rect x="50" y="95" width="25" height="15" rx="7" fill="url(#skin2)" transform="rotate(-35 62 102)" />
            <rect x="125" y="95" width="25" height="15" rx="7" fill="url(#skin2)" transform="rotate(35 138 102)" />
            <rect x="82" y="145" width="12" height="40" rx="6" fill="#333" />
            <rect x="106" y="145" width="12" height="40" rx="6" fill="#333" />
            <ellipse cx="88" cy="185" rx="8" ry="6" fill="#000" />
            <ellipse cx="112" cy="185" rx="8" ry="6" fill="#000" />
            <rect x="40" y="10" width="80" height="40" rx="8" fill="#fff0e6" stroke="#FF9900" strokeWidth="2" />
            <polygon points="60,50 50,58 65,52" fill="#fff0e6" />
            <text x="50" y="25" fontSize="8" fill="#232F3E" fontWeight="bold">Share knowledge &</text>
            <text x="50" y="36" fontSize="8" fill="#232F3E" fontWeight="bold">grow together!</text>
          </svg>

          {/* Person 3 */}
          <svg className="w-44 h-60 drop-shadow-xl animate-[float_3.2s_ease-in-out_infinite]" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" style={{ animationDelay: '0.6s' }}>
            <defs>
              <linearGradient id="skin3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ffdbac', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#e8b896', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="100" cy="50" r="30" fill="url(#skin3)" />
            <path d="M 70 35 Q 70 20 100 20 Q 130 20 130 35" fill="#2c1810" />
            <circle cx="90" cy="45" r="3" fill="#000" />
            <circle cx="110" cy="45" r="3" fill="#000" />
            <path d="M 88 56 Q 100 62 112 56" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
            <rect x="75" y="85" width="50" height="60" rx="5" fill="#FF9900" opacity="0.9" />
            <rect x="45" y="95" width="30" height="14" rx="7" fill="url(#skin3)" transform="rotate(-40 60 102)" />
            <rect x="125" y="95" width="30" height="14" rx="7" fill="url(#skin3)" transform="rotate(40 140 102)" />
            <rect x="82" y="145" width="12" height="40" rx="6" fill="#333" />
            <rect x="106" y="145" width="12" height="40" rx="6" fill="#333" />
            <ellipse cx="88" cy="185" rx="8" ry="6" fill="#000" />
            <ellipse cx="112" cy="185" rx="8" ry="6" fill="#000" />
            <rect x="10" y="15" width="70" height="35" rx="8" fill="#f0f8ff" stroke="#FF9900" strokeWidth="2" />
            <polygon points="35,50 25,55 40,52" fill="#f0f8ff" />
            <text x="18" y="32" fontSize="8" fill="#232F3E" fontWeight="bold">Building the</text>
            <text x="18" y="42" fontSize="8" fill="#232F3E" fontWeight="bold">future together!</text>
          </svg>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <i className="fas fa-chevron-down text-aws-orange text-2xl"></i>
      </div>
    </section>
  )
}
