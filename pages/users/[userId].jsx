import axios from 'axios'
import { useRouter } from 'next/router'
import { Box, Button, Text, Link, Flex, Skeleton } from '@chakra-ui/react'
export const getStaticPaths = async () => {
  const res = await axios('http://localhost:3004/posts/')
  const paths1 = res.data.map((user) => {
    return {
      params: { userId: user.id.toString() },
    }
  })
  const paths = [paths1[0], paths1[1], paths1[2]]
  return { paths, fallback: true }
}
export const getStaticProps = async (context) => {
  const userId = context.params.userId
  const res = await axios(`http://localhost:3004/posts/${userId}`)
  const data = res?.data
  console.log(`building /users/${userId} and data ${data.title}`)

  if (!data?.title) {
    console.log('invalid route')
    return {
      redirect: {
        destination: '/users/',
        permanent: false,
      },
    }
  }

  return {
    props: { user: data },
    revalidate: 1,
  }
}

export default function User({ user }) {
  //console.log(user)

  const router = useRouter()
  if (router.isFallback) {
    console.log('Loading')
    return (
      <Box p="4">
        <Skeleton height="80px" width="80%" />
      </Box>
    )
  }

  return (
    <>
      {' '}
      <Flex>
        <Box
          mx="auto"
          w={['80%', '50%']}
          bg="blackAlpha.100"
          shadow="lg"
          rounded="lg"
          p="4"
          _hover={{ shadow: '2xl', bg: 'gray.300' }}
        >
          <Text>Title: {user.title}</Text>
          <Text>Author: {user.author}</Text>
          <Link href={`/users/${user.id}`}>
            <Button size="sm" mx="3" colorScheme="teal">
              Edit
            </Button>
          </Link>
          <Button size="sm" mx="3" colorScheme="pink">
            Delete
          </Button>
        </Box>
      </Flex>
    </>
  )
}
