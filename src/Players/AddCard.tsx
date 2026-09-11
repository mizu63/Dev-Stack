import React from "react";
import type { TechnologyType } from "./Type";

interface YourStackProps {
  selectedTechnologies: TechnologyType[];
}

const YourStack = ({ selectedTechnologies }: YourStackProps) => {
  return (
    <div className="w-full max-w-[315px] rounded-[20px] border border-[#E8EEF5] bg-white p-4 shadow-sm">
      <h2 className="text-[18px] font-semibold text-[#0F172A]">
        Your Stack
      </h2>

      <p className="mt-1 text-[12px] text-[#94A3B8]">
        {selectedTechnologies.length === 0
          ? "No technologies selected yet."
          : `${selectedTechnologies.length} technologies selected.`}
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
                <div className="flex justify-between items-center mb-2">
                  <div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center border">
                    <span className="text-[13px] font-bold">
                      {technology.name.charAt(0)}
                    </span>
                  </div>

                  <span className="px-2 py-1 text-[9px] font-semibold rounded-full bg-blue-100 text-blue-600">
                    {technology.level}
                  </span>
                </div>

                <h2 className="text-[14px] font-bold text-gray-800 mb-1">
                  {technology.name}
                </h2>

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
    </div>
  );
};

export default YourStack;