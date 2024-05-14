import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { Genre, useGenres } from '../Hooks/useGenres';
import getCroppedImageUrl from '../Services/image-url';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {

    const { data, isLoading, error } = useGenres();
    if (error) return null;
    if (isLoading) return <Spinner />

    return (
        <List>
            {data.map((g) => <ListItem key={g.id} padding='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(g.image_background)} />
                    <Button fontWeight={g.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => {
                        onSelectGenre(g)
                    }} fontSize='lg' variant='link'>{g.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList