import React, { Suspense } from 'react';
import type { TechnologyType } from './Type';
import PlayerCard from '../Component/PlayerCard';

const playersPromise = async (): Promise<TechnologyType[]> => {
    const res = await fetch('/playerinformation.json')
    const data = await res.json();
    console.log(data);
    return data;
}
const Players = () => {
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
               <PlayerCard playersPromise={playersPromise()}/>
            </Suspense>
        </div>
    );
};
export default Players;