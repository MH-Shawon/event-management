

import { useEffect, useState } from 'react';
import GameCard from './GameCard';


const Games = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('games.json')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])
    return (
        <div className='bg-gradient-to-r from-black to-indigo-500'>
            <div>
                <h1 className='text-center py-4 mb-8 text-4xl text-white font-bold'>Chose Your Game</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-4 lg:px-20 pb-6'>

                {
                    games.map(game => <GameCard key={game.id} game={game}></GameCard>)
                }
            </div>
        </div>
    );
};

export default Games;