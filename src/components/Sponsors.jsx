import { useState, useEffect } from 'react'

export default function Sponsors() {
  const [sponsors, setSponsors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSponsors()
  }, [])

  const fetchSponsors = async () => {
    try {
      const response = await fetch('/data.json')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      setSponsors(data.sponsors || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading || sponsors.length === 0) {
    return null
  }

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-aws-blue mb-2 inline-block relative pb-4">
            Our Sponsors
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-aws-orange rounded"></div>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto">
            Thanks to our amazing sponsors for supporting the AWS Cameroon community
          </p>
        </div>

        {/* Sponsors by Tier */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Gold Sponsors */}
          {sponsors.some(s => s.tier === 'Gold') && (
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-aws-blue mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-aws-orange to-aws-orange text-transparent bg-clip-text">
                  Gold Sponsors
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
                {sponsors
                  .filter(s => s.tier === 'Gold')
                  .map(sponsor => (
                    <SponsorCard key={sponsor.id} sponsor={sponsor} />
                  ))}
              </div>
            </div>
          )}

          {/* Silver Sponsors */}
          {sponsors.some(s => s.tier === 'Silver') && (
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-aws-blue mb-6 sm:mb-8">
                <span className="text-gray-500">Silver Sponsors</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {sponsors
                  .filter(s => s.tier === 'Silver')
                  .map(sponsor => (
                    <SponsorCard key={sponsor.id} sponsor={sponsor} />
                  ))}
              </div>
            </div>
          )}

          {/* Bronze Sponsors */}
          {sponsors.some(s => s.tier === 'Bronze') && (
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-aws-blue mb-6 sm:mb-8">
                <span className="text-orange-600">Bronze Sponsors</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {sponsors
                  .filter(s => s.tier === 'Bronze')
                  .map(sponsor => (
                    <SponsorCard key={sponsor.id} sponsor={sponsor} />
                  ))}
              </div>
            </div>
          )}

          {/* Other Sponsors */}
          {sponsors.some(s => !s.tier || (s.tier !== 'Gold' && s.tier !== 'Silver' && s.tier !== 'Bronze')) && (
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-aws-blue mb-6 sm:mb-8">Sponsors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {sponsors
                  .filter(s => !s.tier || (s.tier !== 'Gold' && s.tier !== 'Silver' && s.tier !== 'Bronze'))
                  .map(sponsor => (
                    <SponsorCard key={sponsor.id} sponsor={sponsor} />
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">Interested in sponsoring AWS Cameroon?</p>
          <a
            href="mailto:contact@awscameroon.org"
            className="inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base bg-aws-orange text-aws-blue rounded-lg font-bold hover:bg-aws-orange hover:opacity-80 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

function SponsorCard({ sponsor }) {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-5 lg:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 mx-auto mb-3 sm:mb-4 rounded-lg object-cover"
        onError={(e) => {
          e.target.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop'
        }}
      />
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-aws-blue mb-2">{sponsor.name}</h3>
      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{sponsor.description}</p>
      {sponsor.website && (
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-aws-orange text-aws-blue rounded font-bold hover:bg-aws-orange hover:opacity-80 transition-all duration-300"
        >
          Visit
        </a>
      )}
    </div>
  )
}
