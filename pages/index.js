import Head from 'next/head'
import Image from 'next/image'

//this comment must couse conflicts
//added new comment on trial

//import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Button, Box, SimpleGrid, Heading, Flex } from '@chakra-ui/react'
export default function Home() {
  const TestComp = dynamic(() => import('../components/Test'))
  const show = true
  console.log(TestComp)
  return (
    <Box my="6">
      <Head>
        <title>My next app || 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {show ? <TestComp /> : null}
      <Heading size="md" textAlign="center">
        Welcome
      </Heading>
      <Flex py="4">
        <Button mx="auto" colorScheme="teal">
          Test
        </Button>
      </Flex>
      <SimpleGrid px="3" columns={[1, 2, 3, 4]} gap="3">
        <Image width="100%" height="200" alt="one" src="/one.jpg" />
        <Image width="100%" height="200" alt="hdh" src="/two.jpg" />
        <Image width="100%" height="200" alt="djdj" src="/three.jpg" />
        <Image width="100%" height="200" alt="dhjd" src="/four.jpg" />
      </SimpleGrid>
    </Box>
  )
}
