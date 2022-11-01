import { Box, Flex, FormControl, FormLabel, Image, Input, SimpleGrid, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddPostData } from '../store/Post/Post.action'

const CreateBlog = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const toast = useToast()
    const token = JSON.parse(localStorage.getItem("token")) || "";
    const dispatch = useDispatch()
    const post = useSelector((store) => store.posts)


    const postDetails = (imageUrl) => {

        if (imageUrl === undefined) {
            toast({
                title: 'Please seclect an Image!',
                description: "wraning",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top"
            })
            return;
        } else {

            const data = new FormData();
            data.append("file", imageUrl);
            data.append("upload_preset", "Gk-chat")
            data.append("cloud_name", "dbojqn7mx")
            fetch("https://api.cloudinary.com/v1_1/dbojqn7mx/image/upload", {
                method: "post",
                body: data
            }).then((res) => res.json()).then((data) => {
                setImageUrl(data.url.toString());
                console.log(data.url.toString())
                return;
            }).catch((er) => {
                console.log(er)
            })
        }
    }




    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(({ title: title, content: content, image: imageUrl }))
        dispatch(AddPostData({ title: title, content: content, image: imageUrl })).then((res) => {
            if (res.type == "post/add/success") {
                toast({
                    title: 'Post created.',
                    description: "Post has been created successfully",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: "top"
                })

            } else {
                toast({
                    title: 'All fields are required.',
                    description: "Fill all the input fields.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: "top"
                })
            }
            setTitle("")
            setContent("")
            setImageUrl("")
        })





    }

    return (

        <SimpleGrid  columns={[1, 2]} spacing={10} w="80%" margin="auto" my={10} >
            <Box p={[0, 5]}>
                <Image h="100%" src="https://media.istockphoto.com/photos/blogging-blog-word-coder-coding-using-laptop-picture-id626669886?s=612x612" />
            </Box>
            <Box bg="white" px={5} rounded="md" w="90%" height="fit-content" boxShadow='2xl' p='6' m="auto">
                <Box mb={-10}>
                    <Image w={"200px"} margin="auto" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" />
                </Box>

                <Box textAlign={"left"} p="25px 5px" >
                    <form onSubmit={handleSubmit} >
                        <FormControl isRequired>
                            <FormLabel>Blog Title</FormLabel>
                            <Input placeholder='blog title' value={title} name="title" onChange={(e) => setTitle(e.target.value)} />
                            <FormLabel mt={5}>Blog Content</FormLabel>
                            <Textarea minH="200px" mb={5} placeholder='Type your content here' value={content} name='content' onChange={(e) => setContent(e.target.value)} />
                            <input type="file" name="image"  onChange={(e) => postDetails(e.target.files[0])} />
                            <Input mt={5} type="submit" value="Create Blog" color={"white"} bg="tomato" w="full" />
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </SimpleGrid>

    )
}

export default CreateBlog
