import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';


const AllBlog = () => {

    const token = JSON.parse(localStorage.getItem("token")) || "";

    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const toast = useToast()

    useEffect(() => {
        axios.get("http://localhost:8080/posts/all").then((res) => {
            setData(res.data)
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



    const handleRead = () => {
        navigate("/post")
    }

    return (
        <>
            <Box>
                <Image w={"100%"} maxH="400px" src="https://media.istockphoto.com/photos/writing-a-blog-blogger-influencer-reading-text-on-screen-picture-id1198931639?k=20&m=1198931639&s=612x612&w=0&h=1OjzKK3oXsuHkX9Fhro-e_fU-aSgCaV4swBai80HLx0=" />
            </Box>
            <BlogCard data={data} />
        </>




    )
}

export default AllBlog
