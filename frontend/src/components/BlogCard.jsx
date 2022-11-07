import { Avatar, Badge, Box, Button, Center, Container, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { writerId } from '../store/auth/Auth.action';
import { getPostsData } from '../store/Post/Post.action';
import Pagination from './Pagination';


const BlogCard = ({ data }) => {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useSelector((store) => store.auth.id);


    const getAuthorsdata = (id) => {
        dispatch(writerId(id))
    }

    return (

        <Container maxW='4xl' my={10}>
            {data?.map((el, i) => <Flex key={el._id} my={5} >
                <Box width={"70%"}>
                    <Flex align={"center"} onClick={(() => { getAuthorsdata(el.userId._id) })}>
                        <Avatar size='xs' name={el.userId.name} src='https://bit.ly/broken-link' />
                        <Link to="/author">
                            <Text color="gray.500" onClick={(() => { getAuthorsdata(el.userId._id) })} colorScheme="orange" borderRadius="20px" p={1}>{el.userId.name} is author of this blog ✨</Text>
                        </Link>
                        <Badge colorScheme="orange" borderRadius="20px" p={1}>{el.created_at.split("T")[0]}</Badge>
                    </Flex>

                    <Text fontSize={"xl"} fontWeight="bold">{el.title}</Text>
                    <Text color={"blackAlpha.700"} noOfLines={3}>{el.content}</Text>
                    <Text fontWeight={"bold"} textDecor="underline" color={"blue"} my={1} onClick={() => navigate(`/blog/${el._id}`)} >Read More</Text>
                </Box>
                <Center w={"30%"} p={2}>
                    <Image w="80%" m="auto" maxH={"150px"} src={el.image} />
                </Center>
            </Flex>
            )}
        </Container>

    )
}

export default BlogCard


{/* <SimpleGrid columns={[1, 2, 2, 3]} gap={10} w={["90%", "80%"]} m="auto" p={5}>

{data?.map((el, i) => {
    return <Box key={el._id}>

        <Box border="1px solid gray" p={5}>
            <Box>
                <Image h={"170px"} w="100%" src={el.image} />
            </Box>
            <Box maxH={"205px"} overflowY="hidden">
                <Text fontSize={"xl"} fontWeight="bold">{el.title}</Text>
                <Text>{el.content}</Text>
            </Box>
            <Flex justify={"space-between"} mt={3}>
                <Badge colorScheme="orange" borderRadius="20px" p={1}>{el.created_at.split("T")[0]}</Badge>
                <Link to="/author">
                    <Badge onClick={(() => { getAuthorsdata(el.userId._id) })} colorScheme="orange" borderRadius="20px" p={1}>author : {el.userId.name}</Badge>
                </Link>
            </Flex>

            <Button colorScheme="teal" display="block" m="auto" mt={3} onClick={() => navigate(`/blog/${el._id}`)} >Read More</Button>
        </Box>
    </Box>
})}

</SimpleGrid > */}