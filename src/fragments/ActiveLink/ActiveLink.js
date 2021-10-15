import Link from "next/link";
import { useRouter } from "next/router";
import { cloneElement } from "react";

const ActiveLink = ({children, color, shouldMatchExactHref = false, ...rest}) => {
    const { asPath } = useRouter();

    let isActive = false;

    if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }

    if(!shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href))) ||
    asPath.startsWith(String(rest.as))) {
      isActive = true;
    }
    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : `${color}`
            })}
        </Link>
    )
}

export default ActiveLink
