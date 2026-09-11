
import React, { use } from 'react';
import type { TechnologyType } from '../Players/Type';

export interface PlayersProps {
  playersPromise: Promise<TechnologyType[]>;
  handleAddTechnology: (technology: TechnologyType) => void;
}

const PlayerCard = ({ playersPromise,handleAddTechnology }: PlayersProps) => {
  const playerAll = use(playersPromise);

  return (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {playerAll.map((player) => (
        <div
          key={player.id}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center border">
          
              <span className="text-[18px] font-bold">
                {player.name.charAt(0)}
              </span>
            </div>

            <span className=" text-xs font-semibold rounded-full bg-blue-100 text-blue-600">
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
            <span className=" bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
              {player.category}
            </span>

            <span className=" bg-green-100 text-green-600 text-xs font-medium rounded-full">
              {player.difficulty}
            </span>

            <span className=" bg-yellow-100 text-yellow-600 text-xs font-semibold rounded-full">
              ⭐ {player.rating}
            </span>
          </div>

          <button  onClick={() => handleAddTechnology(player)} className="w-full py-1 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#D81B7E] text-white font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200">
            Add to Stack
          </button>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;