import { useNavigate } from 'react-router-dom'

export default function CommunityCard({ community }) {
  const navigate = useNavigate()
  const { name, type, description, image, meetupLink, linkedin, twitter, slug } = community

  const handleCardClick = () => {
    if (slug) {
      navigate(`/community/${slug}`)
    }
  }

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
        }}
      />

      <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-aws-blue mb-2">{name}</h3>
        <span className="inline-block bg-aws-orange text-aws-blue px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold mb-3 w-fit">
          {type}
        </span>
        <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 flex-grow">{description}</p>

        <div className="flex gap-2 sm:gap-3 flex-wrap mt-auto">
          {meetupLink && (
            <a
              href={meetupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-aws-orange text-aws-blue rounded font-bold text-center hover:bg-aws-orange hover:opacity-80 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              Meetup
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 text-aws-blue rounded-full flex items-center justify-center font-bold text-xs sm:text-sm hover:bg-aws-orange transition-all duration-300"
              title="LinkedIn"
              onClick={(e) => e.stopPropagation()}
            >
              in
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 text-aws-blue rounded-full flex items-center justify-center font-bold text-xs sm:text-sm hover:bg-aws-orange transition-all duration-300"
              title="Twitter"
              onClick={(e) => e.stopPropagation()}
            >
              𝕏
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
