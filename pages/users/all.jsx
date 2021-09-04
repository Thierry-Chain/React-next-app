import { Box, Heading, SimpleGrid, Text, Button } from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
export const getStaticProps = async () => {
  const res = await axios('http://localhost:3000/api/hello')
  const data = res.data
  //console.log(data)
  return {
    props: { list: data },
  }
}

export default function Users({ list }) {
  return (
    <>
      <Head>
        <title>All users || {list.length}</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Box>
        <Heading size="md" textAlign="center">
          Users list
        </Heading>
        <SimpleGrid columns={[1, 2, 3, 4]} gap="5">
          {list.map((item) => {
            return (
              <Box
                bg="blackAlpha.100"
                shadow="lg"
                rounded="lg"
                p="4"
                key={list.indexOf(item)}
                _hover={{ shadow: '2xl', bg: 'gray.300' }}
              >
                <Text>Title: {item.title}</Text>
                <Text>Author: {item.author}</Text>
                <Link passHref={true} href={`/users/${item.id}`}>
                  <Button size="sm" mx="3" colorScheme="teal">
                    View
                  </Button>
                </Link>
                <Button size="sm" mx="3" colorScheme="pink">
                  Delete
                </Button>
              </Box>
            )
          })}
        </SimpleGrid>
      </Box>
    </>
  )
}
