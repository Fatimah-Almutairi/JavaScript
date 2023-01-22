import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Text
} from '@chakra-ui/react';


function Nav() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
          <Box fontSize='1.2em'>BSKIN</Box>
          <Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <Text color={'#1F5373'}fontSize='1.2em' fontFamily='inherit'>Home Page</Text>
            <Text color={'#1F5373'}fontSize='1.2em' fontFamily='inherit'>About Us</Text>
            <Text color={'#1F5373'}fontSize='1.2em' fontFamily='inherit'> Contact</Text>
            </Stack>
          </Flex>
          </Box>

          <Box>

          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Nav