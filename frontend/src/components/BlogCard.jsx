import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getPostsData } from '../store/Post/Post.action';


const BlogCard = ({ data }) => {

    const navigate=useNavigate();
    const dispatch=useDispatch()

    const getAuthorsdata = (id) => {
        dispatch(getPostsData(id))
        navigate("/author")    
    }

    return (
        <SimpleGrid columns={[1, 2, 3, 3]} gap={10} w={["90%", "80%"]} m="auto" p={5}>
            {data?.map((el, i) => {
                return <Box key={el._idds}>
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
                            <Badge onClick={(() => getAuthorsdata(el.userId._id))} colorScheme="orange" borderRadius="20px" p={1}>author : {el.userId.name}</Badge>
                        </Flex>

                        <Button colorScheme="teal" display="block" m="auto" mt={3}>Read More</Button>
                    </Box>
                </Box>
            })}
        </SimpleGrid >
    )
}

export default BlogCard
