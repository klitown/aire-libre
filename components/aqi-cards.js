import React from 'react';
import { Text, Flex, Box, Container, Grid, Icon, Link } from '@chakra-ui/react'
import { AiFillLike, AiFillFire } from "react-icons/ai";
import { IoIosHappy } from "react-icons/io";
import { RiEmotionSadFill } from "react-icons/ri";
import { FaHeadSideMask, FaBookDead } from "react-icons/fa";

const data = [
    {
        rango: '0-50 | Libre',
        descripcion: 'Escaso riesgo de contaminación atmosférica, calidad de aire satisfactoria.',
        icon: IoIosHappy,
        color: 'green.500'
    },
    {
        rango: '51-100 | Maso',
        descripcion: 'Calidad de aire aceptable, riesgo moderado para la salud de personas sensibles a la contaminación ambiental.',
        icon: AiFillLike,
        color: 'yellow.400'
    },
    {
        rango: '101-150 | No tan bien',
        descripcion: 'Insalubre para personas sensibles.',
        icon: RiEmotionSadFill,
        color: 'orange.400'
    },
    {
        rango: '151-200 | Insalubre',
        descripcion: 'Riesgo general para las personas, efectos más graves en personas sensibles.',
        icon: FaHeadSideMask,
        color: 'red.400'
    },
    {
        rango: '201-300 | Muy insalubre',
        descripcion: 'Condición de emergencia.',
        icon: AiFillFire,
        color: 'purple.500'
    },
    {
        rango: '300+ | Peligroso',
        descripcion: 'Alerta sanitaria, efectos graves para toda la población.',
        icon: FaBookDead,
        color: 'pink.900'
    },

]
const AqiCards = () => {
    return (
        <>
            <Container mt='10' maxW='container.md' mb="10">
                <Text as="div" align='center' mb='8' fontFamily='Nunito' fontSize='4xl'>
                    Escala AQI
                    <Box as='div' fontSize='sm' fontWeight='normal'>
                        <Link href='https://airelib.re/' isExternal>
                            Fuente de la escala: AirNow <Icon as='FaHeadSideMask' mx='2px' />
                        </Link>

                    </Box>
                </Text>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                    gap={6}>
                    {data.map(escala => (
                        <Flex direction='column' justify='center' align='center'
                            w='100%' h='170'
                            key={escala.rango}
                            bg={escala.color}
                        >
                            <Text fontSize='2xl' mt='2' color='white' fontWeight='bold'>
                                {escala.rango}
                            </Text>
                            <Text align='center'
                                fontSize='sm' mt='2' color='white' fontWeight='bold'>
                                {escala.descripcion}
                            </Text>
                            <Icon as={escala.icon} color='white' w='8' h='8' mt='3' />
                        </Flex>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default AqiCards;
