import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Skeleton,
} from '@chakra-ui/react'
import axios from 'axios'
import { queryClient } from '../_app'
import Head from 'next/head'
import Link from 'next/link'
import { useQuery } from 'react-query'
//export const getStaticProps = async () => {
const handleDelete = async (id) => {
  const res = await axios.delete(`http://localhost:3004/posts/${id}`)
  queryClient.invalidateQueries('getAllUsers')
  queryClient.invalidateQueries('getBooks')
  console.log(res)
}

export const fetcher = async () => {
  const res = await axios('http://localhost:3004/posts/')
  const data = res.data
  return data
}
export default function Users() {
  const { data } = useQuery('getAllUsers', fetcher)

  return (
    <>
      {data?.length ? (
        <>
          <Head>
            <title>All users || {data.length}</title>
            <link rel="icon" href="/logo.jpg" />
          </Head>
          <Box>
            <Heading size="md" textAlign="center">
              Users list
            </Heading>
            <SimpleGrid columns={[1, 2, 3, 4]} gap="5">
              {data.map((item) => {
                return (
                  <Box
                    bg="blackAlpha.100"
                    shadow="lg"
                    rounded="lg"
                    p="4"
                    key={data.indexOf(item)}
                    _hover={{ shadow: '2xl', bg: 'gray.300' }}
                  >
                    <Text>Title: {item.title}</Text>
                    <Text>Author: {item.author}</Text>
                    <Link passHref={true} href={`/users/${item.id}`}>
                      <Button size="sm" mx="3" colorScheme="teal">
                        View
                      </Button>
                    </Link>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      size="sm"
                      mx="3"
                      colorScheme="pink"
                    >
                      Delete
                    </Button>
                  </Box>
                )
              })}
            </SimpleGrid>
          </Box>
        </>
      ) : (
        <Skeleton w="90%" mx="auto" p="5" />
      )}
    </>
  )
}
