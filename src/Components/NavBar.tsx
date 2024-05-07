import { HStack, Image, Text } from "@chakra-ui/react"


const NavBar = () => {
    return (
        <HStack>
            <Image src={"logo.png"} boxSize="60px"></Image>
            <Text>NavBar</Text>
        </HStack>
    )
}

export default NavBar