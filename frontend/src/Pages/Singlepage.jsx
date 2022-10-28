import { Avatar, Box, Button, Flex, FormLabel, Heading, HStack, Image, Input, Text, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPath, Navigate, useNavigate, useParams } from 'react-router-dom'
import { addAllComments, deleteComments, getAllComments, updateComments } from '../store/comment/Comment.action'
import { DeleteIcon } from '@chakra-ui/icons'
import UpdateCommentModal from '../components/UpdateCommentModal'
import { FiEdit } from "react-icons/fi";
import { DeletePostData, getPostsData, UpdatePostData } from '../store/Post/Post.action'
import UpdatePostModal from '../components/UpdatePostModal'

const Singlepage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((store) => store.comments.data);
    const toast = useToast()
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("token")) || "";
    let WriterId;



    const [formData, setFormdata] = useState()
    const [update, setUpdate] = useState(false)
    const [singleBlog, setSignleBlog] = useState({})

    const handleChange = (e) => {
        setFormdata({ comments: e.target.value })
    }


    const getPost = async (id) => {
        let res = await axios.get(`http://localhost:8080/posts/single/${id}`)
        return res;
    }


    useEffect(() => {
        getPost(id).then((res) => {
            setSignleBlog(res.data)
        })
    }, [update])


    const handleComment = (id, formData) => {
        console.log(id, formData)
        dispatch(addAllComments(id, formData))
        setUpdate(!update)
    }

    useEffect(() => {
        dispatch(getAllComments(id))
        dispatch(getPostsData(token.id))
    }, [update])

    const handleDelete = (id, commId) => {
        dispatch(deleteComments(id, commId))
        setUpdate(!update)
    }

    const handlePostDelete = (id, writerId) => {
        console.log(id, writerId)
        dispatch(DeletePostData(id, writerId))
        setUpdate(!update)
        toast({
            title: "Post Deleted successfully",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "top"
        })
        setTimeout(() => {
            navigate("/author")
        }, 2000)

    }

    const handlePostUpdate = (id, userId, post, onClose) => {
        dispatch(UpdatePostData(id, userId, post))
        setUpdate(!update)
        onClose()
        toast({
            title: "Post Content updated successfully",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "top"
        })
    }


    return (
        <Box w={"70%"} m="auto" >
            <Box mb={"10%"}>
                <Heading my={5}>{singleBlog.title}</Heading>

                <Image maxH={"300px"} w="100%" src={singleBlog.image} />
                <Text mt={5} fontFamily="source-serif-pro, Georgia, Cambria, serif;" fontSize={"xl"}>{singleBlog.content}</Text>
                {token.id === singleBlog.userId ?
                    <Flex justify={"right"} gap={10} my={10}>
                        <UpdatePostModal id={singleBlog._id} userId={token.id} handlePostUpdate={handlePostUpdate} />
                        <DeleteIcon _hover={{ cursor: "pointer" }} boxSize={7} onClick={() => handlePostDelete(singleBlog._id, token.id)} />
                    </Flex> : null}
            </Box>
            <Flex my={10} borderBottom="1px solid black">
                <Input border={"none"} placeholder='Add a comment' onChange={handleChange} />
                <Button colorScheme={"orange"} onClick={() => handleComment(singleBlog._id, formData)}>Comment</Button>
            </Flex>
            {data?.map((com) => <Flex gap={5} key={com._id} my={3} w="100%" >
                <Box>
                    <Avatar name={com.name} />
                </Box>
                <Flex justify="space-between" w="100%" align={"center"}>
                    <Box>
                        <Text fontWeight={"bold"}>{com.name} <span style={{ color: "gray", fontWeight: "400", fontSize: "12px" }}>{com.created_at.split("T")[0]}</span></Text>
                        <Text>{com.comments}</Text>
                    </Box>
                    {token.id == com.userId.toString() ?
                        <HStack mr={5} spacing={10}>
                            <UpdateCommentModal id={id} commId={com._id} />
                            <DeleteIcon _hover={{ cursor: "pointer" }} onClick={() => handleDelete(id, com._id)} boxSize={6} />
                        </HStack> : null}
                </Flex>
            </Flex>)}

        </Box>
    )
}

export default Singlepage




