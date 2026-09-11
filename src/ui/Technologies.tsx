import React, { useState } from "react";
import Players from "../Players/Players";
import AddCard from "../Players/AddCard";
import type { TechnologyType } from "../Players/Type";

const Technologies = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<TechnologyType[]>([]);

 const handleAddTechnology = (technology: TechnologyType) => {
    setSelectedTechnologies((prev) => [...prev, technology]);
  };

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-[36px] font-extrabold leading-10 text-[#0F172A]">
          Explore the <span className="text-[#EC4899]">Technologies</span>
        </h1>

        <p className="text-[16px] font-normal text-[#64748B] leading-6 pt-2">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="max-w-full flex">
          <div className="w-3/4">
            <Players handleAddTechnology={handleAddTechnology}/>
          </div>

          <div className="w-1/4">
            <AddCard selectedTechnologies={selectedTechnologies} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;