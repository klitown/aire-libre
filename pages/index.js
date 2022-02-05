import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Portada from '../components/Portada'
import Cards from '../components/Cards'
import Inicio from '../components/Inicio'

export default function Home() {
  return (
    <>
      <Inicio/>
      {/* <Box>
        <Text fontSize="5xl" 
              align="center" 
              mt="10" 
              className='titulo-font'
              letterSpacing='4px'
              textTransform='uppercase'
              color="green.400"
              
        >
          El aire en Paraguay
        </Text>
      </Box> 
        <Cards/> */}
    </>
  )
}