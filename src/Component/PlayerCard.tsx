import React, { use } from "react";
import type { TechnologyType } from "../Players/Type";
import { FaJava } from "react-icons/fa";
import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

export interface PlayersProps {
  playersPromise: Promise<TechnologyType[]>;
  handleAddTechnology: (technology: TechnologyType) => void;
  selectedTechnologies: TechnologyType[];
}

const PlayerCard = ({
  playersPromise,
  handleAddTechnology,
  selectedTechnologies,
}: PlayersProps) => {
  const playerAll = use(playersPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {playerAll.map((player) => {
        const isSelected = selectedTechnologies.some(
          (item) => item.id === player.id
        );

        return (
          <div
            key={player.id}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center border text-2xl">
                {player.name === "React" && (
                  <SiReact className="text-[#61DAFB]" />
                )}
                {player.name === "Vue.js" && (
                  <SiVuedotjs className="text-[#42B883]" />
                )}
                {player.name === "Svelte" && (
                  <SiSvelte className="text-[#FF3E00]" />
                )}
                {player.name === "Next.js" && (
                  <SiNextdotjs className="text-black" />
                )}
                {player.name === "Node.js" && (
                  <SiNodedotjs className="text-[#339933]" />
                )}
                {player.name === "PostgreSQL" && (
                  <SiPostgresql className="text-[#336791]" />
                )}
                {player.name === "Redis" && (
                  <SiRedis className="text-[#DC382D]" />
                )}
                {player.name === "JavaScript" && (
                  <SiJavascript className="text-[#F7DF1E]" />
                )}
                {player.name === "TypeScript" && (
                  <SiTypescript className="text-[#3178C6]" />
                )}
                {player.name === "Tailwind CSS" && (
                  <SiTailwindcss className="text-[#06B6D4]" />
                )}
                {player.name === "Docker" && (
                  <SiDocker className="text-[#2496ED]" />
                )}
                {player.name === "Java" && (
                  <FaJava className="text-[#ED8B00]" />
                )}
              </div>

              <span className="text-xs font-semibold rounded-full bg-blue-100 text-blue-600">
                {player.level}
              </span>
            </div>

            <h2 className="text-[18px] font-bold text-gray-800 mb-2">
              {player.name}
            </h2>

            <p className="text-gray-500 text-sm leading-5 text-[12px]">
              {player.description}
            </p>

            <hr className="my-2 border-gray-200" />

            <div className="flex flex-wrap justify-between mb-5">
              <span className="bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                {player.category}
              </span>

              <span className="bg-green-100 text-green-600 text-xs font-medium rounded-full">
                {player.difficulty}
              </span>

              <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold rounded-full">
                ⭐ {player.rating}
              </span>
            </div>

            <button
              onClick={() => handleAddTechnology(player)}
              className={`w-full py-1 rounded-xl text-white font-semibold active:scale-95 transition-all duration-200 ${isSelected
                  ? "bg-green-500"
                  : "bg-black text-white hover:opacity-90"
                }`}
            >
              {isSelected ? "Selected" : "Add to Stack"}
            </button>
            {/* {isSelected && (
  <p className="mt-2 text-center text-[12px] text-green-500 font-medium">
    Technology selected successfully!
  </p>
)} */}
          </div>
        );
      })}
    </div>
  );
};

export default PlayerCard;