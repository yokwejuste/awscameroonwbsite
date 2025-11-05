import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchCommunities } from '../utils/dataLoader'
import OrganizerCard from './OrganizerCard'

export default function CommunityDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [community, setCommunity] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCommunity()
  }, [slug])

  const fetchCommunity = async () => {
    try {
      setLoading(true)
      const allCommunities = await fetchCommunities()
      const found = allCommunities.find(c => c.slug === slug)

      if (!found) {
        setError('Community not found')
      } else {
        setCommunity(found)
      }
    } catch (err) {
      setError('Failed to load community data')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center py-12 text-lg text-gray-600">Loading community details...</div>
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-aws-orange text-aws-blue rounded-lg font-bold hover:bg-aws-orange hover:opacity-80"
        >
          Back to Communities
        </button>
      </div>
    )
  }

  if (!community) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">Community not found</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-aws-orange text-aws-blue rounded-lg font-bold hover:bg-aws-orange hover:opacity-80"
        >
          Back to Communities
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 px-4 py-2 bg-aws-orange text-aws-blue rounded-lg font-bold hover:bg-aws-orange hover:opacity-80 transition-all duration-300 hover:-translate-y-1 shadow-lg"
      >
        ← Back to Communities
      </button>

      {/* Hero Section */}
      <div className="relative h-48 sm:h-72 lg:h-96 overflow-hidden">
        <img
          src={community.image}
          alt={community.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-aws-blue via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-4 sm:pb-6 lg:pb-8">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-aws-orange mb-1 sm:mb-2">{community.name}</h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white font-semibold">{community.type}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Social Links */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            {community.meetupLink && (
              <a
                href={community.meetupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-white border-2 border-aws-orange text-aws-blue rounded-lg font-bold hover:bg-aws-orange transition-all duration-300 flex items-center gap-2"
              >
                <i className="fas fa-calendar-alt"></i>
                Meetup
              </a>
            )}
            {community.linkedin && (
              <a
                href={community.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-white border-2 border-aws-blue text-aws-blue rounded-lg font-bold hover:bg-aws-blue hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
            )}
            {community.twitter && (
              <a
                href={community.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-white border-2 border-black text-aws-blue rounded-lg font-bold hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <i className="fab fa-x-twitter"></i>
                Twitter
              </a>
            )}
          </div>
        </section>

        {/* Description */}
        <section className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-aws-blue mb-4 relative inline-block pb-2">
            About this Community
            <div className="absolute bottom-0 left-0 w-12 h-1 bg-aws-orange rounded"></div>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-4">{community.fullDescription}</p>
        </section>

        {/* Organizers */}
        {community.organizers && community.organizers.length > 0 && (
          <section className="pb-12 sm:pb-16 lg:pb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-aws-blue mb-6 sm:mb-8 lg:mb-12 text-center relative inline-block pb-2 w-full">
              <div className="inline-block">
                Meet the Organizers
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-aws-orange rounded"></div>
              </div>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-12">
              {community.organizers.map(organizer => (
                <OrganizerCard key={organizer.id} organizer={organizer} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
