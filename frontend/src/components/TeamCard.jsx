const TeamCard = ({ name, chapter, position, description, imageUrl }) => {
  return (
    <div className="group relative w-64 rounded-2xl overflow-hidden shadow-lg bg-[#0d1b2a] border border-[#00629B]/30 transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,98,155,0.5)] hover:-translate-y-2 cursor-pointer">
      
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img
          src={imageUrl || "https://placehold.co/256x256/0d1b2a/00629B?text=IEEE"}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-40"
        />

        {/* Hover description overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5">
          <p className="text-white text-sm text-center font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Chapter badge */}
        <span className="absolute top-3 right-3 bg-[#00629B] text-white text-xs font-semibold px-2 py-1 rounded-full tracking-wide">
          {chapter}
        </span>
      </div>

      {/* Card Info */}
      <div className="p-4">
        <h3 className="text-white font-bold text-lg leading-tight">{name}</h3>
        <p className="text-[#4fc3f7] text-sm mt-1 font-medium tracking-wide">{position}</p>

        {/* Animated bottom accent */}
        <div className="mt-3 h-[2px] w-10 bg-[#00629B] rounded-full transition-all duration-300 group-hover:w-full" />
      </div>
    </div>
  );
};

export default TeamCard;