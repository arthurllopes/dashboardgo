import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import LinkFragment from "./LinkFragment";
import NavSection from './NavSection'

const NavComponent = () => {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <LinkFragment icon={RiDashboardLine} href="/dashboard">Dashboard</LinkFragment>
                <LinkFragment icon={RiContactsLine} href="/users">Usuários</LinkFragment>
            </NavSection>
            <NavSection title="AUTOMAÇÃO">
                <LinkFragment icon={RiInputMethodLine} href="/forms">Formulários</LinkFragment>
                <LinkFragment icon={RiGitMergeLine} href="/automation">Automação</LinkFragment>
            </NavSection>
        </Stack>
    )
}

export default NavComponent
