import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import Styles from "./Home.module.css"

const Home = () => {
    const token = JSON.parse(localStorage.getItem("token")).token || "";

    const [data, setData] = useState([]);
    const [imageUrl, setImageUrl] = useState("")
    const navigate = useNavigate();
    const toast = useToast()

    useEffect(() => {
        axios.get("http://localhost:8080/posts/all").then((res) => {
            setData(res.data)
            console.log(res.data)
        })
    }, [])

    const handleDelete = (id, userId) => {
        axios.delete(`http://localhost:8080/posts/${id}`, {
            headers: {
                authorization: token,
                unique: userId
            }
        }).then((res) => {
            console.log(res.data)
        })

    }

    const [formData, setFormdata] = useState({ title: "", content: "", image: "" })

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




    const handleRead = () => {
        navigate("/post")
    }

    return (
        <Box pos="relative">
            <Box textAlign="center" position="absolute" top="5%" left="50%" transform= "translate(-50%, -50%)">
                <Heading color="white" size={["xl"]} >Welcome to Gk blog</Heading>
            </Box>
            <Box >
                <Image height="400vh" w="100%" src="https://static.wixstatic.com/media/fee50a_8d5c6f21a5d14b919d4be75bd07b5337~mv2_d_3840_12495_s_3_2.jpg/v1/fill/w_1898,h_8653,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/fee50a_8d5c6f21a5d14b919d4be75bd07b5337~mv2_d_3840_12495_s_3_2.jpg" />
            </Box>

        </Box>
    )
}

export default Home;






{/* <div className={Styles.Main}>
            {
                data?.map((el, id) =>
                    <Flex key={id}>
                        <Text p={10} bg="red" m={2}>{el.title}</Text>
                        <Button onClick={() => handleDelete(el._id, el.userId)}>Delete</Button>
                        <NavLink to={`/post/${el._id}`}>Read More </NavLink>
                        <Image h={"100px"} src={el.image} />
                    </Flex>
                )
            }

            <div>
                <Flex justify="center" >
                    <Box bg="white" px={5} rounded="md" w="30%" mt={"5%"} height="fit-content" boxShadow='xl'>

                        <Box textAlign={"left"} p="25px 5px" >
                            <form onSubmit={handleSubmit} >
                                <FormControl isRequired>
                                    <FormLabel>Blog Title</FormLabel>
                                    <Input placeholder='blog title' name="title" onChange={handleChange} />
                                    <FormLabel mt={5}>Blog Content</FormLabel>
                                    <Textarea minH="200px" mb={5} placeholder='Type your content here' name='content' onChange={handleChange} />
                                    <input type="file" name="image" onChange={handleChange} />
                                    <Input mt={5} type="submit" value="Create Post" color={"white"} bg="tomato" w="full" />
                                </FormControl>
                            </form>
                        </Box>
                    </Box>
                </Flex>
            </div>
        </div> */}
