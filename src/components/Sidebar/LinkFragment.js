import { Icon, Link, Text} from "@chakra-ui/react";
import ActiveLink from "../../fragments/ActiveLink/ActiveLink";

const LinkFragment = ({icon, children, href, ...rest}) => {
    return (
        <ActiveLink href={href} color="gray.50" passHref>
            <Link display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20"/>
                <Text ml="4" fontWeight="medium">{children}</Text>
            </Link>
        </ActiveLink>
    )
}

export default LinkFragment
