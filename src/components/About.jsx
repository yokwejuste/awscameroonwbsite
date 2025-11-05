import { useState, useEffect } from 'react'
import { getStatistics } from '../utils/dataLoader'

export default function About() {
  const [stats, setStats] = useState({ communities: 7, members: 2000, events: 50 })

  useEffect(() => {
    getStatistics().then(setStats).catch(err => {
      console.error('Failed to load statistics:', err)
    })
  }, [])

  return (
    <section className="about-section bg-gray-50 py-12 sm:py-16 lg:py-20" id="about-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Text Content */}
          <div>
            <div className="relative inline-block pb-4 mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-aws-blue">About AWS Cameroon</h2>
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-aws-orange rounded"></div>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
              AWS Cameroon is a vibrant community dedicated to fostering cloud computing knowledge, innovation, and collaboration across the country. We bring together developers, architects, entrepreneurs, and technology enthusiasts to explore Amazon Web Services and cloud technologies.
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              Our mission is to empower Cameroonians with the skills and knowledge needed to leverage cloud computing for business transformation, digital innovation, and career advancement.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-10 border-t-2 border-aws-orange">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-aws-orange mb-1 sm:mb-2">{stats.communities}+</h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Communities</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-aws-orange mb-1 sm:mb-2">{stats.members}+</h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Members</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-aws-orange mb-1 sm:mb-2">{stats.events}+</h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Events Hosted</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Feature 1 */}
            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-aws-orange">
                <i className="fas fa-book"></i>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-aws-blue mb-2 sm:mb-3">Learn & Grow</h3>
              <p className="text-sm sm:text-base text-gray-600">Access valuable resources and certifications to advance your cloud journey</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-aws-orange">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-aws-blue mb-2 sm:mb-3">Network & Connect</h3>
              <p className="text-sm sm:text-base text-gray-600">Build meaningful relationships with cloud professionals and tech leaders</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-aws-orange">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-aws-blue mb-2 sm:mb-3">Innovate Together</h3>
              <p className="text-sm sm:text-base text-gray-600">Collaborate on projects and share ideas to drive innovation in Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
