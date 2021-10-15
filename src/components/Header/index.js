import { Flex, IconButton, Icon, useBreakpointValue } from "@chakra-ui/react"
import LogoComponent from "../../fragments/Logo/LogoComponent"
import NotificationComponent from "./NotificationComponent"
import ProfileComponent from "./ProfileComponent"
import SearchComponent from './SearchComponent'
import { useSidebarDrawer } from "../../contexts/DrawerContext";
import { RiMenuLine } from "react-icons/ri"

const Header = () => {
    const { onOpen } = useSidebarDrawer()
    const wideVersion = useBreakpointValue({
        base: false,
        md: true
    })
    return (
        <Flex as="header"
        w="100%"
        maxW={1480}
        h="20"
        mx="auto"
        mt="4"
        align="center"
        px="6">
            { !wideVersion && (
                <IconButton
                aria-label="Open navigation"
                icon={<Icon as={RiMenuLine}/>}
                fontSize="24"
                variant="unstyled"
                onClick={onOpen}
                mr="2"
                />
            )}

            <LogoComponent />

            {wideVersion && <SearchComponent />}


            <Flex align="center" ml="auto">
                <NotificationComponent />
                
                <ProfileComponent wideVersion={wideVersion} />
            </Flex>

        </Flex>
    )
}

export default Header
