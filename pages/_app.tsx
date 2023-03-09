import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const theme = extendTheme({
  colors:{
    ni: {
      cyan:"hsl(180, 66%, 49%)",
      violet:"hsl(257, 27%, 26%)",
      red:"hsl(0, 87%, 67%)",
      gray:"hsl(0, 0%, 75%)",
      grayViolet:"hsl(257, 7%, 63%)",
      darkBlue:"hsl(255, 11%, 22%)",
      darkViolet:"hsl(260, 8%, 14%)"
    } 
  }, breakpoints:{
    sm:"376px"
  }
})
export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
}
