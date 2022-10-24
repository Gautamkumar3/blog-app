import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import Styles from "./Home.module.css"





const AllBlog = () => {

    const token = JSON.parse(localStorage.getItem("token")).token || "";

    const [data, setData] = useState([]);
  
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



    const handleRead = () => {
        navigate("/post")
    }

    return (
        <div className={Styles.Main}>
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
        </div>
    )
}

export default AllBlog
