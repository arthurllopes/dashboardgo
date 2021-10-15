import { Table, Thead, Tr, Th, Tbody, Checkbox, Text, Box, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

const UserTable = () => {
    const wideVersion = useBreakpointValue({
        base: false,
        md: true
    })
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
                <Tr>
                    <Th px={["4","6"]}>
                        <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>
                        <Box>
                            <Text fontWeight="bold"color="gray.300">Arthur Lopes</Text>
                            <Text fontSize="x-small">arthurllopes10@gmail.com</Text>
                        </Box>
                    </Th>
                    {wideVersion && <Th>04 de agosto/2021</Th>}
                </Tr>
            </Tbody>
        </Table>
    )
}

export default UserTable
