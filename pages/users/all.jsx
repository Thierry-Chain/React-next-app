import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Skeleton,
  Input,
  Flex,
} from '@chakra-ui/react'
import axios from 'axios'
import { queryClient } from '../_app'
import Head from 'next/head'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { useState } from 'react'
export const getStaticProps = async () => {
  const res = await axios('http://localhost:3004/posts/')
  const data = res.data
  return { props: { init: data }, revalidate: 1 }
}
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
export default function Users({ init }) {
  const [searchKey, setSearchKey] = useState('')
  const { data } = useQuery('getAllUsers', fetcher, {
    initialData: init.slice(0, 5),
    onSuccess: (dt) => {
      console.log('data set', data)
      setAllUsers(dt)
    },
  })
  const [users, setAllUsers] = useState(data)

  const filtered = [...users].filter((data) => {
    return (
      data.title.toLowerCase().indexOf(searchKey.toLowerCase().trim()) !== -1 ||
      data.author.toLowerCase().indexOf(searchKey.toLowerCase().trim()) !== -1
    )
  })

  const currentUser = searchKey ? filtered : users
  return (
    <>
      <Heading size="md" textAlign="center">
        Users list
      </Heading>
      <Flex>
        <Input
          type="text"
          mx="auto"
          bg="gray.100"
          py="3"
          my="5"
          placeholder="Search by name "
          w={['90%', '70%', '65%']}
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </Flex>
      {currentUser?.length ? (
        <>
          <Head>
            <title>All users || {currentUser.length}</title>
            <link rel="icon" href="/logo.jpg" />
          </Head>
          <Box>
            <SimpleGrid columns={[1, 2, 3, 4]} gap="5">
              {currentUser.map((item) => {
                return (
                  <Box
                    bg="blackAlpha.100"
                    shadow="lg"
                    rounded="lg"
                    p="4"
                    key={currentUser.indexOf(item)}
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
        <p>No data available {/*<Skeleton w="90%" mx="auto" p="5" /> */}</p>
      )}
    </>
  )
}
