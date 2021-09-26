import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import store from '../Redux/store'
import { Provider } from 'react-redux'

export const queryClient = new QueryClient(/*{
  defaultOptions: {
    queries: { refetchOnWindowFocus: true },
  }, 
}*/)

function MyApp({ Component, pageProps }) {
  return (

    < Provider store={store} >
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </Layout>
        </ChakraProvider></QueryClientProvider></Provider >
  )

}

export default MyApp
