import { ChakraProvider } from "@chakra-ui/react"
import { SidebarDrawerProvider } from "../contexts/DrawerContext"
import { theme } from "../styles/theme"
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component  {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
