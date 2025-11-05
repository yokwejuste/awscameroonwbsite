import CommunityCard from './CommunityCard'

export default function CommunityGrid({ communities }) {
  if (!communities || communities.length === 0) {
    return <div className="text-center py-8 sm:py-12 text-gray-600 text-base sm:text-lg">No communities found.</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {communities.map((community) => (
        <CommunityCard key={community.id} community={community} />
      ))}
    </div>
  )
}
