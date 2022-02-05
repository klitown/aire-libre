import React from 'react';
import { Box, Container, Flex, Text, SimpleGrid, Center } from '@chakra-ui/react'


const CIUDADES = [
    {nombre: 'Asunción'},
    {nombre: 'Fdo. Zona Sur'},
    {nombre: 'Lambaré'},
    {nombre: 'Luque'},
]

const Cards = () => {

    return (
        <>


            <Flex
                p="10"
                flexDirection={{base: 'column', sm: 'column', md: 'row'}}
                flexWrap='wrap'
                justifyContent='space-evenly'
                align='center'
            >

                {CIUDADES.map((ciudad) => (
                    <Flex
                        m="10"
                        width='350px'
                        borderRadius='2xl'
                        h='300px'
                        key={ciudad.nombre}
                        bg="url('https://blog.global-exchange.com/wp-content/uploads/2019/02/Palacio-Lopez-840.jpg')"
                        bgPosition='center'
                        bgRepeat='no-repeat'
                        bgSize='cover'
                        justifyContent='center'
                        align='center'
                        _hover={{ 
                            cursor: 'pointer'
                        }}
                    >
                        <Text
                            fontSize='4xl'
                            fontWeight='extrabold'
                            color='black'
                            bgColor='white'
                            w="80%"
                            textAlign='center'
                            _hover={{ 
                                bg: 'black',
                                color: 'white',
                            }}
                        >
                            {ciudad.nombre}
                        </Text>

                    </Flex>

                ))}


            </Flex>


            
        </>
    );
}

export default Cards;