import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Text,
  Image
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
            {/* Logo */}
          <Box fontFamily='fantasy' fontSize='1.4em'>BSKIN</Box>

          {/* Category */}
          <Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} gap={12}>
            <Text color={'#1F5373'}fontSize='1.2em' fontFamily='inherit'>Home Page</Text>
            <Text color={'#1F5373'}fontSize='1.2em' fontFamily='inherit'>About Us</Text>
            <Text color={'#1F5373'}fontSize='1.2em' fontFamily='inherit'> Contact</Text>
            </Stack>
          </Flex>
          </Box>

          <Box>
            <Flex gap={6}>
                <Image  maxW='40px' src='./bag.png'></Image>
                <Image maxW='40px' src='./user.png'></Image>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Nav