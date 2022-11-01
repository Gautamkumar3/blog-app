import { Badge, Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getPostsData } from '../store/Post/Post.action';

const AuthorBlog = () => {

  const data = useSelector((store) => store.posts.data);
  // const id = useSelector((store) => store.auth.id);
  const id = localStorage.getItem("id")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getPostsData(id))
  }, [])

  return (
    <>
      <Box  mt={"80px"}>
        <Image w={"100%"} maxH="400px" src="https://media.istockphoto.com/photos/writing-a-blog-blogger-influencer-reading-text-on-screen-picture-id1198931639?k=20&m=1198931639&s=612x612&w=0&h=1OjzKK3oXsuHkX9Fhro-e_fU-aSgCaV4swBai80HLx0=" />
      </Box>

      <Box w={"70%"} m="auto">
        {data?.map((blog) => <Flex key={blog._id} h="180px" gap={15} my={5}>
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

    </>
  )
}

export default AuthorBlog
