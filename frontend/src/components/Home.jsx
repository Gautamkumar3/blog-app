import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, Button, Flex, FormLabel, Image, Input, Text } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
    const token = JSON.parse(localStorage.getItem("token")).token || "";

    const [data, setData] = useState([])
    const navigate = useNavigate()

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

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const updatedValue = type === "file" ? URL.createObjectURL(files[0]) : value
        setFormdata({ ...formData, [name]: updatedValue })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
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

    let blob = URL.revokeObjectURL("blob:http://localhost:3000/65b1bbfb-1b77-4173-8cb5-49e3cff604b5")

    console.log(blob)
    return (
        <div>
            {
                data?.map((el, id) =>
                    <Flex key={id}>
                        <Text p={10} bg="red" m={2}>{el.title}</Text>
                        <Button onClick={() => handleDelete(el._id, el.userId)}>Delete</Button>
                        <NavLink to={`/post/${el._id}`}>Read More </NavLink>
                        <Image src={URL.revokeObjectURL(el.image)} />
                    </Flex>
                )
            }

            <div>
                <Flex bg="gray.100" justify="center" h="100vh" >
                    <Box bg="white" px={5} rounded="md" w="30%" mt={"5%"} height="fit-content">

                        <Box textAlign={"left"} pb={10}>
                            <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                                <FormLabel>Title</FormLabel>
                                <Input placeholder='title' name="title" onChange={handleChange} />
                                <FormLabel>Content</FormLabel>
                                <Input mb={5} placeholder='content' name='content' onChange={handleChange} />
                                <input type="file" name="image" onChange={handleChange} />
                                <Input mt={5} type="submit" value="Create Post" color={"white"} bg="tomato" w="full" />
                            </form>
                        </Box>
                    </Box>
                </Flex>
            </div>
            )
        </div>
    )
}

export default Home
