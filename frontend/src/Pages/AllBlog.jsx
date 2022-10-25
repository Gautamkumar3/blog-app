import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import Styles from "./Home.module.css"
import BlogCard from '../components/BlogCard';


const AllBlog = () => {

    const token = JSON.parse(localStorage.getItem("token")).token || "";

    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const toast = useToast()

    useEffect(() => {
        axios.get("http://localhost:8080/posts/all").then((res) => {
            setData(res.data)
            console.log(res.data, "dkfpasodifjs")
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


        <BlogCard data={data} />


    )
}

export default AllBlog
