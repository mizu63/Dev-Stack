import React, { use } from 'react';
import type { TechnologyType } from '../Players/Type';

export interface PlayersProps {
  playersPromise: Promise<TechnologyType[]>;
}

const PlayerCard = ({ playersPromise }: PlayersProps) => {
  const playerAll = use(playersPromise);

  return (
    <div>
      {playerAll.map((player) => (
        <div key={player.id}>
          <h2>{player.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;