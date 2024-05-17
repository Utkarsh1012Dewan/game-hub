import { HStack, Image } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"


const NavBar = () => {
    return (
        <HStack padding='10px'>
            <Image src={"react.svg"} boxSize="60px"></Image>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar