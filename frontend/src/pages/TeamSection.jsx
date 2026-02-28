import { useState } from "react";
import TeamCard from "../components/TeamCard";
import { teamData, chapters } from "../data/teamData";

const TeamSection = () => {
  const [activeChapter, setActiveChapter] = useState("All");

  const filtered =
    activeChapter === "All"
      ? teamData
      : teamData.filter((m) => m.chapter === activeChapter);

  return (
    <section className="min-h-screen bg-[#06111c] text-white px-4 py-16">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#00629B] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
          IEEE RITB Student Branch
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Meet Our <span className="text-[#4fc3f7]">Team</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          The passionate individuals driving innovation and excellence across IEEE RITB chapters.
        </p>
        <div className="mx-auto mt-6 h-1 w-16 bg-[#00629B] rounded-full" />
      </div>

      {/* Chapter Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {chapters.map((ch) => (
          <button
            key={ch}
            onClick={() => setActiveChapter(ch)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeChapter === ch
                ? "bg-[#00629B] border-[#00629B] text-white"
                : "border-[#00629B]/40 text-gray-400 hover:border-[#00629B] hover:text-white"
            }`}
          >
            {ch}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {filtered.map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-gray-600 text-xs mt-16">
        Hover over a card to learn more · IEEE RITB {new Date().getFullYear()}
      </p>
    </section>
  );
};

export default TeamSection;
