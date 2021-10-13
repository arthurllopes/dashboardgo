import { Input, FormLabel, FormControl } from "@chakra-ui/react";

const InputComponent = ({name, label, ...props}) => {
    return (
        <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input name={name} type={props.type} focusBorderColor="pink.500" bgColor="gray.400" variant="filled" size="lg" />
        </FormControl>
    )
}

export default InputComponent
