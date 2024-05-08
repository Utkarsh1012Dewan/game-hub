import { HStack, Image } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"


const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={"react.svg"} boxSize="60px"></Image>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar