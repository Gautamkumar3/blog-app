import { Avatar, Box, Button, Flex, FormLabel, Heading, HStack, Image, Input, Text, Textarea } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createPath, useParams } from 'react-router-dom'



const Singlepage = () => {

    const { id } = useParams()

    const token = JSON.parse(localStorage.getItem("token")) || "";

    const [formData, setFormdata] = useState()
    const [comment, setComment] = useState([]);
    const [update,setUpdate]=useState(false)
    const [singleBlog, setSignleBlog] = useState({})

    const handleChange = (e) => {
        setFormdata({ comments: e.target.value })
    }


    const getPost = async (id) => {
        let res = await axios.get(`http://localhost:8080/posts/single/${id}`)
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
        getPost(id).then((res) => {
            setSignleBlog(res.data)
        })
    }, [])


    const handleComment = (id, formData) => {
        axios.post(`http://localhost:8080/comments`, formData, {
            headers: {
                authorization: token.token,
                postid: id
            }
        }).then((res)=>{
            setUpdate(!update)
        })
    }

    useEffect(() => {
        getComment(id).then((res) => {
            setComment(res.data)
            console.log(res.data)
        })
    }, [update])


    return (
        <Box w={"70%"} m="auto" >
            <Box mb={"10%"}>
                <Heading my={5}>{singleBlog.title}</Heading>
                <Image maxH={"300px"} w="100%" src={singleBlog.image} />
                <Text mt={5} fontFamily="source-serif-pro, Georgia, Cambria, serif;" fontSize={"xl"}>{singleBlog.content}</Text>
            </Box>
            <Flex my={10} borderBottom="1px solid black">
                <Input border={"none"} placeholder='Add a comment' onChange={handleChange} />
                <Button colorScheme={"orange"} onClick={() => handleComment(singleBlog._id, formData)}>Comment</Button>
            </Flex>
            {comment?.map((com) => <HStack spacing={5} key={com._id} my={3}>
                <Box>
                    <Avatar name={com.name} />
                </Box>
                <Box>
                    <Text fontWeight={"bold"}>{com.name} <span style={{ color: "gray", fontWeight: "400", fontSize: "12px" }}>{com.created_at.split("T")[0]}</span></Text>
                    <Text>{com.comments}</Text>
                </Box>
            </HStack>)}

        </Box>
    )
}

export default Singlepage




{/* <div>
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
</div> */}