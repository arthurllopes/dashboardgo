import { Table, Thead, Tr, Th, Tbody, Checkbox, Text, Box, useBreakpointValue, Link } from '@chakra-ui/react'
import React from 'react'
import {queryClient} from '../../services/queryClient'
import {api} from '../../services/axios/api'

const UserTable = ({data}) => {
    const wideVersion = useBreakpointValue({
        base: false,
        md: true
    })
    async function handlePrefetch (ID){
        await queryClient.prefetchQuery(['user', ID], async () => {
            const response = await api.get(`users/${ID}`)
            const data = await response.data

            return data
        }, {
            staleTime: 1000 * 60 * 3 //3minutos
        })
    }
    return (
        <Table colorScheme="whiteAlpha" flex="1">
            <Thead>
                <Tr>
                    <Th px={["4","6"]} color="gray.300" width="8">
                        <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {wideVersion && <Th>Data de cadastro</Th>}
                </Tr>
            </Thead>
            <Tbody>
                {
                    data.map((user) => (
                        <Tr key={user.id}>
                            <Th px={["4","6"]}>
                                <Checkbox colorScheme="pink" />
                            </Th>
                            <Th>
                                <Box>
                                    <Link color="purple.400" onMouseEnter={() => handlePrefetch(user.id)}>
                                        <Text fontWeight="bold"color="gray.300">{user.name}</Text>
                                    </Link>
                                    <Text fontSize="x-small">{user.email}</Text>
                                </Box>
                            </Th>
                            {wideVersion && <Th>{user.createdAt}</Th>}
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
    )
}

export default UserTable
