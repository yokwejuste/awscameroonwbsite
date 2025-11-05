import { useState, useEffect } from 'react'
import CommunityGrid from './CommunityGrid'

export default function Communities() {
  const [activeTab, setActiveTab] = useState('clubs')
  const [communities, setCommunities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/data.json')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      setCommunities(data)
      setError(null)
    } catch (err) {
      setError('Failed to load communities data')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const displayData = activeTab === 'clubs' ? communities.clubs || [] : communities.userGroups || []

  return (
    <section className="communities-section bg-white py-12 sm:py-16 lg:py-20" id="communities-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-aws-blue mb-2 inline-block relative pb-4">
            Our Communities
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-aws-orange rounded"></div>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto">
            Explore AWS Cameroon's thriving ecosystem of cloud clubs and user groups
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('clubs')}
            className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
              activeTab === 'clubs'
                ? 'bg-aws-orange text-aws-blue shadow-lg'
                : 'bg-gray-100 text-aws-blue hover:bg-gray-200'
            }`}
          >
            <i className="fas fa-cloud"></i>
            Cloud Clubs
          </button>
          <button
            onClick={() => setActiveTab('groups')}
            className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
              activeTab === 'groups'
                ? 'bg-aws-orange text-aws-blue shadow-lg'
                : 'bg-gray-100 text-aws-blue hover:bg-gray-200'
            }`}
          >
            <i className="fas fa-users"></i>
            User Groups
          </button>
        </div>

        {/* Content */}
        <div className="min-h-96">
          {loading && (
            <div className="text-center text-base sm:text-lg text-gray-600 py-8 sm:py-12">
              Loading communities...
            </div>
          )}
          {error && (
            <div className="text-center bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 text-sm sm:text-base text-red-600">
              {error}
            </div>
          )}
          {!loading && !error && <CommunityGrid communities={displayData} />}
        </div>
      </div>
    </section>
  )
}
