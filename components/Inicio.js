import React from 'react';
import { Box, Text, Flex, Stack, Divider, Container, IconButton } from '@chakra-ui/react'
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import AqiCards from './aqi-cards'
import dynamic from 'next/dynamic';


const MyAwesomeMap = dynamic(
    () => import("./Map"),
    { ssr: false }
)


const Inicio = () => {
    return (
        <>
            <Flex align='center' justify='space-evenly' borderBottom='1px solid #f2f2f2' mt="5">
                <Box mb="3" >
                    <Text className='portada-font' fontSize='4xl' textAlign='center' fontWeight='extrabold'>
                        🌍 Aire Libre
                    </Text>
                </Box>
                <Box mb="3">
                    <Stack direction='row'>
                        <IconButton
                            size='lg'
                            aria-label='Icon twitter'
                            onClick={() => window.location.href = 'https://twitter.com/KoaNdeAire'}
                            icon={<AiOutlineTwitter />}
                        />
                        <IconButton
                            size='lg'
                            aria-label='Icon github'
                            onClick={() => window.location.href = 'https://github.com/melizeche/AireLibre/'}
                            icon={<AiFillGithub />}
                        />
                    </Stack>
                </Box>
            </Flex>
            <Container mt='16' maxW='container.md' centerContent>
                <Text fontFamily='Nunito' fontSize='4xl' >
                    ¿Qué es <Text as='span' color='green.400'> aire libre</Text>?
                </Text>
                <Text mt='8' fontFamily='Nunito' fontSize='xl' marginLeft={{ base: 0, sm: 10, md: 0, lg: 0 }}>
                    <Text as='span' color='green.400'> Aire libre </Text> es una respuesta de la comunidad a la necesidad de saber
                    sobre la calidad del aire de
                    manera libre, colaborativa y descentralizada.
                </Text>
                <Divider mt='10' />
            </Container>
            <MyAwesomeMap />
            <AqiCards />
        </>
    );
}

export default Inicio;