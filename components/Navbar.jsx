import { Flex, Heading, Avatar, Text, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
export default function Navbar() {
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
          <a>Users</a>
        </Text>
      </Link>
    </Flex>
  )
}
