import { Box, Stack } from "@chakra-ui/react";
import ButtonFragment from './ButtonFragment'
const PagesComponent = () => {
    return (
        <>
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <ButtonFragment number={1} isCurrent/>
                <ButtonFragment number={2} />
                <ButtonFragment number={3} />
                <ButtonFragment number={4} />
                <ButtonFragment number={5} />
            </Stack>
        </>

    )
}

export default PagesComponent
