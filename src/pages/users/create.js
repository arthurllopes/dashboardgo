import { Box, Flex, Heading, Divider, VStack, SimpleGrid, Button, HStack } from '@chakra-ui/react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import {InputComponent} from '../../fragments/Form/Input'
import Link from 'next/link'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


const UserCreatePage = () => {
    const createUserFormSchema = yup.object().shape({
        email: yup.string().required('Email obrigatório').email('Email inválido'),
        password: yup.string().required('Senha requerida').min(6, 'No mínimo 6 caracteres'),
        password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'Senhas não estão iguais')
    }).required()

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserFormSchema)
    })
    
    const handleCreateUser = async (values) => {
        console.log(values)
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box as="form" flex="1" borderRadius={8} bg="gray.700" p={["2","8"]} onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.500" />
                    <VStack>
                        <SimpleGrid minChildWidth="240px" spacing="4" w="100%">
                            <InputComponent name="nome" label="Nome completo" {...register('nome')} error={formState.errors?.name}/>
                            <InputComponent name="email" type="email" label="Email"  {...register('email')} error={formState.errors?.email}/>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" w="100%" spacing="4">
                            <InputComponent name="password" type="password" label="Senha"  {...register('password')} error={formState.errors?.password}/>
                            <InputComponent name="password_confirmation" type="password" label="Confirme senha"  {...register('password_confirmation')} error={formState.errors?.password_confirmation}/>
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default UserCreatePage