import { Box, Flex, FormControl, FormLabel, Image, Input, SimpleGrid, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddPostData } from '../store/Post/Post.action'

const CreateBlog = () => {

    const [formData, setFormdata] = useState({ title: "", content: "" })
    const [imageUrl, setImageUrl] = useState({ image: "" })
    const toast = useToast()
    const token = JSON.parse(localStorage.getItem("token")) || "";
    const dispatch = useDispatch()

    const postDetails = (imageUrl) => {
        console.log(imageUrl, "dfasdfoksdfjasdfsd")
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
                setImageUrl({ image: data.url.toString() });
            }).catch((er) => {
                console.log(er)
            })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(AddPostData({...formData,...imageUrl}))
   
        toast({
            title: 'Post created.',
            description: "Post has been created successfully",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "top"
        })

    }

    return (

        <SimpleGrid columns={[1, 2]} spacing={10} w="80%" margin="auto" my={10}>
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
                            <Input placeholder='blog title' name="title" onChange={handleChange} />
                            <FormLabel mt={5}>Blog Content</FormLabel>
                            <Textarea minH="200px" mb={5} placeholder='Type your content here' name='content' onChange={handleChange} />
                            <input type="file" name="image" onChange={(e) => postDetails(e.target.files[0])} />
                            <Input mt={5} type="submit" value="Create Blog" color={"white"} bg="tomato" w="full" />
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </SimpleGrid>

    )
}

export default CreateBlog
