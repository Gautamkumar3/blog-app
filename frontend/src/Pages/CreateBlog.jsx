import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddPostData } from "../store/Post/Post.action";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const toast = useToast();
  const token = JSON.parse(localStorage.getItem("token")) || "";
  const dispatch = useDispatch();
  const post = useSelector((store) => store.posts);

  const postDetails = (imageUrl) => {
    if (imageUrl === undefined) {
      toast({
        title: "Please seclect an Image!",
        description: "wraning",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    } else {
      const data = new FormData();
      data.append("file", imageUrl);
      data.append("upload_preset", "Gk-chat");
      data.append("cloud_name", "dbojqn7mx");
      fetch("https://api.cloudinary.com/v1_1/dbojqn7mx/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImageUrl(data.url.toString());
          console.log(data.url.toString());
          return;
        })
        .catch((er) => {
          console.log(er);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ title: title, content: content, image: imageUrl });
    dispatch(
      AddPostData({ title: title, content: content, image: imageUrl })
    ).then((res) => {
      if (res.type == "post/add/success") {
        toast({
          title: "Post created.",
          description: "Post has been created successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "All fields are required.",
          description: "Fill all the input fields.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
      setTitle("");
      setType("");
      setContent("");
      setImageUrl("");
    });
  };

  return (
    <Box
      mt={"80px"}
      height={"full"}
      py={"5%"}
      background="url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center/cover no-repeat"
    >
      <Flex
        textAlign={"left"}
        align="center"
        justify="center"
        color={"white"}
        w={["90%", "50%"]}
        m={"auto"}
        p={10}
        backdropFilter="auto"
        backdropBlur="8px"
      >
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Blog Title</FormLabel>
            <Input
              bg={"white"}
              color="blackAlpha.700"
              border={"2px solid"}
              placeholder="blog title"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormLabel mt={2}>Blog Type</FormLabel>

            <Select
              placeholder="Select blog type"
              bg={"white"}
              color="blackAlpha.700"
              border={"2px solid"}
              value={type}
              name="type"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="tech">Tech</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="world">World</option>
            </Select>
            <FormLabel mt={2}>Blog Content</FormLabel>
            <Textarea
              color="blackAlpha.700"
              bg={"white"}
              border={"2px solid"}
              minH="200px"
              mb={5}
              placeholder="Type your content here"
              value={content}
              name="content"
              onChange={(e) => setContent(e.target.value)}
            />
            <input
              type="file"
              name="image"
              onChange={(e) => postDetails(e.target.files[0])}
            />
            <Button
              backdropBlur="2px"
              disabled={imageUrl == ""}
              mt={5}
              _hover={{ bg: "#f0153c" }}
              color={"white"}
              bg="tomato"
              w="full"
              type="submit"
            >
              Create Blog
            </Button>
          </FormControl>
        </form>
      </Flex>
    </Box>
  );
};

export default CreateBlog;
