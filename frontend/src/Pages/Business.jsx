import { Box } from "@chakra-ui/react";
import React from "react";
import BlogCategory from "./BlogCategory";

const Business = () => {
  return (
    <Box>
      <BlogCategory
        url="https://images.unsplash.com/photo-1665686310429-ee43624978fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        category={"business"}
      />
    </Box>
  );
};

export default Business;
