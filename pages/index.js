import Head from 'next/head'
//this comment must couse conflicts
//added new comment on trial
import Image from 'next/image'
//this is onother comment that i added in order to make a conflicts
//this is onother comment that i added in order to make a conflicts
//-------------------------------
//this comment must couse conflicts
//added new comment on trial

//import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Button, Box, SimpleGrid, Heading, Flex } from '@chakra-ui/react'
import axios from 'axios'
import { queryClient } from './_app'
import Link from 'next/link'
import Auth from './auth'

export default function Home() {
  const TestComp = dynamic(() => import('../components/Test'))
  const show = true
  console.log(TestComp)
  const handleclick = async () => {
    const data = { title: 'polo g', author: 'epidermic' }
    const res = await axios.post('http://localhost:3004/posts', data)
    queryClient.invalidateQueries('getBooks')
    console.log(res)
  }
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
      {/*
      <Flex py="4">
        <Button onClick={handleclick} mx="auto" colorScheme="teal">
          Test
        </Button>
      </Flex>
      */}
      <Auth />
      <SimpleGrid px="3" columns={[1, 2, 3, 4]} gap="3">
        <Image
          width="100%"
          placeholder="blur"
          blurDataURL="/five.webp"
          height="200"
          alt="one"
          src="/one.jpg"
        />
        <Image
          width="100%"
          placeholder="blur"
          blurDataURL="/five.webp"
          height="200"
          alt="hdh"
          src="/two.jpg"
        />
        <Image
          width="100%"
          placeholder="blur"
          blurDataURL="/five.webp"
          height="200"
          alt="djdj"
          src="/three.jpg"
        />
        <Image
          width="100%"
          placeholder="blur"
          blurDataURL="/five.webp"
          height="200"
          alt="dhjd"
          src="/four.jpg"
        />
        <Image
          width="100%"
          placeholder="blur"
          blurDataURL="/five.webp"
          height="200"
          alt="dhjd"
          src="/five.jpg"
        />
      </SimpleGrid>
    </Box>
  )
}
