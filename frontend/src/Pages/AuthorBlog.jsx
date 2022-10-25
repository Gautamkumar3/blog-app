import { Badge, Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const AuthorBlog = () => {

  const data = useSelector((store) => store.posts.data);
  const navigate = useNavigate()

  return (
    <Box w={"70%"} m="auto">
      {data?.map((blog) => <Flex key={blog.id} h="180px" gap={15} my={5}>
        <Box w={"70%"} p={2}>
          <Box overflow="hidden" maxH={"130px"}>
            <Text _hover={{ cursor: "pointer" }} onClick={() => navigate(`/author/${blog._id}`)} fontSize="2xl" fontWeight="500" >{blog.title}</Text>
            <Text>{blog.content}</Text>
          </Box>
          <Badge mt={2} colorScheme="orange">{blog.created_at.split("T")[0]}</Badge>
        </Box>
        <Box w={"30%"} p={5} >
          <Image maxH={"140px"} w="100%" src={blog.image} />
        </Box>
      </Flex>)}
    </Box>


  )
}

export default AuthorBlog
