import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import NavComponent from './NavComponent'
import { useSidebarDrawer } from "../../contexts/DrawerContext";

const Sidebar = () => {
    const { isOpen, onClose} = useSidebarDrawer();
    const wideVersion = useBreakpointValue({
        base: false,
        md: true
    })
    if(!wideVersion) {
        return (
            <>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4">
                        <DrawerCloseButton mt="5" />
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <NavComponent />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
        )
    }
    return (
       <Box as="aside" w="48" mr="6">
           <NavComponent />
       </Box>
    )
}

export default Sidebar
