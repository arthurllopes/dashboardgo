import { Box, Stack, Text } from "@chakra-ui/react";
import ButtonFragment from './ButtonFragment'

const PagesComponent = ({totalCountOfRegisters, currentPage, registerPerPage, pageChange}) => {

    const siblingsCount = 1;

    function generatePagesArray(from, to) {
        return (
            [...new Array(to - from)]
            .map((_, index) => (
                from + index + 1
            ))
            .filter(page => page > 0)
        )
    }
    const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage);

    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

    return (
        <>
            <Box>
                <strong>{currentPage === 1? 1 : (currentPage * registerPerPage) - 9 }</strong> - <strong>{(currentPage * registerPerPage) < totalCountOfRegisters ? (currentPage * registerPerPage) : totalCountOfRegisters}</strong> de <strong>{totalCountOfRegisters}</strong>
            </Box>
            <Stack direction="row" spacing="2">
                {currentPage > (1 + siblingsCount) && (
                    <>
                        <ButtonFragment number={1} pageChange={pageChange} />
                        { currentPage > (2 + siblingsCount) && (
                        <Text color="gray.400" textAlign="center" width="8">...</Text>
                        )}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => (
                <ButtonFragment key={page} number={page} pageChange={pageChange}/>
                ))}

                <ButtonFragment number={currentPage} isCurrent/>
        
                {nextPages.length > 0 && nextPages.map(page => (
                <ButtonFragment key={page} number={page} pageChange={pageChange} />
                ))}

                {(currentPage + siblingsCount) < lastPage && (
                    <>
                        { ( currentPage + 1 + siblingsCount ) > siblingsCount && (
                        <Text color="gray.400" textAlign="center" width="8">...</Text>
                        )}
                        <ButtonFragment number={lastPage} pageChange={pageChange} />
                    </>
                )}
            </Stack>
        </>

    )
}

export default PagesComponent
