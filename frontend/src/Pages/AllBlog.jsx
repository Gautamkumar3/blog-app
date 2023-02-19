import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import { SearchIcon } from "@chakra-ui/icons";
import Loader from "../components/Loader";

const getAllBlog = async (page = 1, limit = 12) => {
  // let res = await axios.get(
  //   `https://backend-deploy-render.onrender.com/posts/all?page=${page}&&limit=${limit}`
  // );
  let res = await axios.get(
    `https://backend-deploy-render-production-2f86.up.railway.app/posts/all?page=${page}&&limit=${limit}`
  );

  return res;
};

const searchBlogData = async (query) => {
  let res = await axios.get(
    `https://backend-deploy-render-production-2f86.up.railway.app/posts/api/search?q=${query}`
  );
  return res;
};

const AllBlog = () => {
  const token = JSON.parse(localStorage.getItem("token")) || "";

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [allPost, setAllPost] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    setLoading(true);
    getAllBlog(page, limit).then((res) => {
      setData(res.data.filterPost);
      setAllPost(res.data.allPost);
      setLoading(false);
    });
  }, [page, limit]);

  const handleSearch = () => {
    setLoading(true);
    searchBlogData(query).then((res) => {
      setData(res.data);
      setAllPost(res.data);
      setLoading(false);
    });
  };

  if (loading) {
    return <Loader />;
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

      <Flex mt={5} justify="center">
        <InputGroup w={["80%", "40%"]}>
          <Input
            border={"2px solid red"}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            borderColor="black"
            placeholder="Search post by title"
          />
          <InputRightElement
            bg={"green"}
            onClick={handleSearch}
            children={
              <Button
                colorScheme={"whatsapp"}
                borderRadius="0"
                padding={"0 40px"}
                borderRightRadius="5px"
              >
                <SearchIcon boxSize={5} />
              </Button>
            }
          />
        </InputGroup>
      </Flex>

      {data?.length == 0 ? (
        <Heading textAlign={"center"} mt={8}>
          No Data Found
        </Heading>
      ) : (
        <Flex justify={"right"} mr="2%" mt={5} gap={5} align="center">
          <Text fontWeight={"bold"}>Pages : </Text>
          <Pagination
            total={Math.ceil(allPost?.length / limit)}
            current={page}
            changePage={setPage}
          />
        </Flex>
      )}
      <BlogCard data={data} />
    </>
  );
};

export default AllBlog;
