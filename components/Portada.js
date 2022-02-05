import React from 'react';
import Ma from './weather-card'
import { Box, Text, Flex, Stack, Container } from '@chakra-ui/react'

const Portada = () => {
    return (
        <>
            <Flex
                backgroundImage="url('https://www.radionacional.gov.py/wp-content/uploads/2018/07/paisaje-natural-del-paraguay.jpg')"
                backgroundPosition="center"
                bgRepeat='no-repeat'
                bgSize='cover'
                height={{ base: '100vh', sm: '100vh', md: '80vh', xl: '70vh' }}
                justifyContent='center'
                align='center'
                flexDirection={{ base: 'column', sm: 'column', md: 'column', xl: 'row', '2xl': 'row' }}
            >

                <Box marginLeft={{ base: 0, sm: 0, md: 0, xl: 40 }}>
                    <Stack>
                        <Text
                            fontSize='6xl'
                            color='white'
                            fontWeight='extrabold'
                            className='portada-font'
                            align={{ base: 'center', md: 'center', xl: 'start' }}
                            width={{ base: '100%', sm: '100%', md: '100%' }}
                        >
                            🌍 Aire Libre
                        </Text>
                        <Text
                            className='portada-font'
                            fontSize={"xl"}
                            color={"white"}
                            p="2"
                            maxWidth={{ base: '100%', sm: '100%', md: '100%', xl: '60%' }}
                            align={{ base: 'center', md: 'center', xl: 'start' }}
                        >
                            AireLibre es una respuesta de la comunidad a la necesidad de saber sobre la
                            calidad del aire de manera libre, colaborativa y descentralizada.
                        </Text>
                    </Stack>
                </Box>

                <Box
                    marginTop={{ base: 0, sm: 5 }}
                    marginRight={{ base: 0, sm: 0, md: 0, xl: 40 }}>
                    <Ma></Ma>
                </Box>

            </Flex>
        </>
    );
}

export default Portada;