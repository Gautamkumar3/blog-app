import { Box } from "@chakra-ui/react";
import React from "react";
import BlogCategory from "./BlogCategory";

const Business = () => {
  return (
    <Box>
      <BlogCategory
        url="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=600"
        category={"business"}
      />
    </Box>
  );
};

export default Business;
