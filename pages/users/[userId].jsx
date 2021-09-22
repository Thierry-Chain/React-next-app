import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Skeleton, Flex, Box, Text, Link, Button } from '@chakra-ui/react'

export const getStaticPaths = async () => {
  console.warn('one')

  const res = await axios('http://localhost:3004/posts/')
  const paths1 = res.data.map((user) => {
    return {
      params: { userId: user.id.toString() },
    }
  })
  const paths = paths1.slice(0, 10)
  return { paths, fallback: true }
}

export const getStaticProps = async (context) => {
  console.warn('two')
  const userId = context.params.userId

  try {
    const res = await axios(`http://localhost:3004/posts/${userId}`)
    const user = res?.data
    console.log('here we go', user)
    return {
      props: { user },
      revalidate: 1,
    }
  } catch (e) {
    //console.warn('error', e)
    return {
      notFound: true,
    }
  }
}
export const fetcher = async (id) => {
  const res = await axios('http://localhost:3004/posts/' + id)
  const data = res.data
  console.log('Im called', data)
  return data
}

function Details({ user }) {
  const router = useRouter()
  //if (router.isFallback) {
  //  console.log('check', user, router.asPath.replace('/users/', ''))
  //}
  const { data, status } = useQuery(
    'getDetails',
    () =>
      router.isFallback
        ? fetcher(router.asPath.replace('/users/', ''))
        : fetcher(user.id),
    {
      initialData: user ? [user] : null,
    },
  )
  console.log('Go', user, data, status)
  if (router.isFallback) {
    return (
      <>
        <h2>Please wait ....</h2>
        <Skeleton height="100px" w="80%" mx="auto" />
      </>
    )
  }
  return (
    <>
      {data?.title ? (
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
            <Text>Title: {data.title}</Text>
            <Text>Author: {data.author}</Text>
            <Link href={`/users/${data.id}`}>
              <Button size="sm" mx="3" colorScheme="teal">
                Edit
              </Button>
            </Link>
            <Button size="sm" mx="3" colorScheme="pink">
              Delete
            </Button>
          </Box>
        </Flex>
      ) : (
        <>
          <h2>Please wait for react query ....</h2>
          <Skeleton height="100px" w="80%" mx="auto" />
        </>
      )}
    </>
  )
}
export default Details
