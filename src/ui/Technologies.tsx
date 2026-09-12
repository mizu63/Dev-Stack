import React, { useState } from "react";
import Players from "../Players/Players";
import AddCard from "../Players/AddCard";
import type { TechnologyType } from "../Players/Type";
import toast, { Toaster } from "react-hot-toast";
const Technologies = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    TechnologyType[]
  >([]);

 const handleAddTechnology = (technology: TechnologyType) => {
  const alreadySelected = selectedTechnologies.some(
    (item) => item.id === technology.id
  );

  if (alreadySelected) return;

  setSelectedTechnologies((prev) => [...prev, technology]);
  toast.success(`${technology.name} added to your stack!`);
};

  const handleRemoveTechnology = (id: number) => {
    setSelectedTechnologies(
      selectedTechnologies.filter(
        (technology) => technology.id !== id
      )
      
    );
  };
 
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <section>
  <Toaster position="top-right" />
      <div className="container mx-auto">
        <h1 className="text-[36px] font-extrabold leading-10 text-[#0F172A] pb-2">
          Explore the <span className="text-[#EC4899]">Technologies</span>
        </h1>

        <p className="text-[16px] font-normal text-[#64748B] leading-6 pb-10">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="max-w-full flex gap-2">
          <div className="w-3/4">
            <Players
              handleAddTechnology={handleAddTechnology}
              selectedTechnologies={selectedTechnologies}
            />
          </div>

          <div className="w-1/4">
            <AddCard
              selectedTechnologies={selectedTechnologies}
              handleRemoveTechnology={handleRemoveTechnology}
              handleRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;