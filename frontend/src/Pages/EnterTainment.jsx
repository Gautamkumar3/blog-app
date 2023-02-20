import { Box } from "@chakra-ui/react";
import React from "react";
import BlogCategory from "./BlogCategory";

const EnterTainment = () => {
  return (
    <Box>
      <BlogCategory
        url="https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW50ZXJ0YWlubWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        category={"entertainment"}
      />
    </Box>
  );
};

export default EnterTainment;
