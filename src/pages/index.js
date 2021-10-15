import { Flex, Button, Stack } from "@chakra-ui/react";
import {InputComponent} from '../fragments/Form/Input'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export default function Home() {
  
  const signInFormSchema = yup.object().shape({
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup.string().required('Senha requerida')
  })
  const {register, handleSubmit, formState, errors} = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  
  const handleSignIn = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(errors)

  }
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxW={360} bg="gray.600" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing="2">
          <InputComponent name="email" type="email" ref={register} error={errors?.email}/>
          <InputComponent name="password" type="password" ref={register} error={errors?.password} />
        </Stack>
        <Button type="submit" mt="6" colorScheme="purple" size="lg" isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>

  )
}
