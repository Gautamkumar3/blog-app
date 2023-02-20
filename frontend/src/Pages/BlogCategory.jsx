import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getAllBlog } from "../API/api";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

const BlogCategory = ({url,category}) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [allPost, setAllPost] = useState([]);
  const [loading, setLoading] = useState(false);
  let TechData = allPost.filter((el) => el.category === category);

  useEffect(() => {
    setLoading(true);
    getAllBlog(page, limit).then((res) => {
      setAllPost(res.data.allPost);
      setLoading(false);
    });
  }, [page, limit]);
  

  return (
    <Box mt={"80px"}>
      <Image w={"100vw"} maxH="400px" src={url} />
      {loading ? (
        <Loader />
      ) : (
        <Box>
          {TechData?.length == 0 ? (
            <Heading textAlign={"center"} mt={8}>
              No Data Found
            </Heading>
          ) : (
            <Flex justify={"right"} mr="2%" mt={5} gap={5} align="center">
              <Text fontWeight={"bold"}>Pages : </Text>
              <Pagination
                total={Math.ceil(TechData?.length / limit)}
                current={page}
                changePage={setPage}
              />
            </Flex>
          )}
          <BlogCard data={TechData} />
        </Box>
      )}
    </Box>
  );
};

export default BlogCategory;
