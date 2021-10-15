import { Flex, Button, Stack } from "@chakra-ui/react";
import {InputComponent} from '../fragments/Form/Input'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


export default function Home() {
  const signInFormSchema = yup.object().shape({
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup.string().required('Senha requerida')
  }).required()
  
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn = async (values) => {
    console.log(values)

  }
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxW={360} bg="gray.600" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing="2">
          <InputComponent name="email" type="email" {...register('email')} error={formState.errors?.email}/>
          <InputComponent name="password" type="password" {...register('password')} error={formState.errors?.password} />
        </Stack>
        <Button type="submit" mt="6" colorScheme="purple" size="lg" isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>

  )
}
