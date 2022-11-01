import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, InputGroup, InputRightElement, Text, Textarea, useToast } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import { SearchIcon } from '@chakra-ui/icons';

const getAllBlog = async (page = 1, limit = 12) => {
    let res = await axios(`http://localhost:8080/posts/all?page=${page}&&limit=${limit}`)

    return res
}


const AllBlog = () => {

    const token = JSON.parse(localStorage.getItem("token")) || "";

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12)
    const [allPost, setAllPost] = useState([])

    const navigate = useNavigate();
    const toast = useToast()

    useEffect(() => {
        getAllBlog(page, limit).then((res) => {
            setData(res.data.filterPost)
            setAllPost(res.data.allPost)
        })
    }, [page, limit])

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



    return (
        <>
            <Box mt={"80px"}>
                <Image w={"100%"} maxH="400px" src="https://media.istockphoto.com/photos/writing-a-blog-blogger-influencer-reading-text-on-screen-picture-id1198931639?k=20&m=1198931639&s=612x612&w=0&h=1OjzKK3oXsuHkX9Fhro-e_fU-aSgCaV4swBai80HLx0=" />
            </Box>
            <Flex>
                <Input placeholder='search post by title' />
                <InputGroup>
                    <Input border={"3px solid red"} placeholder='Enter amount' />
                    <InputRightElement children={<SearchIcon color='green.500' />} />
                </InputGroup>

            </Flex>
            <Flex justify={"right"} mr="2%" mt={5}>
                <Pagination total={Math.floor(allPost?.length / limit)} current={page} changePage={setPage} />
            </Flex>

            <BlogCard data={data} />

        </>




    )
}

export default AllBlog
