import { Badge, Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
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
      <Box mt={"80px"}>
        <Image w={"100%"} maxH="400px" src="https://media.istockphoto.com/photos/writing-a-blog-blogger-influencer-reading-text-on-screen-picture-id1198931639?k=20&m=1198931639&s=612x612&w=0&h=1OjzKK3oXsuHkX9Fhro-e_fU-aSgCaV4swBai80HLx0=" />
      </Box>
      <Box>
        <BlogCard data={data} />
      </Box>
    </>
  )
}

export default AuthorBlog
