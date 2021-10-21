import { Button } from "@chakra-ui/react";

const ButtonFragment = ({ isCurrent = false, number, pageChange}) => {
    if (isCurrent) {
        return (
            <Button
              size="sm"
              fontSize="xs"
              width="4"
              colorScheme="pink"
              disabled
              _disabled={{
                bg: 'pink.500',
                cursor: 'default',
              }}
            >
              {number}
            </Button>
        )
    }
        
    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
                bg: 'gray.500'
            }}
            onClick={() => pageChange(number) }
        >
            {number}
        </Button>
    )
}

export default ButtonFragment
