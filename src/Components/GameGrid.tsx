import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../Hooks/useGames';
import GameCard from './GameCard';


const GameGrid = () => {

    //Calling the useGames function here to get the data of the games
    const { games, error } = useGames();

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding="10px" spacing={10}>
                {games.map(game => <GameCard key={game.id} game={game} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid 