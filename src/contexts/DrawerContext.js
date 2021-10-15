import { useRouter } from "next/router";
import { createContext, useContext, useEffect } from "react";
import {useDisclosure, useBreakpointValue } from "@chakra-ui/react"

const DrawerContext = createContext({});

export function SidebarDrawerProvider({children}) {
    const disclosure = useDisclosure()
    const router = useRouter()
    const wideVersion = useBreakpointValue({
      base: false,
      md: true
    })
  
    useEffect(() => {
      disclosure.onClose()
    }, [router.asPath])
  
    return (
      <DrawerContext.Provider value={disclosure}>
        {children}
      </DrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(DrawerContext)