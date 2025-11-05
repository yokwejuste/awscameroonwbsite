export default function OrganizerCard({ organizer }) {
  const { name, role, image, linkedin, twitter, github, website, blog } = organizer

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
      <div className="overflow-hidden bg-gray-100 h-40 sm:h-48 lg:h-56">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
          }}
        />
      </div>

      <div className="p-3 sm:p-4 lg:p-6">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-aws-blue mb-1">{name}</h3>
        <p className="text-xs sm:text-sm lg:text-base text-aws-orange font-bold mb-3 sm:mb-4">{role}</p>

        <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-100 text-aws-blue rounded-full flex items-center justify-center text-xs sm:text-sm font-bold hover:bg-aws-blue hover:text-white transition-all duration-300"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-100 text-aws-blue rounded-full flex items-center justify-center text-xs sm:text-sm font-bold hover:bg-black hover:text-white transition-all duration-300"
              title="Twitter"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-100 text-aws-blue rounded-full flex items-center justify-center text-xs sm:text-sm hover:bg-gray-800 hover:text-white transition-all duration-300"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-100 text-aws-blue rounded-full flex items-center justify-center text-xs sm:text-sm hover:bg-aws-orange transition-all duration-300"
              title="Website"
            >
              <i className="fas fa-globe"></i>
            </a>
          )}
          {blog && (
            <a
              href={blog}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-100 text-aws-blue rounded-full flex items-center justify-center text-xs sm:text-sm hover:bg-aws-orange transition-all duration-300"
              title="Blog"
            >
              <i className="fas fa-pen"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
