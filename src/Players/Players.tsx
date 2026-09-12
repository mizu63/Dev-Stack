import React, { Suspense } from "react";
import type { TechnologyType } from "./Type";
import PlayerCard from "../Component/PlayerCard";

interface PlayersProps {
  handleAddTechnology: (technology: TechnologyType) => void;
  selectedTechnologies: TechnologyType[];
}

const playersPromise = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/playerinformation.json");
  const data = await res.json();
  console.log(data);
  return data;
};

const Players = ({
  handleAddTechnology,
  selectedTechnologies,
}: PlayersProps) => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <PlayerCard
          playersPromise={playersPromise()}
          handleAddTechnology={handleAddTechnology}
          selectedTechnologies={selectedTechnologies}
        />
      </Suspense>
    </div>
  );
};

export default Players;