import {
  Flex,
  Heading,
  Avatar,
  Text,
  Spacer,
  Spinner,
  Badge,
} from '@chakra-ui/react'
import { useQuery } from 'react-query'
import Link from 'next/link'
import axios from 'axios'
export default function Navbar() {
  const fetcher = async () => {
    const res = await axios('http://localhost:3004/posts/')
    const data = await res.data
    //console.log('inside', data)
    return data.length
  }
  const { data } = useQuery('getBooks', fetcher)
  //console.log(data)
  return (
    <Flex py="4" bg="gray.100" align="baseline">
      <Avatar my="auto" mr="3" name="logo" src="/logo.jpg" />
      <Heading color="blue.800" fontWeight="bold">
        Next app
      </Heading>
      <Spacer />

      <Link passHref={true} href="/">
        <Text
          className="nav-item"
          shadow="inner"
          rounded="md"
          _hover={{ bg: 'blue.200' }}
          mx="2"
          bg="blue.400"
          p="3"
          fontWeight="bold"
          color="white"
        >
          <a>Home</a>
        </Text>
      </Link>
      <Link passHref={true} href="/users/all">
        <Text
          className="nav-item"
          shadow="inner"
          rounded="md"
          _hover={{ bg: 'blue.200' }}
          mx="2"
          bg="blue.500"
          p="3"
          fontWeight="bold"
          color="white"
        >
          <a>
            {' '}
            Users{' '}
            {data ? (
              <Badge colorScheme="whatsapp" rounded="lg">
                {data}
              </Badge>
            ) : (
              <Spinner as="span" size="xs" />
            )}
          </a>
        </Text>
      </Link>
      <Link passHref={true} href="/users/add">
        <Text
          className="nav-item"
          shadow="inner"
          rounded="md"
          _hover={{ bg: 'blue.200' }}
          mx="2"
          bg="blue.400"
          p="3"
          fontWeight="bold"
          color="white"
        >
          <a>New user</a>
        </Text>
      </Link>
    </Flex>
  )
}
