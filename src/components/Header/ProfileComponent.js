import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const ProfileComponent = ({wideVersion}) => {

  return (
    <Flex align="center">
        {wideVersion && <Box mr="4" textAlign="right">
          <Text>Arthur Lopes</Text>
          <Text color="gray.300" fontSize="small">
            arthurllopes10@gmail.com
          </Text>
        </Box>}
      <Avatar size="md" name="Arthur Lopes" src="https://github.com/arthurllopes.png"/>
    </Flex>
  )
}
export default ProfileComponent