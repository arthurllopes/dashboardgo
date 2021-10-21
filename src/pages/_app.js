import { ChakraProvider } from "@chakra-ui/react"
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { SidebarDrawerProvider } from "../contexts/DrawerContext"
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme"
import { queryClient } from "../services/queryClient";

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component  {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
