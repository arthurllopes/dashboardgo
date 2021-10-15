import { Input, FormLabel, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef } from "react";

const InputBase = ({name, label, ...props}, ...ref) => {
    return (
        <FormControl isInvalid={props.error}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input name={name} type={props.type} ref={ref} focusBorderColor="pink.500" bgColor="gray.400" variant="filled" size="lg" />
            {props.error && (
                <FormErrorMessage>
                    {props.error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    )
}

export const InputComponent = forwardRef(InputBase)
