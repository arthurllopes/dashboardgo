import { Input, FormLabel, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef} from "react";

const InputBase = ({name, label, error, ...rest}, ref) => {
    return (
        <FormControl isInvalid={error}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input name={name} ref={ref} {...rest} focusBorderColor="pink.500" bgColor="gray.400" variant="filled" size="lg" />
            {error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    )
}

export const InputComponent = forwardRef(InputBase)
