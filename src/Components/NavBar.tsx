import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/download.jpeg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' p={3} />
      <ColorModeSwitch />
    </HStack>


  )
}

export default NavBar