import { Box, Button, Flex, FormLabel, Heading, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createPath, useParams } from 'react-router-dom'



const Singlepage = () => {

    const { id } = useParams()
    const token = JSON.parse(localStorage.getItem("token")).token || "";

    const [formData, setFormdata] = useState({ comments: "" })
    const [comment, setComment] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value })
    }





    const getPost = (id) => {
        let res = axios.get(`http://localhost:8080/posts/${id}`)
        return res;
    }

    const getComment = (id) => {
        let res = axios.get(`http://localhost:8080/comments/`, {
            headers: {
                postid: id
            }
        })
        return res;
    }

    useEffect(() => {
        getPost(id)
    }, [])
    useEffect(() => {
        getComment(id).then((res) => {
            setComment(res.data)
        })
    }, [])

    const handleComment = (id) => {
        axios.post(`http://localhost:8080/comments`, formData, {
            headers: {
                authorization: token,
                postid: id
            }
        })
    }
    console.log(comment)

    return (
        <div>
            <Heading>Hello</Heading>

            <Flex bg="gray.100" justify="center" h="100vh" >
                <Box bg="white" px={5} rounded="md" w="30%" mt={"5%"} height="fit-content">

                    <Box textAlign={"left"} pb={10}>

                        <Input placeholder='comments' name="comments" onChange={handleChange} />
                        <Button onClick={() => { handleComment(id) }}>Comment</Button>
                    </Box>
                </Box>
            </Flex>
            {

                comment?.map((el) =>
                    <Flex justify={"space-around"}>
                        <Heading>{el.name}</Heading>

                        <Heading>{el.comments}</Heading>
                    </Flex>
                )

            }
        </div>
    )
}

export default Singlepage

