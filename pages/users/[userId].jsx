import axios from 'axios'
import { Box, Button, Text, Link, Flex } from '@chakra-ui/react'
export const getStaticPaths = async () => {
  const res = await axios('http://localhost:3004/posts/')
  const paths = res.data.map((user) => {
    return {
      params: { userId: user.id.toString() },
    }
  })
  return { paths, fallback: false }
}
export const getStaticProps = async (context) => {
  const userId = context.params.userId
  const res = await axios(`http://localhost:3004/posts/${userId}`)
  const data = res.data
  //console.log('hey bosss', userId)
  return {
    props: { user: data },
  }
}

export default function User({ user }) {
  console.log(user)
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
