import { Box, Flex, Heading, Divider, VStack, SimpleGrid, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import InputComponent from '../../fragments/Form/Input'
import Link from 'next/link'


const UserCreate = () => {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.700" p={["2","8"]}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.500" />
                    <VStack>
                        <SimpleGrid minChildWidth="240px" spacing="4" w="100%">
                            <InputComponent name="nome" label="Nome completo"/>
                            <InputComponent name="email" type="email" label="Email"/>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" w="100%" spacing="4">
                            <InputComponent name="password" label="Senha"/>
                            <InputComponent name="password_confirmation" type="password" label="Confirme senha"/>
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default UserCreate