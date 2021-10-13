import { Flex, Button, Stack } from "@chakra-ui/react";
import InputComponent from '../fragments/Form/Input'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxW={360} bg="gray.600" p="8" borderRadius={8} flexDir="column">
        <Stack spacing="2">
          <InputComponent name="email" type="email" />
          <InputComponent name="password" type="password"/>
        </Stack>
        <Button type="submit" mt="6" colorScheme="purple" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>

  )
}
