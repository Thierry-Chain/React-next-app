import { Alert, Button, Flex } from '@chakra-ui/react'
import { route } from 'next/dist/server/router'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const ErrorPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])
  return (
    <>
      <Alert variant="left-accent" status="warning">
        Page does not exist
      </Alert>
      <Link passHref={true} href="/">
        <Flex>
          <Button mx="auto" my="3" p="2" colorScheme="blue">
            Home
          </Button>
        </Flex>
      </Link>
    </>
  )
}
export default ErrorPage
