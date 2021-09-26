import { Button, Input, Heading, Stack, Container, Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { queryClient } from '../_app'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const AddUser = () => {
    const router = useRouter()
    const auth = useSelector(state => state.drive.auth)

    useEffect(() => {
        if (!auth) {
            router.replace('/')

        }
    }, [auth, router])
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const handleclick = async () => {
        if (title === '' || author === '') {
            alert('Remove empty spaces')
            return 0
        }
        const data = { title, author }
        const res = await axios.post('http://localhost:3004/posts', data)
        queryClient.invalidateQueries('getBooks')
        console.log(res)
        setTitle('')
        setAuthor('')
    }
    return (<Container p="3" my="7" mx="auto" bg="gray.100" shadow="xl" minH={["70vh", '60vh', '50vh']}>
        <Heading my="3" size="md" textAlign="center">Add new user</Heading>
        <hr />
        <Stack my="3">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" py="3" variant="flushed" />
            <Input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" py="3" variant="flushed" />
            <Flex py="4"><Button onClick={handleclick} colorScheme='teal' mx="auto" w="50%">Add</Button></Flex>
        </Stack>
    </Container>)
}
export default AddUser