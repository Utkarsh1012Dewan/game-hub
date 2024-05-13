import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import { useGenres } from '../Hooks/useGenres';
import getCroppedImageUrl from '../Services/image-url';
const GenreList = () => {

    const { data } = useGenres();

    return (
        <List>
            {data.map((g) => <ListItem key={g.id} padding='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(g.image_background)} />
                    <Text fontSize='lg'>{g.name}</Text>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList