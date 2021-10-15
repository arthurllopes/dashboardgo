import { Box, Flex, Button, Heading, Icon } from '@chakra-ui/react'
import React from 'react'
import { RiAddFill } from 'react-icons/ri'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import Sidebar from '../../components/Sidebar'
import UserTable from '../../components/UserTable'
import Link from 'next/link'

const UserManagment = () => {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="2" mx="auto" maxW={1480} px={["4", "8"]}>
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.700" mx="auto" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Link href="users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon fontSize="16" as={RiAddFill}/>}>
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    <UserTable />
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}

export default UserManagment
