import { Box, Flex, Button, Heading, Icon, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import { RiAddFill } from 'react-icons/ri'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import Sidebar from '../../components/Sidebar'
import UserTable from '../../components/UserTable'
import NextLink from 'next/link'
import { useUsers } from '../../services/hooks/useUsers'

const UserManagment = () => {
    const [page, setPage] = React.useState(1)
    const {data, isLoading, error, isFetching} = useUsers(page)

    return (
        <Box>
            <Header />

            <Flex w="100%" my="2" mx="auto" maxW={1480} px={["4", "8"]}>
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.700" mx="auto" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching && <Spinner size="sm" color="gray.400" ml="4" />}                        
                        </Heading>
                        <NextLink href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon fontSize="16" as={RiAddFill}/>}>
                                Criar novo
                            </Button>
                        </NextLink>
                    </Flex>
                    {isLoading ? (
                        <>
                            <Flex justify="center">
                                <Spinner />
                            </Flex>
                        </>
                    ) : error ? (
                        <>
                            <Flex justify="center">
                                <Text>Falha ao obter dados</Text>
                            </Flex>
                        </>
                    ) : (
                        <>
                            <UserTable data={data.users} />
                            <Pagination totalCountOfRegisters={data.totalCount} currentPage={page} registerPerPage={10} pageChange={setPage}/> 
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}

export default UserManagment
