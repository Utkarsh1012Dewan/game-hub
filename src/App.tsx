import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './Components/NavBar'
import GameGrid from './Components/GameGrid'
import GenreList from './Components/GenreList'
import { useState } from 'react'
import { Genre } from './Hooks/useGenres'
import PlatformSelector from './Components/PlatformSelector'
import { Platform } from './Hooks/useGames'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(null)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main" >
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setselectedPlatform(platform)} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
