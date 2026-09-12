
import type { TechnologyType } from "./Type";
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
import { MdDelete } from "react-icons/md";


interface YourStackProps {
  selectedTechnologies: TechnologyType[];
  handleRemoveTechnology: (id: number) => void;
  handleRemoveAll: () => void;
}

const YourStack = ({ selectedTechnologies, handleRemoveTechnology, handleRemoveAll }: YourStackProps) => {
  return (
    <div className="w-full max-w-[315px] rounded-[20px] border border-[#E8EEF5] bg-white p-4 shadow-sm">
      <h2 className="text-[18px] font-semibold text-[#0F172A]">
        Your Stack
      </h2>

      <p className="mt-1 text-[12px] text-[#94A3B8]">
        
        {selectedTechnologies.length} technologies selected.
      </p>

      <div className="mt-3 min-h-[60px] rounded-[12px] border border-dashed border-[#D8E2EE] p-2">
        {selectedTechnologies.length === 0 ? (
          <div className="flex h-[40px] items-center justify-center">
            <p className="text-[12px] text-[#94A3B8]">
              Your stack is empty.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
              >
                <div>
                  <div className=" flex justify-end">
                    <button
                      onClick={() => handleRemoveTechnology(technology.id)}
                      className="text-red-500 text-2xl"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">

                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center border text-2xl">
                    {technology.name === "React" && <SiReact className="text-[#61DAFB]" />}
                    {technology.name === "Vue.js" && <SiVuedotjs className="text-[#42B883]" />}
                    {technology.name === "Svelte" && <SiSvelte className="text-[#FF3E00]" />}
                    {technology.name === "Next.js" && <SiNextdotjs className="text-black" />}
                    {technology.name === "Node.js" && <SiNodedotjs className="text-[#339933]" />}
                    {technology.name === "PostgreSQL" && <SiPostgresql className="text-[#336791]" />}
                    {technology.name === "Redis" && <SiRedis className="text-[#DC382D]" />}
                    {technology.name === "JavaScript" && <SiJavascript className="text-[#F7DF1E]" />}
                    {technology.name === "TypeScript" && <SiTypescript className="text-[#3178C6]" />}
                    {technology.name === "Tailwind CSS" && <SiTailwindcss className="text-[#06B6D4]" />}
                    {technology.name === "Docker" && <SiDocker className="text-[#2496ED]" />}
                    {technology.name === "Java" && (
                      <FaJava className="text-[#ED8B00]" />
                    )}
                  </div>


                  <span className="px-2 py-1 text-[9px] font-semibold rounded-full bg-blue-100 text-blue-600">
                    {technology.level}
                  </span>

                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-[14px] font-bold text-gray-800 mb-1">
                    {technology.name}
                  </h2>


                </div>
                <p className="text-gray-500 text-[10px] leading-4">
                  {technology.description}
                </p>

                <hr className="my-2 border-gray-200" />

                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 text-[9px] rounded-full">
                    {technology.category}
                  </span>

                  <span className="px-2 py-1 bg-green-100 text-green-600 text-[9px] rounded-full">
                    {technology.difficulty}
                  </span>

                  <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-[9px] rounded-full">
                    ⭐ {technology.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
     {selectedTechnologies.length > 0 && (
  <button onClick={handleRemoveAll} className="mt-3 w-full rounded-xl border border-red-200 bg-red-50 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white">
    Remove All
  </button>
)}
    </div>
  );
};

export default YourStack;