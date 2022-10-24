import { Box, Flex, FormControl, FormLabel, Image, Input, SimpleGrid, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

const CreateBlog = () => {

    const [formData, setFormdata] = useState({ title: "", content: "", image: "" })
    const [imageUrl, setImageUrl] = useState("")
    const toast = useToast()
    const token = JSON.parse(localStorage.getItem("token")).token || "";


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
        }

        if (imageUrl.type === "image/jpeg" || imageUrl.type === "image/png") {
            const data = new FormData();
            data.append("file", imageUrl);
            data.append("upload_preset", "Gk-chat")
            data.append("cloud_name", "dbojqn7mx")
            fetch("https://api.cloudinary.com/v1_1/dbojqn7mx/image/upload", {
                method: "post",
                body: data
            }).then((res) => res.json()).then((data) => {
                setImageUrl(data.url.toString());
                console.log(data)

            }).catch((er) => {
                console.log(er)
            })
        } else {
            toast({
                title: 'Please seclect an Image!',
                description: "wraning",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top"
            })
            return;
        }
    }

    const handleChange = (e) => {
        postDetails(e.target.files[0])
        const { name, value, type } = e.target;
        const updatedValue = type === "file" ? imageUrl : value
        setFormdata({ ...formData, [name]: updatedValue })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/posts", formData, {
            headers: {
                authorization: token,
            }
        }).then((res) => {
            alert("Done")
        })

    }

    return (

        <SimpleGrid columns={[1,2]} spacing={20} w="80%" margin="auto" my={10}>
            <Box p={[0,5]}>
                <Image h="100%" src="https://images.unsplash.com/photo-1586943759341-be5595944989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </Box>
            <Box bg="white" px={5} rounded="md" w="90%" height="fit-content" boxShadow='2xl' p='6'  m="auto">
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
                            <input type="file" name="image" onChange={handleChange} />
                            <Input mt={5} type="submit" value="Create Blog" color={"white"} bg="tomato" w="full" />
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </SimpleGrid>

    )
}

export default CreateBlog
