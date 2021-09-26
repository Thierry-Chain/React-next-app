import Head from 'next/head'
import { Button, Box, SimpleGrid, Heading, Flex } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from 'Redux/actions'

export default function Auth() {
  const auth = useSelector((state) => state.drive.auth)
  const dispatch = useDispatch()
  return (
    <Box my="6">
      <Head>
        <title> {auth ? 'Logout' : 'Login'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex py="4">
        <Button
          onClick={
            auth
              ? () => {
                  dispatch(logout())
                }
              : () => {
                  dispatch(login())
                }
          }
          mx="auto"
          colorScheme="teal"
        >
          {auth ? 'Logout' : 'Login'}
        </Button>
      </Flex>
    </Box>
  )
}
