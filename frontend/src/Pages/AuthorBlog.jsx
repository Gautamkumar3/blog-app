import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { getPostsData } from "../store/Post/Post.action";

const AuthorBlog = () => {
  const authorId = useParams();

  const data = useSelector((store) => store.posts.data);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  console.log(data);

  useEffect(() => {
    dispatch(getPostsData(authorId.author));
  }, []);

  if (data.length == 0) {
    return (
      <Flex align={"center"} justify="center">
        <Heading>No Data Found</Heading>
      </Flex>
    );
  }

  return (
    <>
      <Box mt={"80px"}>
        <Image
          w={"100%"}
          maxH="400px"
          src="https://media.istockphoto.com/photos/writing-a-blog-blogger-influencer-reading-text-on-screen-picture-id1198931639?k=20&m=1198931639&s=612x612&w=0&h=1OjzKK3oXsuHkX9Fhro-e_fU-aSgCaV4swBai80HLx0="
        />
      </Box>
      <Box>
        <BlogCard data={data} />
      </Box>
    </>
  );
};

export default AuthorBlog;
