import { useState, useEffect } from 'react'

export default function Partners() {
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPartners()
  }, [])

  const fetchPartners = async () => {
    try {
      const response = await fetch('/data.json')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      setPartners(data.partners || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading || partners.length === 0) {
    return null
  }

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-aws-blue mb-2 inline-block relative pb-4">
            Our Partners
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-aws-orange rounded"></div>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto">
            Collaborating with amazing tech communities across Cameroon
          </p>
        </div>

        {/* Partners Grid - Logos Only */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12">
          {partners.map(partner => (
            <a
              key={partner.id}
              href={partner.website || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop'
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
